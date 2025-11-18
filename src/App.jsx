import Header from './components/Header';
import Hero from './components/Hero';
import Accordion from './components/Accordion';
import Form from './components/Form';
import Footer from './components/Footer';
import About from './components/About';
import Carousel from './components/Carousel';
import Resources from './components/Resources'; 

function App() {
  return (
    <>
      <Header />
      <Hero /> 
      <About/>
      <Carousel/>
      <Resources/>
      <section id="faq">
        <h2>Perguntas Frequentes</h2>
        <Accordion question="Como começar a transição?" answer="Busque cursos introdutórios e mentoria." />
        <Accordion question="Preciso de experiência prévia?" answer="Não. Muitas áreas aceitam iniciantes com portfólio." />
      </section>
      <Form />
      <Footer />
    </>
  );
}




export default App;