import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { addToken } from '../../../store/token/Actions';
import { toast } from 'react-toastify';




function Navbar() {
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      )
    let history = useNavigate();
    const dispatch=useDispatch();

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário Desconectado!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined,
          });
        history('./login')


    }
var navbarComponent;
    if(token !== ""){navbarComponent= <AppBar position="static" className="bar">
    <Toolbar variant="dense">
        <Link to="/home" className='text-decorator-none'>
            <Box style={{ cursor: "pointer" }} >
                <Typography variant="h5" color="inherit">
                    Matemática Hoje!
                </Typography>
            </Box>
        </Link>

        <Box display="flex" marginLeft='auto'>
            <Link to="/home" className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Home
                    </Typography>
                </Box>
            </Link>
            <Link to="./formularioPostagem" className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" style={{ color: "inherit" }}>
                        Criar Postagem
                    </Typography>
                </Box>
            </Link>
            <Link to="./postagens" className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Postagens
                    </Typography>
                </Box>
            </Link>
            <Link to="/temas" className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Temas
                    </Typography>
                </Box>
            </Link>
            <Link to="./formularioTema" className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Cadastrar tema
                    </Typography>
                </Box>
            </Link>
            <Link to="Contato" className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Contato
                    </Typography>
                </Box>
            </Link>
            <Link to='/login' className='text-decorator-none' >
                <Box mx={1} className='cursor' onClick={goLogout}>
                    <Typography variant="h6" color="inherit">
                        logout
                    </Typography>
                </Box>
            </Link>
        </Box>

    </Toolbar>
</AppBar>}
    return (
        <>
        {navbarComponent}
            

        </>
    )
}

export default Navbar;