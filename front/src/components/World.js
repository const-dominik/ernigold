import React from 'react';

const capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase();
const round = num => Math.round(num / 1000000 * 10) / 10;

const World = ({ worldname, time, gold }) => {
    return (
        <div className="world">
            <h1>{capitalize(worldname)}</h1>
            <p>Last update: {time ? new Date(time).toLocaleString() : "no data :("}</p>
            <div className="row">
                <div>Aktualny</div>
                <div>{round(gold)}m</div>
            </div>
        </div>
    )
}

export default World;