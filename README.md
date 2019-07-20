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

