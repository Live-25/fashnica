import TitleSection from './components/TitleSection';
import './App.css';
import Navbar from './components/Navbar';
import Roundcards from './components/Roundcards';
import Content from './components/Content';
import Download from './components/Download';
import Whoarewe from './components/Whoarewe';
import Follow from './components/Follow';
import Copyright from './components/Copyright';

function App() {
  return (
    <div>
      <Navbar />
      <TitleSection title="Treat yourself with better things..." className="color-dark"  />
      <div class="inline-element">
        <Roundcards name="Skin" />
        <Roundcards name="Hair" />
        <Roundcards name="Makeup" />     
        <Roundcards name="Accessories" />
      </div>
      <div className='content-sec color-lght'>
      <Content 
       name="Skincare"
       content="Fusce ac ultricies nisl, eu accumsan enim. Cras vitae augue libero. Nam est sapien, lobortis sit
       amet augue eget, tempus sodales tellus. Nulla tristique massa id tempor pharetra. Nulla varius
       bibendum nulla.<br> Fusce ac ultricies nisl, eu accumsan enim. Cras vitae augue libero. Nam est sapien, lobortis sit
       amet augue eget, tempus sodales tellus. Nulla tristique massa id tempor pharetra. Nulla varius
       bibendum nulla."
      />
      <Content 
       name="Hair CARE"
       content="Fusce ac ultricies nisl, eu accumsan enim. Cras vitae augue libero. Nam est sapien, lobortis sit
       amet augue eget, tempus sodales tellus. Nulla tristique massa id tempor pharetra. Nulla varius
       bibendum nulla.
       Fusce ac ultricies nisl, eu accumsan enim. Cras vitae augue libero. Nam est sapien, lobortis sit
       amet augue eget, tempus sodales tellus. Nulla tristique massa id tempor pharetra. Nulla varius
       bibendum nulla. "
      />      
       <Content 
       name="Accesories"
       content="Fusce ac ultricies nisl, eu accumsan enim. Cras vitae augue libero. Nam est sapien, lobortis sit
       amet augue eget, tempus sodales tellus. Nulla tristique massa id tempor pharetra. Nulla varius
       bibendum nulla."
      />      
      </div>
      <Download /> 
      <Whoarewe />
      <Follow />
      <TitleSection title="Reinventing Skincare !!" className="color-lght" content="Let your skin breathe.." />
      <Copyright />
    </div>
    
  );
}

export default App;
