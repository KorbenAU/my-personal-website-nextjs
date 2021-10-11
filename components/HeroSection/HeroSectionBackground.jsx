import React from 'react';

const HeroSectionBackground = () => {
    return (
        <>
            <div className={'absolute top-0 left-0 h-screen w-screen backdrop-blur-lg'}>
                <video className={'h-full w-full object-fill'} autoPlay loop muted>
                    <source src={'video/hero-typing.mp4'} type="video/mp4"/>
                </video>
            </div>
            <div className={'absolute top-0 left-0 h-screen w-screen from-silver bg-gradient-to-b to-transparent'}/>
        </>
    );
};

export default HeroSectionBackground;
