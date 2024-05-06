import React from 'react';
import './Contato.css';

function Contato() {
  return (
    <div className="contato-container">
      <h2 className="contato-title">Entre em Contato</h2>
      <form className="contato-form">
        <div className="contato-input-container">
          <input type="text" placeholder="Nome" className="contato-input" />
        </div>
        <div className="contato-input-container">
          <input type="email" placeholder="Email" className="contato-input" />
        </div>
        <div className="contato-input-container">
          <textarea placeholder="Mensagem" className="contato-textarea" />
        </div>
        <button type="submit" className="contato-button">Enviar Mensagem</button>
      </form>
    </div>
  );
}

export default Contato;
