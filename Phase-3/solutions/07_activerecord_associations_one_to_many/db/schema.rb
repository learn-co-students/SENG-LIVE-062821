# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_17_070423) do

  create_table "appointments", force: :cascade do |t|
    t.datetime "starts_at"
    t.integer "patient_id"
    t.text "notes"
    t.boolean "no_show"
    t.index ["patient_id"], name: "index_appointments_on_patient_id"
  end

  create_table "dogs", force: :cascade do |t|
    t.string "name"
    t.date "birthdate"
    t.string "breed"
    t.string "image_url"
    t.datetime "last_pooped_at"
  end

  create_table "patients", force: :cascade do |t|
    t.string "name"
    t.datetime "last_visited_on"
    t.date "birthday"
    t.string "insurance_provider"
    t.boolean "is_insured"
    t.boolean "is_alive"
    t.boolean "is_organ_donor"
  end

  create_table "walks", force: :cascade do |t|
    t.datetime "time"
    t.boolean "pooped"
    t.integer "dog_id"
    t.index ["dog_id"], name: "index_walks_on_dog_id"
  end

end
