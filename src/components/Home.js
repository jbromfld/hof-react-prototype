import axios from "axios";
import React, { Component } from "react";
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
 
const drawerWidth = 240;


const styles = theme => ({
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

});

class Home extends Component {
    constructor() {
        super();

        this.state = {
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
    }
  render() {
    const { classes } = this.props;
    const drawer = (
        <div>
            <div className={classes.toolbar}/>
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
      </div>
    );
  }
}
 
export default withStyles(styles, {withTheme: true})(Home);
