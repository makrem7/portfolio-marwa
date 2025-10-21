import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProjectPreview.css';

function SingleProjectPreview({ id, name, image, theme }) {
    const history = useHistory();

    const handleClick = () => {
        history.push('/projects');
    };

    return (
        <Fade bottom>
            <div
                key={id}
                className='singleProjectPreview'
                style={{ backgroundColor: theme.primary400 }}
                onClick={handleClick}
            >
                <div className='projectName' style={{ color: 'white' }}>
                    {name}
                </div>
                <div className='projectContent'>
                    <img src={image ? image : placeholder} alt={name} />
                </div>
            </div>
        </Fade>
    );
}

export default SingleProjectPreview;
