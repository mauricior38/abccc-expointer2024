import { Routes, Route } from "react-router-dom";

import Private from "./Private";

import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import ResetPassword from "@/pages/ResetPassword";
import Layout from "@/pages/layout.jsx";
import Home from "@/pages/Home";
import Agenda from "@/pages/Agenda";
import Noticias from "@/pages/Noticias";
import Noticia from "@/pages/Noticia";
import EventDetail from "@/pages/EventDetail";
import QuemSomos from "@/pages/QuemSomos";
import FaleConosco from "@/pages/FaleConosco";
import TermosDeUso from "@/pages/TermosDeUso";
import Cotacoes from "@/pages/Cotacoes";
import SobreEmpresa from "@/pages/SobreEmpresa";
import Profile from "@/pages/Profile";
import Dashboard from "@/pages/Dashboard";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticia/:id" element={<Noticia />} />
        <Route path="/evento/:id" element={<EventDetail />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/cotacoes" element={<Cotacoes />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/sobre-empresa" element={<SobreEmpresa />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route
        path="/dashboard"
        element={
          <Private>
            <Dashboard />
          </Private>
        }
      />

      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<Register />} />
      <Route path="/resetPassword" element={<ResetPassword />} />

      {/* <Route
        path="/dashboard/"
        element={
          <Private>
            <Dashboard />
          </Private>
        }
      >
        <Route path="/dashboard/home" element={<Home />} />
        <Route path="/dashboard/transmissoes" element={<Transmissoes />} />
        <Route path="/dashboard/transmissoes/:idEventDetail" element={<EventDetail />} /> 
        <Route path="/dashboard/transmissoes/evento/:idEventDetail/" element={<EventDetail />} /> 
        <Route path="/dashboard/transmissoes/sinal/:idTransmissao" element={<SignalDetail />} /> 
      </Route> */}
    </Routes>
  );
}

export default RoutesApp;
