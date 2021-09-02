class ProductionsController < ApplicationController
    wrap_parameters format: []
    def index
        productions = Production.all
        render json: productions
    end 

    def show
        production = Production.find_by(id: params[:id])
        render json: production, include: ['lines']
    end 

    def create
        production = Production.create!(production_params)
        render json: production, status: :created
        rescue ActiveRecord::RecordInvalid => invalid 
        render json: {errors: invalid.record.errors.full_messages}
    end 

    def update
        production = Production.find_by(id: params[:id]) 
        if production
            production.update(production_params)
            render json: production, status: :accepted
        else 
            render json: {error:"Production not found"}, status: :not_found
        end 
    end 

    def destroy
        production = Production.find_by(id: params[:id]) 
        if production
            production.destroy
            head :no_content
        else
            render json: {error: "Production not found"}, status: :not_found
        end
    end 

    private 

    def production_params
        params.permit(:title, :genre, :budget, :image, :director, :ongoing, :description)
    end 

end
