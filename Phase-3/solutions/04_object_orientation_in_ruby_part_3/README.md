# Object Orientation in Ruby Part 3

[HackMD Lecture Notes]()
## 1st Segment - Mass Assignment and Private Methods

Throw out question:

```rb
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

  def initialize(name, age, breed)
    @name = name
    @age = age
    @breed = breed
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

@lennon = Dog.new(name: "Lennon Snow", age: "11 months", breed: "Pomeranian")

puts lennon.name

puts lennon.age

puts lennon.breed
```
### What will happen if we try to run the code above?

...
### What do we need to do or change to get this code to work? Are there multiple approaches we could use to make this code work?


...

### What else can we do to simplify our Dog class?


### Adding functionality: Let's give our dogs a `#walk` method that will utilize a couple of private methods to decide whether or not to poop.

Digestion is kinda complicated, so let's say for simplicity's sake here that a dog has to poop around every 6 hours. So, if a dog's last poop was over 6 hours ago and we take it on a walk, it will poop. The main point here is that nobody really needs to know when the dog last pooped except for the dog itself. It's going to use that information to decide what to do, and it's really nobody else's business! 

Because we're working with time here, there is some code we're loading from a gem called [activesupport](https://guides.rubyonrails.org/active_support_core_extensions.html#extensions-to-integer-time). This gem is part of the Ruby on Rails framework that you'll be using in phase 4, the main purpose of activesupport to enhance the built in ruby classes with some extra methods to help with common tasks. In this case, the gem makes it possible to do addition with times in a really neat way:

```rb
DateTime.now + 1.hour #=> 1 hour from now
DateTime.now - 30.minutes #=> 30 minutes ago
DateTime.now + 90.minutes #=> 90 minutes from now
DateTime.now + 2.weeks #=> 2 weeks from now
```

Calling a method like `hour`/`hours`, `minute`/`minutes` or `week`/`weeks` on a number will return an `ActiveSupport::Duration` instance that you can use with DateTime objects to do math. 

### What happens if we try to call a private method on an instance of a class?


### When do we decide to make a method private?

## Activity 1 (10-12 minutes)

Rework the computer class from yesterday to accept keyword arguments upon initialization. Rework the code inside of the `first_computer` and `second_computer` methods so that they both work with the new class. Run the specs using the `rspec` command to track your progress, you'll be complete when all the specs in Part 1 are passing.


### Instructions:
- Think about what new data is required to get this working? What instance variables need to be introduced here?
- When working with the `battery_life` method, we're working towards a return value that looks like one of two things:
  - 'charged'
  - 'depleted'  
- `has_charge?` should return a truthy result as long as the `battery_life` is not depleted. If the battery is depleted, we can print out a message to the user or raise an error indicating that the computer needs to be plugged in.
- The `about_this_computer` method should display the current battery life in the returned string.

### **Deliverables**
- Update the initialize method to accept keyword arguments and add any required new instance variables
- Update `first_computer` and `second_computer` methods so they both work with the updated initialize method.
- Add private methods called `battery_life` and `has_charge?` that keep track of a computer's battery life and whether a charge is needed. The `battery_life` method will return `"depleted"` if the time elapsed since the last charge is more than the battery capacity. a percentage of the full capacity that's available. If it is not depleted, the battery_life method should return `"charged"`. 

Advanced:
- adjust the `battery_life` method to return a percentage of the full capacity of the battery remaining. Then, the `about_this_computer` method should notify the user that the computer needs to be charged. If there is charge in the battery, the percentage will be displayed in the `about_this_computer` output.
- Other possible extensions would be to allow an optional argument for battery_capacity (defaulting to `1.minute`)

Quick Review of solution and then break.

## Segment 2 - Mass Assignment Discussion

### What is mass assignment?

-
### What are keyword arguments? 

- 

### Can we do mass assignment without keyword arguments? If so, what would be the pros and cons of choosing to use them or not?

### What happens if we try to create a computer without a brand when using keyword arguments?

-
### What happens if we try to create a computer without a brand when using mass assignment?

-

## 2nd Segment - Advanced class methods

Now that we're keeping track of computers that have been created, we have the ability to interact with groups of computers that match a certain criteria (all sharing a brand for example). For this segment, take a look at the `bin/console` file:

```rb
#!/usr/bin/env ruby

require "bundler/setup"
require_relative "../lib/object_oriented_ruby_continued"

seed_computers

require "irb"
IRB.start(__FILE__)


```

notice the call to `seed_computers`. Let's check out the definition there:

```rb
require "securerandom"
def computer_attributes
  computer_makes = [
    {brand: 'HP', model_name: 'Chromebook'},
    {brand: 'Samsung', model_name: 'Galaxy Chromebook'},
    {brand: 'Asus', model_name: 'Touch-Screen Chromebook'},
    {brand: 'HP', model_name: 'Envy x360'},
    {brand: 'Google', model_name: 'Pixelbook Go'},
    {brand: 'Lenovo', model_name: 'ThinkPad L13'},
    {brand: 'Samsung', model_name: 'Galaxy Book Pro'},
    {brand: 'Lenovo', model_name: 'Yoga 9i'},
    {brand: 'Dell', model_name: 'Inspiron Touch Screen All-In-One'},
    {brand: 'HP', model_name: 'Desktop AMD Ryzen'},
    {brand: 'Lenovo', model_name: 'IdeaCentre'},
    {brand: 'Apple', model_name: 'iMac with Retina 4k display'},
    {brand: 'Apple', model_name: 'Macbook Pro'},
    {brand: 'Apple', model_name: 'Mac Mini'},
    {brand: 'Apple', model_name: 'iMac'},
    {brand: 'Apple', model_name: 'Macbook Air'},
    {brand: 'HP', model_name: 'Z8 G4 Workstation'},
    {brand: 'HP', model_name: 'Pavilion Touch-Screen All In one'},
    {brand: 'Digital Storm', model_name: 'Lumos Gaming PC'},
    {brand: 'HP', model_name: 'EliteOne 800 G6 All-In-One'},
    {brand: 'Dell', model_name: 'Vostro'}
  ]
  (0..20).to_a.map do |i|
    computer_make = computer_makes[i]
    {
      brand: computer_make[:brand],
      screen_size: 11 + SecureRandom.rand(20)/2.0,
      model_name: computer_make[:model_name],
      model_year: (2000..2021).to_a.sample
    }
  end
end 

def seed_computers
  computer_attributes.map{|attrs| Computer.create(attrs)}
end
```

This file contains code that will create computers (resulting in their persistence to the `@@all` class variable). This will allow you to access instances by entering the console:

```bash
./bin/console
```

And invoking 

```rb
Computer.all
```

As you work through this section and start adding in more class methods to interact with groups of computers that share similar attributes, you can try them out by entering the console and invoking the method you defined in `computer.rb`

### Build Together

- `Computer.by_brand(brand_name)` => returns a collection (array) of computers that match the brand name passed as an argument.

#### We're Indicating here that `by_brand` should be a class method, why should it be a class method?


### Activity 2 - Create additional class methods

#### Deliverables

`.report` #=> a method that returns an array of information (as strings) about all of the computers we are tracking check test errors for a hint on how to do this.
`.newer_models` #=> returns an array of computers whose model year is 2016 or later
*** Advanced ***
`.find_by(attributes)` #=> returns the first computer that matches all the attributes in the hash passed as an argument

#### Quick Review


## Segment 3 - Inheritance

Let's create a `Base` class that can define some of our common methods and share them between the `Dog` and `Computer` classes. We'll need to adjust the way we write these methods so that they'll work in any class that we subclass (any class that inherits from our `Base` class).

This idea is importance because it's at the heart of one of the libraries we'll be using extensively for the rest of the course that allows us to handle a lot of important database related tasks in a consistent way that saves us a lot of work.

## Advanced

Write out a `.find_by(attributes)` method for the Base class that will find the first instance that matches all of the attributes passed as an argument.

