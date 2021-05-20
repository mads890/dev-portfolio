import { render } from '@testing-library/react';
import react, {Component} from 'react';
import '../styleSheets/HomePage.css'
import ButtonBox from './ButtonBox';

function HomePage() {
    return(
        <div className='home' id='home'>
            <div className='trh'>
                <div className='pink-line-trh'></div>
                <div className='peach-line-trh'></div>
                <div className='yellow-line-trh'></div>
                <div className='magenta-line-trh'></div>
            </div>
            <div className='about-box'>
                <ButtonBox buttonFor='about'>
                    <h1 className='peach'>Hi, I'm Madi.</h1>
                    <p>I’m a Web Developer who loves the challenge of connecting complex infrastructure with captivating design.</p>
                </ButtonBox>
            </div>
            <img src='./images/mountaineer.jpg' alt='me standing on a rock facing away from the camera' className='bio-pic' id='biopic' />
            <div className='clh'>
                <div className='peach-line-clh'></div>
                <div className='coral-line-clh'></div>
            </div>
            <div className='filler-img-one'>
                <img src='https://i5.walmartimages.com/asr/47a66a5f-c14f-416c-8a64-41bc3f32883d_1.d4eba1c162ca70dc0764ce4d912ac407.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff' alt='first filler image' />
            </div>
            <div className='filler-img-two'>
                <img src='https://media.istockphoto.com/photos/living-colar-color-of-the-year-2019-abstract-reef-fractal-art-picture-id1087355652?k=6&m=1087355652&s=612x612&w=0&h=bJkm7GFPZAHGb2D78ubdmjNCgkbNGzJBW0Hya42sxPQ=' alt='second filler image' />
            </div>
            <div className='filler-img-three'>
                <img src='https://en.khmerpostasia.com/wp-content/uploads/2020/06/ripe-unripe-bananas.jpg' alt='third filler image' />
            </div>
            <div className='work-box'>
                <ButtonBox buttonFor='projects'>
                <h1 className='pink'>My Work and Focus</h1>
                <p>I'm a creative mind who loves to solve problems.</p>
                </ButtonBox>
            </div>
            <div className='contact-box'>
                <ButtonBox buttonFor='contact'>
                <h1 className='coral'>Get in Touch</h1>
                <p>I love meeting new people and doing new projects!</p>
                </ButtonBox>
            </div>
            <div className='brh'>
                <div className='pink-line-brh'></div>
                <div className='peach-line-brh'></div>
                <div className='yellow-line-brh'></div>
                <div className='magenta-line-brh'></div>
            </div>
        </div>
    )
}

export default HomePage;