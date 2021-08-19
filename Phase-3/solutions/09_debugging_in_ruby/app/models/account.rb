class Account < ActiveRecord::Base
  belongs_to :user
  belongs_to :bank

  def summary
    "#{self.label} #{self.account_type} account balance: #{self.balance}"
  end
end