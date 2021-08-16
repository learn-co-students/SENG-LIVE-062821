# Given a hash of attributes, Create a new Patient and persist it to the database and return it
def create_a_new_patient(attributes)
  Patient.create(attributes)
end

# Retun all Patients
def all_patients
  Patient.all
end


# Return all Patients who are organ donors
def organ_donors
  Patient.where(is_organ_donor: true)
end

# Return all patients who have died
def dead
  Patient.where(is_alive: false)
end

# Find a patient by name and return it
def find_patient_by_name(patient_name)
  Patient.find_by(name: patient_name)
end
# Delete a patient matching the id passed as an argument
def delete_patient_by_id(patient_id)
  patient = Patient.find(patient_id)
  patient.destroy
end

# Find the patient matching the id passed as an argument, update their last_visited_on property to the current time
def doctors_visit(patient_id)
  patient = Patient.find(patient_id)
  patient.update(last_visited_on: DateTime.now)
end

