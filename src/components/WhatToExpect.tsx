import Image from "next/image";

const points = [
  {
    n: "1",
    text: "You'll be met with a warm and friendly therapist who will help you focus on your current difficulty. It's okay if there are many - therapists can help you sort through them.",
  },
  {
    n: "2",
    text: "Explore your existing strengths and ways of coping, things that have helped in the past and anything that might be getting in the way.",
  },
  {
    n: "3",
    text: "An opportunity to reflect on the problem, notice anything that has changed or plans for going forward.",
  },
];

export function WhatToExpect() {
  return (
    <section className="relative overflow-visible bg-white py-10 md:py-14">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 z-0 h-[84%] -translate-y-1/2 bg-[#FDC18D] md:h-[82%]"
        aria-hidden
      />

      <div className="relative z-10 flex w-full flex-col items-center gap-8 px-5 md:px-25 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
        <div data-reveal="left" className="relative z-20 mx-auto -mt-6 w-full max-w-[400px] shrink-0 lg:mx-0 lg:-mt-20 lg:-mb-16 lg:max-w-[36%]">
          <Image
            src="/assets/what-to-expect-image.png"
            alt="Someone feeling supported after a therapy session"
            width={786}
            height={727}
            className="relative z-20 h-auto w-full -translate-y-3 scale-105 object-contain md:-translate-y-6 md:scale-110"
            priority={false}
          />
        </div>

        <div className="relative z-10 w-full lg:max-w-[66%]">
          <h2 data-reveal className="text-[34px] font-extrabold leading-[1.2] tracking-[-0.02em] text-foreground md:text-[42px] lg:text-[48px]">
            What To Expect In Your 60{" "}
            <span className="relative inline-block pb-1">
              Minute
              <Image
                src="/assets/hero-text-1-line.png"
                alt=""
                width={174}
                height={23}
                className="pointer-events-none absolute left-0 top-full h-auto w-full"
                aria-hidden
              />
            </span>
            <br />
            Therapy Session:
          </h2>

          <ol className="mt-6 max-w-[800px] space-y-3.5 md:mt-7 md:max-w-[880px] md:space-y-4 lg:max-w-[920px]">
            {points.map((point, i) => (
              <li
                key={point.n}
                data-reveal
                style={{ "--d": `${0.15 * (i + 1)}s` } as React.CSSProperties}
                className="flex items-start gap-3.5"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FA4434] text-[14px] font-bold !text-white md:h-9 md:w-9 md:text-[15px]">
                  {point.n}
                </span>
                <p className="text-[15px] leading-6 text-foreground md:text-[17px] md:leading-7">
                  {point.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
