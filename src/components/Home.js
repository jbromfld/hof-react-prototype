import axios from "axios";
import React, { Component } from "react";
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/'
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Cart from "./Cart";
import Products from './ProductItem'

 
const drawerWidth = 240;

const styles = theme => ({
    //Drawer
    root: {
        display: 'flex',
      },
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
      },
      appBar: {
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      // necessary for content to be below app bar
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: drawerWidth,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },

      // Grid List of Card
      gridRoot: {
        flexGrow: 1,
        padding: theme.spacing(2)
      }
});

class Home extends Component {
    constructor() {
        super();

        this.state = {
            products: [],
            taxons: []
        }
    }
    componentDidMount() {
        axios.get('/taxons')
            .then((response) => {
                const taxon = response.data.data.map((taxons) => ({
                    id: taxons.id,
                    name: taxons.attributes.name
                }));
                this.setState({ taxons: taxon });
            });
        axios.get('/products')
            .then((response) => {
                const product = response.data.data.map((products) => ({
                    id: products.id,
                    name: products.attributes.name,
                    display_price: products.attributes.display_price
                }));
                this.setState({ products: product });
            });
    }
  render() {
    const { classes } = this.props;
    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider />
            <List>
                {
                    this.state.taxons.map((taxon) => {
                        // console.log(taxon.id);
                        return <ListItem button key={taxon.id}>
                            <ListItemText primary={taxon.name}/>
                        </ListItem>
                    })
                }
            </List>
        </div>
    )

    return (
    <HashRouter>
      <div className={classes.root}>
        <nav className={classes.drawer}>
            <Hidden smUp implementation="css">
              <Drawer
              variant="temporary"
              classes={{
                paper: classes.drawerPaper,
              }}
              style={{ zIndex: 1250 }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
        </nav>
        <div className={classes.gridRoot}>
              <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
              {
                this.state.products.map((product) => (
                  <Grid item xs={12} sm={6} md={3} key={this.state.products.indexOf(product)}>
                      <Card>
                        <NavLink to="/products">
                          <CardHeader
                              title={`image : ${product.id}`}
                              subheader={`${product.name}`}
                          />
                          <CardContent>
                              <Typography variant="h5" gutterBottom>
                                  {product.display_price}
                              </Typography>
                          </CardContent>
                        </NavLink>
                      </Card>
                  </Grid>
                ))
              }
          </Grid>
        </div>
      </div>
      <div>
        <Route path="/products" component={Products}/>
        <Route path="/cart" component={Cart}/>
      </div>
    </HashRouter>
    );
  }
}
 
export default withStyles(styles, {withTheme: true})(Home);
