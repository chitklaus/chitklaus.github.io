import './card.css'

const Card = ({children, className}) => {
  return (
    <article className={`card ${className}`} >
        {children}
    </article>
  )
}

export default Card