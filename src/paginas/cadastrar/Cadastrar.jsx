import { Button, Card, CardActions, CardContent, CardHeader, Container, Grid, InputAdornment, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../imagens/google.png'

const useStyles = makeStyles({
    container: {
        marginTop: '160px',
    },
    card: {
        maxWidth: '1200px'
    },
    logo: {
        maxWidth: '80px',
        marginTop: '50px'
    },
    textField: {
        marginBottom: '10px',
    },
    button: {
        marginTop: "10px",
    },
    buttonProx: {
        marginTop: "10px",
        marginLeft: '150px',
    },
})

const Cadastrar = () => {
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
                            title="Criar sua Conta do Google"
                            subheader="Ir para o Gmail"
                        />
                    </Grid>
                    <CardContent>
                        <Grid>
                            <TextField
                                className={classes.textField}
                                variant="outlined"
                                label="Nome"
                                size="small"
                                fullWidth
                                required
                            />
                            <TextField
                                className={classes.textField}
                                variant="outlined"
                                label="Sobrenome"
                                size="small"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                className={classes.textField}
                                variant="outlined"
                                label="Nome de usuário"
                                size="small"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                className={classes.textField}
                                variant="outlined"
                                label="Senha"
                                size="small"
                                type="password"
                                fullWidth
                                required
                            />
                            <TextField
                                className={classes.textField}
                                variant="outlined"
                                label="Confirmar"
                                size="small"
                                type="password"
                                fullWidth
                                required
                            />
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Grid>
                            <Button color="primary"
                                className={classes.button}
                                component={Link}
                                to="/">
                                Faça login em vez disso
                            </Button>
                            <Button
                                color="primary"
                                variant="contained"
                                component={Link}
                                to="/"
                                className={classes.buttonProx}
                            >
                                Criar
                            </Button>
                        </Grid>
                    </CardActions>
                </Card>
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
            </Grid>
        </Container>
    )
}

export default Cadastrar
