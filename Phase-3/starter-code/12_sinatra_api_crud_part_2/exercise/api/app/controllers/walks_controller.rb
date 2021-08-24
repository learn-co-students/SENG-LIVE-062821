class WalksController < ApplicationController

  get "/walks" do 
    Walk.all.to_json(
      only: [:id], 
      methods: :formatted_time,
      include: {
        dog_walks: {
          include: {
            dog: {
              methods: :age
            }
          }
        }
      }
    )
  end
 
  post "/walks" do 
    Walk.create(walk_params).to_json(
      only: [:id], 
      methods: :formatted_time,
      include: {
        dog_walks: {
          include: {
            dog: {
              methods: :age
            }
          }
        }
      }
    )
  end

  delete "/walks/:id" do 
    Walk.find(params[:id]).destroy.to_json
  end

  private 

  # a method used to specify which keys are allowed through params into the controller
  # we use this method to create a list of what's permitted to be passed to .create or .update
  # within controller actions.
  def walk_params
    allowed_params = %w(time dog_ids)
    params.select {|param,value| allowed_params.include?(param)}
  end
end