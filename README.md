# F1 Championships

Web application that allows users to check the winning drivers and the races they won in a specific season of the Formula 1 championship. It's currently limited to seasons between 2005 and 2015;

> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## What do you need?

- node v12.18.0 (You can use [nvm](https://github.com/nvm-sh/nvm) to easily change between node versions).
- npm

## How to run the application

- Clone this repo.
- Navigate to the project root on a terminal window.
- Then, run the development server:

```bash
npm install && npm run dev
```
- You will be able to access the application under [http://localhost:3000](http://localhost:3000).
- After the firs time you only need to run `npm run dev`.

## About the App

- The application was built using the [Next.js](https://nextjs.org/) framework, because of its simplicity and pre-render capabilities while being able to take advantage of the reactive nature of React.
- Styling is provided by [styled-components](https://styled-components.com/) choosen by its theming capabilities and Component based philosophy. The support and documentation are quite extensive making it a solid and recognized tool in the React's ecosystem.
- Data fetching is provided by [swr](https://swr.vercel.app/) which is the recomended tool for data fetching inside the Next framework, it provides reusable hooks, cache capabilities and built-in error handling.
- Unit testing is implemented with [jest](https://jestjs.io/).

## Issues or questions?

If you run into any trouble while running the project or have questions about it, feel free to drop me a message at [amauro85@gmail.com](mailto:amauro85@gmail.com). I will be more than happy to take a look.

Thank you! 🤓