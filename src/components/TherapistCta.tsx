import Image from "next/image";
import Link from "next/link";

export function TherapistCta() {
  return (
    <section className="relative z-20 mt-1 bg-white px-8 pb-4 pt-4 md:mt-2 md:px-32 md:pb-6 md:pt-5 lg:px-36">
      <div data-reveal="zoom" className="flex w-full flex-col items-center gap-6 rounded-[28px] bg-foreground px-8 py-7 md:flex-row md:items-center md:gap-8 md:rounded-[36px] md:px-14 md:py-8 lg:gap-10 lg:px-16">
        <div className="flex w-full items-center gap-5 md:w-auto md:gap-7">
          <Image
            src="/assets/laptop.png"
            alt=""
            width={168}
            height={134}
            className="h-auto w-[78px] object-contain md:w-[96px]"
            aria-hidden
          />
          <div className="hidden h-14 w-px shrink-0 bg-[#FA4434] md:block md:h-16" />
        </div>

        <div className="min-w-0 flex-1 text-center md:text-left">
          <h3 className="text-[18px] font-extrabold leading-snug !text-white md:text-[20px] lg:text-[22px]">
            Are you a therapist and have an appointment to offer?
          </h3>
          <p className="mt-2 max-w-[640px] text-[14px] leading-6 text-white/90 md:max-w-[700px] md:text-[16px] md:leading-7 lg:max-w-[760px] lg:text-[17px]">
            Make cancelled, occasional or regular slots available on your terms.
            You choose your availability, with a transparent platform fee on
            every booking.
          </p>
        </div>

        <Link
          href="#therapist-login"
          className="relative shrink-0 -translate-y-1 transition-opacity hover:opacity-90 md:-translate-y-2"
          aria-label="Find out more"
        >
          <Image
            src="/assets/find-out-more2.png"
            alt="Find out more"
            width={340}
            height={111}
            className="h-auto w-[200px] object-contain md:w-[220px] lg:w-[240px]"
          />
        </Link>
      </div>
    </section>
  );
}
