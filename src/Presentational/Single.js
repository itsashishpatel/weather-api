export default function Single (props) {
    return (
        <input id="query" className="form-control" type="text" placeholder="Enter Input" onChange={props.data}></input>
    )
}
