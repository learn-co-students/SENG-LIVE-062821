class ProductionsController < ApplicationController
    def index
        render json: Production.all
    end 
end
