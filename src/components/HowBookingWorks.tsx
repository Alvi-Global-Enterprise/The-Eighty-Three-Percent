import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Tell us about you",
    body: "Sharing just a few details can help your therapist learn about the things that matter to you.",
    image: "/assets/1.png",
  },
  {
    number: "02",
    title: (
      <>
        Choose your therapist
        <br />
        and session time.
      </>
    ),
    body: "Browse available appointments from our calendar and choose the right time and therapist for you.",
    image: "/assets/2.png",
  },
  {
    number: "03",
    title: "Confirmation",
    body: "Confirm your appointment & therapist and pay securely online. That's it!",
    image: "/assets/3.png",
  },
];

export function HowBookingWorks() {
  return (
    <section id="about" className="relative overflow-x-clip overflow-y-visible bg-white">
      <div className="relative flex w-full flex-col gap-10 px-5 pb-16 pt-12 md:px-25 md:pb-20 md:pt-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="relative z-10 w-full min-w-0 lg:max-w-[60%]">
          <h2 data-reveal className="text-[36px] font-extrabold leading-tight tracking-[-0.02em] text-foreground md:text-[44px] lg:text-[48px]">
            How Booking{" "}
            <span className="relative inline-block pb-1">
              Works
              <Image
                src="/assets/hero-text-1-line.png"
                alt=""
                width={174}
                height={23}
                className="pointer-events-none absolute left-0 top-full h-auto w-full"
                aria-hidden
              />
            </span>
          </h2>

          <p className="mt-0.5 text-[18px] font-normal text-coral md:text-[20px]">
            Getting The Support You
            <br />
            Need Is Simple.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <article
                key={step.number}
                data-reveal
                style={{ "--d": `${0.15 * (i + 1)}s` } as React.CSSProperties}
                className="relative min-w-0"
              >
                <div className="relative mb-5 inline-flex">
                  <Image
                    src={step.image}
                    alt=""
                    width={120}
                    height={120}
                    className="h-[78px] w-[78px] object-contain"
                    aria-hidden
                  />
                  <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-[12px] font-bold !text-white">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-[20px] font-extrabold leading-snug text-foreground md:text-[22px]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-muted md:text-[15px]">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div data-reveal="right" className="relative z-10 mx-auto w-full max-w-[380px] lg:mx-0 lg:max-w-[26%]">
          <Image
            src="/assets/how-booking-works-image.png"
            alt="Support that works around you"
            width={662}
            height={561}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
