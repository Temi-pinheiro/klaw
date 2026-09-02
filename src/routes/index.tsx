import { seo } from '#/lib/seo';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
  head: () =>
    seo({
      title: 'Build with Klaw',
      description:
        'We’re a global strategic creative studio. We partner with early stage founders to bring their ideas to life.',
      path: '/',
      twitterTitle: 'Klaw - By Builders, for Dreamers',
      twitterDescription: 'Launchpad for founders',
    }),
});

function Home() {
  return (
    <main className="w-full h-full">
      <div className="w-full bg-[#FFFCF0] h-full">
        <section className="section w-full flex flex-col justify-center min-h-screen">
          <p className="text-lg font-medium text-center mt-auto w-fit mx-auto max-w-72 leading-[100%] tracking-normal">
            We help clients design, build and ship their MVP in four weeks.{' '}
            <br />
            <br />
            <br />
            For founders with funding, ready for revenue.{' '}
          </p>
          <div className="mt-auto mx-auto">
            <svg
              width="1184"
              height="280"
              viewBox="0 0 1184 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1140.59 69.597L1150.33 77.4847L1170.29 101.612L1154.51 113.211L1138.27 124.811L1121.57 98.3638L1117.39 87.2283L1113.22 98.3638L1096.98 124.811L1080.74 113.211L1064.5 101.612L1084.91 77.4847L1094.66 69.597L1082.13 69.1331L1051.97 62.1734L1057.54 43.1502L1063.57 24.127L1092.8 35.7265L1103.01 41.7582L1099.76 31.0867L1097.44 0H1137.34L1135.02 31.0867L1132.24 41.7582L1142.45 35.7265L1171.21 24.127L1177.24 43.1502L1183.28 62.1734L1152.65 69.1331L1140.59 69.597Z"
                fill="#5A0303"
              />
              <path
                d="M951.968 5.10377H1037.8L996.51 328.498H910.21L862.884 212.503L815.558 328.498H729.721L688.427 5.10377H774.264L794.679 167.033L862.884 0L931.089 167.033L951.968 5.10377Z"
                fill="#5A0303"
              />
              <path
                d="M621.488 328.498L612.208 296.948H531.011L521.732 328.498H435.896L528.692 5.56792L528.228 5.10394H614.528V5.56792L707.324 328.498H621.488ZM553.747 216.679H589.009L571.378 155.434L553.747 216.679Z"
                fill="#5A0303"
              />
              <path
                d="M343.201 248.23H433.213V328.498H257.364V5.10394H343.201V248.23Z"
                fill="#5A0303"
              />
              <path
                d="M244.982 328.498H147.082L85.8364 213.431V328.498H0V5.10375H85.8364V96.5079L138.73 4.63977H231.062L231.526 5.10375L148.474 148.01L244.982 328.498Z"
                fill="#5A0303"
              />
            </svg>
          </div>
        </section>
      </div>

      <div className="bg-[#121212] w-full h-full relative">
        <div className="absolute  right-0 top-34">
          <svg
            width="425"
            height="449"
            viewBox="0 0 425 449"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M307.202 0.5L307.161 1.03711L298.862 112.244L298.859 112.289L298.847 112.333L289.194 149.334L324.666 128.375L324.698 128.355L324.733 128.342L427.641 86.8467L428.142 86.6445L428.305 87.1592L449.882 155.211L471.46 223.264L471.625 223.781L471.094 223.902L361.547 248.799L361.501 248.81L361.456 248.812L319.628 250.419L353.452 277.8L353.491 277.831L353.522 277.869L424.894 364.18L425.231 364.587L424.805 364.901L368.372 406.396L368.366 406.4L310.273 447.896L309.842 448.203L309.559 447.756L249.806 353.146L249.779 353.104L249.76 353.055L235.29 314.468L220.821 353.055L220.803 353.1L220.779 353.141L162.685 447.75L162.405 448.207L161.968 447.896L103.875 406.4L45.7817 364.905L45.3403 364.59L45.6909 364.175L118.722 277.865L118.752 277.829L118.79 277.8L152.609 250.421L109.126 248.812L109.079 248.81L109.033 248.799L1.14502 223.901L0.628418 223.782L0.777832 223.274L20.6958 155.222L20.6987 155.211L42.2759 87.1592L42.438 86.6475L42.937 86.8457L147.505 128.341L147.542 128.354L147.575 128.375L182.983 149.298L171.74 112.353L171.723 112.3L171.719 112.244L163.42 1.03711L163.38 0.5H307.202Z"
              stroke="#2D2A2A"
            />
          </svg>
        </div>
        <section className="section flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-col items-center w-full mt-36 lg:pb-20.5">
              <div>
                <svg
                  width="175"
                  height="49"
                  viewBox="0 0 175 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M168.18 10.2621L169.617 11.4251L172.559 14.9827L170.233 16.693L167.838 18.4034L165.375 14.5038L164.76 12.8618L164.144 14.5038L161.749 18.4034L159.355 16.693L156.96 14.9827L159.971 11.4251L161.407 10.2621L159.56 10.1937L155.113 9.16748L155.934 6.3625L156.824 3.55753L161.134 5.26788L162.639 6.15726L162.16 4.58374L161.818 0H167.701L167.359 4.58374L166.949 6.15726L168.454 5.26788L172.696 3.55753L173.585 6.3625L174.474 9.16748L169.959 10.1937L168.18 10.2621Z"
                    fill="#FFFCF0"
                  />
                  <path
                    d="M140.368 0.752553H153.025L146.936 48.4371H134.211L127.232 31.3336L120.254 48.4371H107.598L101.509 0.752553H114.165L117.176 24.629L127.232 0L137.289 24.629L140.368 0.752553Z"
                    fill="#FFFCF0"
                  />
                  <path
                    d="M91.6386 48.4371L90.2703 43.7849H78.2978L76.9295 48.4371H64.2729L77.9558 0.820916L77.8873 0.752502H90.6123V0.820916L104.295 48.4371H91.6386ZM81.6501 31.9493H86.8496L84.2498 22.9186L81.6501 31.9493Z"
                    fill="#FFFCF0"
                  />
                  <path
                    d="M50.6048 36.6014H63.8772V48.4371H37.9482V0.752502H50.6048V36.6014Z"
                    fill="#FFFCF0"
                  />
                  <path
                    d="M36.1226 48.4371H21.6872L12.6566 31.4704V48.4371H0V0.752556H12.6566V14.2301L20.4558 0.684143H34.0702L34.1386 0.752556L21.8925 21.8241L36.1226 48.4371Z"
                    fill="#FFFCF0"
                  />
                </svg>
              </div>
              <p className="text-[32px] text-[#FBFBFB] max-w-139.5 text-center mt-10">
                We’re a global strategic creative studio. We partner with early
                stage founders to bring their ideas to life.
              </p>
            </div>

            <div className="lg:py-30 lg:px-12 flex flex-col">
              <div className="w-full flex justify-between">
                <p className="max-w-[40%] text-[#FBFBFB] text-[32px] font-medium">
                  AI takes you most of the way there, but its judgement is not
                  reliable
                </p>
                <div className="max-w-[40%] text-[#C3C3C3] text-[17px] font-medium">
                  <p>
                    Every AI tool available now is very soon, but everyone uses
                    the same ones. The big differentiator is in the strategy and
                    in the design.
                  </p>
                  <p className="mt-5">
                    This is where Klaw comes in. We work with AI to deliver
                    custom-designed, fully implemented MVP and marketing web
                    page ready to be deployed to the market in 4 weeks.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-between lg:mt-36.25">
                <p className="max-w-[40%] text-[#FBFBFB] text-[32px] font-medium">
                  Generate. Refine. Iterate. We close the gap on the last ten
                  percent.
                </p>
                <div className="max-w-[40%] text-[#C3C3C3] text-[17px] font-medium">
                  <p>
                    The AI makes options, we make the call on what actually
                    looks good and works.
                  </p>
                  <p className="mt-5">
                    The three steps below is how our work is done.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section flex flex-col items-center lg:mt-30">
          <h3 className="font-newstar text-[56px] text-[#FBFBFB]">
            How we work
          </h3>
          <div className="grid lg:grid-cols-3 w-full mt-12">
            <div className="flex flex-col bg-[#1A1717] pt-12 pb-10 pl-12 pr-14 border-r border-[#2D2A2A]">
              <div className="flex flex-col gap-y-4 min-h-48">
                <span className="text-xs font-medium text-[#E75757] uppercase">
                  step • 01
                </span>
                <h6 className="text-[#FBFBFB] font-newstar text-[28px] uppercase">
                  Scope Sprint
                </h6>
                <p className="text-[17px] font-medium text-[#C3C3C3]">
                  A 5 day sprint where we dig deep into your product, turning
                  idea into a build-ready spec — a PRD, a technical plan, and a
                  fixed quote for the build.
                </p>
              </div>
              <span className="lg:mt-46 mt-20">
                <img src="/binoculars.svg" alt="binoculars icon" />
              </span>
            </div>
            <div className="flex flex-col bg-[#1A1717] pt-12 pb-10 pl-12 pr-14 border-r border-[#2D2A2A]">
              <div className="flex flex-col gap-y-4 min-h-48">
                <span className="text-xs font-medium text-[#E75757] uppercase">
                  step • 02
                </span>
                <h6 className="text-[#FBFBFB] font-newstar text-[28px] uppercase">
                  We design
                </h6>
                <p className="text-[17px] font-medium text-[#C3C3C3]">
                  With the scope and requirements locked. We design the product
                  from the ground up, standard design system, high fidelity
                  mockups and interactive prototype delivered.
                </p>
              </div>
              <span className="lg:mt-46 mt-20">
                <img src="/pen.svg" alt="pen icon" />
              </span>
            </div>
            <div className="flex flex-col bg-[#1A1717] pt-12 pb-10 pl-12 pr-14">
              <div className="flex flex-col gap-y-4 min-h-48">
                <span className="text-xs font-medium text-[#E75757] uppercase">
                  step • 03
                </span>
                <h6 className="text-[#FBFBFB] font-newstar text-[28px] uppercase">
                  deploy
                </h6>
                <p className="text-[17px] font-medium text-[#C3C3C3]">
                  Following required reviews, your product is deployed and live
                  to be used by your users. Ready to generate revenue for your
                  business.
                </p>
              </div>
              <span className="lg:mt-46 mt-20">
                <img src="/rocket.svg" alt="rocket icon" />
              </span>
            </div>
          </div>
        </section>
        <section className="section lg:mt-30 lg:pb-30">
          <div className="flex flex-col lg:gap-y-12">
            <div className="border border-[#2D2A2A] py-8 px-12 flex items-center max-lg:flex-col w-full lg:justify-between">
              <div className="flex flex-col">
                <span className="font-medium text-[#C3C3C3] text-[24px]">
                  Scope Sprint
                </span>
                <h4 className="font-newstar text-[#FBFBFB] text-[60px] mt-6">
                  $1,000
                </h4>
                <span className="font-medium text-[#C3C3C3] mt-2">
                  100% credited towards build
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-x-4"></div>
              </div>
              <button className="bg-white flex items-center gap-x-2 p-3 h-fit w-fit">
                <span>Start a project</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L12 4"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.5 4H12V10.5"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="border border-[#2D2A2A] py-8 px-12 items-center flex max-lg:flex-col w-full lg:justify-between">
              <div className="flex flex-col">
                <span className="font-medium text-[#C3C3C3] text-[24px]">
                  MVP Build starts at
                </span>
                <h4 className="font-newstar text-[#FBFBFB] text-[60px] mt-6">
                  $10,000
                </h4>
                <span className="font-medium text-[#C3C3C3] mt-2">
                  For the first three clients
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-x-4"></div>
              </div>
              <button className="bg-white flex items-center gap-x-2 p-3 h-fit w-fit">
                <span>Start a project</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L12 4"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.5 4H12V10.5"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
