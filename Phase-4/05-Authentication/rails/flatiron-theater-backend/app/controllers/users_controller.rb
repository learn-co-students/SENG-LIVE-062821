class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        byebug
        render json: user
    end 

    private

    def user_params
        params.permit(:user_name, :password)
    end 
end
