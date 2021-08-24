# sets the default environment to "development" so our normal rake commands will interact with the development database.
ENV['SINATRA_ENV'] ||= "development"

require 'bundler/setup'
Bundler.require(:default, ENV['SINATRA_ENV'])

# this loads up our application controller and then all files in the app directory.
require './app/controllers/application_controller'
require_all 'app'