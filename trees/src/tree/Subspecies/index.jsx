import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Input } from '../Input';

import './index.css'

export const Subspecies = ({ entity, findChildren, setSubspecies }) => {
  const [inputValue, setInputValue] = useState('')
  const children = findChildren(entity.id)
  
  const inputEnterHandler = (newSubspeciesValue) => {
    setSubspecies(prevState => [...prevState, {
      id: uuidv4(),
      title: newSubspeciesValue,
      parentId: entity.id
    }])
    
    setInputValue('')
  }
  
  return (
    <div className="subspecies">
      <div className="titleWrap">
        <div className="title">{entity.title}</div>
        <Input value={inputValue} onChange={setInputValue} onEnter={inputEnterHandler} />
      </div>
      {children.map(el => (
        <Subspecies
          entity={el}
          findChildren={findChildren}
          setSubspecies={setSubspecies}
          key={el.id}
        />
      ))}
    </div>
  )
}
