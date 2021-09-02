class SheltersController < ApplicationController
    def index
        render json: Shelter.all
    end 
    def show
        shelter = Shelter.find_by(params[:id])
        render json: shelter
    end 
end
