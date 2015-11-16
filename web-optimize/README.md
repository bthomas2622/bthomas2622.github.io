Ben Thomas' frontend-nanodegree-mobile-portfolio
===============================

# Website Performance Optimization portfolio project

My challenge was to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques I picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

###Approaches taken to optimize critical rendering path and performance in index.html
* added media query for css file for scenarios of max-width of screen was 480px
* removed online font
* added "async" tag to javascripts that did not impact DOM or CSSOM 
* minify javascript
* moved all css internal to html
* utilized gulp/GIMP to compress and resize images where needed 
* utilized the html meta tag "CACHE-CONTROL" to designate "PUBLIC" status

###Strategies utilized in main.js to achieve 60fps in pizza.html
* replaced all querySelector(s) with getElement(s). querySelector is slower since it has more a more elaborate search that works from a static node list rather than a live nodellist that getElement uses
* moved all variables inside for loops that were calcuated to be the same each time outside the for loop
* changed the amount of pizzas being generated from 200 to 25 since they are not all visible on screen
* calculated some actionas that were repeated calculations (dx and newwidth)
* added "backface-visiblity: hidden" style to the "mover" class so that the browser will only repaint moving pizzas rather than whole screen 


###Key Gulp plugins used
* imageResize - used to resize the massive pizzeria image
* imageMin - used to optimize all images 
* uglify - used to minify js
* autoprefixer - used to make browser agnostic
* minifycss - used to minify css, didnt actually end up mattering since i moved all internal
* rename - used to rename minified files to designate the minimized ones

#### Directory Structure

the index.html file contains the central example webpage that is being optimized for this project. The dist folder holds the optimized css, js, and images. the "views" folder contains the home page (pizza.html) and associated files for the pizza fps optimization portion of the project

#### Contributing

Anyone is welcome to re-use the code used in this project.

#### References

* [Udacity Website Performance Optimization Class](https://www.udacity.com/course/website-performance-optimization--ud884)

#### Contact Me

For any questions please email me at _bthomas2622@gmail.com_

#### License

The content of this repository is not licensed. 




