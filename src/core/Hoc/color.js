import React from 'react';

// GET COLOR RANDOM
const getRandomColor = () => {
    // KHAI BÁO COLOR
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += '0123456789ABCDEF'[Math?.floor(Math?.random() * 16)];
    }
    return color;
}

// CPN ĐỂ RENDER COLOR
const Color = (WrappedComponent) => {
    return (props) => (
        <div style={{ color: getRandomColor() }}>
            <WrappedComponent {...props} />
        </div>
    )
}
export default Color;
