For Egghead course Modern Javascript Tooling with React

LESSON 4:
used npm install to get webpack and webpack-cli - both of these are stuffed into node_modules and puts the webpack executable into the bin directory in node_modules

running webpack w/ no config defaults to building the code into the /dist root folder

this does a production build

we can add a script in the package.json file to run webpack with the defaults. Also, you can use the "--" operator to pass other output to it (like the --mode development flag).

we want to ignore dist and node_modules in git because they are compiled directories

LESSON 5:
add webpack.config.js which tells webpack where to find our entrypoint(?) and tells it where to put our output (which is default but we're typing this just to be explicit).

LESSON 6:
where we add the mode flag to webpack.config.js

LESSON 7:
installed Babel and figured out how to transform the output using the babel executable like so:
$(npm bin)/babel ./src/greet.js --presets=@babel/preset-env

LESSON 8: 
configure Babel to transform the files before we run npm run build using Babel loader. Configuration is in the module key in the object exported in webpack.config.js.

LESSON 9:
add in React
configure babel to use preset-react to compile JSX before the build process

LESSON 10: 
add a Javascript bundle with a webpack plugin. This one injects our JS tag into a template we pass to the HTMLWebpackPlugin plugin in webpack.

LESSON 11: 
configure webpack to run in dev watch mode. Also configure a handy script to make it do this.

LESSON 12:
Splitting config into a production config and a dev config. We configure a base config file and then use webpack-merge to splice the base config file with overrides for PROD and DEV.

LESSON 13:
install webpack-dev-server which autobuilds changes and reloads the browser. Add options in the webpack.config.dev.js file to control the port and an option in package.json to automatically open a webpage to the webpack-dev-server.

LESSON 14:
Add the ability to debug source in dev mode by adding the source-map value to the devtool key in the config.

LESSON 15: 
Add the plugin-proposal-class-properties to our babel config to support local state in our React component.

LESSON 16:
import css using the style and css loaders in webpack.

LESSON 17:
add hot module reloading. Updated package.json to have a new script dev:hot, updated webpack.config.base to include the new plugin and added the HOC code to App.js.

LESSON 18: 
call other npm scripts from another

LESSON 19:
add webpack-bundle-analyzer