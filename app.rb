require 'bundler'
Bundler.require()

require './helpers/yelphelper'

#routes
get '/' do
  erb :index
end

get '/api/search-yelp' do
  content_type :json
  yelpResults.to_json
end

post '/api/make-a-search' do
  yelpSearch(params[:lookup])
end
