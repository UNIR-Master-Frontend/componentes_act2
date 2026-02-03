import "./styles.css";

import heroVideo from "../../assets/video/hero.mp4";
import unirImg from "../../assets/images/svg/unir.svg";
import kindleImg from "../../assets/images/svg/kindle.svg";
import cambrigeImg from "../../assets/images/svg/cambrige.svg";
import oxfordImg from "../../assets/images/svg/oxford.svg";
import scribdImg from "../../assets/images/svg/scribd.svg";

export default function Home() {
  return (
    <>
      <div className="overlay">
        <section className="hero">
          <h1 className="hero-title-mobile">
            Tu librería <span className="title-highlight">universitaria</span>{" "}
            con coworking y cafetería
          </h1>
          <h1 className="hero-title hero-title-desktop">
            Tu librería <span className="title-highlight">universitaria</span>{" "}
            con espacios de coworking y cafetería en Aranjuez
          </h1>
          <h2 className="hero-subtitle">
            Somos tu espacio universitario integral donde encontrarás textos
            académicos, zonas de estudio colaborativo y una cafetería pensada
            para estudiantes.
          </h2>
          <a href="/views/book-catalog/index.html">
            <button className="primary">Explorar catálogo</button>
          </a>
          <button className="secondary">
            <a href="#">Iniciar Sesión</a>
          </button>
          <video className="hero-video" autoPlay loop muted playsInline>
            <source src={heroVideo} type="video/mp4" />
            Tu navegador no soporta video.
          </video>
        </section>

        <section className="sponsor">
          <span className="sponsor-text">
            De la mano con nuestros patrocinadores
          </span>
          <div className="sponsor-brands">
            <img className="sponsor-brand" src={unirImg} alt="UNIR logo" />
            <img className="sponsor-brand" src={kindleImg} alt="Kindle logo" />
            <img
              className="sponsor-brand"
              src={cambrigeImg}
              alt="Cambridge logo"
            />
            <img className="sponsor-brand" src={oxfordImg} alt="Oxford logo" />
            <img className="sponsor-brand" src={scribdImg} alt="Scribd logo" />
          </div>
        </section>

        <section className="overview">
          <h2 className="overview-title">
            Todo para tu vida <span className="title-highlight">académica</span>
          </h2>
          <span className="subtitle">
            Somos tu espacio universitario integral donde encontrarás textos
            académicos, zonas de estudio colaborativo y una cafetería pensada
            para estudiantes.
          </span>

          <div className="cards">
            <div className="card">
              <div className="icon-card">
                <i className="icon-book"></i>
              </div>
              <div className="content">
                <span>3.000+</span>
                <p>Libros disponibles</p>
              </div>
            </div>

            <div className="card">
              <div className="icon-card">
                <i className="icon-happy"></i>
              </div>
              <div className="content">
                <span>1.500+</span>
                <p>Estudiantes felices</p>
              </div>
            </div>

            <div className="card">
              <div className="icon-card">
                <i className="icon-users"></i>
              </div>
              <div className="content">
                <span>8</span>
                <p>Espacios Coworking</p>
              </div>
            </div>

            <div className="card">
              <div className="icon-card">
                <i className="icon-mug"></i>
              </div>
              <div className="content">
                <span>3</span>
                <p>Cafeterías disponibles</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <h2>Comienza tu experiencia Nexus</h2>
          <span>
            Únete a más de 1.500 estudiantes que ya confían en Nexus para sus
            materiales de estudio y espacios de trabajo.
          </span>
          <a href="/views/book-catalog/index.html">
            <button className="primary-white">Explorar catálogo</button>
          </a>
          <button className="secondary-white">
            <a href="#">Iniciar Sesión</a>
          </button>
        </section>
      </div>
    </>
  );
}
