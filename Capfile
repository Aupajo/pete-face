load 'deploy' if respond_to?(:namespace) # cap2 differentiator

# Global
set :application, "pete-face"
set :repository,  "git@github.com:Aupajo/#{application}.git"

# Deployment
set :user, "deploy"
set :use_sudo, false
set :deploy_to, "/home/deploy/#{application}/"
set :deploy_via, :remote_cache
server "peteface.me", :app

# Git
set :scm, :git
set :branch, "master"

namespace :deploy do
  desc 'Roll out a new version'
  task :default do
    update_code
    generate_css
    symlink
  end
  
  desc 'Writes out CSS'
  task :generate_css do
    run "cd #{release_path} && compass compile sass/"
  end
end
