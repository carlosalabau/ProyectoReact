import React, {Component} from 'react'
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
      visible: false
    });
  };
  render() {
  return (
    <div>
      <Modal
          title="REGISTRO"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Volver
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
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
    </div>
  )

        }
      }