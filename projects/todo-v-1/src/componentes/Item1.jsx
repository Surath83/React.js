function Item1 (){

let name = "milk";

  return <div className="row">
  <div className="col-4 col-md-4 i1">
    <p>{name}</p>
    </div>
    <div className="col-4 col-md-4 i1">
      <p>15/09/24</p>
    </div>
    <div className="col-2 col-md-4">
    <button type="button" className="btn btn-danger b1">Delete</button>
    </div>
  </div>
}
export default Item1;