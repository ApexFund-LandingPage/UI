import React,{ useState } from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Button from '../../../Button/Button'

const MenuItems = styled.div`
  display: grid;
  place-items: center;
  margin-top: 5rem;
`

const Link1 = styled(Link)`
    display: flex;
    margin: 0 2rem;
    align-items: center;
    text-decoration: none;
    color: #FFF;
    position: absolute;
    left: 2rem;
    top: 1rem;
    width: 3rem;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 2rem 0;
    align-items: center;
`;

const T = styled.p`
    color: #FFF;
    font-weight: 500;
    font-size: 16px;
    margin-top: 1rem;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
      }
`;

const H = styled(Link)`
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
    font-family: 'Montserrat', sans-serif;
      color: #000;
`;

const Menu = ({ open, setOpen,...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;


  return (
    <StyledMenu open={open}  aria-hidden={!isHidden} {...props}  >
      <Link1 to="home" spy={true} smooth={true}><img src="../../logo.svg" alt="Logo" style={{width:"3rem",height:"3rem"}}/></Link1>

      <MenuItems >
        <H to="/" onClick={()=> setOpen(false)}>HOME</H> 
        <H to="/" onClick={()=> setOpen(false)}>BUY HBT</H>
        <H to="/claim" onClick={()=> setOpen(false)}>CLAIM HBT</H>
        <H to="/referal" onClick={()=> setOpen(false)}>REFERRAL</H> 
        <H to="/lending" onClick={()=> setOpen(false)}>LENDING</H> 
        <H to="/stake" onClick={()=> setOpen(false)}>STAKING</H> 
        <Button nav height="2.75rem" Text="CONNECT WALLET" Inheight="2.5rem" m="1rem 0 0 0"/>
      </MenuItems>

    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
