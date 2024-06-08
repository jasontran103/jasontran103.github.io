import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl dark:text-white md:text-7xl mb-1 md:mb-3 font-bold">Jason Tran</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer | Web Developer | Mobile App Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
            Recent graduate of San Francisco State University with a degree in Computer Science, 
            with extensive knowledge of HTML, CSS, JavaScript, Java, C++, Python, and C. 
            I have demonstrated a strong interest and practical experience in software engineering, 
            web development, and mobile application development. Contributor of {' '}
                <a
                    href="https://www.sarurecycling.com/"
                    target="_blank"
                    className="text-green-600 hover:underline
                    underline-offset-2 decoration-2 
                    decoration-black-600"
                    rel="noreferrer noopener"
                >
                    Saru Recycling
                </a> {' '}
                mobile app and Front End Lead at Todo Today. Currently searching for a full time position in the Computer Science field.
            </p>
        </div>
    )
}

export default Intro;