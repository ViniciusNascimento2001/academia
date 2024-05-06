// Sobre.js
import React from 'react';
import academiaImage3 from './academia-image3.jpg';
import './Sobre.css';

function Sobre() {
  return (
    <div className="sobre-container">
      <h2 className="sobre-title">Sobre Nós</h2>
      <p className="sobre-description">
        A Academia Fitness é mais do que apenas um lugar para se exercitar. Somos uma comunidade comprometida com o seu bem-estar e sucesso. Com uma equipe de profissionais apaixonados e instalações de última geração, estamos aqui para ajudá-lo a alcançar seus objetivos de saúde e fitness.
      </p>
      <p>
        Nossa missão é proporcionar a você uma experiência de academia única, onde você se sinta motivado, energizado e capacitado a cada visita. Oferecemos uma ampla variedade de programas de treinamento, desde cardio e musculação até aulas de grupo e treinamento personalizado, para atender às suas necessidades e preferências individuais.
      </p>
      <p>
        Além disso, acreditamos na importância de uma abordagem holística para o fitness, que inclui não apenas exercícios físicos, mas também nutrição adequada e bem-estar mental. Nossos treinadores e nutricionistas estão aqui para orientá-lo em todas as áreas do seu bem-estar, para que você possa alcançar resultados duradouros e sustentáveis.
      </p>
      <p>
        Venha se juntar a nós na Academia Fitness e faça parte de uma comunidade comprometida com o seu sucesso. Estamos ansiosos para ajudá-lo em sua jornada de saúde e fitness!
      </p>
      <div className="image-container">
        <img src={academiaImage3} alt="Academia Fitness" className="sobre-image" />
      </div>
    </div>
  );
}

export default Sobre;
