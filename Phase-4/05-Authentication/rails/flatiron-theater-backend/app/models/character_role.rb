class CharacterRole < ApplicationRecord
  belongs_to :production
  belongs_to :performer
  has_many :lines
end
