import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Col } from "react-bootstrap/lib/"

class Orders extends Component {

    state = {
        orders: [],
        line_items: [],
        fullOrders: [],
        orderTotals: [],
        orderDates: [],
        showModal: false,
        currentOrder: [],
        currentOrderID: null,
        currentOrderDate: null,
        currentOrderTotal: null
    }

  
    render() {

        return ( 
            <div className='container'>
                <br /><br />
                <Col md={12}> 
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Sipariş ID</th>
                            <th>Ürünler</th>
                            <th>Toplam Tutar</th>
                            <th>Sipariş Tarihi</th>
                            <th>Üye Adı</th>
                        </tr>
                    </thead>
                    <tbody style={{ padding: 5 }}>
                       
                    </tbody>
                </Table>
                  
                </Col>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(Orders)