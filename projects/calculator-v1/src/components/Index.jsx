import Display from "./Display"
import But from "./But"
import style from "./Index.module.css"
function Index () {
    return(
        <> 
           <div className={style.body}>
           <Display />
           <br /><br />
           <But /> 
           </div>       
        </>
    )
}
export default Index;