import style from "./But.module.css"
function But () {
    let list = ["AC","C","%","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","="];
    return (
        <>
            <div className={style.button1}>
                {list.map((list) => 
                    <button className={style.b}>{list}</button>
                )}
            </div>
        </>
    )
}
export default But