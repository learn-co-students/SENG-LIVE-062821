class Dog < ActiveRecord::Base
  has_many :dog_walks
  has_many :walks, through: :dog_walks
  has_many :dog_walks_with_poop, -> {with_poop}, class_name: 'DogWalk'
  has_many :walks_with_poop, -> {order(time: :desc)}, through: :dog_walks_with_poop, source: :walk

  scope :by_breed, -> (breed) { where("breed LIKE ?", "%#{breed}%") }
  scope :puppies, -> { where("birthdate > ?", 1.year.ago)}
  scope :mix, -> { where("breed LIKE ?", "%mix%").or(where("breed LIKE ?", "%/%")) }

  def self.needs_to_poop
    recently_pooped_dog_ids = DogWalk.includes(:walk).where(dog_walks: {pooped: true}, walks: { time: 6.hours.ago..DateTime.now } ).pluck(:dog_id)
    self.where.not(id: recently_pooped_dog_ids)
  end

  def last_pooped_at
    self.walks_with_poop.first.try(:time)
  end
end