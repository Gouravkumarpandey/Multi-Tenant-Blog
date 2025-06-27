'use client';

import * as React from 'react';
import {UserButton} from '@clerk/nextjs'

const Nav: React.FC = () =>{
    return (
         <nav className="p-4 flex items-center justify-between">
        <div> 
            <h1 className='font-semibold text-2xl'>Blog Application</h1>
        </div>
        <div>
            <UserButton />
         </div>
    </nav>
    );
};

export default Nav;