class ProductionSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :budget, :image, :director, :ongoing, :description, :performers_and_roles, :crew_members
  has_many :crew_members
  def performers_and_roles
    self.object.character_roles.map{|cr| "#{cr.role} : #{cr.performer.name}"}
  end 
end

