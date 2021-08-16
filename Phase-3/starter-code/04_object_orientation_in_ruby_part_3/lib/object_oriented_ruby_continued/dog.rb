class Dog
  @@all = []

  def self.all
    @@all
  end

  def self.create(name, age, breed)
    dog = self.new(name, age, breed)
    dog.save
    dog
  end

  def initialize(name:, age:, breed:)
    @name = name
    @age = age
    @breed = breed
    @last_pooped_at = nil
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

  def walk 
    poop if needs_to_poop?
  end

  private 

  def poop
    puts "#{name} pooped"
    @last_pooped_at = DateTime.now
  end

  def needs_to_poop?
    binding.pry
    @last_pooped_at.nil? || @last_pooped_at < 6.hours.ago
  end

end

@lennon = Dog.new(name:"Lennon Snow", age: "11 months", breed: "Pomeranian")

puts @lennon.name

puts @lennon.age

puts @lennon.breed