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
module.exports = {
    //need entry point (1)
    entry: entryPoint,

    //output
    output: {
        filename: '[name].js',
        path: exportPath,
    },
    
    //mode which mode you compile your code { production, development, none }
    mode: 'production',
}
