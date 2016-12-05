# caveman

Caveman allows you to create visualizations 

Caveman is (will be) a wrapper around various charting libraries with  
a consistent, fluent API allowing you swap between libraries with  
minimal overheard simply by swapping out the underlying charting  
engine.

That means you don't have to rewrite your code if you decide to change  
libraries.


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
* babel-cli
* babel-preset-es2015 
* babelify 

## Build instructions

    $ npm install .
    $ npm run build
     
