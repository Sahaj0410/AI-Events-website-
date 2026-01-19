"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { use, useState } from 'react'
import {
  SignInButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import { Button } from './ui/button';
import {Authenticated,Unauthenticated} from "convex/react";
import {BarLoader} from "react-spinners";
import { useStoreUser } from '@/hooks/use-store-user';
import { Building, Crown, Plus, Ticket } from 'lucide-react';
import  OnboardingModal  from './onboarding-modal';
import { useOnboarding } from '@/hooks/use-onboarding';
import dynamic from "next/dynamic";
import { Badge } from './ui/badge';
import UpgradeModal from './upgrade-modal';
const SearchLocationBar = dynamic(
  () => import("@/components/search-location-bar"),
  { ssr: false }
);




function Header() {

const {isLoading} =  useStoreUser();

const  [showUpgradeModal,setShowUpgradeModal] = useState(false);

  const {showOnboarding,handleOnboardingComplete,handleOnboardingSkip} = useOnboarding()

  const {has} = useAuth();
  const hasPro = has?.({plan: "pro"}); 
  
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
            {hasPro && (
              <Badge className="bg-linear-to-r from-pink-500 to-orange-500 
              gap-1 text-white ml-3">
                <Crown className='w-3 h-3'/> Pro
                </Badge>
            )}
            </Link>

            {/* Search and location - desktop only */}
            <div className='hidden md:flex flex-1 justify-center'>
           <SearchLocationBar/>
            </div>


            {/* Right side Actions */}
            <div className='flex items-center'>
              {!hasPro && (

                <Button variant={"ghost"} size='sm'
                onClick={()=>setShowUpgradeModal(true)}
                >
                  Pricing 
                </Button>
                )}
                 <Button variant={"ghost"} size='sm'
                 asChild
                 className={"mr-2"}
                >
                  <Link href={"explore"}>
                  Explore
                  </Link>
                </Button>
              <Authenticated>
                <Button size='sm'
                 asChild
                 className="flex gap-2 mr-4"
                >
                  <Link href={"/create-event"}>
                  <Plus className='w-4 h-4'/>
                  <span className='hidden sm:inline'>Create Event</span>
                  </Link>
                </Button>
               
              <UserButton>
              <UserButton.MenuItems>
                <UserButton.Link
                label='My Tickets'
                href='/my-tickets'
                labelIcon={<Ticket size={16}/>}
                 />

                 <UserButton.Link
                 label= "My Events"
                 labelIcon={<Building size={16}/>}
                  href='/my-events'
                  />
                <UserButton.Action label='manageAccount'/>

              </UserButton.MenuItems>

              </UserButton>
            </Authenticated>
               <Unauthenticated>
              <SignInButton mode='modal'>
              <Button size='sm'>Sign in</Button>
              </SignInButton>
              
            </Unauthenticated>
            
            </div>

        </div>

        {/* Mobile Search & Location - Below Header */}
        <div className='md:hidden border-t px-3 py-3'>
           <SearchLocationBar/>
            </div>
              
      {isLoading && (
        <div className="absolute bottom-0 left-0 w-full">
          <BarLoader width="100%" color="#7d12ff" />
        </div>
      )}
         
    </nav>

    {/* models */}
    <OnboardingModal
    isOpen={showOnboarding}
    onClose={handleOnboardingSkip}
    onComplete={handleOnboardingComplete}
    />

    <UpgradeModal
    isOpen={showUpgradeModal}
    onClose={()=>setShowUpgradeModal(false)}
     trigger = 'header'

    />
    </>
  )
}

export default Header