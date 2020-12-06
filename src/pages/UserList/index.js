import React from 'react';
import {Link} from 'react-router-dom';

class UserList extends React.Component {
    state = {
        userList: []
    }

    fetchUsers = async (event) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        const data = await response.json();

        this.setState({
            userList: data
        })
    }


    render() {
        return (
            <div>
                <h2>User List</h2>

                <button onClick={this.fetchUsers}>Get Users</button>

                <ul>
                    {
                        this.state.userList.map(user => 
                        <li key={user.id}>
                            <Link to={'/users/' + user.id}>{user.name}</Link>
                        </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default UserList;