class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :breed
      t.string :name
      t.integer :age
      t.integer :weight
      t.boolean :gps_chip
      t.belongs_to :shelter, null: false, foreign_key: true

      t.timestamps
    end
  end
end
