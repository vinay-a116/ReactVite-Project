# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

------------------xxxxxxxxxx-------------------------

# Introduction

TODO: Onerehab admin portal uses antd

# Getting Started

TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:

1. Installation process
2. Software dependencies
3. Latest releases
4. API references

# Build and Test

TODO: Describe and show how to build your code and run the tests.

# Contribute

TODO: Explain how other users and developers can contribute to make your code better.

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:

- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)

# React App

## Quickstart

```bash
#install create-react-app if you don't already have 🧐
npm i -g create-react-app

#to bootstrap a project using this template
npx create-react-app <Your-Project-Name> --template file:./cra-template-ihis
```

## Preamble

As Single-Page applications (SPA) gains widespread adoption in the industry, IHiS SoftwarE Engrg & Development Depart (SEED) has decided to engage Tech Radar team to develop a starter-kit to accelerate development of Frontend projects.

React is the frontend framework of choice, however, React is an unopinionated framework which gives a lot of flexibility to do things your own way, Tech Radar has discussed within Frontend community to bring you a list of opinionated tools.

We have scoured and compiled a list of opinionated tools to help you get started with React.

**Packages included**:

- [Antd](https://ant.design/) - Component Library
- [i18n](https://www.i18next.com/) - Internationalization Support
- [Axios](https://axios-http.com/) - Http Client
- [React Router](https://reactrouter.com/) - SPA Routing
- [Redux Toolkit](https://redux-toolkit.js.org/) - Opinionated Redux library
- [Redux Saga](https://redux-saga.js.org/) - Redux side effect manager
- [Redux Persist](https://github.com/rt2zz/redux-persist) - Redux store persistence and rehydration library
- [Styled Components](https://styled-components.com/) - CSS in JS helper library

## Goals of this template

Improved Developer Experience (DevEx) with consistent project structure and code base across projects in SEED.

<p align="center">
  <img src="./img/devex.png" alt="drawing" width="400"/>
</p>

## Getting started

### Development environment

This template has been tested and developed on a M1 MacBook Pro, that being said, \*nix based OSes should work fine, for Windows environment, we need help in testing and please report
[issues](https://dev.azure.com/IHIS-HIP/TechRadar/_workitems/create/Bug).

#### 💡 Ansible playbook (Optional) - _For standardized development environment_

Tech Radar had also released an Ansible [playbook](https://github.com/murugaratham/ansible-dev-pc).
Do check it out if you want to have a consistent development environment and experience.

#### 💡 Eslint (Recommended)

> Skip this section if you have used our [playbook](https://github.com/murugaratham/ansible-dev-pc) to set up your environment.
> If you have not used our playbook, please ensure to accept recommendation by VS Code to install
> [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
>
> Check that your VSCode settings have the following configurations.
>
> ```bash
> "editor.formatOnSave": true,
> "editor.defaultFormatter": "esbenp.prettier-vscode",
> ```

#### 💡 Husky - git hooks (Recommended)

From our observations, we have found that git hooks are a great way to ensure your code is consistent across the team.

We have included `pre-commit` and `commit-msg` git hooks in our template which will run `lint-staged`, which in turns run `eslint`.

<details>

<summary>Expand to see provided configurations</Summary>

> package.json
>
> ```bash
> "src/**/*.{js,ts,jsx,tsx}": "eslint --fix"`
> ```
>
> .eslintrc
>
> ```bash
> "eslint:recommended",
> "plugin:react/recommended",
> "plugin:@typescript-eslint/recommended",
> "plugin:prettier/recommended",
> "prettier"
> ```
>
> .prettierrc
>
> ```json
> {
>   "singleQuote": true,
>   "trailingComma": "es5",
>   "useTabs": false,
>   "tabWidth": 2,
>   "printWidth": 120,
>   "endOfLine": "auto",
>   "overrides": [
>     {
>       "files": "*.ts",
>       "options": {
>         "parser": "typescript"
>       }
>     }
>   ]
> }
> ```

</details>

We highly recommend using [commitlint](https://commitlint.js.org/#/) in conjunction with [Conventional Changelog](https://github.com/conventional-changelog/commitlint) to enforce commit message conventions.
We have included husky set-up script in package.json, run the following to get started.

### How to set up husky

- Set up husky environment `npm run prepare` (this will install husky and set up hooks in `.husky/`)
  - Configuring pre-commit hook
  - `npx husky add .husky/pre-commit "npx --no-install lint-staged"`
  - 💡 _Hint: You can consider to run unit test on pre-commit if it suits your dev workflow_
- Configuring commitlint hook
  - `npx husky add .husky/commit-msg "npx --no-install commitlint --edit"`
  - For more info on commitlint [rules](https://commitlint.js.org/#/reference-rules), look the included `.commitlintrc`

## Included Sample To Do Backend

Assuming that, you have [Docker](https://www.docker.com/products/docker-desktop) installed.

```bash
# if you are on windows, please install wsl2 for bash here --> https://lmgtfy.app/?q=how+to+install+wsl2
# We included a self-contained to do backend Api in docker
./start-backend.sh
```

Once the container is started, go to http://localhost:8080/swagger/index.html

# Frontend

```bash
#install create-react-app if you don't already have 🧐
npm i -g create-react-app

#to bootstrap a project using this template
npx create-react-app <Your-Project-Name> --template file:./cra-template-ihis
```

A sample set of OpenApi is placed as part of the template. To test out the code generation feature, delete
`lib/util/api/code-gen` and run `npm run api-generation`, you should observe that the integration code is generated
for you.

### React-dev-inspector

Have issue looking for the exact component, line number and column position from browser?

<kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>c</kbd> to open React Dev Inspector.
An overlay will appear and show you the exact component, line number and column position, what more you say?
Click on it and you will jump straight to your IDE at the exact line and column! 😱

![React-dev-inspector](./img/react-dev-inspector.gif)

### Folder Structure

`/components`
Generic and reusable components.

`/hooks`
Generic and reuseable hooks.

`/services`
API integration related functions.

`/stores`
Redux reducer logic and associated actions.

`/utils`
Generic utility functions.

`/features`
All functionality related to a specific feature.

- `/features/[new-feature]/stores`
  Redux reducer logic and actions related to a specific feature.
- `/features/[new-feature]/components`
  Components related to a specific feature.

### Available Scripts

`start`, `build`, `test`
Standard react app script.

`analyze`
Analyze source map using source-map-explorer.

`prettier:fix`, `lint:fix`
Fix prettier and lint issues.

`generator:react` 🔥🔥🔥 react/redux code generation 🔥🔥🔥 (Try it!)

`generator:api` 🔥 typescript-axios client generation (based on swagger specs) 🔥

### Testing

_TBA_

### Build Pipeline

We have also bundled a standard azure-pipelines.yml, feel free to modify to suit your needs.

### Roadmap

- [x] Support nested route to generate AppSider
- [x] Support nested route to generate BreadCrumbs
- [x] include .env.sh
- [x] Document more in readme.md
- [x] azure-pipelines.yml
- [x] Custom layout support
- [x] Code generator for Api & React (features/components/store)
- [x] todo: https://www.npmjs.com/package/standard-version
- [x] Plop for common component to update tsconfig.paths.json
- [ ] Code generator for Common Component
- [ ] Add unit test for generator components
- [ ] Update all unit tests

# FAQ

- 🚫 npm audit warning
  - ```bash
    found 29 vulnerabilities (9 moderate, 19 high, 1 critical)
      run `npm audit fix` to fix them, or `npm audit` for details
    ```
  - false positive as explained in this github [issue](https://github.com/facebook/create-react-app/issues/11174#issuecomment-955712789)
  - But do stay vigilant and report to the right [party](https://github.com/facebook/create-react-app/blob/main/SECURITY.md) and inform Tech Radar team

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
