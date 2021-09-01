class Production < ApplicationRecord
    has_many :crew_members, dependent: :destroy

    validates :title, presence: true
    validates :budget, numericality: true 

    validate :no_musicals
    
    def no_musicals
        errors.add(:genre, "Sorry there can be no more musicals") if self.genre.downcase == 'musical'
    end 
end
