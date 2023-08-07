import React, { Component } from 'react'
import { Button } from '@material-ui/core'
const BASE_URL = process.env.REACT_APP_BASE_URL

export class Invoice extends Component {

    constructor(props) {
        super(props)
        const {state} = this.props.location
        this.state = {
            pa_id:state[0],
            tr_id:state[1],
            payee:[],
            transfer:[],
            amount:state[2]
        }
    }

    async componentWillMount(){
        await fetch(`${BASE_URL}/users/`+this.state.pa_id)
        .then(res=>res.json())
        .then(payee=>this.setState({
            payee
        }))

        await fetch(`${BASE_URL}/users/`+this.state.tr_id)
        .then(res=>res.json())
        .then(transfer=>this.setState({
            transfer
        }))
    }
    
    handleClick= ()=>{
        this.props.history.push('./ViewAll')
    }

    render() {
        return (
            <div className='container'>
                <div style={{marginTop:'5%',marginBottom:'5%'}} className='card'>
                    <div className='card-header'>
                    <h1 style={{color:'#3f51b5'}}><b>Successfull Transaction</b></h1>
                    </div>
                    <br></br>
                    <div className="payeeInfo">
                        <h2>User - {this.state.payee.name}</h2>
                        <h4>Account Number - {this.state.payee.pin}</h4>
                        <h2>Balance - &#8377;{this.state.payee.balance}</h2>
                    </div>
                    <hr></hr>
                    <br></br>
                    <div>
                        <h2>Reciever Details</h2>
                        <h4>Reciever name - {this.state.transfer.name}</h4>
                        <h4>Amount Transfered - &#8377;{this.state.amount}</h4>
                    </div>
                    <br></br>
                    <div className='card-footer'>
                        <Button variant="contained" size='large' color="primary" onClick={this.handleClick}><i className="fa fa-arrow-circle-left"></i>Return to list of customers</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Invoice
