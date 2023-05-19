import { Grid,Box } from '@material-ui/core'
import Carrossel from '../../components/carrossel/Carrossel'

function Home() {
  return (
    <>
      <Grid  container xs={12} style={{ marginTop: "8px" }}>
        <Grid xs={4} item >
          <Box>
          <h1>SEi la </h1>
          </Box>
        </Grid>
        <Grid container xs={4} style={{backgroundColor: "White"}}>
        <h1>SEi la </h1>
        </Grid>
        <Grid xs={4}>

        <h1>SEi la </h1>

        </Grid>
        
      </Grid>
    </>
  )
}

export default Home