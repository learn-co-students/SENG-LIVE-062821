class ApplicationController < Sinatra::Base
  # includes the Sinatra::CrossOrigin functionality from the 'sinatra-cross_origin' gem in all controllers that inherit from ApplicationController
  # the configuration below is focused on allowing our React app to send cross-origin requests to our Sinatra API. This is necessary because in development requests will be going from one port to another and in production, they'll likely be coming from one domain to another. 
  # Whenever requests are sent from one domain to another, they are considered cross origin requests and require a CORS (Cross Origin Resource Sharing) policy to be configured. This policy describes what types of requests are allowed from other origins to this API.
  register Sinatra::CrossOrigin

  configure do
    enable :cross_origin
    set :allow_origin, "*" 
    set :allow_methods, [:get, :post, :patch, :delete, :options] # allows these HTTP verbs
    set :expose_headers, ['Content-Type']
  end

  options "*" do
    response.headers["Allow"] = "HEAD,GET,PUT,POST,DELETE,OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
    200
  end

  # method "URL" do
    
  # end

end
