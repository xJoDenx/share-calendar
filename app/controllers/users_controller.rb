class UsersController < ApplicationController
  
  def show
    @user = User.find(params[:id])
    @tweets = @user.tweets.order("updated_at DESC")
  end

  def edit

  end
end
