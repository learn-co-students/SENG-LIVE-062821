class ShelterSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :total_pets
  has_many :pets
  def total_pets
    self.object.pets.length
  end 
end
