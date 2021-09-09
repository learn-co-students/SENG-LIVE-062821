class CreateCrewMembers < ActiveRecord::Migration[6.1]
  def change
    create_table :crew_members do |t|
      t.string :name
      t.string :job_title
      t.integer :salary
      t.belongs_to :production, null: false, foreign_key: true

      t.timestamps
    end
  end
end
