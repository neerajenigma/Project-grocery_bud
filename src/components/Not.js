import React from 'react'
import style from './Not.module.css'
export default function Not(Props) {
    if(Props.t===1){
        return (
            <div id={style.temp1} className={style.p}>Item Added To The List</div>
        )
    }
    else if(Props.t===2){
        return (
            <div id={style.temp2} className={style.p}>Value Changed</div>
        )
    }
    else if(Props.t===3){
        return (
            <div id={style.temp3} className={style.p}>Item Removed</div>
        )
    }
    else if(Props.t===4){
        return (
            <div id={style.temp4} className={style.p}>Empty List</div>
        )
    }
    else if(Props.t===6){
        return (
            <div id={style.temp6} className={style.p}>Please Enter Correct Value</div>
        )
    }
    else{
        return (
            <div></div>
        )
    }
  
}
