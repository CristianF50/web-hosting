import React from "react";
import { Route, Routes } from "react-router-dom";

import RouterPublico from "./Routers/RouterPublico";
import RouterAdmin from "./Routers/RouterAdmin";

export default function rutas() {
    return (
        <Routes>
            <Route path="/*" element={<RouterPublico />} />
            <Route path="/admin/*" element={<RouterAdmin />} />"
        </Routes>
    )
}