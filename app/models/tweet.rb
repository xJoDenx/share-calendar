class Tweet < ApplicationRecord
  has_many :tweet_images, dependent: :destroy
  has_many :comment
  belongs_to :user
  accepts_nested_attributes_for :tweet_images, allow_destroy: true
end
