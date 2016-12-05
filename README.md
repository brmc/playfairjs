# Playfair.js

Playfair is (will be) a wrapper around various charting libraries with  
a consistent, fluent API allowing you swap between libraries with  
minimal overheard simply by swapping out the underlying charting  
engine.

That means you don't have to rewrite your code if you decide to change  
libraries.

But this project is still in its infancy so only basic support for  
C3js has been implemented. 


## Library Support Roadmap

| lib | url | status |
|-----|-----|---------|
| C3js | http://c3js.org/ | basic support |
| NVd3 | http://nvd3.org/ | |
| DCjs | https://dc-js.github.io/dc.js/ | |
| chartjs? | https://chartjs.org | |
| ?????  | | |

## Dependencies

* C3js v0.4.11 (D3 v3.5.x)
* mixwith

## Dev Dependencies

* browserify
* browserify-css
* babel-cli
* babel-preset-es2015 
* babelify 

## Build instructions

    $ npm install .
    $ npm run build
     
## Examples and usage

Look in `index.html` in the project root for basic usage instructions.  
In the future the API will be thoroughly documented.

To see the live examples, open the file in a browser or start the   
webserver of your choice.  I use the built-in python webserver:  

    python -m SimpleHTTPServer
    
Then navigate to http://localhost:8000

## Changelog

### v0.0.1-alpha
* everything!
* basic chart class
* C3js implementation
* mixins for various chart functions
* chart components added: axes, data sets, etc

## About the name

The package is named after William Playfair, one of the fathers of   
data visualization: https://en.wikipedia.org/wiki/William_Playfair