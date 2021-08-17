RSpec.describe "Dog Walker App - Part2" do 
  before(:all) do 
    @dog = Dog.create(name: "Lennon Snow", birthdate: Date.new(2020, 8, 31), breed: "Pomeranian", last_pooped_at: 2.hours.ago)
    @other_dog = Dog.create(name: "Gigi", birthdate: Date.new(2016, 7, 11), breed: "Shih Tzu", last_pooped_at: 3.hours.ago)
    @other_dog_walk = @other_dog.walks.create(time: 3.hours.ago, pooped: true)
    @yesterday_walk = @dog.walks.create(time: 1.day.ago, pooped: true)
    @walk_with_no_poop = @dog.walks.create(time: 5.hours.ago, pooped: false)
    @walk_with_poop = @dog.walks.create(time: 2.hours.ago, pooped: true)
  end
  after(:all) do 
    [@dog, @other_dog].each do |dog|
      dog.try(:walks).try(:destroy_all)
      dog.destroy
    end
  end
  describe "Dog" do 
    it "has_many walks" do 
      expect(@dog.walks).to include(@walk_with_no_poop, @walk_with_poop)
      expect(@dog.walks).not_to include(@other_dog_walk)
    end
  end

  describe "Combining Associations with Queries" do 
    describe "Dog#recent_walks" do 
      it "returns all this dog's walks in the past 6 hours" do 
        expect(@dog.recent_walks).to include(@walk_with_no_poop, @walk_with_poop)
        expect(@dog.recent_walks).not_to include(@yesterday_walk)
      end
    end

    describe "Dog#recent_walks_with_poop" do 
      it "returns all this dog's walks in the past 6 hours that included a poop" do 
        expect(@dog.recent_walks_with_poop).to include(@walk_with_poop)
        expect(@dog.recent_walks_with_poop).not_to include(@yesterday_walk, @walk_with_no_poop)
      end
    end
  end
end