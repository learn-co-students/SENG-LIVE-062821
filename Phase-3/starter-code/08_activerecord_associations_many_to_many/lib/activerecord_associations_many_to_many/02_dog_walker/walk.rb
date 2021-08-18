class Walk < ActiveRecord::Base
  belongs_to :dog

  scope :with_poop, -> { where(pooped: true) }
  scope :recent, -> { where("time > ?", 6.hours.ago)}

  def log_poop
    self.update(pooped: true)
    self.dog.poop
  end
end