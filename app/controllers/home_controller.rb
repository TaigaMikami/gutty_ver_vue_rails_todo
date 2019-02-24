class HomeController < ApplicationController
  def index
    render plain: '200 ok. Rails Server is running.'
  end
end
