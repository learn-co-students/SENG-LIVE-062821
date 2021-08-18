class DogWalk < ActiveRecord::Base
  belongs_to :dog
  belongs_to :walk

  scope :with_poop, -> { where(pooped: true) }

  def log_poop
    self.update(pooped: true)
    self.dog.poop
  end
end