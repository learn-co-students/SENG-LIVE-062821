class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]
    def create
        user = User.find_by(user_name: params[:user_name])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: {error: ["Invalid username and/or password"]} 
        end 
    end 

    def destroy
        session.delete :user_id
        head :no_content
    end 
end
