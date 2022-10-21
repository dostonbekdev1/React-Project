import Navbar from './Navbar/Navbar';
import Corusel from './Corusel/Corusel';
import Cards from './Cards/Cards';
import Main from './Main/Main';
import Collections from './Collections/Collections'; 
import Blog from './Blog/Blog'
import Youtube from '../src/Youtube/Youtube'
import Footer from './Footer/Footer';
function App() {
    return (
      <>
        <Navbar/>
        <Corusel/>
        <Blog btn='Start Your Business' title='Grow your benefit with a building designed for sale'/>
        <Collections/>
        <Main/>
        <Cards/>
        <Youtube/>
        <Blog btn='Contact  Us' title='Extend your money with a building designed for Life'/>
        <Footer/>
      </>
    );
}

export default App;
