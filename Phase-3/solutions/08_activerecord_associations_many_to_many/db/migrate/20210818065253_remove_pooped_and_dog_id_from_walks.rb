class RemovePoopedAndDogIdFromWalks < ActiveRecord::Migration[5.2]
  def change
    remove_column :walks, :dog_id, :integer
    remove_column :walks, :pooped, :boolean
    remove_foreign_key :walks, :dog
  end
end
