import React from 'react'
import Nav from '../components/Nav/Nav'
import Section from '../components/Section/Section'
import '../GlobalStyle.scss'
const MainPage = () => {
  return (
    <div className="container">
        <div className="Hero">
            <Nav></Nav>
            <Section></Section>
        </div>
    </div>
  )
}

export default MainPage