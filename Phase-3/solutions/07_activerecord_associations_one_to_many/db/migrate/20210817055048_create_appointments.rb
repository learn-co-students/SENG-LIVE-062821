class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.datetime :starts_at
      t.belongs_to :patient, foreign_key: true
      t.text :notes
      t.boolean :no_show
    end
  end
end
