class Dog
  @@all = []

  def self.all
    @@all
  end

  def self.create(name:, age:, breed:)
    dog = self.new(name, age, breed)
    dog.save
    dog
  end

  attr_reader :name, :age, :breed

  def initialize(name:, age:, breed:)
    @name = name
    @age = age
    @breed = breed
    @last_pooped_at = nil
  end

  def save 
    @@all << self
  end

  def walk
    if needs_to_poop?
      poop
      puts "#{name} pooped"
    end
  end

  private

  def needs_to_poop?
    @last_pooped_at.nil? || @last_pooped_at < (DateTime.now - 6.hours)
  end

  def poop
    @last_pooped_at = DateTime.now
  end

end



@lennon = Dog.new(name:"Lennon Snow", age: "11 months", breed: "Pomeranian")

# binding.pry
puts @lennon.name

puts @lennon.age

puts @lennon.breed