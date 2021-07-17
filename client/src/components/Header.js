import React, { Component } from 'react'
import "./css/home.css"
import img from "./images/bnk_logo.png"

export class Header extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-dark bg-dark">
                    <h1 style={{fontSize:'250%',fontFamily:'"Times New Roman", Times, serif'}} className="navbar-brand">&nbsp;&nbsp;<img src={img} width='80' height='80'></img><a className='nav-head' href='/'>SPARKS&nbsp; BANK</a></h1>
                </div> 
            </div>
        )
    }
}

export default Header
