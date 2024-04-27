
import Navbar from "./components/Navbar/Navbar"
import First from "./components/First/first";
import About from "./components/About/about";
import Projects from "./components/Projects/project";
import Conctact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
function App(){
  return (
    <div className='App'>
      <Navbar />
      <First />
      <About />
      <Projects/>
      <Conctact/>
      <Footer/>
    </div>
  )
}




export default App;
