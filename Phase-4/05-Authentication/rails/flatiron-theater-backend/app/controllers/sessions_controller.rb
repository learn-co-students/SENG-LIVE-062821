class SessionsController < ApplicationController
    def create
        byebug
        user = User.find_by(user_name: params[:user_name])
        if user&.authenticate(params[:password])
            render json: user
        else
            render json: {errors: "Invalid username and/or password"} 
        end 
    end 
end
