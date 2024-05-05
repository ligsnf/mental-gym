'use client';

import { ModeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useActivePath } from '@/lib/helper';
import { Brain, CircleUser, Dumbbell, Menu } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  {
    label: 'Dashboard',
    path: '/app',
  },
  {
    label: 'Leaderboard',
    path: '/app/leaderboard',
  },
];

export function TopNav() {
  const checkActivePath = useActivePath();

  return (
    <header className="sticky top-0 border-b bg-background px-4 md:px-6 z-50">
      <div className="flex h-16 items-center gap-4 ">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/app"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <span className="whitespace-nowrap">Mental Gym</span>
            <Brain className="h-6 w-6" />
            <Dumbbell className="h-6 w-6" />
          </Link>
          {navLinks.map((link) => {
            const isActive = checkActivePath(link.path);
            return (
              <Link
                key={`${link.label}-${link.path}`}
                href={link.path}
                className={`${
                  isActive ? 'text-foreground`' : 'text-muted-foreground'
                } transition-colors hover:text-foreground`}
              >
                {link.label}
              </Link>
            );
          })}
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
              {navLinks.map((link) => {
                const isActive = checkActivePath(link.path);
                return (
                  <Link
                    key={`${link.label}-${link.path}`}
                    href={link.path}
                    className={`${
                      isActive ? 'text-foreground`' : 'text-muted-foreground'
                    } transition-colors hover:text-foreground`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full justify-end items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <ModeToggle />
          <Link href="/app/profile" passHref>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Navigate to profile</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
