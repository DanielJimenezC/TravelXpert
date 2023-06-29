'use client'
import './style/page.style.css'
import './style/header.style.css'
import './style/footer.style.css'
import './style/main.style.css'

import { useEffect, useState } from 'react'
import { BiChevronsRight, BiMenu, BiX } from 'react-icons/bi'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'

import Destination from './components/destination'
import FooterGroup from './components/footerGroup'
import Popular from './components/popular'

export default function Home() {

  const [clientWindowHeight, setClientWindowHeight] = useState('')
  const [showMenu, setShowMenu] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  useEffect(() => {
    if (clientWindowHeight >= 50 || window.scrollY >= 50) {
      setShowNavbar(true)
    } else {
      setShowNavbar(false)
    }    
  }, [clientWindowHeight])

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY)
  }

  const handleShowMenu = () => {
    setShowMenu(item => !item)
  }

  return (
    <>
      <header className={`header ${showNavbar ? 'header_scroll' : ''}`} id='header'>
        <nav className='nav container'>
          <a href='#' className='nav_logo'>Travel</a>
          <div className={`nav_menu ${showMenu ? 'show_menu' : ''}`}>
            <ul className='nav_list'>
              <li className='nav_item'>
                <a href='#home' className='nav_link' onClick={() => handleShowMenu()}>Home</a>
              </li>
              <li className='nav_item'>
                <a href='#about' className='nav_link' onClick={() => handleShowMenu()}>About</a>
              </li>
              <li className='nav_item'>
                <a href='#popular' className='nav_link' onClick={() => handleShowMenu()}>Popular</a>
              </li>
              <li className='nav_item'>
                <a href='#explore' className='nav_link' onClick={() => handleShowMenu()}>Explore</a>
              </li>
            </ul>
            <div className='nav_close' onClick={() => handleShowMenu()}>
             <BiX/>
            </div>
          </div>
          <div className='nav_toggle' onClick={() => handleShowMenu()}>
            <BiMenu/>
          </div>
        </nav>
      </header>
      <main className='main'>
        <section className='home section' id='home'>
          <div className='home_container_bg'>
            <img src='/home.jpg' alt='home image' className='home_bg'/>
          </div>
          <div className='home_shadow'></div>
          <div className='home_container container grid'>
            <div className='home_data'>
              <h3 className='home_subtitle'>Welcome To Travel</h3>
              <h1 className='home_title'>Explore<br/>The World</h1>
              <p className='home_description'>
                Live the trips exploring the world, discover
                paradises, islands, mountains and much
                more, get your trip now.
              </p>
              <a href='#' className='button'>
                Start Your Journey <BiChevronsRight/>
              </a>
            </div>
            <div className='home_cards grid'>
              <Destination altImage='home image' image='/home-croatia.png' title='Croatia'/>
              <Destination altImage='home image' image='/home-iceland.png' title='Iceland'/>
              <Destination altImage='home image' image='/home-italy.png' title='Italy'/>
              <Destination altImage='home image' image='/home-peru.png' title='Perú'/>
            </div>
          </div>
        </section>
        <section className='about section' id='about'>
          <div className='about_container container grid'>
            <div className='about_data'>
              <h2 className='section_title'>
                Learn More <br/>
                About Travel
              </h2>
              <p className='about_description'>
                All the trips around the world are a great
                pleasure and happiness fron anyone, enjoy 
                the sights when travel the world. Travel 
                safely and without worries, get your trip and 
                explore the paradise of the world. 
              </p>
              <a href='#' className='button'>
                Explore Travel <BiChevronsRight/>
              </a>
            </div>
            <div className='about_image'>
              <img src='/about.png' alt='about image' className='about_img'/>
              <div className='about_shadow'></div>
            </div>
          </div>
        </section>
        <section className='popular section' id='popular'>
          <h2 className='section_title container'>
            Enjoy The Beauty
            Of The World
          </h2>
          <div className='popular_container container grid'>
            <Popular altImage='popular image' country='Canada' image='/popular-mountain.jpg' title='Logan Mountain'/>
            <Popular altImage='popular image' country='Irland' image='/popular-forest.jpg' title='Spike Forest'/>
            <Popular altImage='popular image' country='Italy' image='/popular-lake.jpg' title='Garda Lake'/>
          </div>
        </section>
        <section className='explore section' id='explore'>
          <div className='explore_container'>
            <div className='explore_image'>
              <img src='/explore-beach.jpg' alt='explore image' className='explore_img'/>
              <div className='explore_shadow'></div>
            </div>
            <div className='explore_content container grid'>
              <div className='explore_data'>
                <h2 className='section_title'>
                  Explore The <br/>
                  Best Paradises
                </h2>
                <p className='explore_description'>
                  Exploring paradises such as islands and
                  valleys when traveling the world is one of
                  the greatest experiences when you travel, it
                  offers you harmony and peace and you
                  can enjoy it with great comfort.
                </p>
              </div>
              <div className='explore_user'>
                <img src='/explore-perfil.png' alt='explore image' className='explore_perfil'/>
                <span className='explore_name'>
                  Paul Jeams
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className='join section'>
          <div className='join_container container grid'>
            <div className='join_data'>
              <h2 className='section_title'>
                Your Journey <br/>
                Starts Here
              </h2>
              <p className='join_description'>
                Get up to date with the latest
                travel and information from us.
              </p>
              <form action='' className='join_form'>
                <input type='email' placeholder='Enter your email' className='join_input' />
                <button className='join_button button'>
                  Subscribe Our Newsletter <BiChevronsRight/>
                </button>
              </form>
            </div>
            <div className='join_image'>
              <img src='/join-island.jpg' alt='join island' className='join_img' />
              <div className='join_shadow'></div>
            </div>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <div className='footer_container container grid'>
          <div className='footer_content grid'>
            <div>
              <a href='#' className='footer_logo'>Travel</a>
              <p className='footer_description'>
                Travel with us and explore <br/>
                the world without limits.
              </p>
            </div>
            <div className='footer_data grid'>
              <FooterGroup links={['#','#','#']} linksName={['About Us','Features','News & Blog']} title={'About'}/>
              <FooterGroup links={['#','#','#']} linksName={['FAQs','History','Testimonials']} title={'Company'}/>
              <FooterGroup links={['#','#','#']} linksName={['Call Center','Support Center','Contact Us']} title={'Contact'}/>
              <FooterGroup links={['#','#','#']} linksName={['Privacy Policy','Terms & Services','Payments']} title={'Support'}/>
            </div>
          </div>
          <div className='footer_group'>
            <div className='footer_social'>
              <a href='https://www.facebook.com/' target='_blank' className='footer_social_link'>
                <AiFillFacebook />
              </a>
              <a href='https://www.instagram.com/' target='_blank' className='footer_social_link'>
                <AiFillInstagram />
              </a>
              <a href='https://www.twitter.com/' target='_blank' className='footer_social_link'>
                <AiFillTwitterCircle />
              </a>
              <a href='https://www.youtube.com/' target='_blank' className='footer_social_link'>
                <AiFillYoutube />
              </a>
            </div>
            <span className='footer_copy'>
              © Copyright DCode. All rights reserved
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
