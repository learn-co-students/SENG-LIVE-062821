class Appointment < ActiveRecord::Base
  belongs_to :patient

  scope :past, -> { where("starts_at < ?", DateTime.now)}
  scope :upcoming, -> { where("starts_at > ?", DateTime.now)}
  scope :no_shows, -> { where(no_show: true) }
  
end