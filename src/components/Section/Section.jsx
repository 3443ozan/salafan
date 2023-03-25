import React from 'react'
import './Section.scss'
import data from './data.json'
import icon1 from './icons/icon1.svg'
import icon2 from './icons/icon2.svg'
import img7 from './icons/img7.svg'
const Section = () => {
  return (
    <section>
        <div className="first">
            <h1>Groups</h1>
            <div className="btnC">
                <button><img src={icon2} alt="" /></button>
                <button><img src={icon1} alt="" /></button>
            </div>
        </div>
        <div className="Main">
            <div className="card">
                <img id='speciel' src={img7} alt="" />
                <p id='speciel'>Create group</p>
            </div>
            {
                data.map(data=>{
                    return(
                        <div className="card">
                            <img src={data.img} alt="" />
                            <h1>{data.header}</h1>
                            <p>{data.p}</p>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Section