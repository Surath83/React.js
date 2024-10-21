function Hello(){
  //dynamic components
  let myname = 'surath';
  let name = () => {return 'chowdhury';}

  return <h3>hello this is the future. i am {myname} {name()}</h3>
}
export default Hello;