import {links, socials} from './data'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <ul className='nav__menu'>
          {
            links.map(fLink => <li key={fLink.id}><Link to={fLink.link}>{fLink.title}</Link></li>)
          }
        </ul>
        <div className="footer__socials">
          {
            socials.map(social => <Link key={social.id} to={social.link} target="_blank" rel="noopener noreferrer">{social.icon}</Link>)
          }
        </div>
      </div>
      <div className="footer__copyright">
        
      </div>
    </footer>
  )
}

export default Footer