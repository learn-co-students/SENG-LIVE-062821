RSpec.describe "Base" do
  class Foo < Base
    attr_accessor :bar
  end

  describe ".inherited" do
    it "defines @@all as an empty array within its subclasses" do #
      expect(Foo.class_variable_get(:@@all)).to eq([])
    end
  end

  describe ".all" do 
    it "returns all instances stored in @@all" do 
      expect(Foo.all).to eq(Foo.class_variable_get(:@@all))
    end
  end

  describe "#initialize(attributes={})" do 
    it "accepts an optional hash of attributes as an argument and assigns the attributes their values" do 
      foo = Foo.new(bar: "baz")
      expect(foo.bar).to eq("baz")
    end
  end

  describe ".create(attributes={})" do
    it "accepts an optional hash of attributes as an argument and assigns the attributes their values" do 
      foo = Foo.create(bar: "baz")
      expect(foo.bar).to eq("baz")
      expect(Foo.all).to include(foo)
    end
  end

  describe "#save" do 
    it "saves the instnace to the @@all class variable and returns it" do 
      foo = Foo.new(bar: "baz").save
      expect(Foo.all).to include(foo)
    end
  end

  describe ".first" do 
    it "returns the first instance in @@all" do 
      expect(Foo.first).to eq(Foo.all.first)
    end
  end

  describe ".last" do 
    it "returns the last instance in @@all" do 
      expect(Foo.last).to eq(Foo.all.last)
    end
  end

  describe ".find_by(attributes)" do
    it "returns the first inance that matches all the given attributes" do 
      bam = Foo.create(bar: "bam")
      expect(Foo.find_by(bar: "bam")).to eq(bam)
    end
  end
end
