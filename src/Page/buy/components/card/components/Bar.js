import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import Text from '../../../../../components/Text/Text'
import { Flex } from '../../Flex';

const Bar = ({maxTokens,tokensSold}) => {
  return (
    <div style={{width:'90%'}} >
        <ProgressBar isLabelVisible={false} completed={tokensSold/maxTokens*100} 
            height="10px" bgColor='linear-gradient(107.64deg, #58A0D7 9.69%, #5E8CC9 29.52%, #6166AE 66.23%, #6C53A3 90.7%)'
            baseBgColor="#303030"
        />
        <Flex style={{justifyContent:'center',margin:'0.75rem 0 0 0'}}>
            <Text Text={tokensSold} fw="bolder"/>
            <Text Text="of" m="0 0.5rem"/>
            <Text Text={maxTokens} fw="bold"/>
            <Text Text="$HBT available" m='0 0 0 0.5rem' />
        </Flex>
    </div>
  )
}

export default Bar