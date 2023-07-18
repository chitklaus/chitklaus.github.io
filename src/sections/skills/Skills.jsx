import Card from '../../components/Card'
import data from './data'
import './skills.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  
  return (
    <header id="skills">
      <h2>Skills</h2>
      <div className="container services__container" data-aos="fade-up">
        {
          data.map(item => (
            <Card key={item.id} className="service light">
              <div className="service__icon">{item.icon}</div>
              <div className="service__details">
                <h4>{item.title}</h4>
                  <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </header>
  )
}

export default Services