import React, { Component } from 'react'
import "./css/home.css"
import img from "./images/bnk_logo.png"

export class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className="col">
                            <h4 style={{fontSize:'1.5vh'}}>&copy;{new Date().getFullYear} SPARKS BANK INC | All rights reserved </h4>
                        </div> 
                        <div className='col'>
                            <h4 style={{fontSize:'1.5vh'}}>Terms Of Service | Privacy</h4>
                        </div>
                        <div className='col'>
                            <h4 style={{fontSize:'1.5vh'}}>contact us | email: sparks@example.com</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer