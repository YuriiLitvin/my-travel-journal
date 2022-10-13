import React from "react"

export default function Travel(props) {
    
    return (
        <div className="travel-container">
            <img className="travel--image" src={props.travel.image} alt="view" />
            <div>
                <div className="travel--location">
                    <p className="travel--location-name">
                        <span>
                            <img src="../images/location-icon.png" />
                        </span>
                        {props.travel.location}
                    </p>
                    <a className="travel--location-link" href={props.travel.link}>View on Google Maps</a>
                </div>
                <h1>{props.travel.title}</h1>
                <p>{props.travel.travelTime}</p>
                <p>{props.travel.content}</p>
            </div>
        </div>
    )
}