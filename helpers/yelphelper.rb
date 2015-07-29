require "Dotenv"
Dotenv.load

def yelpSearch
  require 'yelp'
  @client = Yelp::Client.new({ consumer_key: ENV['consumer_key'],
                              consumer_secret: ENV['consumer_secret'],
                              token: ENV['access_token'],
                              token_secret: ENV['access_token_secret']
                            })

  params = {
    term: "Saucy Porka",
    category_filter: "restaurants",
    sort: 2
  }
  location = "Chicago"
  @client.search(location,params).businesses.each do |i|
   i.name
   i.image_url
   i.rating
   i.location.display_address
   i.snippet_text
  end

end
