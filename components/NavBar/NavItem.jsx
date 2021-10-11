import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

const NavItem = ({href, title}) => {
    const [isHovering, setIsHovering] = useState(false);
    const router = useRouter();
    let active = router.pathname === href;

    return (
        <Link href={href} activeClassName={'font-bold'}>
            <a
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={`ml-8 text-black px-2 py-3 
                ${isHovering ? 'border-b' : ''} ${active ? 'font-bold' : ''}`}>
                {title}
            </a>
        </Link>
    );
};

export default NavItem;
