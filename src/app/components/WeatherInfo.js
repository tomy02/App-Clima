import React from 'react';


const WeatherInfo = props => {

    console.log(props);

    return (

        <
        div > {
            props.error &&
            <
            div className = "alert alert-danger text-center" >
            <
            h4 > { props.error } < /h4> < /
            div >
        }

        {
            props.temperature ?
                <
                div className = "card card-body" >
                <
                h4 > Location : { props.city }, { props.country } < /h4> <
            h4 > Temperature: { props.temperature }
            ºC { props.description } <
            /h4> <
            h4 > Humidity: { props.humidity } % < /h4> <
            h4 > Wind Speed: { props.wind_speed } < /h4>     < /
            div >
                :
                <
                div className = "" >
                <
                /
            div >

        }

        <
        /div>


    );
}

export default WeatherInfo;