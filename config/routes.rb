Espacodacrianca::Application.routes.draw do
  get "en", controller: :english_site, action: :index
  get "en/:page_name", controller: :english_site, action: :page
  get "en/:section/:page_name", controller: :english_site, action: :page

  get ":page_name", controller: :site, action: :page
  get ":section/:page_name", controller: :site, action: :page
  root 'site#index'
end
