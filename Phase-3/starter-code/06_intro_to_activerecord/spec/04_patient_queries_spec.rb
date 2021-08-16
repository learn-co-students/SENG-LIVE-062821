require "test_data"
RSpec.describe "Patient queries spec - lib/intro_to_activerecord/patient_queries.rb" do 
  describe "create_a_new_patient(attributes)" do 
    it "creates a new patient using the given attributes saves it to the database and returns it" do 
      expect(Patient.count).to eq(18)
      create_a_new_patient(name: "Dakota", last_visited_on: 1.day.ago, birthday: 35.years.ago, insurance_provider: "Aetna", is_insured: true, is_alive: true, is_organ_donor: true)
      expect(Patient.last.name).to eq("Dakota")
      expect(Patient.count).to eq(19)
    end
  end
  describe "all_patients" do 
    it "returns a collection of all patients stored in the database" do 
      expect(all_patients).to be_a(ActiveRecord::Relation)
      expect(all_patients.length).to eq(19)
    end
  end
  describe "organ_donors" do 
    it "returns a collection of all patients who are organ donors" do 
      expect(organ_donors).to be_a(ActiveRecord::Relation)
      expect(organ_donors.length).to eq(10)
    end
  end
  describe "dead" do 
    it "returns a collection of all patients who are dead" do 
      expect(dead).to be_a(ActiveRecord::Relation)
      expect(dead.length).to eq(7)
    end
  end
  describe "find_patient_by_name(patient_name)" do 
    it "takes a patient name as an argument and returns the patient matching that name" do 
      patient = find_patient_by_name("Kiara Konopelski")
      expect(patient.insurance_provider).to eq("WellCare")
    end
  end
  describe "delete_patient_by_id(patient_id)" do 
    it "finds the patient matching the patient_id and deletes it from the database" do 
      last_id = Patient.last.id
      expect(Patient.last.name).to eq("Dakota")
      delete_patient_by_id(last_id)
      expect(Patient.last.name).to eq("Lanita Witting")
    end
  end
  describe "doctors_visit(patient_id)" do 
    it "finds the patient matching the patient_id and updates their last_visited_on property to the current time" do 
      last_id = Patient.last.id
      doctors_visit(last_id)
      expect(Patient.last.last_visited_on).not_to be_nil
    end
  end
end

 
