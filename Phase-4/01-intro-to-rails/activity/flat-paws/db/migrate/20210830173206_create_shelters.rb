class CreateShelters < ActiveRecord::Migration[6.1]
  def change
    create_table :shelters do |t|
      t.string :location
      t.string :name
      t.integer :capacity

      t.timestamps
    end
  end
end
