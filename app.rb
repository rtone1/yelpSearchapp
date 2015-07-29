require 'bundler'
Bundler.require()

require './helpers/yelphelper'

#routes
get '/' do
  erb :index
end

get '/api/search-yelp' do
  content_type :json
  yelpSearch.to_json
end
