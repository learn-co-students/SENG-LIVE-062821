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

  describe "Walk" do 
    it "inherits from ActiveRecord::Base" do 
      expect(Walk.superclass).to eq(ActiveRecord::Base)
    end

    it "has the appropriate columns" do
      columns = Walk.columns
      {
        time: :datetime,
        dog_id: :integer,
        pooped: :boolean
      }.each do |column_name, type|
        column = columns.find{|c| c.name == column_name.to_s}
        expect(column).not_to be_nil, "column '#{column_name}' does not exist"
        expect(column.sql_type_metadata.type).to eq(type), "#{column_name} should be a #{type} column"
      end
    end
  end

  describe "Associations" do 
    describe "Walk" do 
      it "belongs_to a dog" do 
        walk = Walk.create(
          dog_id: Dog.first.id,
          pooped: true,
          time: 1.hour.ago
        )
        expect(walk).to respond_to(:dog)
        expect(walk.dog).to eq(Dog.first)
      end
    end
  end
end