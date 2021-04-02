import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web Development and Websites Promotion</h1>
                <Typed className="typed-text"
                    strings={[
                        'Software Engineer',
                        'Full Stack Developer',
                        'Application Developer',
                        'Web Developer']}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                />
                <a href="#" className="btn-main">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
