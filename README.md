# Weather monorepo

Sample monorepo with two Typescript applications:

- **wether-server**. Sample express web Api. Exposes a random weather data endpoint (i.e. `/api/weather`) and serves the `weather-client` web app in the root url.

- **wether-client**. Sample React web app. Consumes the `weather-server` web Api and displays the returned weather data. Once built, it can be served by `weather-server` by copying the generated files to the server's `public` folder.

Each project has it's own `package.json`, with specific dependencies and scripts. The root `package.json` file is used for common dependencies, repository setup (i.e. husky and dependencies installation) and cross-project scripts (i.e. formatting validation and static assets deployment).

## Motivation

The goal of this repository is to illustrate different ways of structuring interdependent Typescript projects. Several approaches are considered:

- **1-shared-settings**. Single monorepo combining interdependent individual repositories (i.e. [weather-client](https://github.com/capelski/weather-client) and [weather-server](https://github.com/capelski/weather-server)). At this stage only repository settings (e.g. prettier, husky, VSCode settings and and all-projects .gitignore folders) and runtime settings (e.g. all-projects tsconfig.json properties and all-projects dependencies) are shared.

  - Advantage: No duplicated configurations

- **2.1-common-folder**. Problematic approach. The duplicated Typescript code is extracted into a `weather-common` folder and imported from both `weather-client` and `weather-server` using relative imports.

  - Advantage: No duplicated Typescript code

- **2.2-common-project**. The duplicated Typescript code is extracted into a `weather-common` npm project and imported from both `weather-client` and `weather-server` using relative imports.

  - Advantage: No duplicated Typescript code

- **3.1-paths-resolve**. Invalid approach. Starting from `2.2-common-project` branch, the `weather-common` relative imports in `weather-server` and `weather-client` are replaced with Typescript paths.

- **3.2-npm-resolve**. Starting from `2.2-common-project` branch, the `weather-common` project is installed as an npm local dependency in both `weather-server` and `weather-client`, replacing the relative imports with package imports.

- **4-workspaces**. npm workspaces are enabled on top of `3.2-npm-resolve` branch.

  - Advantage: No need for directory changes in npm scripts and faster scripts execution

- **5-weather-namespace**. Introducing the `@weather` namespace in package names, folder structure and workspaces.

  - Advantage: Removing potential conflicts between local packages and npm repository packages introduced in `4-workspaces`

- **6-source-navigation**. Typescript paths are used to enable source code direct navigation between projects

  - Advantage: Restoring source code navigation lost in `2.2-common-project` branch
