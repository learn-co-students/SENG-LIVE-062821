class Performer < ApplicationRecord
    has_many :character_roles
    has_many :productions, through: :character_roles
end
