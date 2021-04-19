import React, { Component } from "react";
import axios from "axios";
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
 
const drawerWidth = 100;

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3, 2),
        height: 1000,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      },
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 1000,
      },
      image: {
        width: 512,
        height: 512,
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      }
});

class Products extends Component {
    constructor() {
        super();
        this.state = {
            id: 1,
            image: "https://demo.spreecommerce.org/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdFVTIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b8fdab49e616ff16655bd04fd60981b8d62e7ea5/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTVRZd2VESXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--8820ff68336a13d35cde8a62e24256d5c44a9920/db-seeds-photos-products-Men-T-shirts-basic%20t-shirt-white-AdobeStock_121795218.jpg",
            name: "Shirt",
            description: "Dicta necessitatibus in consequatur aut facilis odit. Non praesentium sed facere rerum. Aliquid asperiores reiciendis exercitationem officia est commodi sint qui. Deleniti ut aut sit rerum libero.",
            display_price: "$37.99",
            color: ["#FFFFFF", "#000000", "#808080", "#A8003B"],
            size: ["XS", "S", "M", "L", "XL"],
            isAvailable: true
        };
    }

    // componentDidMount() {
    //     // let userId = 1; // hard-coded userId
    //     // axios.get(`/products/${this.props.location.id}`)
    //     // .then((response) => {
    //     //     this.setState({ id: 10 });
    //     //     console.log(this.state.id);
    //     // })
    //     // .catch((error) => {
    //     //     console.log(error);
    //     // });
    // }

    render() {
        const { classes } = this.props;

        return (
    <div className={classes.root}>
        <Paper>
        <Grid container>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={this.state.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {this.state.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {this.state.isAvailable}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {this.state.description}
                </Typography>
              </Grid>
            <Grid item>
              <Typography variant="outlined">{this.state.display_price}</Typography>
            </Grid>
              <Grid item>
              <Button variant="outlined" color="primary">
                Add to Cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Paper>
    </div>

        );
    }
}
 
export default withStyles(styles, {withTheme: true})(Products);
