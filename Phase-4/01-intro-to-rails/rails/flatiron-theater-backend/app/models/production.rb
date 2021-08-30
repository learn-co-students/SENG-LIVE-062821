class Production < ApplicationRecord
    has_many :crew_members, dependent: :destroy
end
