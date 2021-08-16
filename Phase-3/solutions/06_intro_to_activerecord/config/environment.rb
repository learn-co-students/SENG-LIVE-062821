ENV['SINATRA_ENV'] ||= "development"

require 'bundler/setup'
Bundler.require(:default, ENV['SINATRA_ENV'])
require "sinatra/activerecord"

ActiveRecord::Base.establish_connection(
  :adapter => "sqlite3",
  :database => "db/#{ENV['SINATRA_ENV']}.sqlite"
)

ActiveRecord::Base.default_timezone = :utc
Time.zone = "UTC"

require_all "lib/intro_to_activerecord"
