import React,{useState, useEffect, useRef } from 'react'
import './Navbar.css';
import styled from 'styled-components';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import logo from './logo.png'

const Link2 = styled(Link)`
  display: flex;
  margin: 0;
  align-items: center;
  text-decoration: none;
  color: #FFF;
  cursor: pointer;
`;

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  const navItem = {
    home : false,
    fund : false,
    whyUs : false,
    media : false,
    default : true,
  }
  const [navbar, setNavbar] = useState(false)
  const [active, isActive] = useState(navItem);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })  

    return (
      <nav className={navbar ?  "navActiveLight": "nav"} >
        <div>
          <Link to="/" spy={true} smooth={true} 
            onClick={()=> isActive({...navItem})}
          ><img src={logo} alt="Logo" className="Logo"/></Link>
        </div>
        <div className='RightContainer'>
          <div className='PC'>
            <ul className="list">

              <Link2 to="/" 
                onClick={()=> isActive({...navItem, home: true})}
                style={{
                height:'6rem',padding:'0 2rem',
                color: active.home || active.default ? '#000' : null
              }}
              >
                Home
              </Link2>

              <Link2 to="/" 
                onClick={()=> isActive({...navItem,fund: true, default: false})}
                style={{
                height:'6rem',padding:'0 2rem',
                color: active.fund ? '#000' : null
              }}
              >
                ApexPrime
              </Link2>  

              <Link2 to="/"
                onClick={()=> isActive({...navItem, whyUs: true, default: false})}
                style={{
                height:'6rem',padding:'0 2rem',
                color: active.whyUs ? '#000' : null
               }}
              >
                Why Us
              </Link2>

              <Link2 to="/" 
                onClick={()=> isActive({...navItem, media: true, default: false})}
                style={{
                height:'6rem',padding:'0 2rem',
                color: active.media ? '#000' : null
              }}
              >
                Media
              </Link2> 

            </ul> 
          </div>

          <div className='PC'>
            <Button Border noBg height="3.5rem" 
              Text="Download App" br="2rem"
            />
          </div>
            
          <div className='Mobile' ref={node}>
            <FocusLock disabled={!open}>
              <Burger  open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>
        </div>
      </nav>   
    )
}

export default Navbar
