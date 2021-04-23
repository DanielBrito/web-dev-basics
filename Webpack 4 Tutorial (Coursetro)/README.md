# Webpack 4 Tutorial (Coursetro)

Available [here](https://www.youtube.com/watch?v=TzdEpgONurw).

## Notes

- Create project (inside the folder) and install (dev) dependencies:

  - `npm init -y`
  - `npm i -D webpack webpack-cli html-webpack-plugin html-loader webpack-dev-server`

- Update **_package.json_** file:
  ```
  "scripts": {
    "build": "webpack"
  }
  ```
- Create **_src_** folder with an **_index.js_** file inside.
- Transpiling the code:
  - `npm run build`
- Create an **_index.html_** with a script tag referencing **_index.js_**.
- Create a **_webpack.config.js_** to setup the Webpack configuration.
- After running `npm run build` the transpiled code is generate inside the **_dist_** folder.
- Include another script inside the **_package.json_** file, which will transpile the code after each update (and save), working as a live server reloader:
  ```
  "scripts": {
    "start:dev": "webpack serve"
  }
  ```
- Installing Babel dependencies:
  - `npm i -D @babel/core babel-loader @babel/preset-env`
- Including another rule to **_webpack.config.js_**, which will transpile all **_.js_** files:
  ```
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  },
  ```
- For working with assets (like images) another package is necessary:
  - `npm i -D file-loader`
- Then it's necessary to add another rule to **_webpack.config.js_**:

  ```
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      'file-loader',
      options: {
        esModule: false,
      },
    ],
  },
  ```

- For working with Sass some other dependencies are necessary:
  - `npm i -D node-sass style-loader css-loader sass-loader mini-css-extract-plugin`
- Create a **_styles_** folder with **_main.scss_** file inside.
- Then it's necessary to add another rule and plugin to **_webpack.config.js_**:

  ```
  {
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ],
  },
  ```

  ```
  new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css",
  }),
  ```

**Note:** The package file-loader is included in package.json but it doesn't work with babel-loader as expected, because after `npm run build` corrupted images were generated. I think there's a kind of conflict when both run together.