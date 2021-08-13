class Dog < Base

  attr_accessor :name, :age, :breed

  def initialize(attributes = {})
    super
    @last_pooped_at = nil
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
@olivia = Dog.new(name: "Olivia", age: "3 years", breed: "Terrier")
@chop = Dog.new(name: "Chop", age: "1 year", breed: "German Shorthaired Pointer")
@baron = Dog.new(name: "Baron", age: "8 years", breed: "GSD/English Lab mix")
