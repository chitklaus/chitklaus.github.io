import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
      }, [])

  return (
    <header id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Throughout my academic journey, I have immersed myself in the world of technology, constantly seeking to expand my skill set and stay at the forefront of advancements. With a collaborative spirit and a drive to make a positive impact, I have engaged in personal projects, internships, and extracurricular activities to shape myself into a well-rounded professional. As I approach graduation, I am excited to embark on a rewarding career in software engineering, where I can leverage my expertise to create meaningful solutions and contribute to the ever-evolving world of technology, I'm always motivated to do more!
                </p>
                <p>
                I am Shing Chit Lee, a passionate and dedicated software engineering student with a thirst for knowledge and innovation.Check out my resume below!
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </header>
  )
}

export default About