require './app'
require "Dotenv"
Dotenv.load

  def yelpSearch(keyword)
    @@keyword = keyword.to_s
    puts @@keyword
  end

  def yelpResults
    require 'yelp'
    client = Yelp::Client.new({ consumer_key: ENV['consumer_key'],
                                consumer_secret: ENV['consumer_secret'],
                                token: ENV['access_token'],
                                token_secret: ENV['access_token_secret']
                              })
    params = {term: @@keyword}
    location = "Chicago"
    puts params
    client.search(location,params).businesses.each do |i|
     i.name
     i.image_url
     i.rating
     i.location.display_address
     i.snippet_text
    end
  end
