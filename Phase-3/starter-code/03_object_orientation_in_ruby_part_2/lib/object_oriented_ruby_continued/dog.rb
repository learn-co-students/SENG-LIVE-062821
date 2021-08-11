class Dog
  def initialize(name, age)
    @name = name
    @age = age
    @breed = breed
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