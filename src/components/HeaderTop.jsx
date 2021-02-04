import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderTop = () => {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes()
    return(
        <div className="header-top">
            <div>
                <FontAwesomeIcon icon={ ['fas', 'signal'] } />
                <FontAwesomeIcon icon={ ['fas', 'wifi'] } />
            </div>
            <div>
                <p>{hour}:{minute}</p>
            </div>
            <div>
                <p>80%</p>
               <FontAwesomeIcon icon={ ['fas', 'battery-three-quarters'] } />
            </div>
        </div>
    )
}

export default HeaderTop;