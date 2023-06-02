import { Box, Container, Divider, Grid, Paper, Typography } from "@mui/material"
import logo from '../../assets/logo-nova.svg'


const Home = () => {
    return (
        <Container sx={{ marginTop: 10, justifyContent: "center", display: "flex" }} >
            <Container  sx={{ justifyContent: "center", display: "flex"}}>
                <Paper sx={{ width: "90%" }}>
                    <Box padding={2} >

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
                    <Box padding={2} marginLeft={10}>
                        <Grid container spacing={67}>
                            <Grid item>
                                <Typography fontWeight={600}>Nº de usuário</Typography>
                                <Typography>13</Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontWeight={600}>Nº de certificado</Typography>
                                <Typography>289762554289289762552</Typography>
                            </Grid>

                        </Grid>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Divider sx={{ width: "90%", background: "black" }} />
                    </Box>

                    <Box padding={2} marginLeft={10}>
                        <Grid container spacing={64}>
                            <Grid item>
                                <Typography fontWeight={600}>Nome de usuário</Typography>
                                <Typography>13</Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontWeight={600}>Nº do Lot</Typography>
                                <Typography>13</Typography>
                            </Grid>

                        </Grid>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Divider sx={{ width: "90%", background: "black" }} />
                    </Box>

                    <Box padding={2} marginLeft={10}>
                        <Grid container spacing={70}>
                            <Grid item>
                                <Typography fontWeight={600}>Nº lot filhos</Typography>
                                <Typography>13</Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontWeight={600}>Valor</Typography>
                                <Typography>R$2037,00</Typography>
                            </Grid>

                        </Grid>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Divider sx={{ width: "90%", background: "black" }} />
                    </Box>

                    <Box padding={2} marginLeft={10}>
                        <Grid container spacing={70}>
                            <Grid item>
                                <Typography fontWeight={600}>Categoria</Typography>
                                <Typography>Papel</Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontWeight={600}>Tipo</Typography>
                                <Typography>Papelão</Typography>
                            </Grid>

                        </Grid>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Divider sx={{ width: "90%", background: "black" }} />
                    </Box>

                    <Box padding={2} marginLeft={10}>
                        <Grid container spacing={70}>
                            <Grid item>
                                <Typography fontWeight={600}>Condição</Typography>
                                <Typography>Fardo</Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontWeight={600}>Peso</Typography>
                                <Typography>600kg</Typography>
                            </Grid>

                        </Grid>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Divider sx={{ width: "90%", background: "black" }} />
                    </Box>

                    <Box padding={2} marginLeft={10}>
                        <Grid container spacing={70}>
                            <Grid item>
                                <Typography fontWeight={600}>Rede utilizada</Typography>
                               
                            </Grid>
                            <Grid item>
                                <Typography>Polygon</Typography>
                            </Grid>

                        </Grid>
                        <Grid container spacing={60}>
                            <Grid item>
                                <Typography fontWeight={600}>Hash da blockchain</Typography>
                               
                            </Grid>
                            <Grid item>
                                <Typography>dghdvfgddi782652dbgdgtg</Typography>
                            </Grid>

                        </Grid>
                        <Grid container spacing={65}>
                            <Grid item>
                                <Typography fontWeight={600}>Hash do arquivo</Typography>
                               
                            </Grid>
                            <Grid item>
                                <Typography>idudwd982766278i2u6t</Typography>
                            </Grid>

                        </Grid>
                    </Box>

                </Paper>
            </Container>
        </Container>
    )
}

export default Home