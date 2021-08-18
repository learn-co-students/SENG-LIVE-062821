RSpec.describe "Dog Walker App - part 1" do 
  before do 
    require 'test_data'
  end
  describe "Dog" do 
    it "inherits from ActiveRecord::Base" do 
      expect(Dog.superclass).to eq(ActiveRecord::Base)
    end

    it "has the appropriate columns" do
      columns = Dog.columns
      {
        name: :string,
        birthdate: :date,
        breed: :string,
        image_url: :string,
        last_pooped_at: :datetime
      }.each do |column_name, type|
        column = columns.find{|c| c.name == column_name.to_s}
        expect(column).not_to be_nil, "column #{column_name} does not exist"
        expect(column.sql_type_metadata.type).to eq(type), "#{column_name} should be a #{type}column"
      end
    end
  end

  describe "DogWalk" do 
    it "inherits from ActiveRecord::Base" do 
      expect(DogWalk.superclass).to eq(ActiveRecord::Base)
    end

    it "has the appropriate columns" do
      columns = DogWalk.columns
      {
        dog_id: :integer,
        walk_id: :integer,
        pooped: :boolean
      }.each do |column_name, type|
        column = columns.find{|c| c.name == column_name.to_s}
        expect(column).not_to be_nil, "column #{column_name} does not exist"
        expect(column.sql_type_metadata.type).to eq(type), "#{column_name} should be a #{type}column"
      end
    end
  end

  describe "Walk" do 
    it "inherits from ActiveRecord::Base" do 
      expect(Walk.superclass).to eq(ActiveRecord::Base)
    end

    it "has the appropriate columns" do
      columns = Walk.columns
      {
        time: :datetime,
      }.each do |column_name, type|
        column = columns.find{|c| c.name == column_name.to_s}
        expect(column).not_to be_nil, "column '#{column_name}' does not exist"
        expect(column.sql_type_metadata.type).to eq(type), "#{column_name} should be a #{type} column"
      end
    end
  end

  describe "Associations" do 
    before(:all) do 
      @dog = Dog.create(name: "Lennon Snow", birthdate: Date.new(2020, 8, 31), breed: "Pomeranian", last_pooped_at: 3.hours.ago)
      @other_dog = Dog.create(name: "Gigi", birthdate: Date.new(2016, 7, 11), breed: "Shih Tzu", last_pooped_at: 3.hours.ago)
      @walk_3_hours_ago = Walk.create(time: 3.hours.ago)
      @walk_5_hours_ago = Walk.create(time: 5.hours.ago)
      @walk_yesterday = Walk.create(time: 1.day.ago)
      @other_dog_walk = @other_dog.dog_walks.create(walk: @walk_3_hours_ago, pooped: true)
      @yesterday_dog_walk = @dog.dog_walks.create(walk: @walk_yesterday, pooped: true)
      @dog_walk_with_no_poop = @dog.dog_walks.create(walk: @walk_5_hours_ago, pooped: false)
      @dog_walk_with_poop = @dog.dog_walks.create(walk: @walk_3_hours_ago, pooped: true)
    end
    after(:all) do 
      [@dog, @other_dog].each do |dog|
        dog.try(:dog_walks).try(:destroy_all)
        dog.destroy
      end
      [@walk_3_hours_ago, @walk_yesterday, @walk_5_hours_ago].each { |walk| walk.try(:destroy) }
    end

    describe "DogWalk" do 
      it "belongs_to walk" do 
        expect(@other_dog_walk).to respond_to(:walk)
        expect(@other_dog_walk.walk).to eq(@walk_3_hours_ago)
        expect(@yesterday_dog_walk.walk).to eq(@walk_yesterday)
      end

      it "belongs_to dog" do 
        expect(@other_dog_walk).to respond_to(:dog)
        expect(@other_dog_walk.dog).to eq(@other_dog)
        expect(@yesterday_dog_walk.dog).to eq(@dog)
      end
    end

    describe "Dog" do 
      it "has_many dog_walks" do 
        expect(@dog).to respond_to(:dog_walks)
        expect(@dog.dog_walks).to include(@yesterday_dog_walk, @dog_walk_with_no_poop, @dog_walk_with_poop)
        expect(@dog.dog_walks).not_to include(@other_dog_walk)
      end

      it "has_many walks, through dog_walks" do 
        expect(@dog).to respond_to(:walks)
        expect(@dog.walks).to include(@walk_yesterday, @walk_5_hours_ago, @walk_3_hours_ago)
        expect(@other_dog.walks).to include(@walk_3_hours_ago)
        expect(@other_dog.walks).not_to include(@walk_yesterday, @walk_5_hours_ago)
      end
    end

    describe "Walk" do 
      it "has_many dog_walks" do 
        expect(@walk_3_hours_ago).to respond_to(:dog_walks)
        expect(@walk_3_hours_ago.dog_walks).to include(@other_dog_walk, @dog_walk_with_poop)
        expect(@walk_3_hours_ago.dog_walks).not_to include(@yesterday_dog_walk, @dog_walk_with_no_poop)
      end

      it "has_many dogs, through dog_walks" do 
        expect(@walk_3_hours_ago).to respond_to(:dogs)
        expect(@walk_3_hours_ago.dogs).to include(@dog, @other_dog)
        expect(@walk_5_hours_ago.dogs).to include(@dog)
        expect(@walk_5_hours_ago.dogs).not_to include(@other_dog)
      end
    end
  end
end


# RSpec.describe "Dog Walker App - Advanced Spec" do 
#   before(:all) do 
#     @dog = Dog.create(name: "Lennon Snow", birthdate: Date.new(2020, 8, 31), breed: "Pomeranian", last_pooped_at: 3.hours.ago)
#     @other_dog = Dog.create(name: "Gigi", birthdate: Date.new(2016, 7, 11), breed: "Shih Tzu", last_pooped_at: 3.hours.ago)
#     @walk_3_hours_ago = Walk.create(time: 3.hours.ago)
#     @walk_5_hours_ago = Walk.create(time: 5.hours.ago)
#     @walk_yesterday = Walk.create(time: 1.day.ago)
#     @other_dog_walk = @other_dog.dog_walks.create(walk: @walk_3_hours_ago, pooped: true)
#     @yesterday_dog_walk = @dog.dog_walks.create(walk: @walk_yesterday, pooped: true)
#     @dog_walk_with_no_poop = @dog.dog_walks.create(walk: @walk_5_hours_ago, pooped: false)
#     @dog_walk_with_poop = @dog.dog_walks.create(walk: @walk_3_hours_ago, pooped: true)
#   end
#   after(:all) do 
#     [@dog, @other_dog].each do |dog|
#       dog.try(:dog_walks).try(:destroy_all)
#       dog.destroy
#     end
#     [@walk_3_hours_ago, @walk_yesterday, @walk_5_hours_ago].each { |walk| walk.destroy }
#   end

#   describe "Combining Associations with Queries" do 
#     describe "Dog#recent_walks" do 
#       it "returns all this dog's walks in the past 6 hours" do 
#         expect(@dog.recent_walks).to include(@walk_3_hours_ago, @walk_5_hours_ago)
#         expect(@dog.recent_walks).not_to include(@yesterday_walk)
#       end
#     end

#     describe "Dog#recent_walks_with_poop" do 
#       it "returns all this dog's walks in the past 6 hours that included a poop" do 
#         expect(@dog.recent_walks_with_poop).to include(@walk_3_hours_ago)
#         expect(@dog.recent_walks_with_poop).not_to include(@walk_yesterday, @walk_5_hours_ago)
#       end
#     end
#   end
# end