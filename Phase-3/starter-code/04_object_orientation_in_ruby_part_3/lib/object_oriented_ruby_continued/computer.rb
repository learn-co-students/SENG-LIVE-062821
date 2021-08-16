# class Computer

#   @@all = []

#   def self.all 
#     @@all
#   end

#   def self.create(attributes)
#     self.new(attributes).save
#   end

#   def self.by_brand(brand)
#     @@all.filter {|c| c.brand == brand}
#   end

#   def self.report
#     self.all.map {|c| c.about_this_computer}
#   end

#   def self.newer_models
#     self.all.filter{|c| c.model_year >= 2016}
#   end

#   def self.find_by(attributes)
#     self.all.find do |c| 
#       attributes.all? do |attr, value|
#         c.send(attr) == value
#       end
#     end
#   end

#   def initialize(attributes = {})
#     attributes.each do |key, value|
#       self.send("#{key}=",value)
#     end
#     @last_charged_at = DateTime.now
#     @battery_capacity = 1.minute
#   end

#   def save #
#     @@all << self
#     self
#   end

#   def brand
#     @brand
#   end

#   def brand=(brand)
#     @brand = brand
#   end

#   def screen_size
#     @screen_size
#   end
  
#   def screen_size=(screen_size)
#     @screen_size = screen_size
#   end

#   def model_name
#     @model_name
#   end

#   def model_name=(model_name)
#     @model_name = model_name
#   end

#   def model_year
#     @model_year
#   end

#   def model_year=(model_year)
#     @model_year = model_year
#   end

#   def asleep
#     @asleep
#   end

#   def sleep
#     @asleep = true
#   end

#   def wake_up
#     @asleep = false
#   end

#   def back_up
#     if has_charge?
#       @last_backed_up_at = DateTime.now.strftime("on %m/%d/%y at %H:%M")
#     else
#       "need to charge the battery"
#     end
#   end

#   def last_backed_up_at
#     @last_backed_up_at || "never"
#   end

#   def about_this_computer
#     "This computer is a #{@model_year} #{@brand} #{@model_name} with a #{@screen_size} inch screen. It was last backed up #{last_backed_up_at}. Current battery life is: #{battery_life}"
#   end

#   private

#   def battery_life
#     if has_charge?
#       "charged"
#     else
#       "depleted"
#     end
#   end

#   def has_charge?
#     @last_charged_at > @battery_capacity.ago
#   end

  
# end

  
# # create and return the first computer within this method
# def first_computer
#   Computer.new(
#     brand: "Apple",
#     screen_size: 15.0,
#     model_name: "Macbook Pro",
#     model_year: 2012
#   )
# end

# # create and return the second computer within this method
# def second_computer
#   computer = Computer.new(
#     brand: "Apple",
#     screen_size: 13.0,
#     model_name: "Macbook Air",
#     model_year: 2015
#   )
# end


class Computer < Base

  def self.by_brand(brand)
    self.all.filter {|c| c.brand == brand}
  end

  def self.report
    self.all.map {|c| c.about_this_computer}
  end

  def self.newer_models
    self.all.filter{|c| c.model_year >= 2016}
  end

  def self.find_by(attributes)
    self.all.find do |c| 
      attributes.all? do |attr, value|
        c.send(attr) == value
      end
    end
  end

  attr_accessor :brand, :screen_size, :model_name, :model_year
  attr_reader :asleep

  def initialize(attributes = {})
    super
    @last_charged_at = DateTime.now
    @battery_capacity = 1.minute
  end

  def sleep
    @asleep = true
  end

  def wake_up
    @asleep = false
  end

  def back_up
    if has_charge?
      @last_backed_up_at = DateTime.now.strftime("on %m/%d/%y at %H:%M")
    else
      "need to charge the battery"
    end
  end

  def last_backed_up_at
    @last_backed_up_at || "never"
  end

  def about_this_computer
    "This computer is a #{@model_year} #{@brand} #{@model_name} with a #{@screen_size} inch screen. It was last backed up #{last_backed_up_at}. Current battery life is: #{battery_life}"
  end

  private

  def battery_life
    if has_charge?
      "charged"
    else
      "depleted"
    end
  end

  def has_charge?
    @last_charged_at > @battery_capacity.ago
  end

  
end

  
# create and return the first computer within this method
def first_computer
  Computer.new(
    brand: "Apple",
    screen_size: 15.0,
    model_name: "Macbook Pro",
    model_year: 2012
  )
end

# create and return the second computer within this method
def second_computer
  computer = Computer.new(
    brand: "Apple",
    screen_size: 13.0,
    model_name: "Macbook Air",
    model_year: 2015
  )
end