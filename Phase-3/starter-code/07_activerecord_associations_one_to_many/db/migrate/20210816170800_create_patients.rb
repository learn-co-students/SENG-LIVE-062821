class CreatePatients < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |t|
      t.string :name
      t.datetime :last_visited_on
      t.date :birthday
      t.string :insurance_provider
      t.boolean :is_insured
      t.boolean :is_alive
      t.boolean :is_organ_donor
    end
  end
end
