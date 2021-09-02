class PetSerializer < ActiveModel::Serializer
  attributes :breed, :name, :age, :weight, :gps_chip, :shelter_id
  belongs_to :shelter
end
