import React from 'react';
import '../styleSheets/Projects.css';
import ButtonBox from './ButtonBox';

function Projects() {
    return(
        <div className='projects'>
            <div className='trp'>
                <div className='pink-line-trp'></div>
                <div className='peach-line-trp'></div>
                <div className='yellow-line-trp'></div>
                <div className='magenta-line-trp'></div>
            </div>
            <header>
                <h1>Here's What I've Been Working On Recently.</h1>
                <p>In 2021, I've built informational and eCommerce sites while freelancing for a design firm. My biggest project thusfar has been contributing to the launch of a web app, Crew.</p>
            </header>
            <div className='blp'>
                <div className='coral-line-blp'></div>
                <div className='peach-line-blp'></div>
            </div>
            <div className='project-box'>
                <img src='./images/crew.png' alt='the words join crew with three diagonal lines underneath' className='project-img' />
                <ButtonBox buttonFor='crew'>
                    <h1 className='pink'>Crew</h1>
                    <h2><b>Front End: React - API: Ruby on Rails - Database: Postgres</b></h2>
                    <p>A Place for Men to Find Friends.</p>
                </ButtonBox>
            </div>
            <div className='right-al'>
                <div className='project-box-right'>
                    <div className='project-box'>
                        <ButtonBox buttonFor='oberman' classTitle='right-box'>
                            <h1 className='coral'>Oberman & Partners</h1>
                            <p>A New Kind of Ad Agency.</p>
                        </ButtonBox>
                        <img src='./images/oberman.png' alt='the words oberman and partners' className='project-img oberman' />
                    </div>
            </div>
            </div>
            <div className='project-box'>
                <img src='./images/salama.png' alt='outstretched hands holding Africa over the words salama home' className='project-img' />
                <ButtonBox buttonFor='salama'>
                    <h1 className='magenta'>Salama Home</h1>
                    <p>Non-Profit Home for Children in Tanzania.</p>
                </ButtonBox>
            </div>
        </div>
    )
}

export default Projects;