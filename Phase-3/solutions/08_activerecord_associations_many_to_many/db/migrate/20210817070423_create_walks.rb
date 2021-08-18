class CreateWalks < ActiveRecord::Migration[5.2]
  def change
    create_table :walks do |t|
      t.datetime :time
      t.boolean :pooped
      t.belongs_to :dog, foreign_key: true
    end
  end
end
