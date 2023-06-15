
import './Home.css'


function Home() {

  return (
    <div id='Home'>
      <NabBar />
      <Hero />
      <FeatureProducts />
      <ContactUs />
      <Footer />
    </div>
  )
}

export function NabBar() {
  return (
    <div className='NabBar'>
      
    </div>
  )
}

export function Hero() {
  return (
    <div className='panel Hero'>
      
    </div>
  )
}

export function FeatureProducts() {
  return (
    <div className='panel FeatureProducts'>
      
    </div>
  )
}

export function ContactUs() {
  return (
    <div className='panel ContactUs'>
      
    </div>
  )
}

export function Footer() {
  return (
    <div className='panel Footer'>
      
    </div>
  )
}


export default Home
