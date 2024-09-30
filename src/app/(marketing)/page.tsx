import Image from "next/image";
import Link from "next/link";

import { env } from "@/config/env.js";
import { siteConfig } from "@/config/site";
import { NavLink } from "@/components/ui/navigation/NavLinks";
import { Heading } from "@/components/ui/typography/Heading";
import { Icons } from "@/components/icons";
import { Statistics } from "@/components/marketing/statistics";

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.facebook}
            className="bg-ui rounded-2xl px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on Facebook
          </Link>
          <Heading size="6xl" as="h1">
            <span className="from-primary-uisolid to-secondary-uisolid inline bg-gradient-to-r bg-clip-text text-transparent">
              Bengaluru Cycling Club
            </span>
          </Heading>
          <Heading size="5xl" as="h1">
            Ride Recognize and Respect.
          </Heading>
          <p className="text-fgsubtle max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
            Join our community of cycling enthusiasts who share your passion for
            the open road and the thrill of the ride. Whether you&apos;re a
            seasoned pro or just starting out, we welcome all levels to come
            pedal with us..
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <NavLink asChild size="base" intent="primary" variant="solid">
              <Link href="/login">Members Connect</Link>
            </NavLink>
            <NavLink asChild size="base" variant="outline">
              <Link
                href={siteConfig.links.discord}
                target="_blank"
                rel="noreferrer"
              >
                Join Us
                <Icons.discordCircle className="mr-2" aria-hidden="true" />
              </Link>
            </NavLink>
          </div>
        </div>
      </section>

      <section id="about" className="container py-8 md:py-12 lg:py-24">
        <div className="bg-muted/50 rounded-lg border py-12">
          <div className="flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12">
            <Image
              src="/images/home/bcc_image.jpg"
              alt="Start your cycling journey"
              className="w-[300px] rounded-lg object-contain"
              width="300"
              height="300"
            />
            <div className="flex flex-col justify-between">
              <div className="pb-6">
                <Heading size="5xl" as="h2">
                  {/* <span className="from-primary-uisolid to-primary-uisoft bg-gradient-to-b bg-clip-text text-transparent"> */}
                  About Us {/* </span> */}
                </Heading>
                <p className="text-fgsubtle mt-4 leading-normal sm:text-lg sm:leading-7">
                  Welcome to Bengaluru Cycling Club, a community where
                  heart-pounding rides meet the warmth of friendship and the
                  thrill of discovery. Born from a simple yet profound love for
                  cycling, our club has grown into a vibrant tapestry of
                  cyclists united by a shared passion for the open road.
                </p>
              </div>

              <Statistics />
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="bg-panel container space-y-6 py-8 md:py-12 lg:py-24 dark:bg-transparent"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Membership Benefits
          </h2>
          <p className="text-fgsubtle max-w-[85%] leading-normal sm:text-lg sm:leading-7">
            Become part of the biggest club in Bengaluru and get access to: Club
            training rides, Coaching, Recreational rides, Road racing, Sportives
            and Women only sessions… You&apos;ll also get some great member
            benefits :)
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="bg-canvas relative overflow-hidden rounded-lg border p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 26 26" className="h-12 w-12 fill-current">
                <g fill="none">
                  <defs>
                    <mask id="pepiconsPencilCrownCircleFilled0">
                      <path fill="#fff" d="M0 0h26v26H0z" />
                      <g fill="#000">
                        <path
                          fillRule="evenodd"
                          d="m17.896 16.818l1.515-5.766l-2.214 1.41a2 2 0 0 1-2.74-.578L13 9.695l-1.458 2.19a2 2 0 0 1-2.74.577l-2.213-1.41l1.515 5.766zm-10.77-6.61c-.767-.489-1.736.218-1.505 1.098l1.516 5.766a1 1 0 0 0 .967.746h9.792a1 1 0 0 0 .967-.746l1.516-5.766c.23-.88-.738-1.586-1.505-1.098l-2.214 1.41a1 1 0 0 1-1.37-.288l-1.458-2.19a1 1 0 0 0-1.664 0l-1.458 2.19a1 1 0 0 1-1.37.289z"
                          clipRule="evenodd"
                        />
                        <path d="M13.944 6.945a.945.945 0 1 1-1.89.002a.945.945 0 0 1 1.89-.002M21.5 8.836a.945.945 0 1 1-1.89.001a.945.945 0 0 1 1.89 0M6.389 8.836a.945.945 0 1 1-1.89.001a.945.945 0 0 1 1.89 0" />
                        <path
                          fillRule="evenodd"
                          d="M8.25 19a.5.5 0 0 1 .5-.5h8.737a.5.5 0 1 1 0 1H8.75a.5.5 0 0 1-.5-.5"
                          clipRule="evenodd"
                        />
                      </g>
                    </mask>
                  </defs>
                  <circle
                    cx="13"
                    cy="13"
                    r="13"
                    fill="currentColor"
                    mask="url(#pepiconsPencilCrownCircleFilled0)"
                  />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Exclusive Access</h3>
                <p className="text-fgsubtle text-sm">
                  Members-only Challenges and Events.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-canvas relative overflow-hidden rounded-lg border p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg className="h-12 w-12 fill-current" viewBox="0 0 26 26">
                <g fill="none">
                  <defs>
                    <mask id="pepiconsPencilGiftCircleFilled0">
                      <path fill="#fff" d="M0 0h26v26H0z" />
                      <g fill="#000">
                        <path
                          fillRule="evenodd"
                          d="M6 8h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1m14 12V9H6v11z"
                          clipRule="evenodd"
                        />
                        <path d="M12.5 8.5h1v12h-1z" />
                        <path d="M5 13.5h16v1H5z" />
                        <path
                          fillRule="evenodd"
                          d="M11.943 4.554c1.125.978 1.787 3.001 1.035 3.866c-.75.864-2.374.27-3.659-.847c-1.094-.951-1.469-2.399-.712-3.269c.756-.87 2.242-.701 3.336.25M9.975 6.82c.897.779 2.033 1.194 2.249.945c.3-.344-.174-1.792-.937-2.455c-.725-.63-1.595-.73-1.926-.349c-.33.38-.11 1.229.614 1.859"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M14.298 4.554c-1.124.978-1.787 3.001-1.035 3.866c.75.864 2.374.27 3.66-.847c1.094-.951 1.469-2.399.712-3.269c-.756-.87-2.242-.701-3.337.25m1.969 2.265c-.897.779-2.033 1.194-2.249.945c-.3-.344.174-1.792.936-2.455c.725-.63 1.596-.73 1.926-.349c.33.38.111 1.229-.613 1.859"
                          clipRule="evenodd"
                        />
                      </g>
                    </mask>
                  </defs>
                  <circle
                    cx="13"
                    cy="13"
                    r="13"
                    fill="currentColor"
                    mask="url(#pepiconsPencilGiftCircleFilled0)"
                  />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Discounts</h3>
                <p className="text-sm">
                  Deals on gear and services from our partners.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-canvas relative overflow-hidden rounded-lg border p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg className="h-12 w-12 fill-current" viewBox="0 0 26 26">
                <g fill="none">
                  <defs>
                    <mask id="pepiconsPencilTShirtCircleFilled0">
                      <path fill="#fff" d="M0 0h26v26H0z" />
                      <g fill="#000">
                        <path
                          fillRule="evenodd"
                          d="m5.668 13.009l1.166-.583V19.5a2.5 2.5 0 0 0 2.5 2.5h7.335a2.5 2.5 0 0 0 2.5-2.5v-7.075l1.166.581a.5.5 0 0 0 .71-.338l.945-4.236a.5.5 0 0 0-.135-.463l-2.248-2.24A2.5 2.5 0 0 0 17.842 5h-2.007a.5.5 0 0 0-.493.415c-.287 1.658-1.04 2.409-2.342 2.409c-1.3 0-2.054-.751-2.34-2.409A.5.5 0 0 0 10.167 5H8.161a2.5 2.5 0 0 0-1.766.73L4.15 7.97a.5.5 0 0 0-.135.462l.943 4.238a.5.5 0 0 0 .711.338M8.161 6h1.598c.436 1.84 1.538 2.824 3.241 2.824S15.806 7.84 16.243 6h1.6a1.5 1.5 0 0 1 1.058.437l2.053 2.046l-.745 3.343l-1.317-.656a.5.5 0 0 0-.723.448V19.5a1.5 1.5 0 0 1-1.5 1.5H9.334a1.5 1.5 0 0 1-1.5-1.5v-7.882a.5.5 0 0 0-.724-.448l-1.316.658l-.744-3.345l2.051-2.045A1.5 1.5 0 0 1 8.161 6"
                          clipRule="evenodd"
                        />
                        <path d="M15 13.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1z" />
                      </g>
                    </mask>
                  </defs>
                  <circle
                    cx="13"
                    cy="13"
                    r="13"
                    fill="currentColor"
                    mask="url(#pepiconsPencilTShirtCircleFilled0)"
                  />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">BCC Kit</h3>
                <p className="text-fgsubtle text-sm">
                  Proudly show case your BCC Jerseys.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-canvas relative overflow-hidden rounded-lg border p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg className="h-12 w-12 fill-current" viewBox="0 0 48 48">
                <g fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M42 17a6 6 0 0 1-5.57 5.985l-3.051 3.05c.855 1.447 1.24 3.367 1.429 5.502c.192 2.169.192 4.705.192 7.429V40h-2v-1c0-2.764 0-5.215-.184-7.286c-.161-1.814-.455-3.227-.943-4.253c-1.197-.16-2.29-.762-3.226-1.504c-1.104-.874-2.086-2.015-2.894-3.115a29.404 29.404 0 0 1-2.105-3.342c-1.344.93-3.155 1.5-5.148 1.5c-4.142 0-7.5-2.462-7.5-5.5c0-2.793 2.838-5.1 6.515-5.453C18.797 7.692 22.335 6 26.5 6c4.708 0 8.616 2.163 9.369 5.001L36 11a6 6 0 0 1 6 6m-11.973.573A14.46 14.46 0 0 1 26.5 18c-.434 0-.862-.018-1.28-.054l-.076.108c.108.208.25.477.424.787a27.419 27.419 0 0 0 1.908 2.967v-.146c1.105 0 2.265-.597 3.227-1.308c.074-.054.146-.108.215-.163a5.964 5.964 0 0 1-.891-2.618m2.226 4.113a5.994 5.994 0 0 0 1.694.953l-2.62 2.62c-.465-.188-.946-.48-1.439-.87a10.58 10.58 0 0 1-1.003-.914c1.183-.306 2.23-.939 3.006-1.511c.126-.093.247-.186.362-.278"
                    clipRule="evenodd"
                  />
                  <path d="M15.504 28.002a2.5 2.5 0 1 0-.004-5a2.5 2.5 0 0 0 .004 5m-7 4a2.5 2.5 0 1 0-.004-5a2.5 2.5 0 0 0 .004 5M28.002 29.5a2.5 2.5 0 1 1-5 .004a2.5 2.5 0 0 1 5-.004M15 29a2 2 0 0 1 2 2v2h2a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m-5 6a2 2 0 1 0-4 0v5a2 2 0 0 0 2 2h4a2 2 0 1 0 0-4h-2zm16-2a2 2 0 0 0-2 2v3h-2a2 2 0 1 0 0 4h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2" />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Community</h3>
                <p className="text-fgsubtle text-sm">
                  A supportive network of fellow cyclists.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-canvas relative overflow-hidden rounded-lg border p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg className="size-12 fill-current" viewBox="0 0 26 26">
                <g fill="none">
                  <defs>
                    <mask id="pepiconsPencilHandshakeCircleFilled0">
                      <path fill="#fff" d="M0 0h26v26H0z" />
                      <g fill="#000">
                        <path
                          fillRule="evenodd"
                          d="M6.646 5.49a1 1 0 0 0-1.322.502l-2.163 4.803a1 1 0 0 0 .5 1.322l1.49.671a1 1 0 0 0 1.323-.5l2.163-4.804a1 1 0 0 0-.5-1.322zm-1.773 5.927a.681.681 0 1 0 .56-1.242a.681.681 0 0 0-.56 1.242m17.142.831a1 1 0 0 0 .58-1.29L20.73 6.034a1 1 0 0 0-1.29-.581l-1.527.579a1 1 0 0 0-.58 1.29l1.866 4.925a1 1 0 0 0 1.289.581zm-2.937-5.445a.681.681 0 1 0 .483 1.274a.681.681 0 0 0-.483-1.274"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M17.885 7.107h.008a.5.5 0 1 0-.087-.997h-.008l-.026.003l-.096.01a41.841 41.841 0 0 0-1.516.172c-.895.117-2.004.297-2.73.539c-.352.117-.724.344-1.08.604c-.361.264-.735.585-1.093.918a28.131 28.131 0 0 0-1.819 1.885c-.419.474-.516 1.23-.024 1.766c.32.346.82.784 1.468.98c.677.203 1.457.124 2.254-.468l.999-.645a.35.35 0 0 1 .018-.011c.143.087.342.237.58.436c.26.218.542.475.805.722a34.353 34.353 0 0 1 .88.86l.055.057l.014.014l.005.005l.059.06l.075.039c.403.2.846.128 1.19.012c.358-.12.714-.324 1.017-.525a8.893 8.893 0 0 0 1.075-.849l.018-.016l.005-.005l.001-.001s-.088-.31-.432-.672l-.271.34L19 13l-2.508.957L17 13.5l-.268-.717a34.008 34.008 0 0 0-.508-.49c-.27-.254-.568-.525-.85-.76c-.273-.23-.557-.448-.794-.578c-.394-.216-.78-.056-.988.079l-1.028.664l-.014.01c-.555.416-1.011.432-1.38.321c-.4-.12-.755-.412-1.02-.7c-.083-.09-.107-.263.037-.426a27.145 27.145 0 0 1 1.752-1.815c.34-.317.682-.61 1.001-.843c.326-.238.6-.393.807-.462c.624-.208 1.645-.379 2.544-.498a40.906 40.906 0 0 1 1.478-.167l.093-.009z"
                          clipRule="evenodd"
                        />
                        <path d="M17.127 13.177a34.493 34.493 0 0 0-.395-.394L17 13.5l-.508.457L19 13l.229-.66l.271-.34l-.255-.054l-.003.002l-.014.013l-.054.05a8.18 8.18 0 0 1-.895.699c-.27.18-.543.33-.783.41c-.186.063-.302.068-.369.057" />
                        <path
                          fillRule="evenodd"
                          d="m8.047 8.068l-.197-.46l-.197-.46l.04-.016l.113-.048a92.636 92.636 0 0 1 1.67-.69a37.63 37.63 0 0 1 1.372-.523c.203-.072.392-.134.55-.179c.136-.039.31-.084.452-.084c.13 0 .267.03.38.06c.122.033.256.077.392.127c.274.1.583.23.869.356a29.066 29.066 0 0 1 .992.466l.066.032l.018.009l.006.003a.5.5 0 0 1-.447.895l-.005-.003l-.016-.008l-.062-.03a28.804 28.804 0 0 0-.959-.45a13.126 13.126 0 0 0-.803-.33a3.822 3.822 0 0 0-.309-.1a.928.928 0 0 0-.119-.026l-.009.002c-.02.003-.073.014-.172.042a8.91 8.91 0 0 0-.492.161c-.388.137-.865.322-1.332.509a86.968 86.968 0 0 0-1.651.681l-.111.047zm-.657-.263a.5.5 0 0 1 .263-.656l.197.46l.197.459a.5.5 0 0 1-.657-.263m-1.903 3.96a.5.5 0 0 1 .707-.02l-.344.363l-.343.364a.5.5 0 0 1-.02-.707m4.57 3.387l2.763 1.036a1.5 1.5 0 0 0 1.587-.344l2.09-2.09a.5.5 0 0 1 .707.708l-2.09 2.09a2.5 2.5 0 0 1-2.645.572l-2.82-1.057l-.023-.011a3.007 3.007 0 0 1-.434-.293c-.162-.124-.352-.28-.557-.454a56.53 56.53 0 0 1-1.358-1.199a127.981 127.981 0 0 1-1.623-1.5l-.109-.102l-.038-.036l.343-.364l.344-.363l.037.035l.107.101a131.968 131.968 0 0 0 1.61 1.488c.46.417.935.84 1.333 1.178c.2.169.377.313.52.424c.132.101.215.157.256.18M6.67 17.288a.5.5 0 0 1 .703-.063l.959.8a1.5 1.5 0 0 0 .753.334l1.236.174a.5.5 0 1 1-.138.99l-1.237-.173a2.5 2.5 0 0 1-1.255-.557l-.959-.8a.5.5 0 0 1-.063-.705"
                          clipRule="evenodd"
                        />
                      </g>
                    </mask>
                  </defs>
                  <circle
                    cx="13"
                    cy="13"
                    r="13"
                    fill="currentColor"
                    mask="url(#pepiconsPencilHandshakeCircleFilled0)"
                  />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Access to Expertice</h3>
                <p className="text-fgsubtle text-sm">
                  Benefit from the collective knowledge of a group of experts.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-canvas relative overflow-hidden rounded-lg border p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg className="size-12 fill-current" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M253.813 14.47c-132.537 0-240.188 107.65-240.188 240.186c0 132.537 107.65 240.156 240.188 240.156C386.349 494.813 494 387.192 494 254.656S386.35 14.47 253.812 14.47zm0 18.686c122.436 0 221.5 99.064 221.5 221.5c0 17.96-2.133 35.412-6.157 52.125l-44.906-8.686l-20.53-71.594l-1.376-4.844l-4.844-1.5l-58.063-17.937l-66.906-128.626l-4.75-9.156l-8.655 5.624l-91.094 59.25l-2.936 1.907l-.97 3.374L116.19 301.97l-70.22 29.436c-8.82-23.91-13.656-49.753-13.656-76.75c0-122.436 99.064-221.5 221.5-221.5zm.812 62.125l-52.53 104.595l16.218 134.438l90.125-61.938v62.97l-23.563 6.25L305.72 470.03c-16.646 3.988-34.03 6.095-51.908 6.095c-88.813 0-165.33-52.117-200.656-127.47l74.406-31.217l4.126-1.72l1.25-4.312l48.187-168.28z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Exploration and Adventure</h3>
                <p className="text-fgsubtle text-sm">
                  Discover new routes and sceanic landscapes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="text-fgsubtle leading-normal sm:text-lg sm:leading-7">
            These benefits not only make cycling more enjoyable but also
            contribute to a stronger sense of community and shared passion for
            the sport.
          </p>
        </div>
      </section>
      <section id="inspiration" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Always Cheering You On!
          </h2>
          <p className="text-fgsubtle max-w-[85%] leading-normal sm:text-lg sm:leading-7">
            We&apos;re here to motivate, inspire, and reward! You make our day
            with your constant effort. Your achievements makes our heart sing,
            and we&apos;re sure that you&apos;re just getting started! Get ready
            to hit your personal goals with us, and we&apos;ll always be there
            to cheer you on.. <br />
            <Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              -- Team Bcc
            </Link>
            .{" "}
          </p>
        </div>
      </section>
    </>
  );
}
