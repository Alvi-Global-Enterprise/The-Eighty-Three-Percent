import Image from "next/image";
import Link from "next/link";
import { QuickExit } from "@/components/QuickExit";

export function Hero() {
  return (
    <section className="relative h-[808px] overflow-hidden">
      <Image
        src="/assets/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-right-bottom"
        aria-hidden
      />

      <QuickExit />

      <div className="relative flex h-[808px] w-full flex-col gap-6 px-5 py-8 md:px-28 lg:flex-row lg:items-start lg:justify-between lg:gap-4 lg:pt-10">
        <div data-reveal="left" className="relative z-10 w-full max-w-[640px] shrink-0 pt-14 lg:max-w-[52%] lg:pt-24">
          <h1 className="text-[42px] font-extrabold leading-[1.12] tracking-[-0.02em] text-foreground md:text-[50px] lg:text-[54px] xl:text-[58px]">
            <span className="block">
              One Online{" "}
              <span className="relative inline-block pr-8">
                Or
                <Image
                  src="/assets/hero-text-3-lines.png"
                  alt=""
                  width={107}
                  height={91}
                  className="pointer-events-none absolute -right-1 -top-7 h-auto w-[40px] md:-top-8 md:w-[46px]"
                  aria-hidden
                />
              </span>
            </span>
            <span className="block">Telephone Therapy</span>
            <span className="block pb-1.5">
              Session, For{" "}
              <span className="relative inline-block">
                Whenever
                <Image
                  src="/assets/hero-text-1-line.png"
                  alt=""
                  width={174}
                  height={23}
                  className="pointer-events-none absolute right-5 top-[calc(100%+6px)] h-auto w-1/2"
                  aria-hidden
                />
              </span>
            </span>
            <span className="block">You Need It</span>
          </h1>

          <p className="mt-6 max-w-[620px] text-[22px] leading-7 text-muted md:text-[22px] md:leading-8">
            Your choice of therapist at a convenient time for you. No commitment
            to ongoing therapy unless you want it. Book now through following a
            few simple steps.
          </p>

          <div className="mt-7 flex flex-col items-start gap-3">
            <Link
              href="#book"
              className="inline-flex rounded-full bg-coral px-8 py-4 text-[19px] font-bold !text-white hover:bg-coral-deep"
            >
              Choose Your Therapist And Book A Session
            </Link>
            <p className="text-[18px] text-muted">
              Your choice of therapist. Clear pricing. One appointment at a
              time.
            </p>
          </div>
        </div>

        {/* Hero art + card: absolute coordinates measured from the 1920px Figma frame */}
        <div
          data-reveal="zoom"
          style={{ "--d": "0.2s" } as React.CSSProperties}
          className="pointer-events-none absolute inset-0 z-10"
        >
          <div className="float-slow absolute inset-0">
            <Image
              src="/assets/hero-83-image.png"
              alt="The 83 Percent"
              width={885}
              height={573}
              priority
              className="absolute right-[105px] top-[27px] h-[573px] w-[885px] max-w-none"
            />
            <Image
              src="/assets/thoughtful-support-hero.png"
              alt="Thoughtful support. Clear choices."
              width={195}
              height={249}
              className="absolute right-[113px] top-[474px] h-[249px] w-[195px] max-w-none drop-shadow-[0_12px_28px_rgba(60,20,30,0.15)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
