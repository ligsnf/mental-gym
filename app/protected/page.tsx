import { auth } from 'app/auth';
import { redirect } from 'next/navigation';
import Profile from "./profile"

export default async function ProtectedPage() {
  let session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin?callbackUrl=/protected")
  }

  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center text-white">
        <Profile user={session.user} />

        You are logged in as
        <pre>
          {JSON.stringify(session, null, 2)}
        </pre>
        <SignOut />
      </div>
    </div>
  );
}

function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        // await signOut();
      }}
    >
      <button type="submit">Sign out</button>
    </form>
  );
}
