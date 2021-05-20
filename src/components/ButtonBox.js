import React from 'react';
import { Link } from 'react-router-dom';

function ButtonBox(props) {
    
    const buttonClass = props.buttonFor + '-button'

    let buttonText = ''
    if(props.buttonFor === 'about') {
        buttonText = 'Get to Know Me'
    }
    else if(props.buttonFor === 'projects') {
        buttonText = 'Take a Look'
    }
    else if(props.buttonFor === 'contact') {
        buttonText = 'Drop Me a Line'
    }
    else {
        buttonText = 'Explore Site'
    }

    let linkURL = ''
    if(props.buttonFor === 'about' || props.buttonFor === 'projects' || props.buttonFor === 'contact') {
        linkURL = `/${props.buttonFor}`
    }
    else if(props.buttonFor === 'crew') {
        linkURL = 'http://joincrew.co/'
    }
    else if(props.buttonFor === 'oberman') {
        linkURL = 'https://www.obermanpartners.com/'
    }
    else if(props.buttonFor === 'salama') {
        linkURL = 'https://www.salamahome.org/'
    }

    let linkBlock = ''
    if(linkURL === `/${props.buttonFor}`) {
        linkBlock = <Link to={linkURL} className='button-link' >
                        <div className={buttonClass}>{buttonText}</div>
                    </Link>
    }
    else {
        linkBlock = <a href={linkURL} className='button-link' target='_blank'>
            <div className={buttonClass}>{buttonText}</div>
        </a>
    }

    const classTitle = props.classTitle ? props.classTitle : ''

    return(
        <div className={classTitle}>
            {props.children}
            {linkBlock}
        </div>
    )
}

export default ButtonBox;