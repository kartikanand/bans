import React from 'react';
import Ban from './Ban.jsx';

export default function BanList (props) {
    const bans = props.banList.map((ban) =>
        <Ban key={ban.id} {...ban} />
    );

    return (
        <div className='ban-list'>
            {
                bans
            }
        </div>
    );
}
