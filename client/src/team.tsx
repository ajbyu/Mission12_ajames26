import React from 'react';
import './team.css';

class Team extends React.Component<{school:string, name:string, city:string, state:string}> {
    render() {
        const theTeam = this.props;

        return (
            <div className="card">
                <h3>{this.props.school}</h3>
                <div>Mascot: {this.props.school}</div>
                <div>Location: {this.props.city}, {this.props.state}</div>
                <br></br>
            </div>
        )
    }
}

export default Team;