import React, { Component } from "react";
import { Card, Layout, Row, Col, Typography, List, Button, Menu } from "antd";
import AwesomeSlider from 'react-awesome-slider';
import '../../Styles/Public/styles.css';
import { BiSupport, BiWorld, BiServer, BiCertification, BiQuestionMark } from "react-icons/bi";
import { Ri24HoursFill } from "react-icons/ri";
import { MdOutlineDomainVerification, MdPersonSearch } from "react-icons/md";
import { HiCog } from "react-icons/hi";
import { GiTechnoHeart } from "react-icons/gi";
import { TbZoomQuestion } from "react-icons/tb";
import '../../Styles/Public/Landing.scss'

const { Content, Sider } = Layout;
const { Title, Text, Paragraph } = Typography;

export default class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }


    componentDidMount() {
        this.props.updateCurrent('clientes');
    }

    menu = [
        {
            label: <Text><BiWorld style={{ position: "relative", top: 2 }} /> Web Hosting</Text>,
            key: 'webhosting',
        }, {
            label: <Text><BiServer style={{ position: "relative", top: 2 }} /> Servidor Dedicado</Text>,
            key: 'vps',
        }, {
            label: <Text><BiCertification style={{ position: "relative", top: 2 }} /> Póliza de Garantías</Text>,
            key: 'garantias',
        }, {
            label: <Text><BiQuestionMark style={{ position: "relative", top: 2 }} /> ¿Porque Nosotros?</Text>,
            key: 'nosotros',
        }, {
            label: <Text><Ri24HoursFill style={{ position: "relative", top: 2 }} /> Centro de Ayuda</Text>,
            key: 'ayuda',
        }, {
            label: <Text><MdOutlineDomainVerification style={{ position: "relative", top: 2 }} /> Dominios</Text>,
            key: 'dominios',
        }, {
            label: <Text><HiCog style={{ position: "relative", top: 2 }} /> Más Servicios</Text>,
            key: 'servicios',
        }, {
            label: <Text><GiTechnoHeart style={{ position: "relative", top: 2 }} /> Tecnología</Text>,
            key: 'tecnologia',
        }, {
            label: <Text><MdPersonSearch style={{ position: "relative", top: 2 }} /> Resellers</Text>,
            key: 'resellers',
        }, {
            label: <Text><TbZoomQuestion style={{ position: "relative", top: 2 }} /> Preguntas Frecuentes</Text>,
            key: 'faq',
        },
    ]

    clientes = [
        {
            img: "/clientes/amazon-2.svg",
            name: "Amazon",
            url: "https://aws.amazon.com/es/"
        }, {
            img: "/clientes/costco-wholesale.svg",
            name: "Costco",
            url: "https://www.costco.com/"
        },
        {
            img: "/clientes/facebook-5.svg",
            name: "Facebook",
            url: "https://www.facebook.com/"
        },
        {
            img: "/clientes/hyundai-automobiles-1.svg",
            name: "Hyundai",
            url: "https://www.hyundai.com/"
        },
        {
            img: "/clientes/imss-1.svg",
            name: "IMSS",
            url: "http://www.imss.gob.mx/"
        },
        {
            img: "/clientes/logo-grupo-bimbo.svg",
            name: "Grupo Bimbo",
            url: "https://www.grupobimbo.com/"
        },
        {
            img: "/clientes/microsoft.svg",
            name: "Microsoft",
            url: "https://www.microsoft.com/es-mx"
        },
        {
            img: "/clientes/tesla-9.svg",
            name: "Tesla",
            url: "https://www.tesla.com/"
        },
        {
            img: "/clientes/tidal-1.svg",
            name: "Tidal",
            url: "https://www.tidal.com/"
        },
        {
            img: "/clientes/twitter-6.svg",
            name: "Twitter",
            url: "https://twitter.com/"
        },
    ]

    techs = [
        {
            img: "/logos/CSCO.svg",
            name: "Cisco",
        }, {
            img: "/logos/JAVA.svg",
            name: "Java",
        },
        {
            img: "/logos/MYSQL.svg",
            name: "MySQL",
        },
        {
            img: "/logos/ORCL.svg",
            name: "Oracle",
        },
        {
            img: "/logos/PHP.svg",
            name: "PHP",
        },
        {
            img: "/logos/VISUAL.svg",
            name: "Visual Studio",
        },
        {
            img: "/logos/WORDPRESS.svg",
            name: "Wordpress",
        },
    ]


    render() {

        return (
            <Content>
                <AwesomeSlider bullets={false}>
                    <div style={{ backgroundImage: 'url(/slider/1.jpg)', backgroundSize: "cover" }}>
                        <Card size="small" actions={[<Button>Ver Mas</Button>]}>
                            <Row>
                                <Title level={5}>
                                    El mejor WEB Hosting por solo $60 MXN al mes
                                </Title>

                            </Row>
                            <Row>
                                <List>
                                    <List.Item>
                                        <Typography.Text>Dominios Ilimitados en el Hosting</Typography.Text>
                                    </List.Item>
                                    <List.Item>
                                        <Typography.Text>Espacio ilimitado</Typography.Text>
                                    </List.Item>
                                    <List.Item>
                                        <Typography.Text>Ilimitada transferencia de archivos</Typography.Text>
                                    </List.Item>
                                    <List.Item>
                                        <Typography.Text>Ilimitadas cuentas de correo</Typography.Text>
                                    </List.Item>
                                    <List.Item>
                                        <Typography.Text>Gratis un nombre de dominio por un año</Typography.Text>
                                    </List.Item>
                                </List>
                            </Row>
                        </Card>
                    </div>
                    <div style={{ backgroundImage: 'url(/slider/2.jpg)', backgroundSize: "cover" }}><Card actions={[<Button>Ver Mas</Button>]}>
                        <Row>
                            <Title level={5}>
                                El mejor WEB Hosting por solo $60 MXN al mes
                            </Title>

                        </Row>
                        <Row>
                            <List>
                                <List.Item>
                                    <Typography.Text>Dominios Ilimitados en el Hosting</Typography.Text>
                                </List.Item>
                                <List.Item>
                                    <Typography.Text>Espacio ilimitado</Typography.Text>
                                </List.Item>
                                <List.Item>
                                    <Typography.Text>Ilimitada transferencia de archivos</Typography.Text>
                                </List.Item>
                                <List.Item>
                                    <Typography.Text>Ilimitadas cuentas de correo</Typography.Text>
                                </List.Item>
                                <List.Item>
                                    <Typography.Text>Gratis un nombre de dominio por un año</Typography.Text>
                                </List.Item>
                            </List>
                        </Row>
                    </Card></div>
                    <div style={{ backgroundImage: 'url(/slider/3.jpg)', backgroundSize: "cover" }}><Card actions={[<Button>Ver Mas</Button>]}>
                        <Row>
                            <Title level={5}>
                                El mejor WEB Hosting por solo $60 MXN al mes
                            </Title>

                        </Row>
                        <Row>
                            <List>
                                <List.Item>
                                    <Typography.Text>Dominios Ilimitados en el Hosting</Typography.Text>
                                </List.Item>
                                <List.Item>
                                    <Typography.Text>Espacio ilimitado</Typography.Text>
                                </List.Item>
                                <List.Item>
                                    <Typography.Text>Ilimitada transferencia de archivos</Typography.Text>
                                </List.Item>
                                <List.Item>
                                    <Typography.Text>Ilimitadas cuentas de correo</Typography.Text>
                                </List.Item>
                                <List.Item>
                                    <Typography.Text>Gratis un nombre de dominio por un año</Typography.Text>
                                </List.Item>
                            </List>
                        </Row>
                    </Card></div>
                    <div style={{ backgroundImage: 'url(/slider/4.jpg)', backgroundSize: "cover" }}><Card actions={[<Button>Ver Mas</Button>]}>
                        <Row>
                            <Title level={5}>
                                El mejor WEB Hosting por solo $60 MXN al mes
                            </Title>

                        </Row>
                        <Row>
                            <List>
                                <List.Item>
                                    <Typography.Text>Dominios Ilimitados en el Hosting</Typography.Text>
                                </List.Item>
                                <List.Item>
                                    <Typography.Text>Espacio ilimitado</Typography.Text>
                                </List.Item>
                                <List.Item>
                                    <Typography.Text>Ilimitada transferencia de archivos</Typography.Text>
                                </List.Item>
                                <List.Item>
                                    <Typography.Text>Ilimitadas cuentas de correo</Typography.Text>
                                </List.Item>
                                <List.Item>
                                    <Typography.Text>Gratis un nombre de dominio por un año</Typography.Text>
                                </List.Item>
                            </List>
                        </Row>
                    </Card></div>
                </AwesomeSlider>
                <Layout>
                    <Sider width={350} breakpoint="lg" collapsedWidth="0" onCollapse={(collapsed, type) => this.setState({ collapsed: collapsed })} className="landing-sider pt-1 pb-1">
                        <Row align="middle" justify="center" className="support">
                            <BiSupport size={24} style={{ position: "relative", top: -3, right: 10 }} /><Title className="support" level={3}>24/7 Asistencia Técnica</Title>
                        </Row>
                        <Row justify="center" className="pt-1">
                            <Menu items={this.menu} className="menu-sider" />
                        </Row>
                        <Row justify="center">

                        </Row>
                    </Sider>
                    <Content className="pt-1">
                        <Row justify="center" className="m-1">
                            <Title level={2}>Nuestros Clientes</Title>
                        </Row>
                        
                        <Row>
                            <List
                                grid={{
                                    gutter: 16,
                                    xs: 2,
                                    sm: 3,
                                    md: 3,
                                    lg: 4,
                                    xl: 4,
                                    xxl: 4,
                                }}
                                size="small"
                                dataSource={this.clientes}
                                renderItem={item => (
                                    <List.Item>
                                        <a href={item.url} target="_blank" className="center"><img src={item.img} alt={item.name} className="width-100" style={{maxWidth:"100px"}} /></a>
                                    </List.Item>
                                )}
                            />
                        </Row>
                    </Content>
                    <Sider width={350} collapsed={this.state.collapsed} collapsedWidth="0" className="landing-sider">
                        <Row>
                            <Card className="m-1">
                                <Paragraph>
                                    La máxima calidad en hosting al mejor precio. Los planes incluyen todo el que necesitas. Mayor rendimiento y máxima seguridad para tu sitio Web.
                                </Paragraph>
                                <Paragraph>
                                    The Best Host te ofrece el más alto nivel de confiabilidad gracias a nuestra geo-redundancia: lo que significa que tu página web estará almacenada en dos centros de datos de alto rendimiento independientes localizados en distintos lugares.
                                </Paragraph>
                                <Paragraph>
                                    Si tienes alguna pregunta puedes ponerte en contacto con nosotros a:
                                </Paragraph>
                                <a href="mailto:help@thebesthost.com"><Title className="center" level={5}>help@thebesthost.com</Title></a>
                            </Card>
                        </Row>
                        <Row>
                            <List
                                grid={{
                                    gutter: 16,
                                    xs: 3,
                                    sm: 3,
                                    md: 3,
                                    lg: 3,
                                    xl: 3,
                                    xxl: 3,
                                }}
                                dataSource={this.techs}
                                renderItem={item => (
                                    <List.Item>
                                        <img src={item.img} alt={item.name} className="width-100" />
                                    </List.Item>
                                )}
                            />
                        </Row>

                    </Sider>
                </Layout>
            </Content>
        );
    }
}