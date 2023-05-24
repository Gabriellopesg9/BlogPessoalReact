import React, {useState,useEffect,ChangeEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import User from '../../models/User';
import {cadastroUsuario} from  '../../service/Service';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css'

function CadastroUsuario() {
    let history = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<string>("")
    const [user,setUser] =useState<User>(
        {
            id:0,
            nome: '',
            usuario: '',
            senha:'',
            foto:''


        }

    )
    const [UserResult,setUserResult]=useState<User>(
        {
            id:0,
            nome: '',
            usuario: '',
            senha:'',
            foto:''


        }

    )
    useEffect(()=>{
        if( UserResult.id !=0 ){

            history("/login")
        }

    },[UserResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }
    function updatedModel(e:ChangeEvent<HTMLInputElement>){
        setUser({

            ...user,
            [e.target.name]: e.target.value
        })
    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        if(confirmarSenha === user.senha){
            cadastroUsuario(`/usuarios/cadastrar`,user, setUserResult)
            alert('Usuario cadastrado com sucesso')


        }else{
            alert('Dados incorretos.Verifique as informações de cadastro.')
        }



    }
    return (


        <Grid container justifyContent="center" spacing={6}>
            <Grid item xs={3}>
                <Box>




                </Box>

            </Grid>
            <Grid item xs={3}>
                <Box marginBottom={20} marginTop={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }} >Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)}id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)}id='foto' label='foto' variant='outlined' name='foto' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)}id='senha' label='Senha' variant='outlined' name='senha' margin='normal' fullWidth type='password' />
                        <TextField value={confirmarSenha} onChange ={(e: ChangeEvent<HTMLInputElement>)=> confirmarSenhaHandle(e)}id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='Confirmar senha' margin='normal' fullWidth type='password' />

                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' >
                                <Button variant='contained' color='secondary' className="btnCancelar">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>

                        </Box>
                    </form>



                </Box>


            </Grid >
            <Grid item xs={3}>
                <Box>




                </Box>

            </Grid>


        </Grid>

    )


}


export default CadastroUsuario