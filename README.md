This is an exercise in writing a page scraper. The ultimate goal is to scrape images from an 'infinite-scroll' page like twitter or tumblr. 

Goals, roughly in the order I think it makes sense to attack them:
* Fetch and store images from twitter using node
* Fetch more than the first page worth of content by triggering the 'load more posts' event
* Use asynchronous requests to grab content, but co-ordinate so that a max connections cap can be enforced
* Add selectors for other sites, and the ability to pass in a url from the command line and the program will use the appropriate handler for that domain
