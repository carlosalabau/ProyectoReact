import React, { Component } from "react";
import "./menu.css";
import { Modal, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default class Menu extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div
          id="nav"
          className="row d-flex justify-content-between align-items-center menu"
        >
          <p className="logo">BICISHOP</p>
          <ul className="d-flex flex-row">
            <a href="#">
              <li>Inicio</li>
            </a>
            <a href="#">
              <li>Tienda</li>
            </a>
            <a href="#">
              <li>Blog</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Contacto</li>
            </a>
          </ul>
          <ul className="d-flex flex-row iconos">
            <li>
              <i className="fas fa-search"></i>
            </li>
            <li>
              <a onClick={this.showModal}>
                <i className="far fa-user"></i>
              </a>
            </li>
            <li>
              <i className="fas fa-shopping-cart"></i>
            </li>
          </ul>
        </div>
        <Modal
          title="LOG IN"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Volver
            </Button>,
            <Button
              key="back"
              onClick={this.handleCancel}
              data-toggle="modal"
              data-target="#exampleModal" onClick={this.handleCancel}
            >
              Registrate
            </Button>,
          ]}
        >
          <Input
            placeholder="Introduce tu nombre de usuario"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
          <Input.Password placeholder="Introduce tu password" />
          <Button type="primary">Log In</Button>
        </Modal>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  REGISTRO
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              <Input className="inputModal" placeholder="Introduce tu nombre de usuario" />
                <Input 
                  placeholder="Introduce tu nombre de usuario"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
                <Input.Password placeholder="Introduce tu password" />
                <Input.Password placeholder="Repite tu password" />
                <Button type="primary">Registrate</Button>
              </div>
              <div class="modal-footer">
                <Button>Volver</Button>
                <Button type="primary" data-dismiss="modal" onClick={this.showModal}>LogIn</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
