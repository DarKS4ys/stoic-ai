import { Avatar, AvatarImage } from './ui/avatar';

export const BotAvatar = () => {
  return (
    <Avatar className="h-10 w-8">
      <AvatarImage className="p-1" src="/stoicWhite.png" />
    </Avatar>
  );
};
