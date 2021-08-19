class CreateAccounts < ActiveRecord::Migration[6.1]
  def change
    create_table :accounts do |t|
      t.string :label
      t.float :balance
      t.string :account_type
      t.belongs_to :user, foreign_key: true
      t.belongs_to :bank, foreign_key: true
    end
  end
end
