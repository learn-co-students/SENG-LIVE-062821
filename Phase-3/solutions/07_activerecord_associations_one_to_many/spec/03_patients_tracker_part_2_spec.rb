RSpec.describe "Patients Tracker App - Part 2" do 
  describe "Patient" do 
    it "has_many appointments" do 
      expect(Patient.last.appointments.length).to eq(10)
    end
  end

  describe "Combining Associations with Queries" do 
    before(:all) do 
      @patient = Patient.create(name: "Slacker")
      @no_show = @patient.appointments.create(starts_at: 1.hour.ago, no_show: true)
      @past_appointment = @patient.appointments.create(starts_at: 1.week.ago, no_show: false)
      @upcoming_appointment = @patient.appointments.create(starts_at: 22.hours.from_now)
    end

    after(:all) do 
      @patient.appointments.destroy_all
      @patient.destroy
    end

    describe "Patient#no_shows" do 
      it "returns all the appointments to which the patient did not show up" do 
        expect(@patient.no_shows).to include(@no_show)
        expect(@patient.no_shows).not_to include(@past_appointment)
        expect(@patient.no_shows).not_to include(@upcoming_appointment)
      end
    end
    describe "Patient#past_appointments" do 
      it "returns all the past appointments this patient has attended" do 
        expect(@patient.past_appointments).not_to include(@no_show)
        expect(@patient.past_appointments).to include(@past_appointment)
        expect(@patient.past_appointments).not_to include(@upcoming_appointment)
      end
    end

    describe "Patient#upcoming_appointments" do 
      it "returns all the appointments this patient has scheduled" do 
        expect(@patient.upcoming_appointments).not_to include(@no_show)
        expect(@patient.upcoming_appointments).not_to include(@past_appointment)
        expect(@patient.upcoming_appointments).to include(@upcoming_appointment)
      end
    end
  end
end