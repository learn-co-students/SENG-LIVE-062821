class Dog 
  def initialize(name, age, breed)
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

lennon.name #=> "Lennon Snow"

lennon.age #=> "11 months"

lennon.breed #=> "Pomeranian"