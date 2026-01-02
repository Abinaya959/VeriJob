import { Link, useLocation } from "wouter";
import { ShieldCheck, FileText, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: ShieldCheck },
    { href: "/detector", label: "Fake Job Detector", icon: Search },
    { href: "/analyzer", label: "Resume Analyzer", icon: FileText },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/">
          <a className="flex items-center gap-2 font-heading text-xl font-bold text-primary hover:opacity-90 transition-opacity">
            <ShieldCheck className="h-6 w-6" />
            <span>VeriJob</span>
          </a>
        </Link>

        <div className="flex items-center gap-1 md:gap-6">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="hidden md:inline">{item.label}</span>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
