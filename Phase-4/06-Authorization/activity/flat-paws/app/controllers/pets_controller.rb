class PetsController < ApplicationController
    wrap_parameters format: []
    def index
        pets = Pet.all
        render json: pets
    end 

    def show
        pet = Pet.find_by(id:params[:id])
        if pet 
            render json: pet, except: [:created_at, :updated_at]
        else 
            render  json: { error: 'pet not found' }, status: :not_found
        end 
    end 

    def create 
        pet = Pet.create(pet_params)
        render json: pet
    end 

    private
      
    def pet_params
      params.permit(:breed, :name, :age, :weight, :gps_chip, :shelter_id)
    end 

end
