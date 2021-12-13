# toy robot simulator

This coding challenge is aiming to implement a set of actions that can simulate a toy
robot’s actions, including move, which is to move a step forwards according to its
face direction; rotate, including left rotation and right rotation. After this action is
triggered, the direction of the robot’s face changed. According to four straight
directions, when rotation of left or right happens, the robot performs rotating in a
way of anti-clockwise or clockwise; place is used to put the robot on a predefined
tabletop; report is used to output the current location of the robot.

## Getting Started

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

### Clone repository to your local repository

To clone the repository, use the following commands:

```sh
git clone git@github.com:LIIIIINN/Toy-Robot-Simulation.git
npm install
```

## Available Scripts to run this toy robot simulator

- `npm run clean` - remove coverage data, Jest cache and transpiled files,
- `npm run prebuild` - lint source files and tests before building,
- `npm run build` - transpile TypeScript to ES6,
- `npm run build:watch` - interactive watch mode to automatically transpile source files,
- `npm run lint` - lint source files and tests,
- `npm run test` - run tests,
- `npm run test:watch` - interactive watch mode to automatically re-run tests
- `npm start` - start toy robot simulator

## Instructions

The typical usage of this project is following this way:

After cloned to your local directory, open terminal, and make sure you have nodejs installed on your machine

- 1. `npm i` - to install dependecnies
- 2. `npm run build` - to compile to ES6,
- 3. `npm start` - project is running, interacting with terminal,
- 4. `command(mac) or ctrl(win) + c` - to stop running

## Artifacts

- please see the artifacts folder under __tests__

## License

Licensed under the APLv2. See the [LICENSE](https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-4.4-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2016.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v14.x/docs/api/
[gha-badge]: https://github.com/jsynowiec/node-typescript-boilerplate/actions/workflows/nodejs.yml/badge.svg
[gha-ci]: https://github.com/jsynowiec/node-typescript-boilerplate/actions/workflows/nodejs.yml
[typescript]: https://www.typescriptlang.org/
[typescript-4-4]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE
[sponsor-badge]: https://img.shields.io/badge/♥-Sponsor-fc0fb5.svg
[sponsor]: https://github.com/sponsors/jsynowiec
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[wiki-js-tests]: https://github.com/jsynowiec/node-typescript-boilerplate/wiki/Unit-tests-in-plain-JavaScript
[prettier]: https://prettier.io
[volta]: https://volta.sh
[volta-getting-started]: https://docs.volta.sh/guide/getting-started
[volta-tomdale]: https://twitter.com/tomdale/status/1162017336699838467?s=20
[gh-actions]: https://github.com/features/actions
[repo-template-action]: https://github.com/jsynowiec/node-typescript-boilerplate/generate
