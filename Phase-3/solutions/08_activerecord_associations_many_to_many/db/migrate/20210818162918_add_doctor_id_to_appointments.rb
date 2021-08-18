require_relative '20210817055048_create_appointments'

class AddDoctorIdToAppointments < ActiveRecord::Migration[5.2]
  def up
    appointments = Appointment.destroy_all
    revert CreateAppointments
    create_table :appointments do |t|
      t.datetime :starts_at
      t.belongs_to :patient, foreign_key: true
      t.belongs_to :doctor, foreign_key: true
      t.text :notes
      t.boolean :no_show
    end
    appointments.each{|appt| Appointment.new(appt.attributes).save}
  end

  def down
    appointments = Appointment.destroy_all
    drop_table :appointments
    create_table :appointments do |t|
      t.datetime :starts_at
      t.belongs_to :patient, foreign_key: true
      t.text :notes
      t.boolean :no_show
    end
    appointments.each{|appt| Appointment.new(appt.attributes.filter{|k,v| k != "doctor_id"}).save}
  end
end
