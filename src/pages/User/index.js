import React from 'react';
import {withRouter} from 'react-router-dom';

class User extends React.Component {
    state = {
        user: {}
    }

    fetchUserDetails = async () => {
        const params = this.props.match.params;
        const url = 'https://jsonplaceholder.typicode.com/users/';

        const response = await fetch(url + params.id);
        const data = await response.json();

        this.setState({
            user: data
        })
    }

    render() {
        console.log('USER PROPS', this.props)
        const params = this.props.match.params

        return (
            <div>
                <h2>User {params.id}</h2>

                <button onClick={this.fetchUserDetails}>Show Details</button>

                <h4>{this.state.user.name}</h4>
                <p>{this.state.user.email}</p>
                <p>{this.state.user.username}</p>
                <p>{this.state.user.phone}</p>
            </div>
        )
    }
}

export default withRouter(User);
