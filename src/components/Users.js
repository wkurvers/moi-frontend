import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from "../actions/userActions";

class Users extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    componentDidUpdate(nextProps) {
        if (nextProps.newUser){
            this.props.users.unshift(nextProps.newUser)
        }
    }

    render() {

        const userItems = this.props.users.map(user => (
            <div key={user.id}>
                <h3>{user.username}</h3>
            </div>
        ));
        return (
            <div>
                {userItems}
            </div>
        );
    }
}


const mapStateToProps = state =>  ({
    users: state.users.items,
});

export default connect(mapStateToProps,{fetchUsers})(Users);