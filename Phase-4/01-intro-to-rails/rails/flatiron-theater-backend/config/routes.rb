Rails.application.routes.draw do
  # resources :crew_members
  resources :productions, only: [:index, :show]
  #get "/productions", to: "production#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
