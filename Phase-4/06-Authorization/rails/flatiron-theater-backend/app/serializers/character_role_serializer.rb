class CharacterRoleSerializer < ActiveModel::Serializer
  attributes :id, :role
  has_one :production
  has_one :performer
end
