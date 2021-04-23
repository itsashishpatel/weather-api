import '../App.css';
import Clear from '../assets/Clear.mp4'
import Clouds from '../assets/broken.mp4'
import Few from '../assets/Few.mp4'
import Atmosphere from '../assets/Mist.mp4'
import Rain from '../assets/Rain.mp4'
import Scattered from '../assets/Scattered.mp4'
import Drizzle from '../assets/Shower.mp4'
import Snow from '../assets/Snow.mp4'
import Thunderstorm from '../assets/Thunder.mp4'
export default function Display(props) {

    let propWeather = props.displayVideo;
    let sentWeather;

    if (propWeather === 'Clear') {
        sentWeather = Clear
    }
    else if (propWeather === 'Clouds') {
        sentWeather = Clouds
    }
    else if (propWeather === 'Atmosphere') {
        sentWeather = Atmosphere
    }
    else if (propWeather === 'Clouds') {
        sentWeather = Clouds
    }
    else if (propWeather === 'Drizzle') {
        sentWeather = Drizzle
    }
    else if (propWeather === 'Rain') {
        sentWeather = Rain
    }
    else if (propWeather === 'Thunderstorm') {
        sentWeather = Thunderstorm
    }
    else if (propWeather === 'Snow') {
        sentWeather = Snow
    }
    else {
        sentWeather = Atmosphere
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {
                            <div className="display">
                                <video autoPlay playsInline muted loop id="backVideo" key={sentWeather}>
                                    <source src={sentWeather} type="video/mp4"></source>
                            Your browser does not support HTML5 video.
                            </video>
                                <div style={{ marginTop: "60px" }}>
                                    <p>City:  {props.info.name}, {props.info.sys.country}</p>
                                </div>
                                <div>
                                    <p>Current Temperature: {props.info.main.temp} F</p>
                                </div>
                                <div>
                                    <p>Feels Like: {props.info.main.feels_like} F </p>
                                </div>
                                <div>
                                    <p>Description: {(props.info.weather[0].description).toUpperCase()}</p>
                                </div>
                            </div>
                        }
                    </div>


                    <div className="col-md-6">
                        <div className="displayTwo">
                            <div>
                                <h3> Next Five Days Forecast</h3>
                                <p>City:  {props.info.name}, {props.info.sys.country}</p>
                            </div>
                            {
                                props.five.list.map((x, i) => {
                                    return (
                                        <div style={{ display: "inline" }} key={i}>
                                            <div className="displayFive">
                                                <p> Date and Time: {x.dt_txt}</p>
                                                <p>Current Temperature: {x.main.temp} F</p>
                                                <p>Feels Like: {x.main.feels_like} F </p>
                                                <p>Description: {(x.weather[0].description).toUpperCase()}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}