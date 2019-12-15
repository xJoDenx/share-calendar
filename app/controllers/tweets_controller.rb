class TweetsController < ApplicationController

  def index
    if user_signed_in?
      @user = current_user
    end
    @tweets = Tweet.all.order("updated_at DESC").includes(:user)
  end

  def new
    @tweet = Tweet.new
    @tweet.tweet_images.build
    @user = current_user
  end

  def create
    @tweet = Tweet.new(tweet_params)
    if @tweet.save
      redirect_to root_path
    else
      render :new
    end
  end


  private

  def tweet_params
    params.require(:tweet).permit(:text, tweet_images_attributes: [ :id, :img, :tweet_id, :_destroy ]).merge(user_id: current_user.id)
  end
end
