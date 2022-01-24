import './ZodiacCard.css'

export default function ZodiacCard(props) {
  {/* in this component,  use the `name` and `dates` props to render the name and dates of the sign, as well as load the correct image  from the public directory */}

  return (
    <div className='zodiac-card'>
      <img alt={props.name} src={`/images/${props.name}.png`} />
      <span className='name'>{props.name}</span>
      <span>{props.dates}</span>
    </div>
  )
}
