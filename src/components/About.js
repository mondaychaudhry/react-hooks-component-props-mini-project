import React from "react";

function About ({about, URL='https://via.placeholder.com/215'}) {
    return(
        <aside>
            <img src={URL} alt='blog logo'/>
            <p>{about}</p>
        </aside>
    )
}

export default About;