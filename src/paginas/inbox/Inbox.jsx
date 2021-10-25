import { Button, Checkbox, Container, FormControlLabel, FormGroup, Grid, IconButton, Menu, MenuItem, Tab, TablePagination, Tabs, Toolbar } from '@material-ui/core'
import { InboxSharp, Keyboard, KeyboardArrowLeft, KeyboardArrowRight, Loyalty, MoreVert, People, Refresh } from '@material-ui/icons'
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react'

const useStyles = makeStyles({
    icon: {
        marginLeft: '230px'
    },
    button: {
        marginLeft: 'auto'
    },
    tab: {
        marginLeft: '235px',
        width: '1200px'
    }
})

const Inbox = () => {
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [value, setValue] = useState('1');

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Container >
            <Toolbar />
            <Grid container justifyContent="center">
                <Checkbox defaultChecked color='default' className={classes.icon} />
                <IconButton>
                    <Refresh />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
                <Button
                    className={classes.button}
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    1 - 50 de 4000
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Mais recente</MenuItem>
                    <MenuItem onClick={handleClose}>Mais antigo</MenuItem>
                </Menu>
                <IconButton>
                    <KeyboardArrowLeft />
                </IconButton>
                <IconButton>
                    <KeyboardArrowRight />
                </IconButton>
                <IconButton>
                    <Keyboard />
                </IconButton>
            </Grid>
            <Grid container>
                <TabContext value={value}>
                    <TabList onChange={handleChange}>
                        <Tab
                            icon={<InboxSharp />}
                            label="Principal"
                            value="1"
                            className={classes.tab} />
                        <Tab
                            icon={<People />}
                            label="Social"
                            value="2"
                            style={{width: '1200px'}} />
                        <Tab
                            icon={<Loyalty />}
                            label="Promoções"
                            value="3"
                            style={{width: '1200px'}} />
                    </TabList>
                    <Grid container>
                        <TabPanel value="1" className={classes.tab}>Principal</TabPanel>
                        <TabPanel value="2" className={classes.tab}>Social</TabPanel>
                        <TabPanel value="3" className={classes.tab}>Promoções</TabPanel>
                    </Grid>
                </TabContext>
            </Grid>
        </Container >
    )
}

export default Inbox
