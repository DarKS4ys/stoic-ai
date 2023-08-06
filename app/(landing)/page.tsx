import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className='w-full h-full bg-gray-900'>
      <div className='text-white'>
        Landing Page (Unprotected)
        <Link href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
        <Link href="/sign-up">
          <Button variant="dark">Sign Up</Button>
        </Link>
        <Link href="/sign-in">
          <Button>Sign In</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
