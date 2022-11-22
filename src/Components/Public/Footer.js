import { Col, Row, Typography, Space, Menu, Button, Dropdown, Badge, Card, Form, Input } from "antd";
import { Footer, Header } from "antd/es/layout/layout";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

import '../../Styles/Public/Footer.scss';

const { Text, Paragraph, Title } = Typography;
const { TextArea } = Input;

export default class NavBar extends React.Component {
    render() {
        return (
            <Footer className="footer-public">
                <Row gutter={35}>


                    <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                        <Row>
                            <Title level={3}>Esto podria interesarte:</Title>
                        </Row>
                        <Row>
                            <Card>
                                <Row>
                                    <Paragraph>
                                        Servidores de alto rendimiento para aplicaciones avanzadas de calidad superior
                                    </Paragraph>
                                </Row>
                                <Row justify="end">
                                    <Text>$700</Text>
                                </Row>

                            </Card>
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        <Row className="width-100 pt-1" gutter={30} justify="center">
                            <Col span={12} className="center">
                                <a>Terminos y Condiciones</a>
                            </Col>
                            <Col span={12} className="center">
                                <a>Politicas de Privacidad</a>
                            </Col>
                            <Col span={12} className="center pt-1">
                                <a>Transferencia de Dominios</a>
                            </Col>
                            <Col span={12} className="center pt-1">
                                <a>Precio de Dominios</a>
                            </Col>
                            <Col span={24} className="pt-1 pb-1">
                                <div class="mapouter">
                                    <div class="gmap_canvas">
                                        <iframe className="map" id="gmap_canvas" src="https://maps.google.com/maps?q=202%20Bitters%20Road&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                        </iframe>
                                        <br />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Form
                            name="sugerencias"
                            layout="vertical"
                        >
                            <Row gutter={35}>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <Form.Item
                                        label={<Text strong> Nombre </Text>}
                                        name="nombre"
                                        rules={[{ required: true, message: 'Por favor ingrese su nombre' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <Form.Item
                                        label={<Text strong> Correo Electronico </Text>}
                                        name="email"
                                        rules={[{ required: true, message: 'Por favor ingrese su correo electronico' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Form.Item
                                        label={<Text strong> Sugerencia </Text>}
                                        name="sugerencia"
                                        rules={[{ required: true, message: 'Por favor una sugerencia' }]}
                                    >
                                        <TextArea />
                                    </Form.Item>
                                </Col>
                                <Col span={24} className="center">
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">
                                            Enviar
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Col>

                </Row>
            </Footer>
        )
    }
}