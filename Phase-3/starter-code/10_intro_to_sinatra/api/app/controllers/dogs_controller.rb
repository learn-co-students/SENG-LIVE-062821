class DogsController < ApplicationController
  

  private 

  # a method used to specify which keys are allowed through params into the controller
  # we use this method to create a list of what's permitted to be passed to .create or .update
  # within controller actions.
  def dog_params
    allowed_params = %w(name age breed image_url)
    params.select {|param,value| allowed_params.include?(param)}
  end
end