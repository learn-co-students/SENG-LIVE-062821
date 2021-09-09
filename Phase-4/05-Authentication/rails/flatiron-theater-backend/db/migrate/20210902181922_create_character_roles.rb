class CreateCharacterRoles < ActiveRecord::Migration[6.1]
  def change
    create_table :character_roles do |t|
      t.belongs_to :production, null: false, foreign_key: true
      t.belongs_to :performer, null: false, foreign_key: true
      t.string :role

      t.timestamps
    end
  end
end
