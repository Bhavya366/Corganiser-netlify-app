import React from 'react';
import Heading from './Heading'
const Content = () => {
    return(
        <div className='about'>
            <Heading />
            <div className='para' id="About">
                <p>The word 'Corganiser' comes from two words 'Course' and 'Organiser'. 
                    Corganiser is a webapp that can organise your course playlist from 
                    youtube and make it an organised course while avoiding distractions 
                    from other suggested videos and from youtube ADs. You can also take 
                    notes here and save them for use in future or just for revising.</p>
            </div>
        </div>
    );
};

export default Content;


