import React , {useState,useEffect,ChangeEvent} from 'react';
import {Grid, Box,Typography,TextField,Button} from '@material-ui/core'; 
import {Link,useNavigate} from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import {login} from '../../service/Service';
import './Login.css';
import blog from '../../assets/blog.jpg';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/token/Actions';
import { toast } from 'react-toastify';


function Login(){
    let history = useNavigate();
    const dispatch = useDispatch(); 
    const[userLogin,setUserLogin] = useState<UserLogin>(
        { 
            id: 0,
            nome: "",
            usuario: '',
            foto: "",
            senha: '',
            token:''
        
        
        
        })
        const [respUserLogin, setRespUserLogin] = useState<UserLogin>({

            id: 0,
            nome: "",
            usuario: '',
            foto: "",
            senha: '',
            token: ''
        })
        function updatedModel(e: ChangeEvent<HTMLInputElement>){
            setUserLogin({
                ...userLogin,
                [e.target.name]:e.target.value


            })


        }
        useEffect(() => {

        if (respUserLogin.token !== "") {

            console.log("Token: " + respUserLogin.token)
            console.log("ID: " + respUserLogin.id)

            dispatch(addToken(respUserLogin.token))
            dispatch(addId(respUserLogin.id.toString()))    
            history('/home')
        }
    }, [respUserLogin.token])
    
        async function onSubmit( e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
        try{

            await login(`/usuarios/logar`, userLogin,setRespUserLogin)
           


            toast.success('Usuario logado com suceso!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
              });

        }catch(error){

            toast.error('Erro ao logar!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
              });


        }




        }
        return(

            
            <Grid container direction='row' justifyContent="center"  spacing={6}>
                <Grid item  alignItems='center'style={{ background: '#05063b'}} xs={6}>
                <Box>
                   

                <img  src={blog} alt="Homen-Vitruviano" width="500px" height="500px"/>

                </Box>

                </Grid>
               <Grid item  alignItems='center'  xs={6}>
                <Box  marginTop={10} paddingX={20}>
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
                        <Box   >
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to ='/cadastrousuario' className = "text-decorator-none" >
                            <Typography variant='subtitle1'gutterBottom align='center' className='textos1' style={{fontWeight:'bold'}}>Cadastre-se!</Typography>
                        </Link>
                    </Box>
                </Box>
               </Grid >
               
               

            </Grid>



        )




}
export default Login