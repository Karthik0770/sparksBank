import React, { Component } from 'react'
import { withRouter } from 'react-router'
import './css/home.css'

export class Transfer extends Component {
    constructor(props) {
        super(props)
        const {state} = this.props.location
        this.state = {
            users:[],
            transfer:'',
            amount:0,
            payee:state,
            tr_bal:0,
            pa_bal:0
        }

    }
    

    componentDidMount(){
        const {state} = this.props.location
        fetch('/users')
        .then(res => res.json())
        .then(users => {
            let u=[]
            users.map(user=>{
                if(user._id!==state){
                    u.push(user)
                }
            })
            this.setState({
            users:u
        })})
    }

    handleSubmit=async (event)=>{
        event.preventDefault()

        await fetch(`/users/${this.state.payee}`)
            .then(res => res.json())
            .then(user => this.setState({
                pa_bal:user.balance
            }))

            await fetch(`/users/${this.state.transfer}`)
            .then(res => res.json())
            .then(user => this.setState({
                tr_bal:user.balance
            }))

        if(parseInt(this.state.amount)>parseInt(this.state.pa_bal)){
            alert("Your balance not sufficient to continue the transaction !!")
        }else{
            await fetch('/users/'+this.state.payee,{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify({
                    balance :this.state.pa_bal - this.state.amount
                })
            }).then(res => res.json())
            .then(alert("balance updated"))

            await fetch('/users/'+this.state.transfer,{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify({
                    balance :parseInt(this.state.tr_bal) + parseInt(this.state.amount)
                })
            }).then(res => res.json())
            .then(this.props.history.push({
                pathname:"./invoice",
                state:[this.state.payee,this.state.transfer,this.state.amount]
            }))
        }
    }
    // this.state.pa_bal - this.state.amount

    handleUserChange =async (e)=>{
        await this.setState({
            transfer:e.target.value
        })
    }

    handleAmountChange = async (e)=>{
        await this.setState({
            amount:e.target.value
        })
    }

    render() {
        return (
            <div className='card tr'>
                <div className='card-header'>
                <h2>Money Transfer</h2>
                </div>
                <div className='card-body'>
                    <center>
                    <form  className='form-group' onSubmit={this.handleSubmit}>
                        <div style={{display:'flex'}}>
                            <label>Select User &nbsp;&nbsp;</label>&nbsp;
                            <select className='form-control form-control-sm' onChange={this.handleUserChange}>
                                <option value="">--Select User--</option>
                                {
                                    this.state.users.map(user=>
                                        <option key={user._id} value={user._id} name="tr_id">{user.name}</option>
                                    )
                                }
                            </select>
                        </div>
                        <br></br>
                        <div style={{display:'flex'}}>
                            <label>Amount &nbsp;&nbsp;</label>&nbsp;
                            <input className='form-control form-control-sm' type="number" placeholder="Enter Amount" onChange={this.handleAmountChange} value={this.state.amount}></input>
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-dark">Confirm</button>
                    </form>
                    </center>
                </div>
            </div>
        )
    }
}

export default withRouter(Transfer)
