import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './main.css'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import Products from "./ProductItem";
import Cart from "./Cart";

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    navLink: {
      color: 'white',
      textDecoration: 'none'
    }
  });

class Main extends Component {
    state = {
        searchNodes: ""
    };
    render() {
      const { classes } = this.props;
      return (
        <HashRouter>
          <div className={classes.root}>
            <AppBar
              position="fixed"
              style={{ zIndex: 1251 }}
              >
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        ITW21
                    </Typography>
                        <Button ><NavLink className={classes.navLink} to="/">Home</NavLink></Button>
                        <Button color="inherit"><NavLink className={classes.navLink} to="/cart">Cart</NavLink></Button>
                </Toolbar>
            </AppBar>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/cart" component={Cart}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default withStyles(styles, {withTheme: true})(Main);
