import { Icon } from 'components/icons';
import Link from 'next/link';
// src/components/navigation/BottomNav.tsx
import { useRouter } from 'next/router';

type Tab = {
  name: string;
  icon: 'compass' | 'heart' | 'message' | 'user';
  route: string;
};

const tabs: Tab[] = [
  { name: 'Discover', icon: 'compass', route: '/discover' },
  { name: 'Matches', icon: 'heart', route: '/matches' },
  { name: 'Messages', icon: 'message', route: '/messages' },
  { name: 'Profile', icon: 'user', route: '/profile' },
];

export const BottomNav = () => {
  const router = useRouter();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => (
          <Link 
            key={tab.route}
            href={tab.route}
            className={`flex-1 flex flex-col items-center justify-center h-full transition-colors ${
              router.pathname.startsWith(tab.route) 
                ? 'text-rose-500 border-t-2 border-rose-500' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            aria-current={router.pathname.startsWith(tab.route) ? 'page' : undefined}
          >
            <Icon 
              name={tab.icon} 
              size={24}
              className="mb-1"
            />
            <span className="text-xs">
              {tab.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};