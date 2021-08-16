RSpec.describe "Dogs Migration Spec" do 
  describe "Dog" do 
    it "inherits from ActiveRecord::Base" do 
      expect(Dog.superclass).to eq(ActiveRecord::Base)
    end

    it "has the appropriate columns" do
      columns = Dog.columns
      {
        name: :string,
        birthday: :date,
        breed: :string,
        image_url: :string,
        last_pooped_at: :datetime
      }.each do |column_name, type|
        column = columns.find{|c| c.name == column_name.to_s}
        expect(column).not_to be_nil
        expect(column.sql_type_metadata.type).to eq(type)
      end
    end
  end
end