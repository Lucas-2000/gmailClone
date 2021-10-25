import { Button, Card, CardActions, CardContent, CardHeader, Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../imagens/google.png'

const useStyles = makeStyles({
    container: {
        marginTop: '160px',
    },
    card: {
        maxWidth: '450px',
    },
    logo: {
        maxWidth: '80px',
        marginTop: '50px'
    },
    button: {
        marginTop: "10px",
    },
    buttonProx: {
        marginTop: "10px",
        marginLeft: '230px'
    },
})

const Home = () => {
    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <Grid container justifyContent="center">
                <Card className={classes.card} elevation={2}>
                    <Grid container justifyContent="center">
                        <img src={logo} className={classes.logo} />
                    </Grid>
                    <Grid container justifyContent="center">
                        <CardHeader
                            title="Fazer login"
                            subheader="Ir para o Gmail"
                        />
                    </Grid>
                    <CardContent>
                        <Grid container justifyContent="center">
                            <TextField
                                variant="outlined"
                                label="Email ou telefone"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid container justifyContent="center" className={classes.button}>
                            <TextField
                                variant="outlined"
                                label="Senha"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid>
                            <Button
                                href="#"
                                color="primary">
                                Esqueceu seu email ou senha?
                            </Button>
                        </Grid>
                        <Grid className={classes.button}>
                            <Typography color="textSecondary" align="justify">
                                Não está no seu computador? Use o modo visitante para fazer login com privacidade.
                                <Button
                                    href="https://support.google.com/chrome/answer/6130773?hl=pt"
                                    color="primary">
                                    Saiba mais
                                </Button>
                            </Typography>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Grid>
                            <Button color="primary"
                                className={classes.button}
                                component={Link}
                                to="/cadastrar">
                                Criar conta
                            </Button>
                            <Button
                                color="primary"
                                variant="contained"
                                className={classes.buttonProx}
                                component={Link}
                                to="/inbox"
                            >
                                Entrar
                            </Button>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>
            <Grid container justifyContent="center">
                <Button
                    color="primary">
                    Português (Brasil)
                </Button>
                <Button
                    color="primary"
                    href="https://support.google.com/accounts?hl=pt#topic=3382296"
                    target="_blank">
                    Ajuda
                </Button>
                <Button
                    color="primary"
                    href="https://policies.google.com/privacy?gl=BR&hl=pt"
                    target="_blank">
                    Privacidade
                </Button>
                <Button
                    color="primary"
                    href="https://policies.google.com/terms?gl=BR&hl=pt"
                    target="_blank">
                    Termos
                </Button>
            </Grid>
        </Container>
    )
}

export default Home
