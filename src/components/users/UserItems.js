import axios from 'axios';
import React, { Component } from 'react'
import User from "./User"
export class userItems extends Component {
    state={
        user:{}
    }
    componentWillMount(){
        const login = this.props.match.params.login;
        axios.get(`https://api.github.com/users/${login}`)
        .then(res=>{
this.setState({
    user:res.data
})
        })
    }
    render() {
        const {user} = this.state
        return (
            <div>
                <User user={user}/>
            </div>
        )
    }
}

export default userItems
