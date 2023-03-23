import React from 'react';
import Team from './team';
import teams from './ncaa_teams.json'

class TeamList extends React.Component {
    render() {
        return (
            <div>
                {teams.teams.map(t => <Team{...t}/>)}
            </div>
        )
    }
}

export default TeamList;