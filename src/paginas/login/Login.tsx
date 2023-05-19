import React , {useState,useEffect,ChangeEvent} from 'react';
import {Grid, Box,Typography,TextField,Button} from '@material-ui/core'; 
import {Link,useNavigate} from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import {login} from '../../service/Service';
import './Login.css';
import useLocalStorage from 'react-use-localstorage';


function Login(){
    let history = useNavigate();
    const [token, setToken] =useLocalStorage('token');
    const[userLogin,setUserLogin] = useState<UserLogin>(
        { 
            id:0,
            usuario: '',
            senha:'',
            token:''
        
        
        
        })
        function updatedModel(e: ChangeEvent<HTMLInputElement>){
            setUserLogin({
                ...userLogin,
                [e.target.name]:e.target.value


            }
            )


        }

        useEffect(()=>{
            if(token != ''){
               history('/home');


            }
        },[token])
        async function onSubmit( e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
        try{

            await login(`/usuarios/logar`, userLogin,setToken)
           


            alert('Usuário logado com sucesso!')

        }catch(error){

                alert('Dados do usuário incorretos.Erro ao Longar!')


        }




        }
        return(

            
            <Grid container  justifyContent="center" spacing={6}>
                <Grid item  xs={3}>
                <Box>
                   



                </Box>

                </Grid>
               <Grid item  xs={3}>
                <Box marginBottom={20} marginTop={10}>
                    <form onSubmit={onSubmit} >
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold'}} > Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='usuario' label='usuário' variant='outlined' name ='usuario' margin='normal' fullWidth/>
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='senha' label='senha' variant='outlined' name ='senha' margin='normal' fullWidth type='password'/>
                        <Box  marginTop={2} textAlign='center'>
                            <Button type='submit'  variant = 'contained' color='primary'>
                              Logar
                            </Button>
                            
                        </Box>
                    </form>
                    <Box display ='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem ma conta?</Typography>
                        </Box>
                        <Link to ='/cadastrousuario'>
                            <Typography variant='subtitle1'gutterBottom align='center' style={{fontWeight:'bold'}}>Cadastre-se!</Typography>
                        </Link>
                    </Box>



                </Box>


               </Grid >
               <Grid item xs={3}>
               <Box>
                    



                </Box>

               </Grid>
               

            </Grid>



        )




}
export default Login