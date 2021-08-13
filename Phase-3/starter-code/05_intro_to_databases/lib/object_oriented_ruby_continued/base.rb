class Base
  def self.inherited(subclass)
    subclass.class_variable_set("@@all", [])
  end
  
  def self.all
    self.class_variable_get("@@all")
  end

  def self.create(attributes={})
    self.new(attributes).save
  end

  def self.first
    self.all.first
  end

  def self.last
    self.all.last
  end

  def self.find_by(attributes)
    self.all.find do |obj|
      attributes.all? do |attr, value|
        obj.send(attr) == value
      end
    end
  end

  def initialize(attributes={})
    attributes.each do |attr, value|
      self.send("#{attr}=", value)
    end
  end

  def save
    self.class.all << self
    self
  end
end