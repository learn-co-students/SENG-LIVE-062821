class User < ActiveRecord::Base
  has_many :accounts
  has_many :banks, through: :accounts

  def total_balance
    # self.accounts.map{|a| a.balance}.sum
    self.accounts.sum(:balance)
  end

  def balance_by_account_type(account_type)
    self.accounts.where(account_type: account_type).sum(:balance)
  end

  def self.number_one
    user_id, balance = Account.group(:user_id).calculate(:sum, :balance).max
    User.find_by_id(user_id)
  end

  def main_banks
    bank_id, total_balance = self.accounts.group(:bank_id).calculate(:sum, :balance).max
    Bank.find_by_id(bank_id)
  end

  def international_funds
    self.accounts.includes(:bank).where.not(bank: {country: self.country_of_residence}).sum(:balance)
  end
end