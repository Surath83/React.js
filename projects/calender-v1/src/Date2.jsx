let Date = () => {
    let time = new Date();
  
  return (
    <p>{time.toLocaleDateString}-{time.toLcaleTimeString}</p>
  );
};
export default Date;