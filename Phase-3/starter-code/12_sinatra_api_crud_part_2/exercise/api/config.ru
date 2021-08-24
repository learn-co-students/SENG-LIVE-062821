require './config/environment'

# the line below adds the JSONBodyParser middleware made available by the rack-contrib gem. This allows Sinatra (which is built on Rack) to parse the body of incoming requests in JSON format. (The body in JSON format will be parsed and included in a hash called `params` that we can access within our controller)
use Rack::JSONBodyParser

# mounts our main controller so our server can respond to requests that match routes defined inside of it
run ApplicationController 

# any additional controlers we want to use in our application must be added with the `use` method. If we forget to do this, then routes defined inside the DogsController won't be accessible in our local web server.
use DogsController
use DogWalksController
use WalksController