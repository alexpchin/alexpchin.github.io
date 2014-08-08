source 'http://rubygems.org'
ruby '2.1.1'

# Here are some notes about my gem decisions...
# Duh. (Although, important to use version for jekyll-slim)
gem 'jekyll', '~> 1.3.0'

# Slim-ugly is faster than haml...
# http://sephinrothcn.wordpress.com/2014/04/14/slim-vs-haml-performance-perspective/
# Although, working with Rails you may be more familiar with Haml
# So uncomment the one you like to use...
gem 'jekyll-slim', '~> 0.8.2'
# gem 'jekyll-haml'

# HTMLEntities is a simple library to facilitate encoding
gem 'htmlentities'

# Let's speed things up with an asset pipeline.
gem 'jekyll-asset-pipeline'

# Compass is a Stylesheet Authoring Environment, http://compass-style.org.
gem 'compass'

# I'm using Zurb because it's quick and easy to customize.
gem 'zurb-foundation'

# The YUI Compressor is JavaScript minifier designed to be 100% safe.
gem 'yui-compressor'

# Coffeescript
gem 'coffee-script'

# Puma is a simple, fast, threaded, and highly concurrent HTTP 1.1 server 
# for Ruby/Rack applications.
gem 'puma'

# General gems
gem 'rake'
gem 'rack-contrib'
gem 'rack-rewrite'

# Automatic posting using Buffer
gem 'buff'

# JS Search
gem 'json'
gem 'nokogiri'

group :development  do
  # A Guard plugin for smarter Jekyll builds
  gem 'guard-jekyll-plus', git: 'https://github.com/imathis/guard-jekyll-plus', branch: 'master'
  
  # https://github.com/thibaudgg/rb-fsevent
  gem 'rb-fsevent'

  # Guard::LiveReload automatically reload your browser when 'view' files are modified.
  gem 'guard-livereload'
end