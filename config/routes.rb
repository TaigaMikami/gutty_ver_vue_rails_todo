Rails.application.routes.draw do
  root to: 'home#index'

  resources :tasks
  get '/done_tasks', to: 'tasks#index_done'
  get '/doing_tasks', to: 'tasks#index_doing'
end
