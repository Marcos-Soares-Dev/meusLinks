
import specialistPhoto from "../assets/edi.jpg";
import Button from "../components/Button";
import bgVideo from "../assets/videoBackground.mp4"; // Importando o vídeo
import { FaBriefcase, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Root() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center gap-4 text-white overflow-hidden">
      
      
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>

      
      <div className="relative z-10">
        <PerfilCard 
          imageUrl={specialistPhoto} 
          specialistName="Marcos Soares" 
          specialty="Front End Developer" 
          description="Estudante de programação☕
          Apaixonado por tecnologia e inovação,
          Transformando ideias em código🚀"
          location="Fortaleza - CE"
        >
          <Button urlLink={"https://github.com/Marcos-Soares-Dev"} >
          <FaLinkedin />
          Linkedin
          </Button>

          <Button urlLink={"https://github.com/Marcos-Soares-Dev"} >
          <FaBriefcase />
          Portfólio 
          </Button>

          <Button urlLink={"https://github.com/Marcos-Soares-Dev"} >
          <FaGithub />
          GitHub
          </Button>
        </PerfilCard>
      </div>

    </section>
  );
}
