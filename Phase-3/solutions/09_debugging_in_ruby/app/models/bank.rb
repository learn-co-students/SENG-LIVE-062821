class Bank < ActiveRecord::Base
  has_many :accounts
  has_many :users, through: :accounts

  def open_account(user, label, opening_deposit)
    self.accounts.create(user: user, label: label, opening_deposit: opening_deposit)
  end

  def accounts_summary(user)
    self.accounts.where(user: user).map{|account| account.summary}
  end

  def blacklist(user)
    self.accounts.where(user: user).destroy_all
  end
end