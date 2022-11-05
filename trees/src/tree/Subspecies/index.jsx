import './index.css'

export const Subspecies = ({ value, subValue }) => {
  return <div className="subspecies">
    {value}
    {Object.entries(subValue).map(([key, value]) => (
      <Subspecies value={key} subValue={value} key={key} />
    ))}
  </div>
}
