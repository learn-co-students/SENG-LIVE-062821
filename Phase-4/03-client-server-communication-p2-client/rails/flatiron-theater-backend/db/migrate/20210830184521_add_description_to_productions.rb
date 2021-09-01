class AddDescriptionToProductions < ActiveRecord::Migration[6.1]
  def change
    add_column :productions, :description, :text
  end
end
