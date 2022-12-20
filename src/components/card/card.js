import React from 'react'
import './card.css'
import EventImage from './../../media/image/event-pic.png'
import LocIcon from './../../media/image/point.png'
export const Card = (props) => {
  return (
    <div className='card-container'  onClick={props.onMouseOver} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
        
        <div className="card-box"  >
            <img src={EventImage} alt="" />
            <div className="card-text">
                <div className="event-title">
                       {props.title}
                </div>
                <div className="event-time">
                        {props.time}
                </div>
            </div>

            <div className="building-loc"  >
                <img src={LocIcon} alt="" />
                <h2>{props.building}</h2>
            </div>
        </div>
        
    </div>
  )
}
