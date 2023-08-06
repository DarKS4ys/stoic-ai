import Image from 'next/image';

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-9 h-12 relative animate-spin">
        <Image alt="logo" fill src="/stoicWhite.png" />
      </div>
      <p className="text-sm text-muted-foreground">🗿 Stoic is thinking...</p>
    </div>
  );
};
