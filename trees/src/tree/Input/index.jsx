export const Input = ({ value, onChange, onEnter }) => {
  const onKeyUpHandler = (e) => {
    if (e.code === 'Enter' && value.length > 0) {
      onEnter(value)
    }
  }
  
  return <input type="text" value={value} onChange={e => onChange(e.target.value)} onKeyUp={onKeyUpHandler} />
}
