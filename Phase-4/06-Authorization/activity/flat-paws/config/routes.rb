Rails.application.routes.draw do
  resources :shelters, only:[:index, :show]
  resources :pets, only:[:index, :show, :create, :update, :destory ]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
