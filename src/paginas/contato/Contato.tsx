import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import imagem from '../../assets/IMG-5810 (1).jpg'
import imagem2 from '../../assets/images.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Contato.css'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: 'auto',
  },
  content: {
    padding: 10,
  },
  avatar: {
    
    width: 150,
    height: 150,
    border: '2px solid #fff',
    margin: '-70px 70px 0 auto',
    '& > img': {
      margin: 0,
    },
  },
}));

export const Contato = React.memo(function PostCard() {
  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  return (
    <Box  className="fundo" >
    <Card  className={cx(cardStyles.root, shadowStyles.root)}>
      <CardMedia
        classes={mediaStyles}
        image={imagem2}        
      />
      <Avatar className={cardStyles.avatar} src={imagem} />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={'Olá, eu sou o Gabriel Lopes'}
          body={
            'Tenho 26 anos, moro em São Paulo captal.Sou Desenvolvedor Full Stack, formado em Matmética e atualmente finalizando mestrado em Matemática na área de Otimização.'
          }
        />
      </CardContent>
      <Box px={2} pb={2} mt={-1}>
      <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/Gabriellopesg9" target="_blank">
                                <GitHubIcon className="redes" />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon className="redes" />
                            </a>
                            <a href="https://www.linkedin.com/in/gabriel-lopes-98591924b/" target="_blank">
                                <LinkedInIcon className="redes" />
                            </a>
                        </Box>
      </Box>
    </Card>
    </Box>
  );
});

export default Contato;