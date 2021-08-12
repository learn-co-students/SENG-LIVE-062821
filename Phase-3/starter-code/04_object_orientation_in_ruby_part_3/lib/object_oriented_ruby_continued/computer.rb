class Computer

  @@all = []

  def self.all 
    @@all
  end

  def self.create(brand, screen_size, model_name, model_year)
    computer = self.new(brand, screen_size, model_name, model_year)
    computer.save
    computer
  end

  def initialize(brand, screen_size, model_name, model_year)
    @brand = brand
    @screen_size = screen_size
    @model_name = model_name
    @model_year = model_year
  end

  def save #
    @@all << self
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
    @last_backed_up_at = DateTime.now.strftime("on %m/%d/%y at %H:%M")
  end

  def last_backed_up_at
    @last_backed_up_at || "never"
  end

  def about_this_computer
    "This computer is a #{@model_year} #{@brand} #{@model_name} with a #{@screen_size} inch screen. It was last backed up #{last_backed_up_at}"
  end
end

  
# create and return the first computer within this method
def first_computer
  Computer.new(
    "Apple",
    15.0,
    "Macbook Pro",
    2012
  )
end

# create and return the second computer within this method
def second_computer
  computer = Computer.new(
    "Apple",
    13.0,
    "Macbook Air",
    2015
  )
end