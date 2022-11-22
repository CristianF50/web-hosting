
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Header from '../Components/Public/Header';
import Footer from '../Components/Public/Footer';

import Sidebar from '../Components/Admin/Sidebar';
import Usuarios from '../Components/Admin/Usuarios';
// componentes
//import Landing from "../components/Public/index";

function PublicRouter() {

    


    return (
        <Layout style={{minHeight:"100vh"}}>
           <Sidebar/>
            <Routes>
                <Route path="/admin" element={<div/>} />
                <Route path="/admin/usuarios/*" element={<Usuarios/>} />
            </Routes>
            
        </Layout>
    );
}

export default PublicRouter;