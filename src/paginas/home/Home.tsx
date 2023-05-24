import React, { useEffect } from 'react'
import { Grid,Box ,Typography} from '@material-ui/core'
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem'
import imagem from '../../assets/matematica.png'
import './Home.css'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem'
import useLocalStorage from 'react-use-localstorage'
import { useNavigate } from 'react-router-dom'


function Home() {
  let history = useNavigate();
  const [token,setToken]= useLocalStorage('token');
   
  useEffect(()=>{
    if(token == ''){
      alert ( "você precisa estar logado")
      history("/login")
    }
  },[token])
  return (
    <>
      <Grid  container  direction="row" justifyContent="center" className='caixa' xs={12} >
        <Grid alignItems='center' xs={7} item >
          <Box marginTop={20} paddingX={20} >
          <Typography variant="h4" gutterBottom color="textPrimary"  component="h4" align="center" >Seja Bem Vindo(a)!!!</Typography>
          <Typography variant="h5" gutterBottom color="textPrimary"  component="h5" align="center" >Qual a sua curiosidade de Hoje?</Typography>
          <Typography variant="h5" gutterBottom color="textPrimary"  component="h5" align="center" >Compartilhe algo que aprendeu, ou veja o que as pessoas tem compartilhado!!!</Typography>
          </Box>
        </Grid>
        <Grid container xs={5} >
        <img  src={imagem} alt="Homen-Vitruviano" width="700px" height="450px"/>
        </Grid>
        <Grid xs={12} className='postagens'>
          <TabPostagem/>

          

        </Grid>
        <Grid>
          <ModalPostagem/>


        </Grid>
        
      </Grid>
    </>
  )
}

export default Home