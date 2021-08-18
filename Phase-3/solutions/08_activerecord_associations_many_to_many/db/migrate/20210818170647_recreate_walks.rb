class RecreateWalks < ActiveRecord::Migration[5.2]
  def change
    create_table :walks do |t|
      t.datetime :time
    end
  end
end
