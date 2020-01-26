class TweetImage < ApplicationRecord
  belongs_to :tweet
  mount_uploader :img, ImageUploader
end
