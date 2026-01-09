"use client"
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from './ui/button';
import {Authenticated,Unauthenticated} from "convex/react";
import {BarLoader} from "react-spinners";



function Header() {
  return (
    <>
    <nav className='fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
            {/* logo */}
            <Link href={"/"} className='flex items-center'>
            <div className='flex items-center'>
            <Image
            src="/finalll.png"
            alt="Gathrly Logo"
            width={400}
            height={120}
            className="h-12 w-40 object-contain"
            priority
/>

            </div>

            {/* Pro badge */}
            </Link>

            {/* Search and location - desktop only */}

            {/* Right side Actions */}
            <div className='flex items-center'>
              <Authenticated>
                {/* Create event */}
              <UserButton />
            </Authenticated>
               <Unauthenticated>
              <SignInButton mode='modal'>
              <Button size='sm'>Sign in</Button>
              </SignInButton>
              
            </Unauthenticated>
            
            </div>

        </div>

        {/* Mobile Search & Location - Below Header */}

        {/* Loader  */}
        <div className='absolute bottom-0 left-0 w-full'>
          <BarLoader width={"100%"} color='#7d12ff' />
        </div>
    </nav>

    {/* models */}
    </>
  )
}

export default Header