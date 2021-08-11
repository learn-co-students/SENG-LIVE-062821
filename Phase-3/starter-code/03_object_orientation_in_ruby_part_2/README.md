# Object Orientation in Ruby Part 2

Today's Learning Goals:
- Implement the initialize method and understand when/why it's necessary
- Understand the value of `self` and apply the understanding in different situations
- Define class methods and understand when to use a class method vs an instance method

[HackMD Lecture Notes](https://hackmd.io/@dlm/phase-3-lecture-3-object-orientation-in-ruby-part-2-062821)
## 1st Segment - Review of Object Instantiation

Throw out questions:

```rb
class Dog
end

lennon = Dog.new("Lennon Snow", "11 months", "Pomeranian")
```
### What will happen if we try to run the code above?

...
### What do we need to do or change to get this code to work?

...

Say we want to be able to do:

```rb
lennon.name #=> "Lennon Snow"
```
and
```rb
lennon.age #=> "11 months"
```
and
```rb
lennon.breed #=> "Pomeranian
```

### What do we need to add/change in the class to support this?

## Activity 1

Rework the computer class from yesterday to accept arguments upon initialization. Refactor the code so that we can simplify the code inside of the `first_computer` and `second_computer` methods. Run the specs using the `rspec` command to track your progress, you'll be complete when all the specs in Part 1 are passing. (10-15 minutes in breakouts - You'll actually be passing some of the specs from part 2 as well when you complete the exercise.)

When we return, be prepared to share & discuss your solution with the group.
Confirm:
- Created Instances
- reworked first_computer and second_computer methods to accept arguments upon instantiation.

### What Errors Did you hit?

-

## Discussion Questions

What does the initialize method do?

When does the initialize method get called?

When do we need an initialize method and when can we do without it?


**Take 5 minute break after discussion**

## 2nd Segment - Keeping track of the Computers we create

### Group Discussion in Breakouts - Pick a Scribe and have them [fill in the group's answers here](https://hackmd.io/@dlm/classes-and-instances-discussion-062821)

When we split into groups, the Breakout room that you joined will be your group number. Find the section of the hackmd file linked above corresponding to your group number and fill in your thoughts there.

### What if we wanted to keep track of all of the computers that we create? Where would we store them and why?

...
### What's the difference between a class variable and an instance variable? (think of examples to illustrate your answer)

...

### What's the difference between a class method and an instance method? (think of examples to illustrate your answer) 

...

### What does `self` refer to within a class method?

...
### What does `self` refer to within an instance method?

...
### Can we access class variables from instance methods?

...

### Can we access instance variables from class methods?

...

Come together and synthesize discussion, While we go, answer the question:

### How do we determine what the `self` keyword refers to?

### How can we apply our understanding of self to fix the issue with `about_this_computer` that occurs when the computer is not backed up?

5 minute break after discussion

## Segment 3 - Activity 2 - build an all method that returns an array of all saved computers

### Setting up Activity 

Let's say we add a class variable called `@@all` to the computer class so that we can store an array of the computers we create. After we've done that, we can set up a method called `save` that will store a computer inside of the that array.

#### What kind of method should `save` be? 

#### What will we be calling `save` on, an instance or the class?

let's code the `save` method together and then breakout again to add some additional functionality. 

```rb
def save
  # insert code here
end
```


Now that we've got a save method built out that will store computer instances within a class variable called `@@all`, your tasks will be to:
- add the `#save` method that will store computer instances in `@@all` (if you haven't already)
- add a method called `.all` that will return all of those computers.
- add a method called `.create` that will:
  - accept a series of attributes as arguments (just like initialize)
  - use those attributes to create a new computer
  - save the computer to `@@all`
  - return the computer 

### Final Discussion questions

When did you use the `self` keyword?

What code did you write that didn't use `self` but could have used `self` (to call a method accessible in the same scope)?

How do you determine what `self` will refer to within a method?

