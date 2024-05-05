import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { auth, signOut } from 'app/auth';
import PointsDashboard from './components/points-dashboard';

export default async function ProtectedPage() {
  let session = await auth();
  let username = session?.user?.email;

  if (!session?.user) {
    return (
      <div>
        <p>You need to be signed in to access this page</p>
      </div>
    );
  }

  return (
    <div className="m-auto max-w-xl flex flex-col gap-6">
      <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
      <div className="flex items-center gap-4">
        <Avatar className="hidden h-9 w-9 sm:flex border-2 border-slate-900 dark:border-white">
          <AvatarImage
            src="https://www.gravatar.com/avatar/?d=identicon"
            alt="Avatar"
          />
          <AvatarFallback>
            {username?.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">{username}</p>
          <p className="text-sm text-muted-foreground">{username}@gmail.com</p>
        </div>
        <div className="ml-auto font-medium">
          <SignOut />
        </div>
      </div>
      <PointsDashboard />
    </div>
  );
}

function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <Button type="submit">Sign out</Button>
    </form>
  );
}
