import React from 'react';
import '../styleSheets/AboutPage.css'
import ButtonBox from './ButtonBox';

function AboutPage() {

    // 'tra' = 'top-right-aboutpage'
    // 'bla' = 'bottom-left-aboutpage'
    return(
        <div className='about'>
        <div className='intro'>
            <h1 className='peach'>I'm Madi.</h1>
            <h2>It's Great to Meet You</h2>
        </div>
        <div className='tra'>
            <div className='pink-line-tra'></div>
            <div className='peach-line-tra'></div>
            <div className='yellow-line-tra'></div>
            <div className='magenta-line-tra'></div>
        </div>
        <div className='bla'>
            <div className='coral-line-bla'></div>
            <div className='peach-line-bla'></div>
        </div>
        <ButtonBox buttonFor='projects' classTitle='about-projects'>
            <h1 className='coral'>I'm a Web Developer</h1>
            <div className='more-about-me'>
                <p>But I also love to draw cartoons, knit sweaters, ride horses, and climb mountains.</p>
            <p>Ask me about these anytime and you might go down the rabbit hole.</p>
            <p>When it comes to developing, I regularly use React, but I'm comfortable with most any project stack. If not, I take it upon myself to become conversant.</p>
            <p>Recently, I've been working on a database-driven product that required me to learn Ruby, and it's quickly becoming one of my favorite languages.</p>
            </div>
        </ButtonBox>
    </div>
    )
}

export default AboutPage;