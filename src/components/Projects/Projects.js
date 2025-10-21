import React,{ useContext} from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { categorySections } from '../../data/projectsData'
import Fade from 'react-reveal/Fade';

import './Projects.css'

function Projects() {

    const { theme } = useContext(ThemeContext);
    const history = useHistory();

    const handleCategoryClick = (index) => {
        history.push(`/projects?tab=${index}`);
    };

    return (
        <>
            {categorySections.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}>
                    <div className="projects--header">
                        <h1 style={{color: theme.primary}}>Projects</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--categoryGrid">
                            {categorySections.map((category, index) => (
                                <Fade bottom key={category.id}>
                                    <div
                                        className='categoryCard'
                                        style={{ 
                                            backgroundColor: theme.primary400,
                                            '--primary-color': theme.primary
                                        }}
                                        onClick={() => handleCategoryClick(index)}
                                    >
                                        <div className='categoryImage'>
                                            <img src={category.image} alt={category.title} />
                                            <div className='categoryInfo'>
                                                <h3>{category.title}</h3>
                                                <p>{category.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Projects
