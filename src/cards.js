import { useState ,useEffect } from 'react';
function Cards(props){
    const [item, setItem] = useState('data');
    const [type, setType] = useState([]);
    //  item = (e) => {
    // } 
    useEffect(() => {
        let list = []
        if(item === "data"){

            list=props.data
        }
        else{

            list= props.data.filter((a)=>
            a.type ===item
            )
        }
        setType(list)
    console.log(   props.data.filter((a)=>
        a.type === item
    ),item);
},[props.data,item]);
console.log(type);
        
      const add=()=>{
            console.log("success");
        }
        
        return(
            <>     
        <select  onChange={(e) => setItem(e.target.value)}>
            <option value="data">all</option>
          <option value="men">men</option>
          <option value="Girl">Girl</option>
          <option value="kids">kids</option>
        </select>
        {type.map((e,i)=>{
            return(
                <div className="body" key={i} onClick={()=>{}
            }>
                <img src={e.imge}/>
                <h3>{e.name}</h3>
                <h4>{e.type}</h4>
                <p>{e.discpriton}</p>
                <p>{e.price}</p>
                <button onClick={add}>{e.button}</button>
                </div>
            )
        })}
       
           
        </>
    )
}

export default Cards