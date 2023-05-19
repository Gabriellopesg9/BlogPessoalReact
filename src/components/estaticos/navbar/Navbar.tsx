import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import {Link} from 'react-router-dom';
import './Navbar.css'



function Navbar() {
    return (
        <>
            <AppBar position="static" style={{background:"#20B2AA"}}>
                <Toolbar variant="dense">
                    <Box  style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            Matemática Hoje!
                        </Typography>
                    </Box>

                    <Box display="flex" marginLeft='auto'>
                        <Box  mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "inherit"}}>
                                Criar Postagem
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                        <Link to = '/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
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