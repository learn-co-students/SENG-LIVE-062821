class Production < ApplicationRecord
    has_many :crew_members, dependent: :destroy
    
    has_many :character_roles
    has_many :performers, through: :character_roles

    validates :title, presence: true
    validates :budget, numericality: true 

    

    # validate :no_musicals
    
    # def no_musicals
    #     errors.add(:genre, "Sorry there can be no more musicals") if self.genre.downcase == 'musical'
    # end 
end
