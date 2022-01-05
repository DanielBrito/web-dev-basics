# Refactoring (Martin Fowler) - First Example

This is the first exemple on refactoring an existing code given by Martin Fowler on his classical book [Refactoring: Improving the Design of Existing Code](https://www.amazon.com.br/Refactoring-Improving-Design-Existing-Code/dp/0134757599).

## Steps To Reproduce (before or after)

### Instalation

- Create and access a new directory

- Start the project with `yarn init -y` (in my case)

  - Note: If you are just trying `before` or `after`, use `yarn install` inside the respective folder, and skip to the **Running** section

- Add [Babel](https://babeljs.io/docs/en/) dependencies to transpile the code: `yarn add @babel/cli @babel/core @babel/preset-env`

- Configure a basic `.babelrc` file with:

  ```
  { "presets": ["@babel/preset-env"] }
  ```

- Add a script to build the project inside `package.json`:

  ```
    {
      "name": "before",
      "version": "1.0.0",
      "main": "index.js",
      "scripts": {
        "build": "babel src -d build --copy-files"
      },
      "license": "MIT",
      "dependencies": {
        "@babel/cli": "^7.16.7",
        "@babel/core": "^7.16.7",
        "@babel/preset-env": "^7.16.7"
      }
  }
  ```

### Project

- Created a `src` folder to add the code and the mock info

- Created a `data` folder to add the Json files (`invoices.json` and `plays.json`) from the example (with an extra company, in my case)

- Implemented the code following each refactoring step (a great exercise)

### Running

- First, build with `yarn build`, which will generate the `build` folder with the transpiled code, and copies of the Json files (because of the flag `--copy-files`)

- Access the `build` folder and run `node index.js`

- The result will be printed on the console.
