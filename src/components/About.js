import React from "react";
import profile from '../profile.jpg';

export default function About() {
    return (
        <section id="about">
            
            <h1 style={{textAlign: "center"}}>
                <div className="display: flex flex: 1 ">
                <img src={profile} alt="my headshot" height='200px' width='200px' />
                </div>
                Welcome to my Portfolio!
                
            </h1>
            <div className="container mx-auto flex md:flex-row flex-col ">
                
                <div className="flex flex-col w-full mb-20">
                    <p className="mb-8 leading-relaxed">
                        I served 4 years of active duty in the Marine Corps as a combat engineer. I got to meet and work with people from many different backgrounds with a variety of skills. I learned how to develop a strong team where members' skills compliment one another so that no matter the team, we can still get the job done. After leaving the military, I began studying at the University of Washington in Tacoma and graduated with a Bachelor's of Science in Computer Science and Systems. Since graduating, I've also completed a bootcamp-style training at TLG Learning for Network Development Engineering. During those 13 weeks, I earned 3 certifications (CompTIA Network+, CompTIA Linux+ and AWS Certified Cloud Practitioner) on top of the rigorous training. After completing that, I've continued pushing myself to learn more. I've recently earned another certification, C++ Certified Associate Programmer. Currently, I'm looking for roles as a software developer and continuing to learn more and hone my skills in the meantime.
                    </p>
                    
                </div>
            </div>
        </section>
    );
}