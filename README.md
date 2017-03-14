What It Is
--------------
This is a static site boiler plate that leverages Jekyll, Node, and Gulp to create a static instance that can either be manually moved to a server location or done via build scripts. This boilerplate was originally created to allow for dynamic builds for Github Pages sites.

Prerequisites
-------------
To run this project you'll need to have Ruby 2.2.2 or later, Node, and [bundler](http://bundler.io/) installed. I recommend also using rbenv to manage ruby if you are on a Mac and Homebrew for your Node bits. 

Running
-------
If it's your first time, you'll want to make sure you have the correct dependencies installed:

	bundle install
    gem install jekyll
	npm install

After that, you should be able to run the following command:

    gulp serve

License
-------
The content (text and images) are Copyright Keith Senkowski. You may not reuse any of it without my permission. The code is MIT Licensed.