class Walk < ActiveRecord::Base
  has_many :dog_walks
  has_many :dogs, through: :dog_walks

  scope :recent, -> { where("time > ?", 6.hours.ago)}
end