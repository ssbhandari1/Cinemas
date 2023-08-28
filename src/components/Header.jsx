import React, { useEffect, useState } from 'react'
import "./style.scss";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import logo from '../assets/movix-logo.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import ContentWrapper from './contentWrapper/ContentWrapper';
const Header = () => {
  const [show ,setShow]=useState('top')
  const [lastScrollY,setLasrScrollY]=useState(0)
  const [mobileMenu,setMobileMenu]=useState(false);
  const[query,setQuery]=useState('')
  const [showSearch,setShowSearch]=useState('')
  const navigate=useNavigate()
  const location=useLocation()

useEffect(()=>{
window.scrollTo(0,0)
},[location])

  const controlNavbar=()=>{
if(window.scrollY >200){
  if(window.scrollY >lastScrollY && !mobileMenu){
    setShow('hide')
  }else{
    setShow('show')
  }


}else{
  setShow('top')
}
setLasrScrollY(window.scrollY)
  }
useEffect(()=>{
window.addEventListener('scroll',controlNavbar)
return()=>{
  window.removeEventListener('scroll',controlNavbar)
}
},[lastScrollY])
  const searchQueryHandler=(e)=>{
    if(e.key==='Enter' && query.length > 0){
    navigate(`/search/${query}`);
    setTimeout(()=>{
      setShowSearch(false)
    },1000)
    }
    }

const openSearch=()=>{
setMobileMenu(false)
setShowSearch(true)
}
const openMobileMenu=()=>{
setMobileMenu(true)
setShowSearch(false)
}


const navigateHandler=(type)=>{
  if(type==='movie'){
    navigate('/explore/movie')
  }else{
    navigate('explore/tv')
  }
setMobileMenu(false)
}
  return (
<header className={`header ${mobileMenu ? 'mobileView':''} ${show}`}>
  <ContentWrapper>
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    <ul className="menuItems">
      <li className="menuItem" onClick={()=>navigateHandler('movie')} >Movies</li>
      <li className="menuItem" onClick={()=>navigateHandler('TV')} >TV Shows</li>
      <li className="menuItem">
        <HiOutlineSearch onClick={openSearch}/>
      </li>

    </ul>
    <div className="mobileMenuItems">
    <HiOutlineSearch  onClick={openSearch}/>
    {mobileMenu ? (
      <VscChromeClose onClick={()=>setMobileMenu(false)}/>
    )
      :
      (
        <SlMenu onClick={openMobileMenu}/>
      )
    }
  
    </div>
  </ContentWrapper>
 {showSearch && (
   <div className="searchBar">
   <ContentWrapper>
   <div className="searchInput">
         <input type="text"
         onKeyUp={searchQueryHandler}
         placeholder='Search for a movie or tv show..'
         onChange={(e)=>setQuery(e.target.value)} />
      <VscChromeClose onClick={()=>setShowSearch(false)}/>
       </div>
   </ContentWrapper>
 </div>
 )}
</header>
  )
}

export default Header