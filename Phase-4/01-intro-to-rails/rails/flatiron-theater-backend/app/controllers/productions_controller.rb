class ProductionsController < ApplicationController
    def index
        productions = Production.all
        render json: productions
    end 

    def show
        production = Production.find_by(id: params[:id])
        render json: production
    end 
end
