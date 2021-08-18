class Patient < ActiveRecord::Base
  has_many :appointments

  def no_shows
    appointments.no_shows
  end

  def past_appointments
    appointments.past.where(no_show: false)
  end

  def upcoming_appointments
    appointments.upcoming
  end
end