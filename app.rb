require 'rubygems'
require 'sinatra'

# Seeing as the language is browser-only atm. This sinatra app is more
# test-harness/build-script than web application.

set :views, Sinatra::Application.root
set :public, Sinatra::Application.root

get '/' do
  content_type 'text/html'
  erb :tests
end