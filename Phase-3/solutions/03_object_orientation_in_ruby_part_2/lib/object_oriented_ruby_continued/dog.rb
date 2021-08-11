class Dog
  puts self
  @@all = []

  def self.all
    @@all
  end

  def self.create(name, age, breed)
    dog = self.new(name, age, breed)
    dog.save
    dog
  end

  def initialize(name, age, breed)
    @name = name
    @age = age
    @breed = breed
    puts "self: #{self}"
    puts "self.class: #{self.class}"
  end

  def save 
    @@all << self
  end

  def name
    @name
  end

  def age
    @age
  end

  def breed
    @breed
  end

end



lennon = Dog.new("Lennon Snow", "11 months", "Pomeranian")

# binding.pry
puts lennon.name

puts lennon.age

puts lennon.breed