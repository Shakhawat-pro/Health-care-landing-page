import './App.css'
import Banner from './components/Hero/Banner'
import NavBar from './components/NavBar/NavBar'
import Status from './components/Status/Status'

function App() {

  return (
    <div className='bg-[#FBFBFB] h-full  inter'>
      <div className='bgGrid2 pb-20'>
        <NavBar></NavBar>
        <Banner></Banner>
      </div>
        <Status></Status>
    </div>
  )
}

export default App
