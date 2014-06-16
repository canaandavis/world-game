Rails.application.routes.draw do
  scope "api" do
    resources :heroes, only: [:index, :show], defaults: { format: :json }
    resources :scenarios, only: [:index, :show], defaults: { format: :json }
  end

  resources :heroes, only: [:new, :create]
  resources :scenarios, only: [:new, :create]

end
