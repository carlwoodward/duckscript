require 'rubygems'
require 'sinatra'

# Seeing as the language is browser-only atm. This sinatra app is more
# test-harness/build-script than web application.

set :views, Sinatra::Application.root
# set :public, Sinatra::Application.root

helpers do
  def read(file)
    File.read("#{options.views}/#{file}")
  end
end

get '/ometa/:file' do
  ometa_svn_version = 45
  seconds = 60*60*24
  response['Date'] = Time.now.httpdate
  # response['Expires'] = (Time.now + seconds).httpdate
  response['Cache-Control'] = "max-age=#{seconds}"
  send_file "#{options.root}/ometa-r#{ometa_svn_version}/#{params[:file]}"
end

get '/' do
  content_type 'text/html'
  erb :tests
end