RSpec.describe "Examples" do
  describe "Computer" do 

    describe "Part 1" do 
      describe "initialize" do 
        it "accepts a brand, screen_size, model_name, and model_year as arguments and assigns their values to corresponding instance variables" do 
          computer = Computer.new(
            "Apple",
            15.0,
            "Macbook Pro",
            2012
          )
          expect(computer.instance_variable_get("@brand")).to eq("Apple")
          expect(computer.instance_variable_get("@screen_size")).to eq(15.0)
          expect(computer.instance_variable_get("@model_name")).to eq("Macbook Pro")
          expect(computer.instance_variable_get("@model_year")).to eq(2012)
        end
      end

      describe "getters and setters" do 
        it "are present for brand, screen_size, model_name, and model_year" do 
          expect(Computer.instance_methods).to include(
            :brand,
            :brand=,
            :screen_size,
            :screen_size=,
            :model_name,
            :model_name=,
            :model_year,
            :model_year=
          )
        end
      end

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

      let(:computer){
        Computer.new(
          "Apple", 
          15.0, 
          "Macbook Pro", 
          2012
        )
      }

      describe "instance methods" do
        

        describe "#asleep" do 
          it "returns a boolean indicating whether the computer is asleep" do 
            expect(computer.asleep).to be_nil
          end
        end
    
        describe "#sleep" do 
          it "puts the computer to sleep" do 
            computer.sleep
            expect(computer.asleep).to eq(true)
          end
        end
    
        describe "#wake_up" do 
          it "wakes the computer from sleep" do 
            
            computer.sleep
            expect(computer.asleep).to eq(true)
            computer.wake_up
            expect(computer.wake_up).to eq(false)
          end
        end
    
        describe "#back_up" do 
          it "backs up the computer and stores the current time as the last_backed_up_at time" do 
            computer.back_up
            expect(computer.instance_variable_get("@last_backed_up_at").strftime("%m-%e-%y %H:%M")).to eq(@time.strftime("%m-%e-%y %H:%M"))
          end
        end
    
        describe "#last_backed_up_at" do 
          it "returns the date and time of the last backup" do 
            expect(computer.last_backed_up_at).to eq("never")  
            computer.back_up
            expect(computer.last_backed_up_at).to eq(@time.strftime("on %m/%d/%y at %H:%M"))
          end
        end
  
        describe "#about_this_computer" do 
          it "returns a string containing information about the computer" do 
            computer = Computer.new(
              "Apple",
              15.0,
              "Macbook Pro",
              2012
            )
            computer.back_up
            expect(computer.about_this_computer).to eq("This computer is a 2012 Apple Macbook Pro with a 15.0 inch screen. It was last backed up #{computer.last_backed_up_at}")
          end
        end

        describe "#save" do 
          it "saves the computer to the @@all class variable" do 
            computer.save
            expect(Computer.class_variable_get("@@all")).to include(computer)
          end
        end
      end

      describe "class methods for Computer" do
        describe ".all" do 
          it "returns an array containing all created instances of the computer class" do 
            expect(Computer.all).to eq(Computer.class_variable_get("@@all"))
          end
        end

        describe ".create(attributes)" do 
          it "accepts a hash of attributes, creates a new computer, saves it and returns it" do 
            mac = Computer.create(
              "Apple", 
              24.0, 
              "iMac", 
              2021
            )
            expect(mac).to be_a(Computer)
            expect(mac.brand).to eq("Apple")
            expect(mac.screen_size).to eq(24.0)
            expect(mac.model_name).to eq("iMac")
            expect(mac.model_year).to eq(2021)
            expect(Computer.class_variable_get("@@all")).to include(mac)
          end
        end

      end

    end

  end
end
