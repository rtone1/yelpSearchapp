require 'bundler'
Bundler.require()

require "Dotenv"
Dotenv.load


#routes
get '/' do
  erb :index
end
