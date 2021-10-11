import React from 'react';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
    return (
        <div className={'relative top-1/3 left-1/4 tracking-widest'}>
            <div className={'text-black mb-14'}>
                <span className={'text-3xl mr-6'}>{'Hi,  I\'m'}</span>
                <span className={'text-8xl'}>Korben</span>
            </div>

            <div className={'text-3xl mb-8'}>I design and develop web applications</div>

            <div className={'w-1/4'}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('The programing language and frameworks I\'m working on are ')
                            .pauseFor(1000)
                            .typeString('Java')
                            .pauseFor(1000)
                            .typeString(', JavaScript')
                            .pauseFor(1000)
                            .typeString(', PHP')
                            .pauseFor(1000)
                            .typeString(', C#')
                            .pauseFor(1000)
                            .typeString(', Python')
                            .pauseFor(1000)
                            .typeString(', TypeScript')
                            .pauseFor(1000)
                            .typeString(', HTML')
                            .pauseFor(1000)
                            .typeString(', CSS')
                            .pauseFor(1000)
                            .typeString(', React')
                            .pauseFor(1000)
                            .typeString(', Redux')
                            .pauseFor(1000)
                            .typeString(', .Net')
                            .pauseFor(1000)
                            .typeString(', Spring Boot')
                            .pauseFor(1000)
                            .typeString(', Express')
                            .pauseFor(1000)
                            .typeString(', Nextjs')
                            .pauseFor(1000)
                            .typeString(' ...')
                            .start();
                    }}
                />
            </div>
        </div>
    );
};

export default HeroSection;
