require_relative "20210817055048_create_appointments"
require_relative "20210817070423_create_walks"
require_relative "20210818064523_create_dog_walks"
require_relative "20210818065253_remove_pooped_and_dog_id_from_walks"
require_relative "20210818154003_create_doctors"
require_relative "20210818162918_add_doctor_id_to_appointments"
require_relative "20210818170141_reset_for_refactor"

class ResetForRefactor < ActiveRecord::Migration[5.2]
  def change
    revert AddDoctorIdToAppointments
    revert CreateDoctors
    revert RemovePoopedAndDogIdFromWalks
    revert CreateDogWalks
    revert CreateWalks
    revert CreateAppointments
  end
end
