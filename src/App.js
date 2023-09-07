import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import metaimg from '../src/Logo.svg';


function App() {
  return (
      <> 
     <meta name="description" content="Little Lemon Restaurant Webpage"/>
     <meta name="og:title" content="Little Lemon Restaurant"/>
     <meta name="og:description" content=""/>
     <meta name="og:image" content={metaimg}/>
     
      <Header/>
      <Nav/>
      <Main/> 
      <Footer/>

      
    
      </>
      
  );
}

export default App;
