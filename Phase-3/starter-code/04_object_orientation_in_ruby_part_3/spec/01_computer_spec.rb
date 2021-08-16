RSpec.describe "Examples" do
  describe "Computer" do 

    describe "Part 1" do 
      before(:each) do
        @time = DateTime.now
        Timecop.freeze(@time)
      end
    
      after(:each) do
        Timecop.return
      end

      let(:computer){
        Computer.new(
          brand: "Apple", 
          screen_size: 15.0, 
          model_name: "Macbook Pro", 
          model_year: 2012
        )
      }

      describe "initialize" do 
        it "accepts a keyword arguments and assigns their values to instance variables corresponding to their names" do 
          expect(computer.instance_variable_get("@brand")).to eq("Apple")
          expect(computer.instance_variable_get("@screen_size")).to eq(15.0)
          expect(computer.instance_variable_get("@model_name")).to eq("Macbook Pro")
          expect(computer.instance_variable_get("@model_year")).to eq(2012)
          expect(computer.instance_variable_get("@last_charged_at")).to eq(DateTime.now)
          expect(computer.instance_variable_get("@battery_capacity")).to eq(1.minute)
        end
      end
      
      describe "private methods" do 
        
        describe "has_charge?" do 
          it "is a private method" do 
            expect(computer.private_methods).to include(:has_charge?)
          end

          it "is invoked when back_up is called" do
            expect(computer).to receive(:has_charge?)
            computer.back_up
          end
        end

        describe "battery_life" do 
          it "is a private method" do 
            expect(computer.private_methods).to include(:battery_life)
          end

          it "is invoked when about_this_computer is called" do 
            expect(computer).to receive(:battery_life)
            computer.about_this_computer
          end
        end
        
      end

      

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
            expect(computer.instance_variable_get("@last_backed_up_at")).to eq(@time.strftime"on %m/%d/%y at %H:%M")
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
              brand: "Apple",
              screen_size: 15.0,
              model_name: "Macbook Pro",
              model_year: 2012
            )
            computer.back_up
            expect(computer.about_this_computer).to eq("This computer is a 2012 Apple Macbook Pro with a 15.0 inch screen. It was last backed up #{computer.last_backed_up_at}. Current battery life is: #{computer.send(:battery_life)}")
          end
        end

        describe "#save" do 
          it "saves the computer to the @@all class variable" do 
            computer.save
            expect(Computer.class_variable_get("@@all")).to include(computer)
          end
        end
      end

      describe "getters and setters" do 
        it "are present for brand, screen_size, model_name, and model_year" do 
          methods = [ 
            :brand,
            :brand=,
            :screen_size,
            :screen_size=,
            :model_name,
            :model_name=,
            :model_year,
            :model_year=,
            :last_backed_up_at
          ]
          methods.each do |method|
            expect(computer).to respond_to(method)
          end
        end
      end

      describe "#first_computer" do 
        it "returns a computer instance with a brand, screen size, model name and model year" do 
          expect(first_computer).to be_a(Computer)
          expect(first_computer.brand).not_to eq("Fill me in")
          expect(first_computer.brand).to be_a(String)
          expect(first_computer.screen_size).not_to eq(0.0)
          expect(first_computer.screen_size).to be_a(Float)
          expect(first_computer.model_name).not_to eq("Fill me in")
          expect(first_computer.model_name).to be_a(String)
          expect(first_computer.model_year).not_to eq(0)
          expect(first_computer.model_year).to be_a(Integer)
        end
      end

      describe "#second_computer" do 
        it "returns a computer instance with a brand, screen size, model name and model year" do 
          expect(first_computer).to be_a(Computer)
          expect(first_computer.brand).not_to eq("Fill me in")
          expect(first_computer.brand).to be_a(String)
          expect(first_computer.screen_size).not_to eq(0.0)
          expect(first_computer.screen_size).to be_a(Float)
          expect(first_computer.model_name).not_to eq("Fill me in")
          expect(first_computer.model_name).to be_a(String)
          expect(first_computer.model_year).not_to eq(0)
          expect(first_computer.model_year).to be_a(Integer)
        end
      end

      
    end

    describe "Part 2" do 

      describe "class methods for Computer" do
        before(:each) do 
          seed_computers
        end

        after(:each) do 
          Computer.class_variable_set("@@all", [])
        end

        describe ".all" do 
          it "returns an array containing all created instances of the computer class" do 
            expect(Computer.all).to eq(Computer.class_variable_get("@@all"))
          end
        end

        describe ".create(attributes)" do 
          it "accepts a hash of attributes, creates a new computer, saves it and returns it" do 
            mac = Computer.create(
              brand: "Apple", 
              screen_size: 24.0, 
              model_name: "iMac", 
              model_year: 2021
            )
            expect(mac).to be_a(Computer)
            expect(mac.brand).to eq("Apple")
            expect(mac.screen_size).to eq(24.0)
            expect(mac.model_name).to eq("iMac")
            expect(mac.model_year).to eq(2021)
            expect(Computer.class_variable_get("@@all")).to include(mac)
          end
        end

        describe ".by_brand(brand_name)" do 
          it "accepts a brand name as an argument and returns an array of all computers matching that brand name" do 
            expect(Computer.by_brand("Apple")).to be_an(Array)
            expect(Computer.by_brand("Apple").length).to eq(5)
            expect(Computer.by_brand("HP").length).to eq(6)
          end
        end

        describe ".report" do 
          it "returns an array of information (as strings) about all of the computers we have created" do 
            computers = Computer.all
            report = Computer.report
            computers.each do |computer| 
              expect(report).to include(computer.about_this_computer)
            end
          end
        end
        
        describe ".newer_models" do 
          it "returns an array of the computers whose model year is 2016 or later" do 
            computers = Computer.all
            newer = computers.map{|c| c.model_year}.filter{|y| y >= 2016}
            expect(Computer.newer_models).to be_an(Array)
            expect(Computer.newer_models.length).to eq(newer.length)
          end
        end

        describe "Advanced Deliverables" do 
          describe ".find_by(attributes)" do 
            it "returns the first computer that matches all the attributes in the hash passed as an argument" do 
              computer = Computer.all.sample
              attributes = {brand: computer.brand, model_name: computer.model_name}
              expect(Computer.find_by(attributes)).to eq(computer)
            end
          end
        end

      end

    end

  end
end
