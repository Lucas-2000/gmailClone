import { Button, Container, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core'
import { AccessTimeSharp, Add, DescriptionSharp, InboxOutlined, InboxSharp, Keyboard, LabelImportantOutlined, LabelSharp, SendSharp, StarOutlined, Videocam } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React from 'react'

const useStyles = makeStyles((tema) => ({
    container: {
        height: "100%",
        color: "white",
        position: "sticky",
        top: 0
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: tema.spacing(1),
    },
    icon: {
        marginLeft: tema.spacing(0),
    },
    text: {
        fontWeight: 500,
    },
    button: {
        width: '50%',
        height: '50px',
        borderStyle: 'solid',
        borderRadius: '20px',
        backgroundColor: 'white',
        marginLeft: '5px',
        marginTop: '15px',
        fontSize: '12px',
    },
    list: {
        '&:active': {
            backgroundColor: 'LightSalmon',
            borderStyle: 'solid',
            borderRadius: '20px',
            color: 'red'
        }
    },
    toolbar: tema.mixins.toolbar
}));

const Leftbar = () => {
    const classes = useStyles()

    return (
        <Container>
            <Drawer anchor="left" variant="permanent" className={classes.container}>
                <Toolbar />
                <Grid className={classes.item} container>
                    <Button
                        variant="contained"
                        startIcon={
                            <Add />
                        }
                        className={classes.button}>
                        Escrever
                    </Button>
                </Grid>
                <Grid className={classes.item}>
                    <List>
                        <ListItem className={classes.list} button>
                            <ListItemIcon className={classes.icon}>
                                <InboxSharp />
                            </ListItemIcon>
                            <ListItemText className={classes.text}>
                                Caixa de entrada
                            </ListItemText>
                        </ListItem>
                        <ListItem className={classes.list} button>
                            <ListItemIcon className={classes.icon}>
                                <StarOutlined />
                            </ListItemIcon>
                            <ListItemText className={classes.text}>
                                Com estrela
                            </ListItemText>
                        </ListItem>
                        <ListItem className={classes.list} button>
                            <ListItemIcon className={classes.icon}>
                                <AccessTimeSharp />
                            </ListItemIcon>
                            <ListItemText className={classes.text}>
                                Adiados
                            </ListItemText>
                        </ListItem>
                        <ListItem className={classes.list} button>
                            <ListItemIcon className={classes.icon}>
                                <LabelImportantOutlined />
                            </ListItemIcon>
                            <ListItemText className={classes.text}>
                                Importante
                            </ListItemText>
                        </ListItem>
                        <ListItem className={classes.list} button>
                            <ListItemIcon className={classes.icon}>
                                <SendSharp />
                            </ListItemIcon>
                            <ListItemText className={classes.text}>
                                Enviados
                            </ListItemText>
                        </ListItem>
                        <ListItem className={classes.list} button>
                            <ListItemIcon className={classes.icon}>
                                <DescriptionSharp />
                            </ListItemIcon>
                            <ListItemText className={classes.text}>
                                Rascunhos
                            </ListItemText>
                        </ListItem>
                        <ListItem className={classes.list} button>
                            <ListItemIcon className={classes.icon}>
                                <LabelSharp />
                            </ListItemIcon>
                            <ListItemText className={classes.text}>
                                Categorias
                            </ListItemText>
                        </ListItem>
                        <ListItem className={classes.list} button>
                            <ListItemIcon className={classes.icon}>
                                <LabelSharp />
                            </ListItemIcon>
                            <ListItemText className={classes.text}>
                                Personal
                            </ListItemText>
                        </ListItem>
                    </List>
                </Grid>
                <Grid className={classes.item}>
                    <List>
                        <Typography style={{marginLeft: '10px', marginBottom: '5px'}}>
                            Meet
                        </Typography>
                        <ListItem className={classes.list} button>
                            <ListItemIcon className={classes.icon}>
                                <Videocam />
                            </ListItemIcon>
                            <ListItemText className={classes.text}>
                                Nova reunião
                            </ListItemText>
                        </ListItem>
                        <ListItem className={classes.list} button>
                            <ListItemIcon className={classes.icon}>
                                <Keyboard />
                            </ListItemIcon>
                            <ListItemText className={classes.text}>
                                Participar da reunião
                            </ListItemText>
                        </ListItem>
                    </List>
                </Grid>
            </Drawer>
        </Container>
    )
}

export default Leftbar
