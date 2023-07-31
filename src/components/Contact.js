import React, { useState } from "react";

export default function Contact() {

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d173333.37979436392!2d-122.59690852759336!3d47.24917064101471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549054ee2b659567%3A0x62219c07ebb09e82!2sTacoma%2C%20WA!5e0!3m2!1sen!2sus!4v1690229565150!5m2!1sen!2sus"
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-indigo-400 leading-relaxed">
                                ryan.d.trepanier@gmail.com
                            </a>
                            <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">509-431-8080</p>
                            <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-4">
                                LinkedIn
                            </h2>
                            <p className="leading-relaxed">
                                <a href="https://www.linkedin.com/in/ryan-trep/">
                                https://www.linkedin.com/in/ryan-trep/
                                </a>
                            </p>
                            <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-4">
                                GitHub
                            </h2>
                            <p className="leading-relaxed">
                                <a href="https://github.com/RyanTrepanier">
                                https://github.com/RyanTrepanier
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}