
export default function Multiple(props) {
    return (
    <div>
        <input id="coordQueryOne" className="form-control" type="text" placeholder="Enter Latitude" onChange={props.data}></input><br></br>
        <input id="coordQueryTwo" className="form-control" type="text" placeholder="Enter Longitude" onChange={props.data}></input>
    </div>
    )
}