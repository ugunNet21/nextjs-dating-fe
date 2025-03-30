'use client'

import { useState } from 'react';

import { Button } from '@/components/ui/Button';

import { ProfileCard } from './ProfileCard';

const mockProfile = {
  name: 'Jessica',
  age: 28,
  bio: 'Artist & Travel enthusiast. Love hiking and coffee chats!',
  distance: 3.5,
  photos: ['https://randomuser.me/api/portraits/women/44.jpg'],
}

export const Discover = () => {
  const [swiped, setSwiped] = useState<string | null>(null)

  const handleSwipe = (direction: 'left' | 'right') => {
    setSwiped(direction)
    console.log('Swiped', direction)
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Discover</h1>

      {/* ✅ Pastikan ProfileCard dipakai */}
      <ProfileCard user={mockProfile} onSwipe={handleSwipe} />

      <div className="flex justify-center mt-8 space-x-4">
        <Button variant="secondary" onClick={() => handleSwipe('left')}>
          ✕
        </Button>
        <Button onClick={() => handleSwipe('right')}>♥</Button>
      </div>
    </div>
  )
}
