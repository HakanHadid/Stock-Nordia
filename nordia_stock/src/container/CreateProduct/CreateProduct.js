import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import {
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Button,
    Col
} from "react-bootstrap/lib/"

class CreateProduct extends Component {

    state = {
        show: true
    }

    getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    addToDB = (picture,product_name, price, stock, quantity,adet) => {
        let newProduct = {
            isim: product_name,
            fiyat: price,
            stok: stock,
            kdv: quantity,
            gorsel:picture,
            birim: adet
        }

        var stored = JSON.parse(localStorage.getItem("myproduct"));
        stored.push(newProduct);
        localStorage.setItem("myproduct", JSON.stringify(stored));
    }

    
    render() {

        function FieldGroup({ id, label, help, ...props }) {
            return (
                <FormGroup controlId={id}>
                    <ControlLabel>{label}</ControlLabel>
                    <FormControl {...props} onChange={props.change} />
                    {help && <HelpBlock>{help}</HelpBlock>}
                </FormGroup>
            )
        }
        return (
            <div className="container" style={{ textAlign: "left" }}>
                <Col md={12}>
                <br /><br />
            {this.state.show ?
                    <form>
                        <FieldGroup id="formControlsText" type="text" label="Ürün Adı" inputRef={(ref) => { this.product_name = ref }} />
                        <FieldGroup id="formControlsPrice" type="text" label="Fiyat" inputRef={(ref) => { this.price = ref }} />
                        <FieldGroup id="formControlsPrice" type="text" label="Kdv" inputRef={(ref) => { this.quantity = ref }} />
                        <FieldGroup id="formControlsPrice" type="text" label="Stok" inputRef={(ref) => { this.stock = ref }} />
                        <FieldGroup id="formControlsPrice" type="text" label="Ölçü Birimi" inputRef={(ref) => { this.adet = ref }} />
                        <FieldGroup id="formControlsFile" type="file" label="Görsel" inputRef={(ref) => { this.picture = ref }}  />

                        <Button type="button" bsStyle="success" className='w-100' onClick={() => {
                            if(!this.picture.files[0])return;
                            this.getBase64(this.picture.files[0], (result) => {
                                 this.addToDB(result, this.product_name.value, this.price.value, this.stock.value, this.quantity.value,this.adet.value)
                                 window.location.reload(false);
                            });                        
                        }}>
                            Ekle
                        </Button>
                    </form>
                    : null}
                    <br />
                    <br />
                </Col>
                <Col md={2} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        products: state.auth.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateProducts: (products) => dispatch(actionTypes.loadProducts(products))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct)

