require "spec_helper"

describe SiteController do
  describe "GET page" do
    it "renders success" do
      get :page, page_name: :historia
      assert_equal "http://test.host/historia", request.url
    end
  end
end