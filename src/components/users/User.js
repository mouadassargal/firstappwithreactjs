import React, { Component } from 'react'
import {Link} from "react-router-dom"

export class User extends Component {
   
    render() {
        const {avatar_url,login} = this.props.user;

        return (
            <div>
                 
 <div className="card">
                        <img className="card-img-top" src={avatar_url} alt=""/>
                        <div className="card-body">
                            <h4 className="card-title">{login}</h4>
                            <p className="card-text">
                                <Link to={'users/'+login} className="btn btn-success">Show more</Link>
                                <a className="btn btn-success">Repositories</a>

                            </p>
                        </div>
                    </div>
            </div>
        )
    }
}

export default User
