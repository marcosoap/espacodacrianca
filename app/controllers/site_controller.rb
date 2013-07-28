class SiteController < ApplicationController
  def index
  end

  def page
    render params[:page_name]
  end
end