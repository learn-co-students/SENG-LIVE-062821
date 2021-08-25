class DogsController < ApplicationController
  
  get "/dogs" do 
    format_as_json(Dog.all)
  end

  get "/dogs/:id" do 
    dog = Dog.find(params[:id])
    format_as_json(dog)
  end

  post "/dogs" do 
    format_as_json(Dog.create(dog_params))
  end

  patch "/dogs/:id" do
    dog = Dog.find(params[:id])
    dog.update(dog_params)
    format_as_json(dog)
  end

  delete "/dogs/:id" do 
    dog = Dog.find(params[:id])
    dog.destroy
    format_as_json(dog)
  end

  private 

  # a method used to specify which keys are allowed through params into the controller
  # we use this method to create a list of what's permitted to be passed to .create or .update
  # within controller actions.
  def dog_params
    allowed_params = %w(name birthdate breed image_url)
    params.select {|param,value| allowed_params.include?(param)}
  end

  def format_as_json(dog)
    dog.to_json(
      methods: :age,
      include: {
        dog_walks: {
          only: [:id, :walk_id, :pooped],
          methods: [:formatted_time]
        }
      }
    )
  end
end