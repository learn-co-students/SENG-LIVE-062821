# RSpec.describe "Patients Tracker App - Part 1" do 
#   before do 
#     require 'test_data'
#   end
#   describe "Migrations" do 
#     describe "Patient" do 
#       it "inherits from ActiveRecord::Base" do 
#         expect(Patient.superclass).to eq(ActiveRecord::Base)
#       end

#       it "has the appropriate columns" do
#         columns = Patient.columns
#         {
#           name: :string,
#           birthday: :date,
#           last_visited_on: :datetime,
#           insurance_provider: :string,
#           is_insured: :boolean,
#           is_alive: :boolean,
#           is_organ_donor: :boolean
#         }.each do |column_name, type|
#           column = columns.find{|c| c.name == column_name.to_s}
#           expect(column).not_to be_nil, "column '#{column_name} does not exist"
#           expect(column.sql_type_metadata.type).to eq(type), "#{column_name} should be a #{type} column"
#         end
#       end
#     end

#     describe "Appointment" do 
#       it "inherits from ActiveRecord::Base" do 
#         expect(Appointment.superclass).to eq(ActiveRecord::Base)
#       end

#       it "has the appropriate columns" do
#         columns = Appointment.columns
#         {
#           starts_at: :datetime,
#           patient_id: :integer,
#           notes: :text,
#           no_show: :boolean
#         }.each do |column_name, type|
#           column = columns.find{|c| c.name == column_name.to_s}
#           expect(column).not_to be_nil, "column '#{column_name} does not exist"
#           expect(column.sql_type_metadata.type).to eq(type), "#{column_name} should be a #{type} column"
#         end
#       end
#     end
#   end

#   describe "Associations" do 
#     describe "Appointment" do 
#       it "belongs_to a patient" do 
#         appointment = Appointment.create(
#           starts_at: 2.hours.ago,
#           patient_id: Patient.first.id,
#           notes: "physical looks good",
#           no_show: false
#         )
#         expect(appointment).to respond_to(:patient)
#         expect(appointment.patient).to eq(Patient.first)
#       end
#     end    
#   end
# end



# RSpec.describe "Patients Tracker App - Part 2" do 
#   describe "Patient" do 
#     it "has_many appointments" do 
#       expect(Patient.last.appointments.length).to eq(10)
#     end
#   end

#   describe "Combining Associations with Queries" do 
#     before(:all) do 
#       @patient = Patient.create(name: "Slacker")
#       @no_show = @patient.appointments.create(starts_at: 1.hour.ago, no_show: true)
#       @past_appointment = @patient.appointments.create(starts_at: 1.week.ago, no_show: false)
#       @upcoming_appointment = @patient.appointments.create(starts_at: 22.hours.from_now)
#     end

#     after(:all) do 
#       @patient.appointments.destroy_all
#       @patient.destroy
#     end

#     describe "Patient#no_shows" do 
#       it "returns all the appointments to which the patient did not show up" do 
#         expect(@patient.no_shows).to include(@no_show)
#         expect(@patient.no_shows).not_to include(@past_appointment)
#         expect(@patient.no_shows).not_to include(@upcoming_appointment)
#       end
#     end
#     describe "Patient#past_appointments" do 
#       it "returns all the past appointments this patient has attended" do 
#         expect(@patient.past_appointments).not_to include(@no_show)
#         expect(@patient.past_appointments).to include(@past_appointment)
#         expect(@patient.past_appointments).not_to include(@upcoming_appointment)
#       end
#     end

#     describe "Patient#upcoming_appointments" do 
#       it "returns all the appointments this patient has scheduled" do 
#         expect(@patient.upcoming_appointments).not_to include(@no_show)
#         expect(@patient.upcoming_appointments).not_to include(@past_appointment)
#         expect(@patient.upcoming_appointments).to include(@upcoming_appointment)
#       end
#     end
#   end
# end