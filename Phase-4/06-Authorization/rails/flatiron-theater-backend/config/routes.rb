Rails.application.routes.draw do
  resources :users, only: [:create]
  resources :performers
  resources :character_roles
  # resources :crew_members
  resources :productions, only: [:index, :show, :destroy, :create, :update]
  post "/login", to: "sessions#create" 
  delete "/logout", to: "sessions#destroy"
  get "/me", to:"users#show"
end
