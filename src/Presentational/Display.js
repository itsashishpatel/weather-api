import '../App.css';

export default function Display(props) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="display">
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
                    </div>


                    <div className="col-md-6">
                        <div className="display">
                            <div>
                                <h3> Next Five Days Forecast</h3>
                                <p>City:  {props.info.name}, {props.info.sys.country}</p>
                            </div>
                            {
                                props.five.list.map((x, i) => {
                                    return (
                                        <div style={{ display: "inline" }}>
                                            <div className="displayFive" key="i">
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