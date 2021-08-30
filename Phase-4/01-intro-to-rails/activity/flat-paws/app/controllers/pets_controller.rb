class PetsController < ApplicationController
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
end
