import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema'
import { busca } from '../../../service/Service';
import { UserState } from '../../../store/token/Reducer';
import { useSelector } from 'react-redux';

function ListaTema() {
    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      )
    let history = useNavigate();

    useEffect(() => {
        if (token === '') {
            alert("Você precisa estar logado")
            history("/login")
        }

    }, [token])


    async function getTema() {
        await busca("/temas", setTemas, {
            headers: {


                'Authorization': token
            }


        })
       



    } 
    
    
    useEffect(() => { getTema() }, [temas.length])
    return (
        <>{
            temas.map(tema => (
                <Box m={2}>
                    <Card variant="outlined">
                        <CardContent>

                            <Typography color="textSecondary" gutterBottom>

                                tema
                            </Typography>
                            <Typography>
                                {tema.descricao}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5}>

                                <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color='primary'>
                                            atualizar
                                        </Button>
                                    </Box>

                                </Link>
                                <Link to={`/deletarTema/${tema.id}`} className="text-decorator-nome">
                                    <Box mx={1}>
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
export default ListaTema;