import Link from 'next/link'
import React from 'react'
import AgentPulse from './AgentPulse'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import { ModeToggle } from './DarkModeToggle'

function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 px-4 md:px-6 
     bg-gray-900/90 backdrop-blur-md border-b border-gray-800 z-50 shadow-sm">
        <div className='container mx-auto'>
            <div className='flex items-center justify-between h-20'>
                {/* Left - Brand */}
                <div className="flex items-center">
                    <Link href="/" className='flex items-center gap-3 group'>
                        <div className="transform transition-transform duration-300 group-hover:rotate-12">
                            <AgentPulse size='small' color='green'/>
                        </div>
                        <h1 className='text-2xl font-bold bg-gradient-to-r from-green-400 
                        to-green-300 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105'>Daddy Yo</h1>
                    </Link>
                </div>
                
                {/* Right - Actions */}
                <div className='flex items-center gap-4'>
                    <ModeToggle/>
                    <SignedIn>
                        <Link href="/manage-plan">
                            <Button
                                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-md hover:shadow-lg transition-all duration-200"
                            >
                                Manage Plan
                            </Button>
                        </Link>
                        <UserButton/>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton>
                        {/* <Link href="/sign-in"> */}
                            <Button
                                variant="ghost"
                                className="text-gray-300 hover:text-green-400 hover:bg-gray-800 mr-2"
                            >
                                Sign In
                            </Button>
                        {/* </Link> */}
                        </SignInButton>
                    </SignedOut>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header