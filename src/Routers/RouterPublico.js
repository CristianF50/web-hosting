
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Header from '../Components/Public/Header';
import Footer from '../Components/Public/Footer';
import Landing from "../Components/Public/Landing";
import Clientes from "../Components/Public/Clientes";
// componentes
//import Landing from "../components/Public/index";

function PublicRouter() {

    const [current, setCurrent] = React.useState('compania');


    return (
        <Layout>
            <Header current={current} updateCurrent={(nuevo) => {setCurrent(nuevo)}}/>
            <Routes>
                <Route path="" element={<Landing updateCurrent={(nuevo => setCurrent(nuevo))} />} />
                <Route path="/clientes" element={<Clientes updateCurrent={(nuevo => setCurrent(nuevo))} />} />
            </Routes>
            <Footer/>
        </Layout>
    );
}

export default PublicRouter;