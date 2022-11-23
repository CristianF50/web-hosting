import React, { Component } from "react";
import { Card, Layout, Row, Col, Typography, List, Button, Menu } from "antd";
import axios from "axios";
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
            servicios: [],
        }
    }

    

    componentDidMount() {
        this.props.updateCurrent('compania');
        console.log(process.env.REACT_APP_API_URL);
        axios.get(`${process.env.REACT_APP_API_URL}/servicios/landing`).then(res => {
            console.log(res.data.data);
            this.setState({servicios: res.data.data});
        })
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

    productos = [
        {
            nombre: "Starter",
            precio: "$ 250",
            caracteristicas: [
                "Espacio en disco: 10 GB",
                "Registro de dominio",
                "Configuracion instantanea",
                "Transferencia ilimitada",
            ],
            url: "https://www.hosting.com.mx/planes/starter",
        }, {
            nombre: "Basico",
            precio: "$ 455",
            caracteristicas: [
                "Espacio en disco: 100 GB",
                "Incluye 1 dominio gratis",
                "Configuracion instantanea",
                "Transferencia ilimitada",
                "Más de 140 aplicaciones",
                "Site Builder con plantillas",
            ],
            url: "https://www.hosting.com.mx/planes/basico",
        }, {
            nombre: "No Limite",
            precio: "$ 799",
            caracteristicas: [
                "Espacio en disco: Ilimitado",
                "Registro de dominio",
                "Configuracion instantanea",
                "Transferencia ilimitada",
                "Más de 140 aplicaciones",
                "Site Builder con plantillas",
                "Bases de datos mysql ilimitadas",
                "Cuentas de correo ilimitadas",
            ],
            url: "https://www.hosting.com.mx/planes/sin-limite",
        }, {
            nombre: "Avanzado",
            precio: "$ 1039",
            caracteristicas: [
                "Soporte de expertos en Apps",
                "Espacio en disco: Ilimitado",
                "Incluye 1 dominio gratis",
                "2GB de memoria RAM gaantizados",
                "Transferencia ilimitada",
                "Más de 140 aplicaciones",
                "Site Builder con plantillas",
                "Bases de datos mysql ilimitadas",
                "Cuentas de correo ilimitadas",
            ],
            url: "https://www.hosting.com.mx/planes/avanzado",
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
                            <Title level={2}>Máximo rendimiento y flexibilidad para tus proyectos Web</Title>
                        </Row>
                        <Row justify="center">
                            <Title level={3}>¡Aprovecha nuestras ofertas de por vida!</Title>
                        </Row>
                        <Row>
                            <List
                                grid={{
                                    gutter: 16,
                                    xs: 1,
                                    sm: 1,
                                    md: 1,
                                    lg: 1,
                                    xl: 1,
                                    xxl: 2,
                                }}
                                size="small"
                                dataSource={this.state.servicios}
                                renderItem={item => (
                                    <List.Item>
                                        <Card className="card-producto" size="small" actions={[<Button type="primary">Detalles</Button>]}>
                                            <Row justify="center">
                                                <Title level={4}>{item.nombre}</Title>
                                            </Row>
                                            <Row justify="center">
                                                <Title level={5}>{item.precio} / año</Title>
                                            </Row>
                                            <Row justify="center">
                                                <List
                                                    dataSource={item.caracteristicas}
                                                    renderItem={item => (
                                                        <List.Item>
                                                            <Typography.Text>{item}</Typography.Text>
                                                        </List.Item>
                                                    )}
                                                />
                                            </Row>
                                        </Card>
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