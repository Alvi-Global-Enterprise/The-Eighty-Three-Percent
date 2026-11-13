import Image from "next/image";
import Link from "next/link";
import { IconFacebook, IconInstagram, IconLinkedIn } from "./icons";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "How it works", href: "#about" },
  { label: "Find a therapist", href: "#therapists" },
  { label: "About us", href: "#about" },
];

const support = [
  { label: "Resources", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact us", href: "#" },
  { label: "FAQs", href: "#" },
];

const legal = [
  { label: "Confidentiality", href: "#" },
  { label: "Data protection (gdpr)", href: "#" },
  { label: "Terms & conditions", href: "#" },
  { label: "Cookies", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#0C0D0D] text-white">
      <div data-reveal className="flex w-full flex-col gap-10 px-8 py-12 md:px-32 md:py-14 lg:flex-row lg:items-stretch lg:gap-0 lg:px-36">
        <div className="flex shrink-0 items-center lg:pr-10">
          <Link href="/" className="inline-block">
            <Image
              src="/figma/logo-footer-light.png"
              alt="The 83 Percent"
              width={320}
              height={197}
              className="h-auto w-[140px] object-contain md:w-[160px]"
            />
          </Link>
        </div>

        <div className="hidden w-px self-stretch bg-white/25 lg:block" />

        <div className="flex flex-1 items-center justify-center lg:px-8">
          <div className="grid grid-cols-2 justify-items-start gap-x-12 gap-y-5 sm:grid-cols-3 sm:gap-x-16 lg:gap-x-20">
            <FooterColumn title="Quick links" links={quickLinks} />
            <FooterColumn title="Support" links={support} />
            <FooterColumn title="Legal" links={legal} />
          </div>
        </div>

        <div className="hidden w-px self-stretch bg-white/25 lg:block" />

        <div className="w-full shrink-0 lg:w-[300px] lg:pl-10">
          <h3 className="text-[15px] font-bold !text-white">Stay in touch</h3>
          <p className="mt-2 text-[13px] leading-6 text-white/80">
            Get updates and wellbeing insights.
          </p>

          <form className="mt-4 flex overflow-hidden rounded-xl bg-white" action="#">
            <label className="sr-only" htmlFor="newsletter-email">
              Your email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-[13px] text-foreground outline-none placeholder:text-muted"
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-[#FA4434] px-4 text-[18px] font-bold !text-white transition-colors hover:bg-coral-deep"
              aria-label="Subscribe"
            >
              →
            </button>
          </form>

          <div className="mt-5 flex items-center gap-5">
            <Social href="#" label="Instagram">
              <IconInstagram className="h-[18px] w-[18px]" />
            </Social>
            <Social href="#" label="LinkedIn">
              <IconLinkedIn className="h-[18px] w-[18px]" />
            </Social>
            <Social href="#" label="Facebook">
              <IconFacebook className="h-[18px] w-[18px]" />
            </Social>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="flex w-full flex-col gap-3 px-8 py-4 text-[12px] text-white/85 md:flex-row md:items-center md:justify-between md:px-32 lg:px-36">
          <p>© 2026 the 83 percent. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <AdultIcon />
            For adults aged 18+
          </p>
        </div>
      </div>

      <div className="bg-white px-8 py-3.5 text-center md:px-32 lg:px-36">
        <p className="text-[15px] font-medium leading-6 text-foreground md:text-[16px]">
          If You Are In Crisis Or Really Worried About Somebody Else, Please
          Call 999 Or Visit Your Nearest A&amp;E Department.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-[17px] font-bold !text-white md:text-[18px]">{title}</h3>
      <ul className="mt-3 space-y-1.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[15px] !text-white/85 transition-colors hover:!text-white md:text-[16px]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="!text-white transition-opacity hover:opacity-70"
    >
      {children}
    </Link>
  );
}

function AdultIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4 shrink-0"
      fill="none"
      aria-hidden
    >
      <circle cx="10" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 17c1.2-3.2 3.4-4.8 6-4.8S14.8 13.8 16 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
