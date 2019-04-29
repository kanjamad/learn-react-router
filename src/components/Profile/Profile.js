import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Profile extends Component {
    render() {
        // const {name} = this.props.match.params;
        const {user, birth} = this.props.match.params; 
        let ifBirth = birth ? `your birth is ${birth}` : null
        return (
            <h1>
                {/* Hello {name}  */}

                Hello {user}  {ifBirth}
            </h1>
        )
    }
}

export default withRouter(Profile);