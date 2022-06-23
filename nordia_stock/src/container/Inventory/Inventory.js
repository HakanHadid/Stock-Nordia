import React, { Component } from "react";
import { connect } from "react-redux";
import * as myproduct from "../../data/product.json";
import { Table, Col, Button } from "react-bootstrap/lib/";
import * as actionTypes from "../../store/actions";

class Inventory extends Component {
  state = {
    products: this.props.products,
    showModal: false,
    productToUpdate: null,
    preEditProductName: null,
    preEditDescription: null,
    preEditPrice: null,
    preEditQuantity: null,
    showMensCategory: false,
    showWomensCategory: false,
    showKidsCategory: false,
    showMiscCategory: false,
  };

  showAllProducts = () => {
    this.setState({
      products: this.props.products,
      showMensCategory: false,
      showWomensCategory: false,
      showKidsCategory: false,
      showMiscCategory: false,
    });
  };

  deleteProduct = (productID, index) => {
    const newProducts = [...this.props.products];
    newProducts.splice(index, 1);
    this.props.updateProducts(newProducts);
  };

  updateProduct = (product_name, description, price, quantity) => {
    console.log("Current Product ID: " + this.state.productToUpdate);
    console.log(product_name, description, price, quantity);

    let updatedProduct = {
      category_id: 15,
      product_name: product_name,
      price: price,
      description: description,
      quantity: quantity,
      photo: "photo",
    };

    console.log("updatedProduct: " + updatedProduct);
  };

  render() {
    const urunlerget = localStorage.getItem("myproduct");
    if(!urunlerget){
        localStorage.setItem("myproduct", JSON.stringify(myproduct.products));
    }
    const urunler = JSON.parse(localStorage.getItem("myproduct"));

    const products = urunler.map((product, index) => {
      return (
        <tr key={product.id}>
          <td>{index + 1}</td>
          <td>
            <img
              alt=""
              src={product.gorsel}
              style={{ maxWidth: 100, maxHeight: 100 }}
            />
          </td>
          <td>{product.isim}</td>
          <td>{product.fiyat} TL</td>
          <td>%{product.kdv}</td>
          <td>{product.stok}</td>
          <td>{product.birim}</td>
          <td>
            <Button
              bsSize="small"
              bsStyle="danger"
              onClick={() => {
                this.deleteProduct(product.id, index);
                // this.props.onDeleteProduct(product.id)
              }}
            >
              Sil
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <div className="container" style={{ margin: 10 }}>
        <Col md={12}>
          <br />
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Görsel</th>
                <th>Adı</th>
                <th>Fiyat</th>
                <th>Kdv</th>
                <th>Stok</th>
                <th>Tür</th>
                <th>İşlem</th>
              </tr>
            </thead>
            <tbody>{products}</tbody>
          </Table>
        </Col>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    products: state.auth.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteProduct: (productID) =>
      dispatch(actionTypes.deleteProduct(productID)),
    updateProducts: (products) => dispatch(actionTypes.editProduct(products)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
