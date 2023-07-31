import React from "react";
import js from "../js_logo.png";
import jsx_logo from "../jsx_logo.webp";
import node from "../node.js-logo-image.png";
import react from "../react_logo.png";
import java from "../java_logo.png";
import swing from "../java_swing.png";
import python from "../python.png";
import c from "../c.png";
import cpp from "../cpp.png";
import linux from "../linux.png";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
                        Education &amp; Training
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        B.S. in Computer Science and Systems from University of Washington
                        <br />
                        13 week Network Development Engineer pre-apprenticeship at TLG Learning
                    </p>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
                        Certifications
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        CompTIA Network+
                        <br />
                        CompTIA Linux+
                        <br />
                        AWS Certified Cloud Practitioner
                        <br />
                        C++ Certified Associate Programmer 
                    </p>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        The skills I've listed here come from tools and technologies I have used throughout my academic career, professional training, and personal projects.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {/* {skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <span className="title-font font-medium text-black">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))} */}
                    <div className="text-center mb-20">
                        <img src={js} height='100px' width='100px'/> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={jsx_logo} height='100px' width='100px'/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={node} height='100px' width='100px'/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={react} height='100px' width='100px'/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={java} height='100px' width='100px'/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <br /><br /><br />
                        <img src={swing} height='100px' width='100px'/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={python} height='100px' width='100px'/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={c} height='100px' width='100px'/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={cpp} height='100px' width='100px'/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={linux} height='100px' width='100px'/>
                    </div>
                </div>
            </div>
        </section>
    );
}