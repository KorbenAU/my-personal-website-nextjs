import React from 'react';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
    return (
        <div className={'relative top-1/3 left-64 tracking-widest'}>
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
                            .deleteChars('Java'.length)
                            .typeString('JavaScript')
                            .pauseFor(1000)
                            .deleteChars('JavaScript'.length)
                            .typeString('PHP')
                            .pauseFor(1000)
                            .deleteChars('PHP'.length)
                            .typeString('C#')
                            .pauseFor(1000)
                            .deleteChars('C#'.length)
                            .typeString('Python')
                            .pauseFor(1000)
                            .deleteChars('Python'.length)
                            .typeString('TypeScript')
                            .pauseFor(1000)
                            .deleteChars('TypeScript'.length)
                            .typeString('HTML')
                            .pauseFor(1000)
                            .deleteChars('HTML'.length)
                            .typeString('CSS')
                            .pauseFor(1000)
                            .deleteChars('CSS'.length)
                            .typeString('React')
                            .pauseFor(1000)
                            .deleteChars('React'.length)
                            .typeString('Redux')
                            .pauseFor(1000)
                            .deleteChars('Redux'.length)
                            .typeString('.Net')
                            .pauseFor(1000)
                            .deleteChars('.Net'.length)
                            .typeString('Spring Boot')
                            .pauseFor(1000)
                            .deleteChars('Spring Boot'.length)
                            .typeString('Express')
                            .pauseFor(1000)
                            .deleteChars('Express'.length)
                            .typeString('Nextjs')
                            .pauseFor(1000)
                            .deleteChars('Nextjs'.length)
                            .deleteAll()
                            .start();
                    }}
                />
            </div>
        </div>
    );
};

export default HeroSection;
