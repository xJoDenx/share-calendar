Rails.application.routes.draw do
  devise_for :users
  root 'tweets#index'
  resources :events
  resources :users, only: [:show, :edit, :update]
  resources :tweets, only: [:index, :new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
