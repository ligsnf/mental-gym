import { auth, signOut } from 'app/auth';
import { Button } from "@/components/ui/button"

export default async function ProtectedPage() {
  let session = await auth(); // Assuming this function fetches session info

  const handleSignOut = async () => {
    'use server';
    await signOut(); // Perform server-side sign out
    if (typeof window !== 'undefined') {
      // Redirect to the login page, client-side redirect
      window.location.href = '/login';
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        You are logged in as {session?.user?.email}
        <Button onClick={handleSignOut}>
          Sign out
        </Button>
      </div>
    </div>
  );
}