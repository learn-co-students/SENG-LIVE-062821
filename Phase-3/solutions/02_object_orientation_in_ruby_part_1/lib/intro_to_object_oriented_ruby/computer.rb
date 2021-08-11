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
    @last_backed_up_at = DateTime.now.strftime("on %m/%d/%y at %H:%M")
  end

  # def last_backed_up_at
  #   @last_backed_up_at || "never"
  # end

  def about_this_computer
    "This computer is a #{@model_year} #{@brand} #{@model_name} with a #{@screen_size} inch screen. It was last backed up #{@last_backed_up_at}"
  end
end

def functional_about_this_computer(model_year, brand, model_name, screen_size, last_backed_up_at)
  "This computer is a #{model_year} #{brand} #{model_name} with a #{screen_size} inch screen. It was last backed up #{last_backed_up_at}"
end

# create and return the first computer within this method
def first_computer
  computer = Computer.new
  computer.brand = "Apple"
  computer.screen_size = 15.0
  computer.model_name = "Macbook Pro"
  computer.model_year = 2012
  computer
end

# create and return the second computer within this method
def second_computer
  computer = Computer.new
  computer.brand = "Apple"
  computer.screen_size = 13.0
  computer.model_name = "Macbook Air"
  computer.model_year = 2015
  computer
end