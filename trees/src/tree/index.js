import React, {useState, useCallback} from 'react';

import { Subspecies } from './Subspecies/index'
import data from './data.json'

import './index.css'

export default function Tree() {
  const [subspecies, setSubspecies] = useState(data)
  
  const findChildren = useCallback((id) => {
    const children = []
  
    // TODO: optimize it by creating cache for results
    subspecies.forEach(el => {
      if (el.parentId === id) {
        children.push(el)
      }
    })
    
    return children
  }, [subspecies])
  
  return (
    <div className="tree">
      <div className="subspeciesWrap">
        <Subspecies entity={subspecies[0]} findChildren={findChildren} setSubspecies={setSubspecies} />
      </div>
    </div>
  )
}
