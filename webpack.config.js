const webpack = require('webpack');
const package = require('./package.json');

//require path
const path = require( 'path' );

//add entry points
var entryPoint = {
    //'entryname' : 'entry file location'
    'admin' : './src/scripts/index.js',
}

//output file name
var appName = 'app';

//require export path
var exportPath = path.resolve( __dirname, './assets/js' )

//all works here
module.exports = ( env, argv ) => {
    const devMode = argv.mode;
    
    //gets scripts value
    if ( 'production' === devMode ) { appName = '[name].min.js' }
    else if ( 'development' === devMode ) { appName = '[name].js' }
    else { appName = '[name].js' }

    return {
        //need entry point (1)
        entry: entryPoint,

        //output
        output: {
            filename: appName,
            path: exportPath,
        },

        //mode which mode you compile your code { production, development, none }
        mode: devMode ? devMode : 'development',
    }
}
