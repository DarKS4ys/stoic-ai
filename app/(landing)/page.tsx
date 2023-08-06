import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import StoicIcon from '@/public/stoicWhite.png';

const LandingPage = () => {
  return (
    <div className='w-full h-full bg-gray-900'>

      <div className='text-white gap-3 flex justify-center h-screen'>

        <div className='flex flex-col items-center justify-center gap-4'>
        <Image
        src={StoicIcon}
        width={120}
        height={150}
        alt="Stoic Pic"
        className='h-15 w-12'
        />
        <h1 className='text-4xl font-semibold'>S T O I C</h1>
        Landing Page (Unprotected)
        <Link href="/dashboard">
          <Button variant="dark">Dashboard</Button>
        </Link>
        <Link href="/sign-up">
          <Button variant="dark">Sign Up</Button>
        </Link>
        <Link href="/sign-in">
          <Button variant="dark">Sign In</Button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
