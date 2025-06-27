'use client';

import Nav from '@/app/components/nav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import * as React from 'react';


export default function OrgLandingPage(){

    const[blogContent, setBlogContent] = React.useState('');
    const[blogTitle, setBlogTitle] = React.useState('');


    return(
        <main>
            <Nav />
            <div className="p-10">
                <Input value={blogTitle} onChange ={e => setBlogTitle(e.target.value) }
                 placeholder="Title"
                  />
                <Textarea 
                placeholder='Enter your blog content here...'
                value={blogContent}
                 onChange={(e) => setBlogContent(e.target.value)}
                 className='mt-2'
                  />
                <Button className="mt-2">Create Blog</Button>
            </div>
        </main>
    );
}

