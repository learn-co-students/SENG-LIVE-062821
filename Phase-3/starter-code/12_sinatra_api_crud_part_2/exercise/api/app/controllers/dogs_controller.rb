class DogsController < ApplicationController
  
  get "/dogs" do 
    Dog.all.to_json(methods: :age)
  end

  get "/dogs/:id" do 
    dog = Dog.find(params[:id])
    dog.to_json(methods: :age, include: {dog_walks: {methods: [:formatted_time]}})
  end

  post "/dogs" do 
    Dog.create(dog_params).to_json(methods: :age)
  end

  patch "/dogs/:id" do
    dog = Dog.find(params[:id])
    dog.update(dog_params)
    dog.to_json(methods: :age)
  end

  delete "/dogs/:id" do 
    dog = Dog.find(params[:id])
    dog.destroy
    dog.to_json(methods: :age)
  end

  private 

  # a method used to specify which keys are allowed through params into the controller
  # we use this method to create a list of what's permitted to be passed to .create or .update
  # within controller actions.
  def dog_params
    allowed_params = %w(name birthdate breed image_url)
    params.select {|param,value| allowed_params.include?(param)}
  end
end