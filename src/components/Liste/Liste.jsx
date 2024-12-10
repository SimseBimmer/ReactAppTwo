import './Liste.scss'

export function Liste({ titel, items }) {
  return (
    <div className="liste">
      <h2>{titel}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
