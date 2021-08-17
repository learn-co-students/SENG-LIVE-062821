RSpec.describe "Patients Tracker App - Part 1" do 
  before do 
    require 'test_data'
  end
  describe "Migrations" do 
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
          is_insured: :boolean,
          is_alive: :boolean,
          is_organ_donor: :boolean
        }.each do |column_name, type|
          column = columns.find{|c| c.name == column_name.to_s}
          expect(column).not_to be_nil, "column '#{column_name} does not exist"
          expect(column.sql_type_metadata.type).to eq(type), "#{column_name} should be a #{type} column"
        end
      end
    end

    describe "Appointment" do 
      it "inherits from ActiveRecord::Base" do 
        expect(Appointment.superclass).to eq(ActiveRecord::Base)
      end

      it "has the appropriate columns" do
        columns = Appointment.columns
        {
          starts_at: :datetime,
          patient_id: :integer,
          notes: :text,
          no_show: :boolean
        }.each do |column_name, type|
          column = columns.find{|c| c.name == column_name.to_s}
          expect(column).not_to be_nil, "column '#{column_name} does not exist"
          expect(column.sql_type_metadata.type).to eq(type), "#{column_name} should be a #{type} column"
        end
      end
    end
  end

  describe "Associations" do 
    describe "Appointment" do 
      it "belongs_to a patient" do 
        appointment = Appointment.create(
          starts_at: 2.hours.ago,
          patient_id: Patient.first.id,
          notes: "physical looks good",
          no_show: false
        )
        expect(appointment).to respond_to(:patient)
        expect(appointment.patient).to eq(Patient.first)
      end
    end    
  end
end