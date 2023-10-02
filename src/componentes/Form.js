import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cookies from 'js-cookie';

import CamposForm from './CamposForm';
import ButtonEntrar from './ButtonEntrar';

export default function Form() {
  return (
    <Router>
      <Routes>
        <Route path="/academia-do-jao" element={<LoginForm/>} />
        <Route path="/recuperar" element={<RecuperarForm/>} />
      </Routes>
    </Router>
  );
}

function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    Cookies.set('username', username, { expires: 1 });
    Cookies.set('password', password, { expires: 1 });
  };

  return (
    <form action="/login" method="POST" onSubmit={handleSubmit}>
      <CamposForm id="username" label="Nome de usuário:" type="text" placeholder="Digite seu nome de usuário" />
      <CamposForm id="password" label="Senha:" type="password" placeholder="Digite sua senha" />
      <div className="container-auxi">
      <button className="botao-customizado" onClick={() => window.location.href = '/recuperar'}>Entrar</button>

      </div>
    </form>
  );
}

function RecuperarForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form action="/recuperar" method="POST" onSubmit={handleSubmit}>
      <h2 className='bemvindo'>SEJA BEM VINDO</h2>
      <div className="container-auxi">
      <button className="botao-customizado" onClick={() => window.location.href = '/academia-do-jao'}>Sair</button>

      </div>
    </form>
  );
}
