#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/json'
require 'sinatra/reloader'
require 'sqlite3'
require 'sinatra/activerecord'

set :database_file, 'config/database.yml'

class Client < ActiveRecord::Base

end




before do

end



get '/' do
	erb :index	
end

get '/about' do
	erb :about
end
