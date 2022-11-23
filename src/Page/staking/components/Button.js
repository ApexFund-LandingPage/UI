import React from 'react'
import styled from 'styled-components'
import { ButtonGroup } from 'react-button-group-tis'
import 'react-button-group-tis/dist/index.css'
import './ButtonGroup.css'

const ButtonContainer = ({onStakeModeEnabled}) => {


  return (
    <ButtonGroup
      //className='ButtonGroup'
      className="buttonGroup"
      items={['STAKE', 'UNSTAKE']}
      onItemClick={(index, item) => {
        onStakeModeEnabled(index==0)
      }}
      darkMode={true}
    />
  )
}

export default ButtonContainer