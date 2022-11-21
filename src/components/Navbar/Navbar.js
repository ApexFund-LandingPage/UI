import React,{useState, useEffect, useRef } from 'react'
import './Navbar.css';
import styled from 'styled-components';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import logo from './logo.svg'
import Heading from '../Heading/Heading';

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
    buy : false,
    claim : false,
    referal : false,
    lending : false,
    staking : false, 
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
            onClick={()=> isActive({...navItem,default: false})}
            style={{display:'flex',alignItems:'center',
            textDecoration:'none'
            }}
          >
            <img src={logo} alt="Logo" className="Logo" />
            <Heading faktumFont Text="HOLOBET" m="0 0 0 1rem" 
              size="38px" ls="0.1rem"
            />
          </Link>
        </div>
        <div className='RightContainer'>
          <div className='PC'>
            <ul className="list">

              <Link2 to="/" 
                onClick={()=> isActive({...navItem, buy: true})}
                style={{background: active.buy || active.default ? '#1C1C1C' : null, 
                height:'6rem',padding:'0 2rem',
                color: active.buy || active.default ? '#5E8CC9' : null
              }}
              >
                BUY $HBT
              </Link2>

              <Link2 to="/claim" 
                onClick={()=> isActive({...navItem,claim: true, default: false})}
                style={{background: active.claim ? '#1C1C1C' : null,
                height:'6rem',padding:'0 2rem',
                color: active.claim ? '#5E8CC9' : null
              }}
              >
                CLAIM $HBT
              </Link2>  

              <Link2 to="/referal" 
                onClick={()=> isActive({...navItem,referal: true, default: false})}
                style={{background: active.referal ? '#1C1C1C' : null,
                height:'6rem',padding:'0 2rem',
                color: active.referal ? '#5E8CC9' : null
               }}
              >
                REFERRAL
              </Link2>

              <Link2 to="/lending" 
                onClick={()=> isActive({...navItem,lending: true, default: false})}
                style={{background: active.lending ? '#1C1C1C' : null,
                height:'6rem',padding:'0 2rem',
                color: active.lending ? '#5E8CC9' : null
              }}
              >
                LENDING
              </Link2> 

              <Link2 to="/stake" 
                onClick={()=> isActive({...navItem,staking: true, default: false})}
                style={{background: active.staking ? '#1C1C1C' : null,
                height:'6rem',padding:'0 2rem',
                color: active.staking ? '#5E8CC9' : null
               }}
              >
                STAKING
              </Link2> 
              
            </ul> 
          </div>

          <div className='PC'>
            <Button nav height="2.75rem" Text="CONNECT WALLET" Inheight="2.5rem" />
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
