Espacodacrianca::Application.routes.draw do
  get "en", controller: :site, action: :en_index
  get ":page_name", controller: :site, action: :page
  get ":section/:page_name", controller: :site, action: :page

  root 'site#index'
end
