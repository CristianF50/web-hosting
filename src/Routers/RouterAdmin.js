
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Header from '../Components/Public/Header';
import Footer from '../Components/Public/Footer';

import Sidebar from '../Components/Admin/Sidebar';
import Usuarios from '../Components/Admin/Usuarios';
import Servicios from '../Components/Admin/Servicios';
import Sugerencia from "../Components/Admin/Sugerencia";
// componentes
//import Landing from "../components/Public/index";

function PublicRouter() {

    


    return (
        <Layout style={{minHeight:"100vh", minWidth:"100vw"}} className="width-100">
           <Sidebar/>
            <Routes className="width-100">
                <Route path="/usuarios" element={<Usuarios/>} />
                <Route path="/servicios" element={<Servicios/>} />
                <Route path="/sugerencias" element={<Sugerencia/>} />
                <Route path="" element={<div/>} />
                
            </Routes>
            
        </Layout>
    );
}

export default PublicRouter;