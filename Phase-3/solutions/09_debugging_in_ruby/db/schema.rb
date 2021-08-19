# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_19_191401) do

  create_table "accounts", force: :cascade do |t|
    t.string "label"
    t.float "balance"
    t.string "account_type"
    t.integer "user_id"
    t.integer "bank_id"
    t.index ["bank_id"], name: "index_accounts_on_bank_id"
    t.index ["user_id"], name: "index_accounts_on_user_id"
  end

  create_table "banks", force: :cascade do |t|
    t.string "name"
    t.integer "market_capitalization"
    t.string "country"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "country_of_residence"
  end

  add_foreign_key "accounts", "banks"
  add_foreign_key "accounts", "users"
end
