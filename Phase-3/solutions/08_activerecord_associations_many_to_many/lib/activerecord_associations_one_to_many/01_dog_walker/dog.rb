class Dog < ActiveRecord::Base
  has_many :dog_walks
  has_many :walks, through: :dog_walks

  has_many :dog_walks_with_poop, -> {where(pooped: true)}, class_name: 'DogWalk'
  has_many :walks_with_poop, through: :dog_walks_with_poop, source: :walk

  scope :by_breed, -> (breed) { where("breed LIKE ?", "%#{breed}%") }
  scope :puppies, -> { where("birthdate > ?", 1.year.ago)}
  scope :mix, -> { where("breed LIKE ?", "%mix%").or(where("breed LIKE ?", "%/%")) }
  scope :needs_to_poop, -> { where("last_pooped_at < ?", 6.hours.ago) }
  
  def poop
    self.update(last_pooped_at: DateTime.now)
  end

  def recent_walks
    self.walks.recent
  end

  def recent_walks_with_poop
    self.walks_with_poop.recent
  end

end