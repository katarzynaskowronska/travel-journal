import React from "react";

export default function Card(props){

    const country = props.location.toUpperCase()

    return (
        <div className="card">
            <img src={`../images/${props.image}`} className="card--image"></img>
            <div className="card--data">
                <section className="card--location">
                    <img src="../images/pin.jpg" className="card--pin"></img>
                    <span className="card--country">{country}</span>
                    <a href={props.googleMapsUrl} className="card--maps">View on Google Maps</a>
                </section>
                <p className="card--title">{props.title}</p>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}