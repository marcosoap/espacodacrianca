Espacodacrianca::Application.routes.draw do
  get ":page_name", controller: :site, action: :page
  get ":section/:page_name", controller: :site, action: :page

  root 'site#index'
end
