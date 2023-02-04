import React from 'react'
import style from './List.module.css'

export default function List(Props) {

    // const sd=()=>{
    //     console.log(Props.k);
    //     const k2={p}
    //     {Props.d(Props.k)};
    // }

  return (
    <div id={style.lmain}>
    <div id={style.tex}>{Props.s}</div>
    <button id={style.ed} onClick={()=>Props.e(Props.k)}>E</button>
    <button id={style.del} onClick={()=>Props.d(Props.k)}>D</button>
    </div>
  )
}
