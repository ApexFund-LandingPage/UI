import React from 'react'
import styled from 'styled-components'
import { ButtonGroup } from 'react-button-group-tis'
import 'react-button-group-tis/dist/index.css'
import './ButtonGroup.css'

const ButtonContainer = () => {


  return (
    <ButtonGroup
      //className='ButtonGroup'
      className="buttonGroup"
      items={['STAKE', 'UNSTAKE']}
      onItemClick={(index, item) => console.log(`"${item}" selected!`)}
      darkMode={true}
    />
  )
}

export default ButtonContainer