/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('should have non-empty url defined for each feed', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined(); //check url defined
                expect(feed.url.length).not.toBe(0); //check url empty
            });
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('should have urls with names defined and existent', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined(); //check name defined
                expect(feed.name.length).not.toBe(0); //check name empty
            });
         });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe ('The menu', function(){
        var body;
        //this beforeEach function allows us to instantiate the body object fresh at the start of 
        //each test. The beforeEach function is not actually saving resources just simplifying the code
        beforeEach(function() {
            body = $('body');
        });

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('should be hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('should toggle appear/disapear when clicked', function() {
            var menuIcon = $('.menu-icon-link'); //clicking this for our test
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(false); //should not longer be hidden after click
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true); //should return to hidden after second click
          });
    })

    /* TODO: Write a new test suite named "Initial Entries" */
    
    describe ('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done) {
            loadFeed(0, function() { //load the feed before the test for feed length
                done(); //done function signals framework that async function has completed
            });
         });

         it('should have at least one feed element after load', function(done) {
            expect($('.feed .entry').length).not.toBe(0); //length>0 means at least 1 entry
            done(); //done function signals framework that async function has completed
         });
    });

    // TODO: Write a new test suite named "New Feed Selection"

    describe('New Feed Selection', function() {
        var initialFeed;
    
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        //this beforeeach function is used to grab initial feed content to compare to new feed
        beforeEach(function(done) {
            loadFeed(0, function() { 
                initialFeed = $('.feed').html();
                done();
            });
        });

         it('should change content after new feed load', function(done) {
            loadFeed(2, function() { //1, 2, 3 id's all represent different feeds in allFeeds
                var newFeed = $('.feed').html();
                expect(initialFeed).not.toEqual(newFeed); //new feed should reflect content changes, aka have differences
                done();
            });        
         });
    });    
}());
