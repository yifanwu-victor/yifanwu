#!/usr/bin/env ruby
# Use installed gems directly for local preview, without the legacy Bundler lock.
require 'rubygems'
Gem.paths = { 'GEM_HOME' => Gem.user_dir, 'GEM_PATH' => ([Gem.user_dir] + Gem.path).uniq.join(File::PATH_SEPARATOR) }
ENV['JEKYLL_NO_BUNDLER_REQUIRE'] = 'true'

# Older macOS Ruby versions can select an Intel Nokogiri on Apple Silicon.
cpu = RUBY_PLATFORM.match?(/arm64|aarch64/) ? 'arm64' : 'x86_64'
native = Gem::Specification.find_all_by_name('nokogiri').find do |spec|
  spec.platform != Gem::Platform::RUBY && spec.platform.cpu == cpu
end
native.activate if native
require 'jekyll'

if ARGV.include?('--build')
  Jekyll::Commands::Build.process({})
else
  Jekyll::Commands::Build.process({})
  Jekyll::Commands::Serve.process({ 'host' => '127.0.0.1', 'port' => Integer(ENV.fetch('PORT', '4000')), 'watch' => false })
end
