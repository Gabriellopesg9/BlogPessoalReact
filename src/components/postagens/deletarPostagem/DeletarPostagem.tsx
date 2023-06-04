import React, { useEffect, useState } from 'react'
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import {Box} from '@mui/material';
import './DeletarPostagem.css';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../service/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { toast } from 'react-toastify';


function DeletarPostagem() {
    let history =useNavigate();
    const {id} = useParams<{id: string }>(); 
    const token = useSelector<UserState, UserState["tokens"]>(
      (state) => state.tokens
    )
    const [postagem,setPostagem] =useState<Postagem>()
    useEffect(()=>{
    
    if(token===''){
      toast.error('Você precisa estar logado!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      });
        history("/login")


    }
    },[token])
    useEffect(()=>{
        if(id!== undefined){
            findById(id)

        }


    },[id])


    async function findById(id:string){
        buscaId(`/postagens/${id}`, setPostagem,{
            headers: {
                'Authorization' : token
            }
        })

    }
   
    function sim(){
        history('/postagens')
        deleteId(`postagens/${id}`,{
            headers: {

                'Authorization': token
            }
            



        }); toast.success('Postagem deletada com sucesso!', {
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
  function nao(){
            history('/postagens')
        }
   
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
              {postagem?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim}  variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button onClick={nao}  variant="contained" size='large' color="secondary">
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;