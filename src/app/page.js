import Logo from "./components/Logo.js";

const Home = () => {
  return (
    <section className="w-full lg:w-3/4 z-10">
      <div className="lg:px-12 pb-9">
        <h1 className="text-2xl pb-2 lg:pb-6">Sobre mí</h1>
        <p className="text-lg">
          Profesionalizando mis habilidades desarrollador web autodidacta, con una fuerte pasión 
          por crear interfaces atractivas y funcionales. 
          Disfruto del trabajo en equipo, 
          brindando apoyo y orientación para alcanzar objetivos comunes. Comprometido con el autodesarrollo y el profesionalismo,
          siempre busco nuevos desafíos que me permitan crecer tanto personal como profesionalmente. {" "}
          <br />
          ¡Contactame para conversar sobre tecnología y oportunidades
          profesionales!
        </p>
      </div>
      <div className="lg:px-12">
        <h2 className="text-2xl pb-3">Tecnologías</h2>
        <div className="w-full flex justify-evenly flex-wrap gap-4">
          <Logo icon="icon-[logos--html-5]" tooltipText="HTML5" />
          <Logo icon="icon-[logos--css-3]" tooltipText="CSS3" />
          <Logo icon="icon-[logos--sass]" tooltipText="SASS" />
          <Logo icon="icon-[logos--c-sharp]" tooltipText="C#" />
          <Logo icon="icon-[logos--mysql-icon]" tooltipText="MySQL" />

          <Logo icon="icon-[logos--docker]" tooltipText="Docker" />
          <Logo icon="icon-[logos--flutter]" tooltipText="Flutter" />
          <Logo icon="icon-[logos--javascript]" tooltipText="JavaScript" />
          <Logo icon="icon-[logos--typescript-icon]" tooltipText="TypeScript" />
          <Logo icon="icon-[logos--react]" tooltipText="ReactJS" />
          <Logo icon="icon-[logos--nodejs-icon]" tooltipText="NodeJS" />
          <Logo icon="icon-[logos--express] invert" tooltipText="ExpressJS" />
          <Logo icon="icon-[logos--git-icon]" tooltipText="Git" />
          <Logo icon="icon-[logos--mongodb-icon]" tooltipText="MongoDB" />
        </div>
      </div>
    </section>
  );
};

export default Home;
