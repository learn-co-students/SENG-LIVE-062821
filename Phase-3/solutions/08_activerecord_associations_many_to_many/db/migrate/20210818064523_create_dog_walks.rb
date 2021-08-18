class CreateDogWalks < ActiveRecord::Migration[5.2]
  def change
    create_table :dog_walks do |t|
      t.belongs_to :dog, foreign_key: true
      t.belongs_to :walk, foreign_key: true
      t.boolean :pooped
    end
  end
end
