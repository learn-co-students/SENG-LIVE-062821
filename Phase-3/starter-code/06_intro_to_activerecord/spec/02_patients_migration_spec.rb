RSpec.describe "Patients Migration Spec" do 
  describe "Patient" do 
    it "inherits from ActiveRecord::Base" do 
      expect(Patient.superclass).to eq(ActiveRecord::Base)
    end

    it "has the appropriate columns" do
      columns = Patient.columns
      {
        name: :string,
        birthday: :date,
        last_visited_on: :datetime,
        insurance_provider: :string,
        is_insured: :datetime,
        is_alive: :boolean,
        is_organ_donor: :boolean
      }.each do |column_name, type|
        column = columns.find{|c| c.name == column_name.to_s}
        expect(column).not_to be_nil
        expect(column.sql_type_metadata.type).to eq(type)
      end
    end
  end
end