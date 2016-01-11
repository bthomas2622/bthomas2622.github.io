Ben Thomas' frontend-nanodegree-feedreader
===============================

# **JavaScript Testing Project - Feed Reader Testing**

In this project I was given a web-based application that reads RSS feeds. The [Jasmine](http://jasmine.github.io/) test suite has included with a basic test suite initiated. I added the following tests to the project: 

* Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
* Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
* Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
* Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
* Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
* Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.

## How to "Run"

To run this project simply open the "index.html" file in a browser of your choice.

## Jasmine Library Overview

Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests. 

### Jasmine Syntax Utilized

* "Describe" is used to describe a suite, or set of specs
* "It" is used to define a specification or spec, the exact feature we are testing
* Each test starts with a call to "expect" which receives a single value applied with a comparison method.
* Comparison method example - "toBe"
* "beforeEach" function automates a function being run before each test

#### Directory Structure

The index.html fild contains the application. The css folder holds the stylesheet. The javascript (js) folder holds the app logic (app.js). The jasmine folder contains two folders. The jasmine\lib folder holds the jasmine library. The jasmine\spec folder holds the javascript facilitating the testing "feedreader.js"

#### Contributing

Anyone is welcome to re-use the code used in this project.

#### References

* [Udacity JavaScript Testing Class](https://www.udacity.com/course/javascript-testing--ud549)
* [Jasmine Library Documentation](http://jasmine.github.io/)

#### Contact Me

For any questions please email me at _bthomas2622@gmail.com_

#### License

The content of this repository is not licensed. 
