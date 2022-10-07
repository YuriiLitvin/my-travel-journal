import React from "react"

export default function Header() {
    return (
    <div className="header">
        <img  
            className="header--logo" 
            src="../images/travel-logo.png" 
            alt="travel logo" 
        />
        <p className="header--title">my travel journal</p>
    </div>
    )
}