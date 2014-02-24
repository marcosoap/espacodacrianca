class SiteController < ApplicationController
  def en_index
    render "site/en/index"
  end

  def index
  end

  def page
    if params[:section]
      render "site/#{params[:section]}/#{params[:page_name]}"
    else
      render params[:page_name]
    end
  end
end