class Dog
  attr_reader :name, :breed
  attr_accessor :age

  def initialize(name:, age:, breed:)
    @name = name
    @age = age
    @breed = breed
  end

end

def lennon
  Dog.new(name: "Lennon Snow", age: "11 months", breed: "Pomeranian")
end 
