import React from 'react';
import './Servicos.css';
import servicoImage1 from './servico-image1.jpg';
import servicoImage2 from './servico-image2.jpg';
import servicoImage3 from './servico-image3.jpg';

function Servicos() {
  return (
    <div className="servicos-container">
      <h2 className="servicos-title">Nossos Serviços</h2>
      <div className="servico">
        <img src={servicoImage1} alt="Serviço 1" className="servico-image" />
        <div className="servico-info">
          <h3>Serviço de Treinamento Personalizado</h3>
          <p>
            Nosso serviço de treinamento personalizado oferece programas de exercícios adaptados às suas necessidades individuais e objetivos de condicionamento físico. Nossos treinadores certificados trabalharão com você para criar um plano de treinamento eficaz e motivador. Seja para perda de peso, ganho de massa muscular ou melhoria da saúde geral, estamos aqui para ajudar você a alcançar seus objetivos.
          </p>
        </div>
      </div>
      <div className="servico">
        <img src={servicoImage2} alt="Serviço 2" className="servico-image" />
        <div className="servico-info">
          <h3>Aulas de Grupo Dinâmicas</h3>
          <p>
            Nossas aulas de grupo são projetadas para manter você motivado e desafiado enquanto se diverte. De yoga a treinamento funcional, oferecemos uma variedade de opções para atender às suas necessidades e interesses. Com instrutores experientes e uma atmosfera acolhedora, nossas aulas de grupo são perfeitas para todos os níveis de condicionamento físico.
          </p>
        </div>
      </div>
      <div className="servico">
        <img src={servicoImage3} alt="Serviço 3" className="servico-image" />
        <div className="servico-info">
          <h3>Programas de Nutrição Personalizados</h3>
          <p>
            Nossa equipe de nutricionistas oferece orientação especializada para ajudá-lo a alcançar seus objetivos de saúde e fitness. Desenvolvemos planos de alimentação personalizados adaptados às suas preferências alimentares, restrições dietéticas e metas nutricionais. Seja qual for o seu objetivo - perda de peso, ganho de massa muscular ou melhoria da saúde geral - podemos ajudá-lo a criar um plano de nutrição sustentável e eficaz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Servicos;
