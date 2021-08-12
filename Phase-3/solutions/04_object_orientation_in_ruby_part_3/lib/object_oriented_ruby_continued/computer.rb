class Computer

  @@all = []

  def self.all 
    @@all
  end

  def self.create(attributes={})
    computer = self.new(attributes)
    computer.save
    computer
  end

  def self.by_brand(brand_name)
    self.all.filter{|computer| computer.brand == brand_name}
  end

  def self.report
    self.all.map{|computer| computer.about_this_computer}
  end

  def self.newer_models
    self.all.filter{|computer| computer.model_year >= 2016}
  end

  def self.find_by(attributes)
    self.all.find do |computer| 
      attributes.all? do |attr, value|
        computer.send(attr) == value
      end
    end
  end

  attr_accessor :brand, :screen_size, :model_name, :model_year
  attr_reader :asleep

  def initialize(attributes={})
    @brand = attributes[:brand]
    @screen_size = attributes[:screen_size]
    @model_name = attributes[:model_name]
    @model_year = attributes[:model_year]
    @last_charged_at = DateTime.now
    @battery_capacity = 1.minute
  end

  def save #
    @@all << self
  end

  def sleep
    @asleep = true
  end

  def wake_up
    @asleep = false
  end

  def back_up
    if has_charge?
      @last_backed_up_at = DateTime.now
    else
      "Need to charge the battery first"
    end
  end

  def last_backed_up_at
    (@last_backed_up_at && @last_backed_up_at.strftime("on %m/%d/%y at %H:%M")) || "never"
  end

  def about_this_computer
    "This computer is a #{@model_year} #{@brand} #{@model_name} with a #{@screen_size} inch screen. It was last backed up #{last_backed_up_at}. Current battery life is: #{battery_life}"
  end

  class BatteryDepletedError < StandardError
    def message
      "The battery is depleted! Please plug in your computer and try again."
    end
  end

  private

  # advanced version
  # def battery_life
  #   time_since_last_charge = (DateTime.now - @last_charged_at).to_f
  #   charge_remaining = ((@battery_capacity - time_since_last_charge) / @battery_capacity).round(2)
  #   if charge_remaining > 0 
  #     "#{(charge_remaining*100).to_i}%"
  #   else
  #     "depleted"
  #   end
  # end

  # simple version
  def battery_life
    if (DateTime.now - @last_charged_at) < @battery_capacity
      "charged"
    else
      "depleted"
    end
  end

  def has_charge?
    raise BatteryDepletedError if battery_life == "depleted"
    true
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
  Computer.new(
    brand: "Apple",
    screen_size: 24.0,
    model_name: "iMac",
    model_year: 2021
  )
end