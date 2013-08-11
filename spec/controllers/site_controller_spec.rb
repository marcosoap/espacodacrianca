require "spec_helper"

describe SiteController do
  describe "GET page" do
    it "renders successful" do
      get :page, page_name: :historia
      assert_equal "http://test.host/historia", request.url
    end

    it "renders successful with section" do
      get :page, page_name: :comunidade, section: :atividades
      assert_equal "http://test.host/atividades/comunidade", request.url
    end
  end
end