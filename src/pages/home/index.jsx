import { Box, Container, Grid, Paper, Typography } from "@mui/material"
import logo from '../../assets/logo-nova.svg'

const Home = () => {
    return (

        <><Container sx={{ marginTop: 10, justifyContent: "center", display: "flex", flexDirection: ["column", "row"] }}>
            <Container sx={{ justifyContent: "center", display: "flex" }}>
                <Paper sx={{ width: "100%", ['@media (min-width:780px)']: { width: '90%' } }}>
                    <Box padding={2}>

                        {/* ... Restante do código ... */}
                        <Box display="flex" justifyContent="center">
                            <Box display="flex" justifyContent="center" flexDirection="column">
                                <Box display="flex" justifyContent="center">
                                    <img width={260} src={logo} alt="Logo" />
                                </Box>

                            </Box>
                        </Box>

                        <Box display="flex" justifyContent="center">
                            <Box display="flex" justifyContent="center" flexDirection="column" marginTop={6}>
                                <Box display="flex" justifyContent="center">
                                    <img width={100} src="https://cdn-icons-png.flaticon.com/512/5610/5610944.png" alt="Logo" />
                                </Box>
                                <Box display="flex" justifyContent="center" gap={2} marginTop={2}>
                                    <Typography fontSize={28} fontWeight={600}>Status:</Typography>
                                    <Typography fontSize={28} color={"green"}>Verificado</Typography>
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                    <Box padding={2} marginLeft={[0, 10]}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Nº de usuário</Typography>
                                <Typography>13</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Nº de certificado</Typography>
                                <Typography>289762554289289762552</Typography>
                            </Grid>

                        </Grid>
                    </Box>
                    <Box padding={2} marginLeft={[0, 10]}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Nome de usuário</Typography>
                                <Typography>13</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Nº de lot</Typography>
                                <Typography>289762554289289762552</Typography>
                            </Grid>

                        </Grid>
                    </Box>
                    <Box padding={2} marginLeft={[0, 10]}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Nº de lotFilhos</Typography>
                                <Typography>13</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Valor</Typography>
                                <Typography>R$3982,00</Typography>
                            </Grid>

                        </Grid>
                    </Box>
                    <Box padding={2} marginLeft={[0, 10]}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Categoria</Typography>
                                <Typography>13</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Tipo</Typography>
                                <Typography>289762554289289762552</Typography>
                            </Grid>

                        </Grid>
                    </Box>
                    <Box padding={2} marginLeft={[0, 10]}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Condição</Typography>
                                <Typography>Fardo</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Peso</Typography>
                                <Typography>600kg</Typography>
                            </Grid>

                        </Grid>
                    </Box>

                    {/* ... Restante do código ... */}

                    <Box padding={2} marginLeft={[0, 10]}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Rede utilizada</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>Polygon</Typography>
                            </Grid>

                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Hash da blockchain</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>dghdvfgddi782652dbgdgtg</Typography>
                            </Grid>

                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Hash do arquivo</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>idudwd982766278i2u6t</Typography>
                            </Grid>

                        </Grid>
                    </Box>

                </Paper>
            </Container>
        </Container>
      </>
    )
}

{/* <Box display="flex" justifyContent="center">
<Divider sx={{ width: "90%", background: "black" }} />
</Box> */}

export default Home