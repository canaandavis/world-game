# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.initialize!

#Create association for heroes table
ActiveSupport::Inflector.inflections do | inflect |
  inflect.irregular 'hero' , 'heroes'
end


