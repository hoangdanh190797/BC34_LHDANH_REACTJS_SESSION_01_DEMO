import React, { Component } from "react";
// import img from "../../public/CarBasic/products/black-car.jpg"

export default class DemoCart extends Component {
  state = {
    urlImg: "./CarBasic/products/black-car.jpg",
  };
  render() {
    let imgProduct = "./CarBasic/products/black-car.jpg";
    let imgIcoinBlack = "./CarBasic/icons/icon-black.jpg";
    let imgIcoinRed = "./CarBasic/icons/icon-red.jpg";
    let imgIcoinSilver = "./CarBasic/icons/icon-silver.jpg";
    let imgIcoinSteel = "./CarBasic/icons/icon-steel.jpg";

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <img
              src={this.state.urlImg}
              alt="error"
              style={{ width: "500px", marginTop: "50px" }}
            />
          </div>
          <div className="col-md-5">
            <img
              onClick={() => {this.setState({
                urlImg: "./CarBasic/products/black-car.jpg",
              })}}
              src={imgIcoinBlack}
              style={{ marginTop: "50px" }}
            />
            <br />
            <img
              onClick={() => {this.setState({
                urlImg: "./CarBasic/products/red-car.jpg",
              })}}
              src={imgIcoinRed}
              style={{ marginTop: "50px" }}
            />
            <br />
            <img
              onClick={() => {this.setState({
                urlImg: "./CarBasic/products/silver-car.jpg",
              })}}
              src={imgIcoinSilver}
              style={{ marginTop: "50px" }}
            />
            <br />
            <img
              onClick={() => {this.setState({
                urlImg: "./CarBasic/products/steel-car.jpg",
              })}}
              src={imgIcoinSteel}
              style={{ marginTop: "50px" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
