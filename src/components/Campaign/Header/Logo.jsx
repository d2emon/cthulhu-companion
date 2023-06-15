import React from 'react';

function Logo({
    src,
}) {
    return (
        <div
            style={{
                height: 130,
                width: 130,
                backgroundImage: `url("${src}")`,
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat',
            }}
        >
            &nbsp;
        </div>
    );
}

export default Logo;
