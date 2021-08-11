RSpec.describe "Examples" do
  describe "Computer" do 

    describe "Part 1" do 
      describe "#first_computer" do 
        it "returns a computer instance with a brand, screen size, model name and model year" do 
          expect(first_computer).to be_a(Computer)
          expect(first_computer.brand).to be_a(String)
          expect(first_computer.screen_size).to be_a(Float)
          expect(first_computer.model_name).to be_a(String)
          expect(first_computer.model_year).to be_an(Integer)
        end
      end

      describe "#second_computer" do 
        it "returns a computer instance with a brand, screen size, model name and model year" do 
          expect(second_computer).to be_a(Computer)
          expect(second_computer.brand).to be_a(String)
          expect(first_computer.screen_size).to be_a(Float)
          expect(second_computer.model_name).to be_a(String)
          expect(second_computer.model_year).to be_an(Integer)
        end
      end
    end

    describe "Part 2" do 
      before(:each) do
        @time = DateTime.now
        Timecop.freeze(@time)
      end
  
      after(:each) do
        Timecop.return
      end
      describe "#asleep" do 
        it "returns a boolean indicating whether the computer is asleep" do 
          expect(Computer.new.asleep).to be_nil
        end
      end
  
      describe "#sleep" do 
        it "puts the computer to sleep" do 
          computer = Computer.new
          computer.sleep
          expect(computer.asleep).to eq(true)
        end
      end
  
      describe "#wake_up" do 
        it "wakes the computer from sleep" do 
          computer = Computer.new
          computer.sleep
          expect(computer.asleep).to eq(true)
          computer.wake_up
          expect(computer.wake_up).to eq(false)
        end
      end
  
      describe "#back_up" do 
        it "backs up the computer and stores the current time as the last_backed_up_at time" do 
          computer = Computer.new
          computer.back_up
          expect(computer.instance_variable_get("@last_backed_up_at")).to eq(@time.strftime("on %m/%d/%y at %H:%M"))
        end
      end
  
      # describe "#last_backed_up_at" do 
      #   it "returns the date and time of the last backup" do 
      #     computer = Computer.new
      #     computer.back_up
      #     expect(computer.instance_variable_get("@last_backed_up_at").to eq(@time.strftime("on %m/%d/%y at %H:%M"))
      #   end
      # end

      describe "#about_this_computer" do 
        it "returns a string containing information about the computer" do 
          computer = Computer.new
          computer.back_up
          computer.brand = "Apple"
          computer.screen_size = 15.0
          computer.model_name = "Macbook Pro"
          computer.model_year = 2012
          expect(computer.about_this_computer).to eq("This computer is a 2012 Apple Macbook Pro with a 15.0 inch screen. It was last backed up #{computer.instance_variable_get("@last_backed_up_at")}")
        end
      end

    end

  end
end
