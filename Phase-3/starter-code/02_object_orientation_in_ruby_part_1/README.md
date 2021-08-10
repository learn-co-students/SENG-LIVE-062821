# Object Orientation in Ruby part 1
## 1st Segment - Review of OO basics

Review of classes vs instances

Throw out questions:

```rb
class Computer
end

computer = Computer.new
```

Which is a class, which is an instance?

How is this distinction meaningful/helpful in the real world?

## Activity 1

Build out a Computer class. A computer has a brand, screen size, model name, model year. Then, create 2 computers. (15 minutes in breakouts)

come back and expect students to share solution with group.
Confirm:
- Created Instances
- called setter methods to assign attributes

### What errors did you hit?

-

### What concepts were difficult to apply/identify?
- 

Break!


Take 5 minute break after discussion

## 2nd Segment - Understanding why solution works and Adding Instance Methods

Discussion of solution to part 1
- What is an instance method?
  - Which ones are setter methods? Why?
  - What ones are getter methods? Why?
- What makes an instance variable different from a local variable?
- What's the difference between an instance method and an instance variable?
- How you call an instance method vs regular method? How is this difference related to functional vs object oriented programming?

### Setting up Activity 

Let's build these instance methods together:

- `Computer#asleep` 
- `Computer#sleep`
- `Computer#wake_up`
- `Computer#back_up`
- `Computer#last_backed_up_at` 

Once we're done, I'll paste our code in here so you can work on the final task in breakouts.

## Activity 2 - build an `about_this_computer` method

In breakout rooms, build an `#about_this_computer` method that returns a string describing the computer containing all the information stored in its instance variables.  As an example, for this computer:
```rb
#<Computer:0x00007f9c63012d70 @brand="Apple", @screen_size=15.0, @model_name="Macbook Pro", @model_year=2012, @last_backed_up_at=#<DateTime: 2021-08-04T18:28:11-07:00 ((2459432j,5291s,489721000n),-25200s,2299161j)>>
```
The `about_this_computer` method should return:

```rb
"This computer is a 2012 Apple Macbook Pro with a 15.0 inch screen. It was last backed up at 6:28 PM on 08-04-2021" 
```

After you've completed the instance method, consider how we could write the same method using a functional approach and define a method `functional_about_this_computer` that can return the same value as `about_this_computer` method.

### Deliverables

- write the `about_this_computer` method and pass all specs.
- write a method called `functional_about_this_computer` that returns the same value but with a functional approach
  - This method should still allow for the values of `brand`, `model_name`, `model_year`, `screen_size` & `last_backed_up_at` to change (they're not hard coded)
  - Discuss and take notes about the similarities and differences between the object oriented and functional approaches

5 minute break
## 3rd Segment - Why is OO design as popular as it is? How does it compare to functional programming? 

### Discussion of `about_this_computer` vs `functional_about_this_computer`

#### What are some differences between the functional and object oriented approaches?
- 
#### Situations Where Object Oriented Design is well suited
>I want to have total control of what my objects look like by updating my class.

Here are some characteristics of applications that would lend themselves well to an OO design

- an application modeling a real world domain that has lots of government regulations with specific data storage requirements (health care, banking, insurance, etc.)
- an application designed to help workers accomplish well established tasks that have consistent data requirements (sales, eCommerce, accounting, booking software for restaurants or hotels) 

If I'm building an application in a domain that has a lot of government regulations, professional standards, or stable, clearly defined roles and responsibilities that apply to it, like K12 education or health care, or accounting, an object oriented design would be a good fit.  

If I'm building an accounting program where I have very detailed data requirements for:
- account
- amount 
- amounts_extension 
- asset
- credit_amount
- debit_amount
- entry
- equity 
- expense
- liability
- no_tenancy
- revenue
- tenancy 

Object Oriented design would help me clearly define the responsibilities of the different objects in my program and how they are related to other objects in the program. 

#### Situations where object oriented design presents obstacles
>Because I have total control, I don't have the flexibility to change my object's attributes things without changing my class.

If I were building a social media application, being able to iterate quickly and experiment with new features without having to make a more significant commitment to a change is a benefit. If we're in a situation where we're interacting with data from multiple external sources and we don't have control over the attributes present, an object oriented approach can slow us down. Think about the difference between having a Post class and having a hash containing information about the post. 

#### Strengths
- It models the real world very well.
- OOP offers code reusability. The ability to encapsulate data and behavior within classes allows us to model relationships between different ideas and real world objects quite accurately.
- Different classes allow us to easily implement separation of concerns throughout our application.

#### Challenges
- OOP code is generally slower than functional code. 
- Testing Object Oriented code requires more setup
- Because so much abstraction is involved, if we're building an application where our requirements are rapidly changing, committing to the wrong abstraction can require more work to refactor and adjust than it would with functional code.