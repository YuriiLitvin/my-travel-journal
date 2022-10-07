import React from "react"

export default function Trip(props) {
    
    return (
        <div className="trip-container">
            <img src={props.travel.image} alt="view" />
            <div>
                <div className="trip--google-maps">
                    <p>
                        <span>
                            <img src="../images/location-icon.png" />
                        </span>
                        {props.travel.location}
                    </p>
                    <a href={props.travel.link}>View on Google Maps</a>
                </div>
                <h1>{props.travel.title}</h1>
                <p>{props.travel.travelTime}</p>
                <p>{props.travel.content}</p>
            </div>
        </div>
    )
}