class Base
  def self.inherited(subclass)
    subclass.class_variable_set("@@all", [])
  end

  def self.all
    self.class_variable_get("@@all")
  end

  def self.create(attributes = {})
    self.new(attributes).save
  end

  def initialize(attributes = {})
    # 
    attributes.each do |key, value|
      self.class.attr_accessor key
    end
    attributes.each do |key, value|
      self.send("#{key}=",value)
    end
  end

  def save
    self.class.all << self
    self
  end

end