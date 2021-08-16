RSpec.describe "Dog queries spec" do 
  # Return a new dog
  describe "create_a_new_dog(attributes)" do
    it "takes a hash of attributes as an argument and returns a new Dog instance that has been persisted to the database" do 
      attributes = {
        name: "Lennon Snow", 
        birthday: Date.new(2020, 8, 31),
        breed: "Pomeranian",
        image_url: "https://res.cloudinary.com/dnocv6uwb/image/upload/v1627585625/lennon-with-tennis-ball_slg2zn.jpg",
        last_pooped_at: 2.hours.ago
      }
      dog = create_a_new_dog(attributes)
      expect(dog).to be_a(Dog)
      expect(dog.name).to eq("Lennon Snow")
      expect(dog.breed).to eq("Pomeranian")
      expect(dog.image_url).to eq("https://res.cloudinary.com/dnocv6uwb/image/upload/v1627585625/lennon-with-tennis-ball_slg2zn.jpg")
      expect(dog.id).not_to be_nil
    end
  end

  # Return all Dogs
  describe "all_dogs" do

  end

  # Return all dogs that match the given breed
  describe "all_dogs_by_breed(breed)" do
    
  end

  # Find a dog by name and return it
  describe "find_dog_by_name(name)" do
    
  end

  # Delete a dog (pass an id as an argument and use it to remove the dog from the db)
  describe "delete_a_dog(id)" do
    
  end

  # Create a puppies method that returns all of the puppies (dog's under 1 year old)
  describe "puppies" do

  end

  # Create a mix method that returns all the mixed breed dogs (dogs whose breed includes "mix")
  describe "mix" do

  end

  # Create a needs to poop method that returns all of the dogs who last pooped more than 6 hours ago.
  describe "needs_to_poop" do

  end

  # Create a poop method that takes an id as argument and updates the last_pooped_at time for the dog matching that id
  describe "poop(id)" do
    
  end

end