* I have experience with Java, Python and Node.js, since this application is very suitable for a minamilist framework,
I considered both Flask and Express, ended up using Express purely for asthetic reasons.
* I'm fairly familiar with Express and Node.js, but I had to refresh my knowledge alittle bit during the development of application
since I've been using other frameworks in the last year.
* I was not familiar with heoku before I started working on the application, but documentation was very straight forward, so
it didnt take me alot of time to start using it.

# Thought Process

1. The first part of the application that I implemented was the data access layer, it is a thin proxy to the api that combines
the parameters coming from the front-end combines them with the api required params and returns the json result.

2. The controller simply reads the user request and then sends them to the dal, then responds with the same data back to the 
front end.

3.  The front end, is a small angular.js application that reads the form data, sends it to the server, then renders the results
as html.

# Challenges

1. I tried to draw some patterns of the api response, tried to find a way to fetch the regions to populate a dropdown list
to enhance the user experience.

2. The API does not seem to have pagination parameters, which I also tried to look for to enrich the application interface.

