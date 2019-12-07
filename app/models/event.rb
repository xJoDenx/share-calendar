class Event < ApplicationRecord

  belongs_to :user
  has_many :casts, dependent: :destroy
  has_many :event_images, dependent: :destroy
  has_many :schedules, dependent: :destroy
  accepts_nested_attributes_for :casts, allow_destroy: true
  accepts_nested_attributes_for :event_images, allow_destroy: true
  accepts_nested_attributes_for :schedules, allow_destroy: true


  validates :title,                  presence: true
  validates :description,            presence: true
end
