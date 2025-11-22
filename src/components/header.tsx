'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CodeXml, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2 group">
            <CodeXml className="h-6 w-6 text-primary transition-all duration-300 group-hover:animate-glow" />
            <span className="hidden font-bold font-headline sm:inline-block">
              CodeYash Developers
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === link.href ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <CodeXml className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">
                    CodeYash Developers
                  </span>
                </Link>
                <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                  <div className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'transition-colors hover:text-foreground/80',
                        pathname === link.href ? 'text-foreground font-semibold' : 'text-foreground/60'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center space-x-2 md:hidden">
              <CodeXml className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline">CodeYash Developers</span>
            </Link>
          </div>
          <nav className="flex items-center">
            <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 animate-pulse-glow">
              <Link href="/admin/response-generator">
                AI Tools
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
