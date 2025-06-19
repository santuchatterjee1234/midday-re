import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMicrophone, faAngleRight } from '@fortawesome/fontawesome-free-solid' 
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader,';
import Ads from './ads';

const Header = () => {
    return (
        <div className='mobile-header'>
            <Ads/>
            <DesktopHeader/>
            <MobileHeader/>
        </div>
    );
}

export default Header;
