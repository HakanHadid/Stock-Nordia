import React, { Component } from "react";
import { Col } from "react-bootstrap/lib/";
import * as users from "../../data/users.json";


class ProductButtons extends Component {
  state = {
    products: this.props.products,
    showMensCategory: false,
    showWomensCategory: false,
    showKidsCategory: false,
    showMiscCategory: false,
  };

  render() {
    const urunler = JSON.parse(localStorage.getItem("myproduct"));
    const user = users.users.length;
    return (
      <div>
        <div className="container d-flex justify-content-center">
          <Col
            md={3}
            style={{
              minHeight: "150px",
              textAlign: "center",
              top: 40,
              fontSize: 20,
              background: "#fff",
              padding: "45px 0",
              margin: 10,
              borderRadius: "5px",
              boxShadow: "0 2px 10px rgb(0 0 0 / 10%)",
              transition: "all 0.2s",
            }}
          >
            Toplam Üye Sayısı <br />
            {user}
          </Col>
          <Col
            md={3}
            style={{
                minHeight: "150px",
                textAlign: "center",
                top: 40,
                fontSize: 20,
                background: "#fff",
                padding: "45px 0",
                margin: 10,
                borderRadius: "5px",
                boxShadow: "0 2px 10px rgb(0 0 0 / 10%)",
                transition: "all 0.2s",
            }}
          >
            Toplam Ürün Sayısı <br />
            {(urunler)?urunler.length:0}
          </Col>
          <Col
            md={3}
            style={{
                minHeight: "150px",
                textAlign: "center",
                top: 40,
                fontSize: 20,
                background: "#fff",
                padding: "45px 0",
                margin: 10,
                borderRadius: "5px",
                boxShadow: "0 2px 10px rgb(0 0 0 / 10%)",
                transition: "all 0.2s",
            }}
          >
            Toplam Sipariş Sayısı <br /> 0
          </Col>
          <Col
            md={3}
            style={{
                minHeight: "150px",
                textAlign: "center",
                top: 40,
                fontSize: 20,
                background: "#fff",
                padding: "45px 0",
                margin: 10,
                borderRadius: "5px",
                boxShadow: "0 2px 10px rgb(0 0 0 / 10%)",
                transition: "all 0.2s",
            }}
          >
            Toplam Sipariş Tutarı <br /> 0
          </Col>
        </div>
      </div>
    );
  }
}
export default ProductButtons;
