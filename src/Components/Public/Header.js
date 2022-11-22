import { Col, Row, Typography, Space, Menu, Button, Dropdown, Badge, Modal } from "antd";
import { Header } from "antd/es/layout/layout";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import Login from "../Auth/Login";
import '../../Styles/Public/Header.scss'

const { Title, Text, Paragraph } = Typography;


export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalLogin: false,
        }
    }

    menu = [
        {
            label: <Link to="/">Compañia</Link>,
            key: 'compania',
            link: '/'
        },
        {
            label: <Link to="/">Servicios</Link>,
            key: 'servicios',
            link: '/servicios'
        },
        {
            label: <Link to="/">Soluciones</Link>,
            key: 'soluciones',
            link: '/soluciones',
        },
        {
            label: <Link to="/clientes">Clientes</Link>,
            key: 'clientes',
            link: '/clientes'
        },
        {
            label: <Link to="/">Contacto</Link>,
            key: 'contacto',
            link: '/contacto'
        },
        {
            label: <Button onClick={() => this.setState({ modalLogin: true })} >
                Log In Administrador
            </Button>,
            key: 'login',
        }
    ]

    render() {
        return (
            <Header className="header-public pt-1 ">
                <Row className="center pb-1">
                    <Text>Preguntas? Contacto de ventas: </Text> <a href="tel:+528444145676" className="ml-1 phone"><Text><FaPhone size={10} /> (844) 414 5676 </Text></a>
                </Row>
                <Row align="bottom">
                    <Col xs={24} sm={24} md={4} lg={4} xl={4} className="center">
                        <img src="/logo/logo-white.png" alt="Logo" className="logo" />
                    </Col>
                    <Col xs={24} sm={24} md={20} lg={20} xl={20} className="pt-1">
                        <Menu items={this.menu} mode="horizontal" className="menu center" selectedKeys={this.props.current} onClick={e => this.props.updateCurrent(e.key)} />
                    </Col>
                </Row>
                <Modal style={{ zIndex: 100 }} visible={this.state.modalLogin} onCancel={() => this.setState({modalLogin: false})} onOk={() => this.setState({modalLogin: false})}>
                        <Login />
                    </Modal>

            </Header>
        )
    }
}