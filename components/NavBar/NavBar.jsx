import React from 'react';
import Image from 'next/image';
import NavItem from './NavItem';


const NavBar = () => {
    return (
        <div
            className={'absolute px-20 top-0 left-0 w-full h-32 flex flex-row justify-between items-center content-center'}>
            <Image
                src="/img/myLogo.png"
                alt="Picture of the author"
                height={60}
                width={220}/>
            <div>
                <NavItem href={'/'} title={'Home'}/>
                <NavItem href={'/about'} title={'About'}/>
                <NavItem href={'/blog'} title={'Blog'}/>
                <NavItem href={'/projects'} title={'Projects'}/>
                <button className={'ml-12 bg-blue rounded-3xl text-silver px-5 py-2'}>
                    Download Resume
                </button>
            </div>
        </div>
    );
};

export default NavBar;
