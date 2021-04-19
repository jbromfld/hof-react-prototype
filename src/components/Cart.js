import React, { Component } from "react";
 
class Cart extends Component {
  render() {
    return (
      <div class="small-container cart-page">
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Ftshirts&psig=AOvVaw2FrN0R6nXY5ATZ8n4X4LDo&ust=1618917254941000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCQj_GWivACFQAAAAAdAAAAABAG"></img>
                            <div>
                                <p>Prited Tshirt</p>
                                <small>Price : $50.00</small>
                                <br></br>
                                <a href="">Remove</a>
                            </div>

                    </div>
                </td>
                <td><input type="number" value="1"></input></td>
                <td>$50.00</td>
            </tr>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Ftshirts&psig=AOvVaw2FrN0R6nXY5ATZ8n4X4LDo&ust=1618917254941000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCQj_GWivACFQAAAAAdAAAAABAG"></img>
                            <div>
                                <p>Shoes</p>
                                <small>Price : $50.00</small>
                                <br/>
                                <a href="">Remove</a>
                            </div>

                    </div>
                </td>
                <td><input type="number" value="1"></input></td>
                <td>$50.00</td>
            </tr>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Ftshirts&psig=AOvVaw2FrN0R6nXY5ATZ8n4X4LDo&ust=1618917254941000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCQj_GWivACFQAAAAAdAAAAABAG"></img>
                            <div>
                                <p>Polo Tshirt</p>
                                <small>Price : $50.00</small>
                                <br></br>
                                <a href="">Remove</a>
                            </div>

                    </div>
                </td>
                <td><input type="number" value="1"></input></td>
                <td>$50.00</td>
            </tr>
        </table>
        <div class="total-price">
            <table>
                <tr>
                    <td>Subtotal</td>
                    <td>$150.00</td>
                </tr>
                <tr>
                    <td>Tax</td>
                    <td>$25.00</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>$175.00</td>
                </tr>
            </table>

        </div>
      </div>
       
    );
  }
}
 
export default Cart;
