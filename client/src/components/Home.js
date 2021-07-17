import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Button } from '@material-ui/core'
import "./css/home.css"
import Header from './Header'

export class Home extends Component {

    handleClick= ()=>{
        this.props.history.push('./ViewAll')
    }

    render() {
        return (
            <div>
                <div className='banner'>
                    <h2 style={{fontSize:'200%',padding:'5%'}}>Welcome to sparks foundation banking application</h2>
                </div>
                <div className="vA">
                    <Button variant="contained" color="primary" size='large' onClick={this.handleClick}><i className="fa fa-search"></i>&nbsp;View All Customers</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(Home)

