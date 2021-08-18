class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.string "name"
      t.date "birthdate"
      t.string "breed"
      t.string "image_url"
      t.datetime "last_pooped_at"
    end
  end
end
