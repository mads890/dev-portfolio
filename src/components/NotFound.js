import React from 'react';
import '../styleSheets/NotFound.css'
import ButtonBox from './ButtonBox';

function NotFound() {

    // 'tln' = 'top-left-notfound'
    // 'brn' = 'bottom-right-notfound'
    return(
        <div className='not-found'>
            <div className='tln'>
                <div className='pink-line-tln'></div>
                <div className='peach-line-tln'></div>
                <div className='yellow-line-tln'></div>
                <div className='magenta-line-tln'></div>
            </div>
            <div className='nf-text'>
                <h1 className='peach'>Uh Oh...</h1>
                <p>There's nothing here!</p>
            </div>
            <ButtonBox buttonFor='projects' classTitle='nf-projects'>
                <h1 className='pink'>There's lots more to see!</h1>
                <p>Why not check out some of the projects I've been working on?</p>
            </ButtonBox>
            <div className='brn'>
                <div className='coral-line-brn'></div>
                <div className='peach-line-brn'></div>
            </div>
        </div>
    )
}

export default NotFound;