import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';

const Start = React.memo( ({ src, alt="" }) => {
    return(
        <div className="start">
            <Parallax
            blur={0}
            bgImage={src}
            bgImageAlt={alt}
            strength={600}
            bgImageStyle={{top:'-50%'}}
            >
                <h1>No sabes como empezar aunque sientes que es momento de emprender. Incursionemos juntos en el marketing digital</h1>
            </Parallax>
        </div>
    )
});

export default Start;