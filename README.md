# Weather monorepo

Sample monorepo with two Typescript applications:

- **wether-server**. Sample express web Api. Exposes a weather random data endpoint (i.e. `/api/weather`) and serves the `weather-client` React web app in the root url (by copying the UI static files in the public folder).

- **wether-client**. Sample React web app. Consumes the `weather-server` web Api and displays the returned weather data.

Each project has it's own `package.json`, with specific dependencies and scripts. The root `package.json` file is used for common dependencies, repository setup (i.e. husky and dependencies installation) and cross-project scripts (i.e. formatting validation and static assets deployment).

## Motivation

The goal of this repository is to illustrate different ways of structuring interdependent Typescript projects. Several approaches are considered:

```bash
main
|
└─ base-code-extraction
   |
   ├─ 1-path-fixes
   |
   └─ 2-npm-project
      |
      ├─ 3-local-dependency
      |
      ├─ 4-npm-workspaces
      |
      └─ 5-prefixed-npm-workspaces
```

- **main**. Single monorepo combining interdependent individual repositories (i.e. [weather-client](https://github.com/capelski/weather-client) and [weather-server](https://github.com/capelski/weather-server)). At this stage only repository settings (e.g. prettier, husky, VSCode settings and and all-projects .gitignore folders) and runtime settings (e.g. all-projects tsconfig.json properties and all-projects dependencies) are shared.

- **base-code-extraction**: The duplicated Typescript code is extracted into a `weather-common` folder and imported from both `weather-client` and `weather-server` using relative imports. Introduces runtime errors that will fix it in following branches.

- **1-path-fixes**. Fixing the runtime errors by adapting relative paths that Typescript compilation modifies.

- **2-npm-project**. Fixing the runtime errors by turning the `weather-common` folder into an npm project.

- **3-local-dependency**. Fixing the runtime errors by turning the `weather-common` folder into an npm project and replacing the relative path imports with npm local dependencies.

- **4-npm-workspaces**. Fixing the runtime errors by turning the `weather-common` folder into an npm project and replacing the relative path imports with npm workspaces.

- **5-prefixed-npm-workspaces**. Fixing the runtime errors by turning the `weather-common` folder into an npm project and replacing the relative path imports with prefixed npm workspaces.
