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

ActiveRecord::Schema.define(version: 2021_09_08_184937) do

  create_table "character_roles", force: :cascade do |t|
    t.integer "production_id", null: false
    t.integer "performer_id", null: false
    t.string "role"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["performer_id"], name: "index_character_roles_on_performer_id"
    t.index ["production_id"], name: "index_character_roles_on_production_id"
  end

  create_table "crew_members", force: :cascade do |t|
    t.string "name"
    t.string "job_title"
    t.integer "salary"
    t.integer "production_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["production_id"], name: "index_crew_members_on_production_id"
  end

  create_table "lines", force: :cascade do |t|
    t.integer "act"
    t.string "text"
    t.integer "character_role_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_role_id"], name: "index_lines_on_character_role_id"
  end

  create_table "performers", force: :cascade do |t|
    t.string "name"
    t.string "headshot"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "productions", force: :cascade do |t|
    t.string "title"
    t.string "genre"
    t.integer "budget"
    t.string "image"
    t.string "director"
    t.boolean "ongoing"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "description"
  end

  create_table "users", force: :cascade do |t|
    t.string "user_name"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "character_roles", "performers"
  add_foreign_key "character_roles", "productions"
  add_foreign_key "crew_members", "productions"
  add_foreign_key "lines", "character_roles"
end
