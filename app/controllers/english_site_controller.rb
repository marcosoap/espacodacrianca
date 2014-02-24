class EnglishSiteController < ApplicationController
  layout "english_application"

  def index
  end

  def page
    if params[:section]
      render "english_site/#{params[:section]}/#{params[:page_name]}"
    else
      render "english_site/#{params[:page_name]}"
    end
  end
end