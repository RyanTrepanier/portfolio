import React from "react";
import lumen from '../lumen.png';
import calc from '../calc.png';
import project from '../project.png';
import gist from '../gist.css';
import Gist from 'super-react-gist';
import {Img} from 'react-image';

export default function Projects() {

 return (
    <section id="projects" className="text-gray-400 body-font">
        <div className="centered">
        {/* <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center"> */}
        {/* <div className="container px-5 py-10 mx-auto text-center lg:px-40"> */}
            <div className="flex flex-col w-screen mb-20">
                
                <h1 className="sm:text-4xl text:3xl font-medium title-font mb-4 text-black">
                    Apps I've Built
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relazed text-base">
                First up on this list is Lumen. This is a web-based video game I made with 3 other people. It was built with JavaScript, using agile methodologies to complete weekly deliverables. Some of my specific roles were to create 'enemy characters', such as the witch. Additionally, I was responsible for the animation of the witch's movements and attacks, as well as the behavior. I also found and used the several audio effects that are heard throughout the game. The functionality for the volume bar and mute button were also implemented by me. 
                </p>
                <img src={lumen} height='301px' alt='Lumen' align='left'/>
                {/* <Img src={lumen} /> */}
                <Gist classname={gist} url="https://gist.github.com/RyanTrepanier/cc37ea2db59e281602fc7834957540f6"/> 
                <br />
                <br />
                <br />
                <br />
                <p className="lg:w-2/3 mx-auto leading-relazed text-base">
                Next up is my multifunctionality calculator. This was a solo project that began as a homework assignment and was expanded on later. I created this using Java and the Java Swing framework. It features basic arithmetic operations in decimal, binary, and hexadecimal. It also offers conversion between decimal and binary and decimal and hexadecimal. The Datat Unit Converter allows you to enter a number and select a unit type (bits - TerraBytes) before showing you the equivalent amount in every other unit. 
                </p>
                <img src={calc} height='301px' alt='Calculator' align='left'/>

                <Gist className={gist} url="https://gist.github.com/RyanTrepanier/8d1ad550802525e14127ec6e147fcea6"/>
                <br />
                <br />
                <br />
                <br />
                <p className="lg:w-2/3 mx-auto leading-relazed text-base">
                Finally we have a program written in Python that I developed during my pre-apprenticeship at TLG Learning. The program pulls about a month's worth of images from NASA's Astronomy Picture of the Day API. It places the images into a folder and one by one, pulls each photo from the folder and encrypts it using AES in CFB mode. It then places the encrypted photos into a new folder and once again, pulls each photo before decrypting them and putting each into a 3rd folder so the process can be followed.
                </p>
                <img src={project} height='301px' alt='Encryption' align='left'/>

                <Gist className={gist} url="https://gist.github.com/RyanTrepanier/acc4cfab27ada5b56ffcb404bcd3e2ca"/>
            </div>
        </div>
    </section>
 );
}