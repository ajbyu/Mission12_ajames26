import React from 'react';
import teams from './ncaa_teams.json'

type TeamProps = {
    school: string;
    name: string;
    city: string;
    state: string;
}

class Team extends React.Component<{school:string, name:string, city:string, state:string}> {
    render() {
        const theTeam = this.props;

        return (
            <div>
                <h3>{this.props.school}</h3>
                <div>Mascot: {this.props.school}</div>
                <div>Location: {this.props.city}, {this.props.state}</div>
                <br></br>
            </div>
        )
    }
}

export default Team;