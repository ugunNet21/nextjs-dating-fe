import {
  motion,
  PanInfo,
  useAnimation,
} from 'framer-motion';

import { Card } from '@/components/ui/Card';
import { Text } from '@/components/ui/Text';

interface Profile {
  id: number;
  first_name: string;
  age: number;
  bio: string;
  image: string;
}

interface SwipeCardProps {
  profile: Profile;
  onSwipe: (direction: 'left' | 'right') => void;
}

export const SwipeCard = ({ profile, onSwipe }: SwipeCardProps) => {
  const controls = useAnimation();
  
  const handleDragEnd = async (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      await controls.start({ x: 500, opacity: 0 });
      onSwipe('right');
    } else if (info.offset.x < -threshold) {
      await controls.start({ x: -500, opacity: 0 });
      onSwipe('left');
    } else {
      controls.start({ x: 0, opacity: 1 });
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={controls}
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="overflow-hidden">
        <img 
          src={profile.image} 
          alt={profile.first_name}
          className="w-full h-96 object-cover"
        />
        <div className="p-4">
          <Text variant="heading" className="text-xl font-bold">
            {profile.first_name}, {profile.age}
          </Text>
          <Text className="text-gray-600 mt-2">
            {profile.bio}
          </Text>
        </div>
      </Card>
    </motion.div>
  );
};