Rails.application.routes.draw do
  resources :performers
  resources :character_roles
  # resources :crew_members
  resources :productions, only: [:index, :show, :destroy, :create, :update]
  #get "/productions", to: "production#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
