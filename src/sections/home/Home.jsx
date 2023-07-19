import './home.css'
import { useEffect } from 'react'
import HeaderImage from '../../assets/me.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    AOS.init({duration: 2500})
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
      <h3>Hello, I'm</h3>
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3  data-aos="fade-up">Shing Chit Lee</h3>
        <p  data-aos="fade-up">
        A college student who love coding in Javascript with ReactJS. 
        </p>
        <div className="header__cta">
          <Link to="/contact" className='btn primary'>Let's Talk</Link>
          <Link to="/testimonials" className='btn light'>My Work</Link>
        </div>
        <div className="header__socials">
          {
            data.map(data => <a key={data.id} href={data.link} target="_blank" rel="noopener noreferrer">{data.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Home

