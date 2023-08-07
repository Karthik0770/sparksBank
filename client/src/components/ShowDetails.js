import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Button } from '@material-ui/core'
const BASE_URL = process.env.REACT_APP_BASE_URL

export class ShowDetails extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            acc_id:'',
            name:'',
            email:'',
            pin:'',
            balance:''
        }
    }

    componentDidMount(){
        const {state} = this.props.location
        fetch(`${BASE_URL}/users/${state}`)
        .then(res => res.json())
        .then(user => this.setState({
            acc_id:state,
            name:user.name,
            email:user.email,
            pin:user.pin,
            balance:user.balance
        }))
    }

    handleClick=(id)=>{
        this.props.history.push({
            pathname:"./transfer",
            state:id
        })
    }

    render() {
        const {name,email,pin,balance,acc_id} = this.state
        return (
            <div className='container' style={{marginTop:'5%'}}>
                <div className='card'>
                    <div className='card-header'><h2>{name}</h2></div>
                    <div className='card-body'>
                        <h5>Email : {email}</h5>
                        <h5>Account Number : {pin}</h5>
                        <h5>balance : &#8377; {balance}</h5>
                    </div>
                    <div className='card-footer'>
                        <Button variant="contained" size='large' color="primary" onClick={()=>this.handleClick(acc_id)}><i className="fa fa-money"></i>&nbsp;Transfer Money</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ShowDetails)
