import { useState ,useEffect } from 'react';
function Cards2(props){
    const [date, setDate] = useState('datatype');
    const [line, setLine] = useState([]);
    
    useEffect(() => {
    let lists = []
    if(date === "datatype"){

        lists=props.datatype
    }
    else{

        lists= props.datatype.filter((a)=>
        a.type ===date
        )
    }
        setLine(lists)
    console.log(   props.datatype.filter((a)=>
        a.type === date
    ),date);
},[props.datatype,date]);

const Add=()=>{
        console.log("success");
    }
        return(
        <>
        <select  onChange={(e) => setDate(e.target.value)}>
        <option value="datatype">all</option>
        <option value="Cars">Cars</option>
        <option value="cycles">cycles</option>
        <option value="motorbike">motorbike</option>
      </select>
      {line.map((e,i)=>{
          return(
              <div className="body2" key={i}onClick={()=>{
            }}>
              <img src={e.imge}/>
              <h3>{e.name}</h3>
              <h4>{e.type}</h4>
              <p>{e.discpriton}</p>
              <p>{e.price}</p>
              <button onClick={Add}>{e.button}</button>
              </div>
          )
      })}
    )

        {/* {props.datatype.map((e,i)=>{
            return(
        <div className="app2" key={i} onClick={()=>{
            }}>
            <img src={e.imge}/>
            <h3>{e.name}</h3>
            <h4>{e.type}</h4>
            <p>{e.discpriton}</p>
            <p>{e.price}</p>
            <button onClick={Add}>{e.button}</button>
        </div>
            )
        })
    } */}
    </>
    )
}

export default Cards2