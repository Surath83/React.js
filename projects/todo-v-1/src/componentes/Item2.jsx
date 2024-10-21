function Item2 (){

let date = "15/09/24";

  return <div className="row">
  <div className="col-4 col-md-4 i1">
    <p>butter</p>
    </div>
    <div className="col-4 col-md-4 i1">
      <p>{date}</p>
    </div>
    <div className="col-2 col-md-4">
    <button type="button" className="btn btn-danger b1">Delete</button>
    </div>
  </div>
}
export default Item2;