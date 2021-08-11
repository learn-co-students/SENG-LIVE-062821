# Define your Computer class above the first_computer and second_computer methods.
class Computer
  def brand
    @brand
  end
  
  def brand=(brand)
    @brand = brand
  end

  def screen_size
    @screen_size
  end

  def screen_size=(screen_size)
    @screen_size = screen_size
  end

  def model_name
    @model_name
  end

  def model_name=(model_name)
    @model_name = model_name
  end

  def model_year
    @model_year
  end

  def model_year=(model_year)
    @model_year = model_year
  end

  def asleep
    @asleep
  end  

  def sleep
    @asleep = true
  end

  def wake_up
    @asleep = false
  end

  def back_up
    # what do we need to do here?
    @last_backed_up_at = DateTime.now.strftime("on %m/%d/%y at %H:%M")
  end

  def about_this_computer
    "This computer is a #{@model_year} #{@brand} #{@model_name} with a #{@screen_size} inch screen. It was last backed up #{@last_backed_up_at}"
  end

  # def ==(other_computer)
  #   puts "my == method"
  #   @brand == other_computer.brand 
  # end
end

def functional_about_this_computer(model_year, brand, model_name, screen_size, last_backed_up_at)
  "This computer is a #{model_year} #{brand} #{model_name} with a #{screen_size} inch screen. It was last backed up #{last_backed_up_at}"
end

# create and return the first computer within this method
def first_computer
  # give computer a name assign it to a new instance of the Computer class
  computer = Computer.new
  # assign attributes
  computer.brand = "Apple"
  computer.screen_size = 15.0
  computer.model_name ="Macbook Pro"
  computer.model_year = 2012
  # return the computer
  computer
end

# create and return the second computer within this method
def second_computer
  computer = Computer.new
  # assign attributes
  computer.brand = "Apple"
  computer.screen_size = 24.0
  computer.model_name ="iMac"
  computer.model_year = 2021
  # return the computer
  computer
end