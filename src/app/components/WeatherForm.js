import React from 'react';

const WeatherForm = props => ( <
    div className = "card card-body" >
    <
    form onSubmit = { props.getWeather } >
    <
    div className = "form-group" >
    <
    input type = "text"
    name = "city"
    placeholder = "Nombre de la Ciudad"
    className = "form-control"
    autoFocus / >
    <
    /div>   <
    div className = "form-group" >
    <
    input type = "text"
    name = "country"
    placeholder = "Nombre de tu Pais"
    className = "form-control"
    autoFocus / >

    <
    /div>  <
    button className = "btn btn-success btn-block" > Obtener Clima < /button>  < /
    form > <
    /div>
)

export default WeatherForm;