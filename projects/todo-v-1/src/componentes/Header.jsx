function Header(){
  return <div className="row">
  <div className="col-4 col-md-4">
    <input type="text" placeholder="Enter events"/>
  </div>
  <div className="col-4 col-md-4">
    <input type="date" />
  </div>
  <div className="col-2 col-md-4">
  <button type="button" className="btn btn-success b1">Enter</button>
  </div>
</div>
}
export default Header;
