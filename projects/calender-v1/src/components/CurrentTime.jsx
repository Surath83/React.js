let CurrentTime = () => {
  let time = new Date();
  
  return <p>{time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>;
}
export default CurrentTime;