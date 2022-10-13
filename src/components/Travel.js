import React from "react"

export default function Travel(props) {
    
    return (
        <div className="travel-container">
            <img className="travel--image" src={props.travel.image} alt="view" />
            <div className="travel--details">
                <div className="travel--location">
                    <p className="travel--location-name">
                        <span>
                            <img className="travel--location-icon" src="../images/location-icon.png" />
                        </span>
                        {props.travel.location}
                    </p>
                    <a className="travel--location-link" href={props.travel.link}>View on Google Maps</a>
                </div>
                <h1 className="travel--place">{props.travel.place}</h1>
                <p className="travel--time">{props.travel.travelTime}</p>
                <p className="travel--content">{props.travel.content}</p>
            </div>
        </div>
    )
}