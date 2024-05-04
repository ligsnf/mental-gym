import Link from "next/link"
import { headers } from 'next/headers';
import { auth } from 'app/auth';

import {
  Brain,
  CircleUser,
  Dumbbell,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export async function TopNav() {
  let session = await auth();

  const isLoggedIn = session?.user !== null;

  const pathname = headers().get('x-next-pathname') as string;
  const checkActivePath = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/app"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <span className="whitespace-nowrap">Mental Gym</span>
          <Brain className="h-6 w-6" />
          <Dumbbell className="h-6 w-6" />
        </Link>
        <Link
          href="/app"
          className={`${checkActivePath("/app") ? 'text-foreground`' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
        >
          Dashboard
        </Link>
        <Link
          href="/app/leaderboard"
          className={`${checkActivePath("/app/leaderboard") ? 'text-foreground`' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
        >
          Leaderboard
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/app"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <span className="whitespace-nowrap">Mental Gym</span>
              <Brain className="h-6 w-6" />
              <Dumbbell className="h-6 w-6" />
            </Link>
            <Link
              href="/app"
              className={`${checkActivePath("/app") ? 'text-foreground`' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
            >
              Dashboard
            </Link>
            <Link
              href="/app/leaderboard"
              className={`${checkActivePath("/app/leaderboard") ? 'text-foreground`' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
            >
              Leaderboard
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full justify-end items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        {isLoggedIn ? (
          <Link href="/app/profile" passHref>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Navigate to profile</span>
            </Button>
          </Link>
        ) : (
          <Link href="/login" passHref>
            <Button variant="secondary">Login</Button>
          </Link>
        )
        }
      </div>
    </header>
  );
}