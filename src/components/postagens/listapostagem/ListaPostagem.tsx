import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../service/Service'
import useLocalStorage from 'react-use-localstorage'
import { useNavigate } from 'react-router-dom';

function ListaPostagem() {
    const [postagens, setPostagens] = useState<Postagem[]>([])
    const [token, setToken] = useLocalStorage('token');
    let history = useNavigate();

    useEffect(() => {
        if (token === ' ') {
            alert("Você precisa estar logado")
            history("/login")
        }

    }, [token])


    async function getPostagem() {
        await busca("/postagens", setPostagens, {
            headers: {


                'Authorization': token
            }


        })




    }


    useEffect(() => { getPostagem() }, [postagens.length])
    return (
        <> {
            postagens.map(postagem => (
                <Box m={4}>
                    <Card variant="outlined">
                        <CardContent>

                            <Typography color="textSecondary" gutterBottom>
                                Postagem
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {postagem.titulo}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {postagem.texto}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {postagem.tema?.descricao}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5}>

                                <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color='primary'>
                                            atualizar
                                        </Button>
                                    </Box>

                                </Link>
                                <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-nome">
                                    <Box >
                                        <Button variant='contained' size='small' color="secondary">
                                            deletar
                                        </Button>
                                    </Box>

                                </Link>

                            </Box>
                        </CardActions>

                    </Card>
                </Box>))

        }
        </>
    )
}
export default ListaPostagem;