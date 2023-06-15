import React from 'react';

function Banner({
    src,
    title,
}) {
    return (
        <div
            alt={title}
            title={title}
            style={{
                height: 200,
                backgroundImage: `url("${src}")`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            &nbsp;
        </div>
    );
}

export default Banner;
