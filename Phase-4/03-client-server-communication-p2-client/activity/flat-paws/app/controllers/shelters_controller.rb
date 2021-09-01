class SheltersController < ApplicationController
    def index
        render json: Shelter.all
    end 
end
