class CreateDogWalks < ActiveRecord::Migration[6.1]
  def change
    create_table :dog_walks do |t|
      t.boolean :pooped
      t.references :dog, foreign_key: true, null: false
      t.references :walk, foreign_key: true, null: false
    end
  end
end
