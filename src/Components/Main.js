import { useState } from 'react';
import Single from '../Presentational/Single'
import Multiple from '../Presentational/Multiple'
import Display from '../Presentational/Display'
import Error from '../Presentational/Error'
import '../App.css';



export default function Main() {
    let UI, ERROR;
    let API = "a935afd0be256a5f80d968bf1f14a88e";
    const [option, setOption] = useState('--Select Search Option--')
    const [inputOne, setInputOne] = useState('')
    const [inputTwo, setInputTwo] = useState('')
    const [data, setData] = useState('')
    const [fiveData, setfiveData] = useState('')
    const [display, setDisplay] = useState(false)
    const [err, setErr] = useState(false)

    let changePlaceholder = (e) => {
        let txt = e.target.id
        if (txt === 'type') {
            setOption(e.target.value)
        }
        else if (txt === 'query') {
            setInputOne(e.target.value)
        }

        else if (txt === 'coordQueryOne') {
            setInputOne(e.target.value)
        }
        else if (txt === 'coordQueryTwo') {
            setInputTwo(e.target.value)
        }
        else {

            if (option === '--Select Search Option--') {
                alert(" Please Select valid option")
            }

            if (option === "City") {
                if (inputOne === '') {

                    alert("Please Enter City Name")
                }
                else {

                    fetchAPI(inputOne)

                }
            }
            else if (option === "Zip code") {
                if (inputOne === '') {

                    alert("Please Enter Zip Code")
                }
                else {

                    fetchAPI(inputOne)

                }
            }
            else if (option === "Coordinates") {
                if (inputOne === '') {
                    alert("Please Enter Latitude")
                }
                if (inputTwo === '') {
                    alert("Please Enter Longitude")
                }
                else {
                    fetchAPI(inputOne, inputTwo)
                }
            }
        }
    }


    let fetchAPI = async (inputFirst, inputSecond) => {

        if (option === "City") {
            var result = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputFirst + "&units=imperial&APPID=" + API)
            var response = await result.json()

            var fiveResult = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + inputFirst + "&units=imperial&APPID=" + API)
            var fiveResponse = await fiveResult.json()

            if (response.cod === "404" || fiveResponse.cod === "404") {
                setErr(true)
                setDisplay(false)
            }
            else {
                setErr(false)
                setData(response)
                setfiveData(fiveResponse)
                setDisplay(true)
            }
        }
        else if (option === "Zip code") {
            var zipResult = await fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + inputFirst + "&units=imperial&appid=" + API)

            var zipResponse = await zipResult.json()

            var fiveZipResult = await fetch("https://api.openweathermap.org/data/2.5/forecast?zip=" + inputFirst + "&units=imperial&APPID=" + API)
            var fiveZipResponse = await fiveZipResult.json()

            console.log(zipResponse, fiveZipResponse, "Zip")
            if (zipResponse.cod === "400" || fiveZipResponse.cod === "400" || zipResponse.cod === "404" || zipResponse.cod === "404") {
                setErr(true)
                setDisplay(false)
            }
            else {
                setErr(false)
                setData(zipResponse)
                setfiveData(fiveZipResponse)
                setDisplay(true)
            }
        }
        else {
            var coordinatesResult = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + inputFirst + "&lon=" + inputSecond + "&units=imperial&appid=" + API)

            var coordinatesResponse = await coordinatesResult.json()
            console.log(coordinatesResponse)


            var fiveCoordinatesResult = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + inputFirst + "&lon=" + inputSecond + "&units=imperial&APPID=" + API)
            var fiveCoordinatesResponse = await fiveCoordinatesResult.json()

            if (coordinatesResponse.cod === "400" || fiveCoordinatesResponse.cod === "400") {
                setErr(true)
                setDisplay(false)
            }
            else {
                setErr(false)
                setData(coordinatesResponse)
                setfiveData(fiveCoordinatesResponse)
                setDisplay(true)
            }
        }

    }
    if (display) {
        UI = <Display info={data} five={fiveData} />
    }
    else {
        UI = (<div></div>)
    }

    if (err) {
        ERROR = <Error />
    }

    return (
        <div>
            <div className="App">
                <div className="contain">

                    <div className="form-group" >

                        <select className="form-control" id="type" onChange={(event) => changePlaceholder(event)}>
                            <option value="--Select Search Option--">--Select Search Option--</option>
                            <option value="City">City</option>
                            <option value="Zip code">Zip code</option>
                            <option value="Coordinates">Coordinates</option>
                        </select>
                    </div>
                    {option === "Coordinates" ? <Multiple data={changePlaceholder} /> : <Single data={changePlaceholder} />}

                    <div style={{ textAlign: "center" }}>
                        <button className="btn mt-5 border border-light text-white" id="btn" onClick={(event) => changePlaceholder(event)}>Get Weather Data</button>
                    </div>
                </div>
            </div>

            <div>
                {UI}
            </div>
            <div>
                {ERROR}
            </div>
        </div>
    )
}