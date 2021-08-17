class Dog < ActiveRecord::Base

  scope :by_breed, -> (breed) { where("breed LIKE ?", "%#{breed}%") }
  scope :puppies, -> { where("birthdate > ?", 1.year.ago)}
  scope :mix, -> { where("breed LIKE ?", "%mix%").or(where("breed LIKE ?", "%/%")) }
  scope :needs_to_poop, -> { where("last_pooped_at < ?", 6.hours.ago) }
  
  # update the last_pooped_at property to the current time
  def poop
  end

  # return all walks this dog has been on within the last 6 hours
  def recent_walks
  end

  # return all walks this dog has been on within the last 6 hours where they pooped
  def recent_walks_with_poop
  end

end