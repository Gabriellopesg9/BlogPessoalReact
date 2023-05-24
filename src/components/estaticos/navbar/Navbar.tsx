import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';



function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let history = useNavigate();

    function goLogout() {
        setToken('');
        alert("Usuário deslogado!")
        history('./login')


    }
    return (
        <>
            <AppBar position="static" className="bar">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            Matemática Hoje!
                        </Typography>
                    </Box>

                    <Box display="flex" marginLeft='auto'>
                        <Link to="/home" className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to ="./formularioPostagem" className='cursor'>
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
            </AppBar>

        </>
    )
}

export default Navbar;