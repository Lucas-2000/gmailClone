import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react'
import Navbar from './componentes/navbar/Navbar';
import Home from './paginas/home/Home';
import Cadastrar from './paginas/cadastrar//Cadastrar';
import Inbox from './paginas/inbox/Inbox';
import Leftbar from './componentes/leftbar/Leftbar';

const tema = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  },
  palette: {
    background: {
      default: "white"
    }
  }
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={tema}>
        <CssBaseline />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/cadastrar'>
            <Cadastrar />
          </Route>
          <Route exact path='/inbox'>
            <Navbar />
            <Leftbar />
            <Inbox />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
