# Urban Riders

An open source Web Application and platform to organize and participate in fitness and sporting events, connect to Strava and compete in challenges, with exclusive rewards and gamified achievements.

> **Warning**
> This app is a work in progress. I'm building this in public. You can follow the progress on this README.
> See the roadmap below

## About this project

This platform is specific for one cycling club and enables to manage various club activities, challenges, events and blogs. Some of the Key features being built or planned to be built

- [ ] Basic Website features including a responsive header footer and mobile navigation
- [ ] Marketing home page which display
  - [ ] Latest Posts
  - [ ] Featured Events
  - [ ] Featured Products
  - [ ] Recent Marketplace Ads
- [ ] A ecommerce Marketplace where users and members will be able to see
  - [ ] Featured Products
  - [ ] Recent Ads
  - [ ] Featured Stores
- [ ] A Events listing page enabling users and members find and participate in events
- [ ] A Blogs listing page which shows
  - [ ] Latest Posts
  - [ ] Featured Posts ( Most liked)
  - [ ] Blog categories and posts under it
  - [ ] Various Tags for blogs
- [ ] A Challenges Page ( Show what you get by login) (TBD)
- [ ] A basic dashboard shell with a page header, side navigation and a botom bar for mobile view
- [ ] A dashboard which enabled admins to
  - [ ] create and edit events
  - [ ] create and edit challenges
  - [ ] manage users and members
  - [ ] manage budgets and inventory
- [ ] A dashboard which enable users and members to
  - [ ] view and edit profile
  - [ ] create posts
  - [ ] manage their settings and preferences
  - [ ] manage their orders
  - [ ] view and subscribe to challenges
  - [ ] view club activities and leaderboards
  - [ ] view their fitness levels and progress
  - [ ] view their stats and personal records
  - [ ] view their achivements and badges

## Note on Performance

> **Warning** > **Expect some performance hits when testing the dashboard**.
> If you see something broken, you can raise an Issue .

## Technical Features

- New `/app` dir,
- Routing, Layouts, Nested Layouts and Layout Groups
- Data Fetching, Caching and Mutation
- Loading UI
- Route handlers
- Metadata files
- Server and Client Components
- API Routes and Middlewares
- Authentication using **Lucia.js**
- Database on **Convex**
- UI Components built using **Radix UI**
- Documentation and blog using **MDX** and **Contentlayer**
- Payments and Subscriptions using **Stripe**
  - You can test the payment flow end to end using Stripe's test card numbers
- Styled using **Tailwind CSS**
- Validations using **Zod**
- Written in **TypeScript**

## Known Issues

A list of things not working right now:

1. ~Authentication (use email)~
2. ~[Next.js 13: Client side navigation does not update head](https://github.com/vercel/next.js/issues/42414)~
3. [Cannot use opengraph-image.tsx inside catch-all routes](https://github.com/vercel/next.js/issues/48162)
4. All color variables from radix are included using windy-radix-pallete make it to use only specific pallete
5. Fix warning displayed using duration arbitary utility class

## Why not tRPC, Turborepo or X?

I might add this later. For now, I want to see how far we can get using Next.js only.

If you have some suggestions, feel free to create an issue.

## Running Locally

- Install dependencies using pnpm:

```sh
pnpm install
```

- Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

- Start the development server:

```sh
pnpm dev
```

To test the payments flow, follow these steps:

1. Sign up for Stripe for free at `https://stripe.com/`
2. Install the stripe CLI

3. Run in local
   `stripe listen --forward-to localhost:5173/stripe`
   or
   register the webhook endpoint’s URL `https://<CONVEX DEPLOYMENT>.convex.site/stripe` using the Webhooks section in the Developer Dashboard

4. Copy the "Your webhook signing secret" from the output of the listen command, and set it as `STRIPE_WEBHOOKS_SECRET` environment variable on your Convex dashboard
5. Copy your test secret API key from the code example on `https://stripe.com/docs/checkout/quickstart` and set it as `STRIPE_API_KEY` environment variable on your Convex dashboard

You can then use the test credit card details to go through the payment flow, see `https://stripe.com/docs/checkout/quickstart#testing`
Test credit card for India : 4000003560000008

## License

Licensed under the [MIT license](https://github.com/phaneendra/urbanriders/blob/main/LICENSE.md).

## Scratch

Join our Story

Ready to roll? Sign up today and be part of our next adventure!

As needed, download the Discord app for your phone/tablet or Windows 10/11 pc.
You'll need a Discord account. If you don't have one, select Create Discord Account
You'll also need to join the Bengaluru Cycling Club Discord channel, select https://discord.gg/xxxxx then Accept Invite
Start the Discord app on your device. You can also run it from a web browser by selecting here
Use the Text channel, general to ask questions, share riding experiences or to give feedback

Our Rides

The Club is too big and varied for us to all meet together and go for a ride, so, naturally, the Members have formed many groups of their own to ride and socialise. It is daunting for new members to find out what is going on. Why not make it easy for new (and old!) members, and describe the group(s) you are in? Any Club Member can request Admin or Volunteers to create a Group Channel. Tell us where you meet and how you communicate (Facebook, WhatsApp, Messenger, etc.). You can use the website itself or group specific Discord channel to send messages to other Group members, or just point them to your preferred communications channel.

Explore all BCC Groups Note: Groups are only visible to logged-in Club Members.
