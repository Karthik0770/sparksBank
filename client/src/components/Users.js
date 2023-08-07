import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Button } from '@material-ui/core'
import axios from 'axios'
const BASE_URL = process.env.REACT_APP_BASE_URL

export class Users extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            users:[]
        }
    }
    

    componentDidMount(){
        fetch(`${BASE_URL}/users/`).then(res=> res.json())
        .then(users=>{
            this.setState({users})
            console.log(users)
        } )
    }

    handleClick = (id)=>{
        this.props.history.push({
            pathname:"./details",
            state:id
        })
    }

    render() {
        return (
          <div className="container" style={{ alignContent: "center" }}>
            <div className="row">
              {this.state.users.map((user) => (
                <div
                  key={user._id}
                  style={{
                    marginLeft: "1%",
                    marginRight: "0",
                    marginTop: "5%",
                    marginBottom: "5%",
                  }}
                  className="card col col-lg-2 col-md-3 col-5 col-sm-5"
                >
                  <h2 className="card-header">{user.name}</h2>
                  <div className="card-body">
                    <Button
                      variant="contained"
                      color="primary"
                      className="btn btn-dark"
                      onClick={() => this.handleClick(user._id)}
                    >
                      <i className="fa fa-bars"></i>&nbsp;Show Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    }
}

export default withRouter(Users)
