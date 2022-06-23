import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, ButtonToolbar } from "react-bootstrap/lib/";
import * as actionTypes from "../store/actions";
import DashboardButtons from "./DashboardContainer/DashboardContainer";
import Inventory from "./Inventory/Inventory";
import Orders from "./OrdersContainer/OrdersContainer";
import CreateProduct from "./CreateProduct/CreateProduct";

class Container extends Component {
  state = {
    showDashboard: true,
    showAddToStock: false,
    showInventory: false,
    showCreateProduct: false,
    showOrders: false,
  };

  showDashboard = () => {
    this.setState({
      showDashboard: true,
      showAddToStock: false,
      showInventory: false,
      showCreateProduct: false,
      showOrders: false,
    });
  };

  showInventory = () => {
    this.props.hideChart();
    this.setState({
      showDashboard: false,
      showAddToStock: false,
      showInventory: true,
      showCreateProduct: false,
      showOrders: false,
    });
  };

  showCreateProduct = () => {
    this.props.hideChart();
    this.setState({
      showDashboard: false,
      showAddToStock: false,
      showInventory: false,
      showCreateProduct: true,
      showOrders: false,
    });
  };

  showOrders = () => {
    this.props.hideChart();
    this.setState({
      showDashboard: false,
      showAddToStock: false,
      showInventory: false,
      showCreateProduct: false,
      showOrders: true,
    });
  };

  render() {
    return (
      <div className="container">
        <div>
          <ButtonToolbar style={{ justifyContent: "center", display: "flex" }}>
            <Button bsStyle="danger" bsSize="large" onClick={this.showDashboard}>
              Dashboard
            </Button>
            <Button bsStyle="info" bsSize="large" onClick={this.showInventory}>
              Tüm Ürünler
            </Button>
            <Button
              bsStyle="success"
              bsSize="large"
              onClick={this.showCreateProduct}
            >
              Yeni Ürün Ekle
            </Button>
            <Button bsStyle="warning" bsSize="large" onClick={this.showOrders}>
              Sipariş Logları
            </Button>
          </ButtonToolbar>
          {this.props.showContainers ? (
            <div>
              {this.state.showDashboard ? <DashboardButtons /> : null}
              {this.state.showInventory ? <Inventory /> : null}
              {this.state.showCreateProduct ? <CreateProduct /> : null}
              {this.state.showOrders ? <Orders /> : null}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthed: state.auth.isAuthed,
    showLogin: state.main.showLogin,
    showCreateAccount: state.main.showCreateAccount,
    showChart: state.auth.showChart,
    showContainers: state.auth.showContainers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideChart: () => dispatch(actionTypes.hideChart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
