# Housing Association

This is my little project to improve inter-neighbor relationships in my own
little housing association.

I will be using Github for planning features, so please submit issues and pull
requests if you have an idea you think would be cool.

## Prerequisites and initial setup

You'll need [node](http://nodejs.org/) or [io.js](https://iojs.org/), since the
application is set up to run an [Express.js](http://expressjs.com) server. You
also need [MongoDB](http://www.mongodb.org/), since that's the type of db I currently use.

Just for the sake of being hipster, we'll use **io.js** today.

### Step 0: Install iojs & mongo

Missing iojs (or node) - but got [homebrew](http://brew.sh/) installed?

    brew install iojs

Missing [MongoDB](http://www.mongodb.org)? Install both the server daemon and
the client here with homebrew as well:

    brew install mongodb

Lastly, you need [bower](http://bower.io/) to install frontend dependencies. Install it by

    brew install bower -g

### Step 1: Install dependencies

This project depend on a few different npm packages to run successfully. Relax
tho bro, I got two words for you:

    npm install

Also, frontend dependencies - two more words.

    bower install

### Step 2: Start the MongoDB daemon

Open a terminal window, and type in ``mongod``. You'll see some general startup
yabba dabba, and then you'll be ready to...

### Step 3: Run the app!

There isn't a frontend build quite yet, so let's just get everything up and
running:

    npm start

And that's it - you should be up and running!
