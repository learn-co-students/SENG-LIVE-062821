class Computer

  def initialize(brand, screen_size, model_name, model_year)
    @brand = brand
    @screen_size = screen_size
    @model_name = model_name
    @model_year = model_year
  end

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
    @last_backed_up_at = DateTime.now
  end

  def last_backed_up_at
    (@last_backed_up_at && @last_backed_up_at.strftime("%m-%e-%y %H:%M")) || "never"
  end

  def about_this_computer
    "This computer is a #{@model_year} #{@brand} #{@model_name} with a #{@screen_size} inch screen. It was last backed up at#{@last_backed_up_at.strftime("%m-%e-%y %H:%M")}"
  end
end

# this time, assign all of the computer's attributes using .new instead of calling the setters directly
def first_computer
  Computer.new("Apple", 15.0, "Macbook Pro", 2012)
end

# this time, assign all of the computer's attributes using .new instead of calling the setters directly
def second_computer
  Computer.new("Apple", 24.0, "iMac", 2021)
end