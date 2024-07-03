import './App.css'
import Faq from './components/Faq/Faq'
import Banner from './components/Hero/Banner'
import NavBar from './components/NavBar/NavBar'
import Service from './components/Service/Service'
import Status from './components/Status/Status'
import Testimonial from './components/Testimonial/Testimonial'
import WhoAreWe from './components/WhoAreWe/WhoAreWe'

function App() {

  return (
    <div className='bg-[#FBFBFB] h-full  inter'>
      <div className='bgGrid2 pb-20'>
        <NavBar></NavBar>
        <Banner></Banner>
      </div>
        <Status ></Status>
        <WhoAreWe></WhoAreWe>
        <Service></Service>
        <Testimonial></Testimonial>
        <Faq></Faq>
    </div>
  )
}

export default App
