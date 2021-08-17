class Appointment < ActiveRecord::Base

  scope :past, -> { where("starts_at < ?", DateTime.now)}
  scope :upcoming, -> { where("starts_at > ?", DateTime.now)}
  scope :no_shows, -> { where(no_show: true) }
  
end