class Walk < ActiveRecord::Base
  has_many :dog_walks, dependent: :destroy
  has_many :dogs, through: :dog_walks

  scope :recent, -> { where("time > ?", 6.hours.ago)}

  def formatted_time
    time.strftime("%A, %m/%d/%y %l:%M %p")
  end
end