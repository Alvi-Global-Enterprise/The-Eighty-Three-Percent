import Image from "next/image";
import Link from "next/link";

const nav = [
  { label: "Home", href: "#", active: true },
  { label: "Meet the Therapist", href: "#therapists" },
  { label: "More about the service", href: "#about" },
  { label: "I am in crisis", href: "#crisis" },
];

export function Header() {
  return (
    <header className="relative z-30 w-full bg-[linear-gradient(180deg,#f9edee_0%,#fff5f4_100%)]">
      <div className="flex w-full items-center justify-between gap-6 px-5 py-5 md:px-28">
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/navbar-logo.png"
            alt="The 83 Percent"
            width={112}
            height={69}
            priority
            className="h-[56px] w-auto object-contain md:h-[64px]"
          />
        </Link>

        <nav className="hidden items-center gap-24 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative text-[17px] font-bold transition-colors ${
                item.active
                  ? "text-foreground"
                  : "text-nav-muted hover:text-foreground"
              }`}
            >
              {item.label}
              {item.active ? (
                <span className="absolute -bottom-2 left-1/2 h-[3px] w-9 -translate-x-1/2 rounded-full bg-coral" />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#therapist-login"
            className="hidden rounded-[10px] border-[1.5px] border-coral-outline px-5 py-2.5 text-[14px] font-bold text-coral-outline transition-colors hover:bg-coral/5 sm:inline-flex"
          >
            Therapist Login
          </Link>
          <Link
            href="#get-started"
            className="inline-flex rounded-[10px] bg-coral px-5 py-2.5 text-[14px] font-bold !text-white transition-colors hover:bg-coral-deep"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
