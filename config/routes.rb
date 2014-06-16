Rails.application.routes.draw do

  root 'static_pages#index'

  resources :heroes, only: [:new, :create]
  resources :scenarios, only: [:new, :create]


  scope "api" do
    resources :heroes, only: [:index, :show], defaults: { format: :json }
    resources :scenarios, only: [:index, :show], defaults: { format: :json }
  end

end
