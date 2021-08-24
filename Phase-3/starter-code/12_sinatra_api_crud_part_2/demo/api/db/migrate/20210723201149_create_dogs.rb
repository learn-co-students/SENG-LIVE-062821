class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string :name
      t.date :birthdate
      t.string :breed
      t.string :image_url
    end
  end
end
