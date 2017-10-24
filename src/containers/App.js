import React from 'react';

import { CharacterList, HeroList, SquadStats } from '../components'

const App = () => {
    return (
        <div className="app">
            <h2>SuperSquad</h2>
            <div className="col-md-4">
                <CharacterList />
            </div>

            <div className="col-md-4">
                <HeroList />
            </div>
            
            <div className="col-md-4">
                <SquadStats />
            </div>
        </div>
    );
}

export default App
