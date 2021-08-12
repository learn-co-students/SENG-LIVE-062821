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