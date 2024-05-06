import React from 'react';
import './Home.css';
import bannerImage from './banner.jpg';
import serviceImage1 from './service1.jpg';
import serviceImage2 from './service2.jpg';
import serviceImage3 from './service3.jpg';

function Home() {
  return (
    <div className="home-container">
      <section className="banner-section">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <div className="banner-content">
          <h1>Academia Fitness</h1>
          <p>Seja bem-vindo à Academia Fitness, o seu espaço dedicado ao bem-estar e qualidade de vida!</p>
        </div>
      </section>

      <section className="texto-section">
        <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Sobre Nós</h2>
        <p style={{ fontSize: '20px', lineHeight: '1.5' }}>
          A Academia Fitness é mais do que um local para treinar. Aqui, promovemos um estilo de vida saudável, oferecendo não apenas equipamentos de última geração, mas também uma comunidade acolhedora e motivadora.
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.5' }}>
          Nossos instrutores altamente qualificados estão aqui para ajudá-lo a atingir seus objetivos de forma segura e eficaz. Seja qual for o seu nível de condicionamento físico, estamos aqui para apoiá-lo em sua jornada para uma vida mais ativa e saudável.
        </p>
        <p style={{ fontSize: '20px', lineHeight: '1.5' }}>
          Além disso, nossa variedade de aulas de grupo oferece opções para todos os gostos e níveis de habilidade. De aulas de spinning energizantes a sessões relaxantes de ioga, há algo para todos na Academia Fitness.
        </p>
      </section>

      <section className="servicos-section">
        <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Serviços em Destaque</h2>
        <div className="servicos">
          <div className="service">
            <img src={serviceImage1} alt="Service 1" />
            <p style={{ fontSize: '24px' }}>Personal Trainer</p>
          </div>
          <div className="service">
            <img src={serviceImage2} alt="Service 2" />
            <p style={{ fontSize: '24px' }}>Aulas de Grupo</p>
          </div>
          <div className="service">
            <img src={serviceImage3} alt="Service 3" />
            <p style={{ fontSize: '24px' }}>Equipamentos Modernos</p>
          </div>
        </div>
      </section>

      <section className="depoimentos-section">
        <h2>Depoimentos de Clientes</h2>
        <div className="depoimentos">
          <div className="depoimento">
            <p>"Excelente academia! Me sinto muito motivado e os instrutores são ótimos."</p>
            <p>- João Silva</p>
          </div>
          <div className="depoimento">
            <p>"A academia possui equipamentos modernos e um ambiente agradável. Recomendo!"</p>
            <p>- Maria Oliveira</p>
          </div>
          <div className="depoimento">
            <p>"As aulas de grupo são incríveis! Me divirto enquanto treino."</p>
            <p>- Carlos Souza</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
