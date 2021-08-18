class Dog < ActiveRecord::Base
  has_many :walks

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
    self.walks.recent.with_poop
  end

end