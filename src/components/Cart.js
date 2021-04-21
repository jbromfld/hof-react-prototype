import axios from "axios";
import React, { Component } from "react";
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
 
const drawerWidth = 100;

const styles = theme => ({
    root: {
        display: 'flex',
      },
      // necessary for content to be below app bar
      main: theme.mixins.toolbar,
      drawerPaper: {
        width: '100%',
        marginLeft: drawerWidth,
        marginTop: drawerWidth,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },

});
class Cart extends Component {
    constructor() {
        super();

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        let userId = 1; // hard-coded userId
        axios.get(`/cart/${userId}`)
            .then((response) => {
                const product = response.data.products.map((products) => ({
                    id: products.productId,
                    name: products.name,
                    color: products.color,
                    size: products.size,
                    price: products.price
                }));
                this.setState({ products: product });
            });
    }
    render() {
        const { classes } = this.props;
        const drawer = (
            <div>
                <div className = { classes.main } />
                    <List>
                        {
                            this.state.products.map((product) => {
                                return <ListItem button key = { product.id } >
                                    <ListItemText primary = { product.id } />
                                    <ListItemText primary = { product.name } />
                                    <ListItemText primary = { product.color } />
                                    <ListItemText primary = { product.size } />
                                    <ListItemText primary = { product.price } />
                                </ListItem>
                            })
                        }
                    </List>
                </div>
        )

        return (
            <div className = { classes.root } >
                <nav className = { classes.drawer } >
                    <Hidden xsDown implementation="css">
                        <Drawer classes={{ paper: classes.drawerPaper, }} variant="permanent" open >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
            </div>
        );
    }
}
             
export default withStyles(styles, {withTheme: true})(Cart);
            