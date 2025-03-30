// src/features/discover/ProfileCard.tsx
'use client'

import { motion } from 'framer-motion';

import { colors } from '../../constants/theme';

type User = {
  name: string
  age: number
  bio: string
  distance: number
  photos: string[]
}

export const ProfileCard = ({
  user,
  onSwipe,
}: {
  user: User
  onSwipe: (direction: 'left' | 'right') => void
}) => {
  return (
    <motion.div
      className="relative rounded-3xl overflow-hidden shadow-lg"
      style={{ backgroundColor: colors.card }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (info.offset.x > 100) onSwipe('right')
        if (info.offset.x < -100) onSwipe('left')
      }}
    >
      {/* Konten tetap sama */}
    </motion.div>
  )
}