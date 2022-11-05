import React, { useState, useEffect } from 'react';
import { Subspecies } from './Subspecies/index'

import './index.css'

export default function Tree() {
  return (
    <div className="tree">
      <div className="subspeciesWrap">
        <Subspecies>
          mammals
          <Subspecies>cheetah</Subspecies>
          <Subspecies>
            bear
            <Subspecies>lion</Subspecies>
            <Subspecies>
              dog
              <Subspecies>elephant</Subspecies>
            </Subspecies>
          </Subspecies>
          <Subspecies>ape</Subspecies>
        </Subspecies>
      </div>
    </div>
  )
}
