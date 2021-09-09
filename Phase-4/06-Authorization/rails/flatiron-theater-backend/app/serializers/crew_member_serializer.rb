class CrewMemberSerializer < ActiveModel::Serializer
  attributes :id, :name, :job_title
  belongs_to :production
end
