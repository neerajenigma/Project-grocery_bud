import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import List from './List'
import Not from './Not'
import style from './Main.module.css'

export default function Main() {
    const[data,setdata]=useState([])
    const[ttext,setttext]=useState('')
    const[flag,setflag]=useState(1)
    const[t,sett]=useState(5);
    const[edi,setedi]=useState(-1);
    const[to,setto]=useState()
    const add=(e)=>{
        e.preventDefault()
        if(ttext!=="" && ttext.trim().length!==0){setdata([...data,ttext])
          e.target.wrt.value="";
          setttext("");
          sett(1);
          clearTimeout(to)
          setto(setTimeout(()=>sett(5),2000));
          // to=setTimeout(()=>sett(5),2000)}
        }
        else{
          // console.log("chekc");
          setttext("");
          e.target.wrt.value="";
          sett(6);
          clearTimeout(to)
          setto(setTimeout(()=>sett(5),2000));
          // setTimeout(()=>sett(5),2000);
        }
    }
    const edit=(e)=>{
      if(ttext!=="" && ttext.trim().length!==0){
        e.preventDefault()
        let di=data;
        if(edi!=-1)di[edi]=ttext;
        setdata(di);
        e.target.wrt.value="";
        setttext("");
        sett(2);
        clearTimeout(to)
        setto(setTimeout(()=>sett(5),2000));
        // setTimeout(()=>sett(5),2000);
        setflag(1);}
      else{
        e.preventDefault()
        setttext("");
        e.target.wrt.value="";
        sett(6);
        clearTimeout(to)
        setto(setTimeout(()=>sett(5),2000));
        // setTimeout(()=>sett(5),2000);
      }
    }
    const empty=()=>{
      setdata([]);
      sett(4);
      clearTimeout(to)
      setto(setTimeout(()=>sett(5),2000));
      // setTimeout(()=>sett(5),2000);
    }
    const d=(i)=>{
      // console.log("dcalled");
      const d=[];
      for(let j=0;j<data.length;j++){
        if(i==j)continue;
        d.push(data[j]);
      }
      if(edi==i)setedi(-1);
      setdata(d);
      sett(3);
      clearTimeout(to)
      setto(setTimeout(()=>sett(5),2000));
      // setTimeout(()=>sett(5),2000);
    }
    const e=(i)=>{
      setflag(0);
      setedi(i);
      setttext(data[i])
    }
  return (
    <div id={style.main}>
        <Not t={t}/>
        <div id={style.head}>Grocery Bud</div>
        {flag?
        (<form onSubmit={add} className={style.f}>
            <input name="wrt" type="text" className={style.write} maxLength="27" onChange={(e)=>setttext(e.target.value)} placeholder='e.g. eggs'/>
            <input type="submit" className={style.fin} />
        </form>):
        (<form onSubmit={edit} className={style.f}>
            <input type="text" className={style.write} maxLength="27" onChange={(e)=>setttext(e.target.value)} placeholder='e.g. eggs' value={ttext}/>
            <input type="submit" className={style.fin} value='Edit' />
        </form>)}
        <div id={style.list}>
          {data.map((str,i)=> <List s={str} key={i} k={i} d={d} e={e}/>)}
        </div>
        {data.length ?(<button id={style.cl} onClick={empty}>Clear Items</button>):<></>}
    </div>
  )
}
