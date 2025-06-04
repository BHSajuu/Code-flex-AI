"use client"

import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs'
import React from 'react'

function HomePage() {
  return (
    <div>
      <p className="mt-4">Welcome to the home page!</p>
      <SignedIn>
        <SignOutButton/>  
      </SignedIn>
      <SignedOut>
       <SignInButton/>  
      </SignedOut>      
    </div>

  )
}

export default HomePage