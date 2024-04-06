# Nasco Test
This project is based on Next.js & NextUI Template.\
You'll find below the instructions for setting up the project, then the existing readme file for NextJS/NextUI template.

## Setup Requirements
- Windows/Linux/MacOS *(doesn't matter)*
- NodeJS and NPM package manager

## Libraries & Dependencies
- NextJS with app router
- NextUI component library
- `useSWR` npm package for data fetching and caching
- tailwind css for styling
- `randomuser.me` api for fake list of users

## Running the Code

`git clone https://github.com/omneimneh/nasco-test.git` \
`cd nasco-test` \
`npm install` \
`npm run dev` *to start in development mode*

The project is very simple. You can navigate to `/users` to see the list of users.

## Limitations
- Server side searching is not supported by the API
- Editing and deleting is also not supported by the API

## Side Notes
- I did not use redux since I did not find any use case for it in the project.
- <ins>(Just a personal preference)</ins> Even if there were, for simpler applications I personally recommend mobx in terms of performance (since mobx state is mutable and there is no need to copy objects) and in terms of usage (no boilerplate code).
- <ins>(I'll try to add it)</ins> I'm a big advocate of unit tests, but in this case, due to time limitations, I had to skip this step.
- <ins>(I'll try to add it)</ins> Animations.

## Thank you

Thank you for reviewing my code. \
I highly appreciate your time and effort, and thanks for considering me.


---

<br>
<br>


*(The rest is just the project template Readme.MD)*

# Next.js & NextUI Template

This is a template for creating applications using Next.js 13 (app directory) and NextUI (v2).

## Technologies Used

- [Next.js 13](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use


### Use the template with create-next-app

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/nextui-org/next-app-template
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).