import { Box, CircularProgress, Container, Grid, Paper, Typography } from "@mui/material"
import logo from '../../assets/logo-nova.svg'
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Home = () => {
    const [dataVerification, setDataVerification] = useState(null);

    const { lotId, verificationCode } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://supplychain.ecodots.com.br/v1/lot/${lotId}/verify?verificationCode=${verificationCode}`);
                setDataVerification(response.data);
                console.log('dados down ', response.data);
            } catch (error) {
                console.error('Erro ao buscar dados: ', error);
                // Trate o erro conforme necessário em sua aplicação
            }
        };
        fetchData();
    }, [lotId, verificationCode]);

    if (!dataVerification) {
        return <div><CircularProgress /></div>;
    }

    // rest of your component

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
                                    <Typography fontSize={28} color={"green"}>{dataVerification.status}</Typography>
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                    <Box padding={2} marginLeft={[0, 10]}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Nº de usuário</Typography>
                                <Typography>{dataVerification.lot.ownerId}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Nº de certificado</Typography>
                                <Typography>{dataVerification.lot.lotId}</Typography>
                            </Grid>

                        </Grid>
                    </Box>
                    <Box padding={2} marginLeft={[0, 10]}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Nome de usuário</Typography>
                                <Typography>{dataVerification.lot.ownerName}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Nº de lot</Typography>
                                <Typography>{dataVerification.lot.lotId}</Typography>
                            </Grid>

                        </Grid>
                    </Box>
                    <Box padding={2} marginLeft={[0, 10]}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Nº de lotFilhos</Typography>
                                <Typography>{dataVerification.lot.childrenLotIds}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Valor</Typography>
                                <Typography>{dataVerification.lot.price}</Typography>
                            </Grid>

                        </Grid>
                    </Box>
                    <Box padding={2} marginLeft={[0, 10]}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Categoria</Typography>
                                <Typography>{dataVerification.lot.category}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={600}>Tipo</Typography>
                                <Typography>{dataVerification.lot.wasteType}</Typography>
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
                                <Typography>{dataVerification.lot.weight}</Typography>
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