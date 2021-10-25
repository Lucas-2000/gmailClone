import { AppBar, Avatar, Container, Grid, IconButton, InputAdornment, InputBase, Toolbar, Typography } from '@material-ui/core'
import { Apps, HelpOutline, Menu, Search, SettingsOutlined, Tune } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import gmail from '../../imagens/gmail.png'

const useStyles = makeStyles({
    logo: {
        maxWidth: '50px',
    },
    typo: {
        marginRight: 'auto'
    },
    search: {
        marginRight: 'auto',
        width: '50%',
        borderStyle: 'solid',
        borderColor: '#f0f0f0',
        borderRadius: '7px',
        backgroundColor: '#f0f0f0',
        height: '50px'
    }
})

const Navbar = () => {
    const classes = useStyles()

    return (
        <Container>
            <AppBar color="inherit" elevation={1} position="fixed">
                <Toolbar>
                    <IconButton>
                        <Menu />
                    </IconButton>
                    <img src={gmail}
                        className={classes.logo} />
                    <Typography
                        variant="h5"
                        color="textSecondary"
                        className={classes.typo}>
                        Gmail
                    </Typography>
                    <InputBase
                        className={classes.search}
                        placeholder="Pesquisar email"
                        startAdornment={
                            <InputAdornment position="start">
                                <IconButton>
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton>
                                    <Tune />
                                </IconButton>
                            </InputAdornment>
                        }>
                    </InputBase>
                    <IconButton>
                        <HelpOutline />
                    </IconButton>
                    <IconButton alt="Configurações">
                        <SettingsOutlined />
                    </IconButton>
                    <IconButton>
                        <Apps />
                    </IconButton>
                    <IconButton>
                        <Avatar>

                        </Avatar>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Container>
    )
}

export default Navbar
