import axios from "axios";
import React, { Component } from "react";
 
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
                // const taxon = response.data.map((taxons) => ({
                //     id: taxons.data.id,
                //     name: taxons.data.attributes.name
                // }));
                // this.setState({
                //     taxon
                // });
                console.log(response);
            });
    }
  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <ul>
            {
                this.state.taxons.map((taxons) => {
                    return <li key={taxons.id}>{taxons.name}</li>
                })
            }
        </ul>
      </div>
    );
  }
}
 
export default Home;
