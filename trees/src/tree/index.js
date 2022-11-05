import React, { useState, useEffect } from 'react';
import { Subspecies } from './Subspecies/index'
import data from './data.json'

import './index.css'

export default function Tree() {
  const subspecies = useState(data)
  
  return (
    <div className="tree">
      <div className="subspeciesWrap">
        {Object.entries(subspecies[0]).map(([key, value]) => (
          <Subspecies value={key} subValue={value} key={key}/>
        ))}
      </div>
    </div>
  )
}
