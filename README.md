# Github User Search

Query Github API for usernames and get a list of five users with similar
usernames and their respective public repos.

## Installation

Install dependencies and run the dev server:

```sh
pnpm install && pnpm dev
```

## Technical Features

The project utilizes the following technologies:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/): responsive, utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/): component library
- [Tanstack Query 5](https://tanstack.com/query/latest): data fetching, cache management, request batching, error handling
- [Vitest](https://vitest.dev/)
- [Vitest Coverage](https://vitest.dev/coverage)
- [React Testing Library](https://testing-library.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

Some key areas I've focused on include:

- user experience (basic keyboard accessibility, loading|error|empty states, etc.)
- modern data fetching (cache management, error handling, request batching)
- data presentation (responsive design, utility-first CSS with Tailwind, using a component library)

## Regarding tests

The project uses [Vitest](https://vitest.dev/) and [Vitest
Coverage](https://vitest.dev/coverage) to run tests. I did not however choose to
spend a lot of time here, being involved in multiple interview processes at the
moment. I have tried to deliver a minimal example.

## Deployment

The app is deployed using [Vercel](https://vercel.com) at https://gh-search-tau.vercel.app/
