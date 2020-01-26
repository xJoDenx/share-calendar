class EventImage < ApplicationRecord
  belongs_to :event
  mount_uploader :img, ImageUploader
  # validates :img,               presence: true
end

