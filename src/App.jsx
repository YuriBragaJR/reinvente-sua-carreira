import Header from './components/Header';
import Hero from './components/Hero';
import Form from './components/Form';
import Footer from './components/Footer';
import About from './components/About';
import Persona from './components/Persona';
import Coments from './components/Coments';
import Resources from './components/Resources'; 
import Faq from './components/Faq';

function App() {
  return (
    <>
      <Header />
      <Hero /> 
      <Persona/>
      <Coments/>
      <Resources/>
      <About/>
      <Faq/>
      <Form />
      <Footer />
    </>
  );
}




export default App;