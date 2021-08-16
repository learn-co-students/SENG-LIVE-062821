dogs_attributes = [
  
  {
    name: "Olivia",	
    birthdate: Date.new(2018, 03, 31),
    breed:	"Terrier",
    image_url: "https://i.imgur.com/zx6CPsp_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
    last_pooped_at: 1.hour.ago
  },
  {
    name: "Molly",	
    birthdate: Date.new(2019,06, 21),
    breed:	"Terrier / Chihuahua",
    image_url: "https://ibb.co/NVq44CK",
    last_pooped_at: 3.hours.ago
  },
  {
    name: "CJ",	
    birthdate: Date.new(2016, 8, 13),
    breed:	"German shepard/shibainu",
    image_url: "blob:https://imgur.com/4f93cf03-50cf-4037-be44-23df24b43d5c",
    last_pooped_at: 7.hours.ago
  },
  {
    name: "Kaya",	
    birthdate: Date.new(2017, 9, 27),
    breed:	"Blueheeler",
    image_url: "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.18169-9/21762207_10212937843515095_6836989904941765671_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=d1fqbEnFq5QAX-4Lkf9&_nc_ht=scontent.fapa1-2.fna&oh=f0b2d77c14ba93b5e0f143f12267a7cc&oe=612849B7",
    last_pooped_at: 4.hours.ago
  },
  {
    name: "Frankie",	
    birthdate: Date.new(2020, 10, 27),
    breed:	"Boxer Mix",
    image_url: "https://ibb.co/3SC5RfP",
    last_pooped_at: 8.hours.ago
  },
  {
    name: "Olivia",	
    birthdate: Date.new(2018, 03, 12),
    breed:	"Terrier",
    image_url: 	"https://i.imgur.com/zx6CPsp_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
    last_pooped_at: 2.hours.ago
  },
  {
    name: "Chop",	
    birthdate: Date.new(2020, 7, 31),
    breed:	"German Shorthaired Pointer",
    image_url: "https://www.pets4homes.co.uk/images/classifieds/2015/10/29/1121968/large/liver-gsp-dog-pup-563218eef01c1.jpeg",
    last_pooped_at: 3.hours.ago
  },
  {
    name: "Baron",	
    birthdate: Date.new(2012, 12, 23),
    breed:	"GSD/English Lab mix",
    image_url: "https://www.icloud.com/photos/#0XPBFbIkWAmF3R5xGYVm-Q0sQ",
    last_pooped_at: 5.hours.ago
  }
]

dogs_attributes.map do |attributes|
  Dog.find_or_create_by(attributes)
end

INSURANCE_COMPANIES = [
  "Aetna",
  "Amerigroup",
  "Health Net",
  "Humana",
  "Kaiser Permanente",
  "Liberty Medical",
  "Independence Blue Cross",
  "State Farm",
  "WellCare"
]
patients_attributes = (0..20).to_a.map do |i|
  attributes = {}
  attributes[:name] = Faker::Name.name
  attributes[:last_visited_on] = [nil,Faker::Date.between(from: 2.years.ago, to: Date.today)].sample 
  attributes[:birthday] = Faker::Date.between(from: '1948-01-01', to: '2019-12-31')
  insured = [true, false].sample
  if insured
    attributes[:is_insured] = true
    attributes[:insurance_provider] = INSURANCE_COMPANIES.sample
  end
  attributes[:is_alive] = [true, false].sample
  attributes[:is_organ_donor] = [true, false].sample
  attributes
end


PATIENTS_ATTRIBUTES = [
  {
    :name=>"Brady Pfeffer",
    :last_visited_on=>Date.parse("Sun, 11 Oct 2020"),
    :birthday=>Date.parse("Wed, 24 Jul 1991"),
    :is_alive=>true,
    :is_organ_donor=>true
  },
  {
    :name=>"Tomas Kozey",
    :last_visited_on=>nil,
    :birthday=>Date.parse("Mon, 02 May 1949"),
    :is_insured=>true,
    :insurance_provider=>"Aetna",
    :is_alive=>true,
    :is_organ_donor=>true
  },
  {
    :name=>"Doyle Wiza DC",
    :last_visited_on=>Date.parse("Fri, 11 Sep 2020"),
    :birthday=>Date.parse("Sun, 05 Mar 1995"),
    :is_alive=>true,
    :is_organ_donor=>false
  },
  {
    :name=>"Jenee Bergstrom Ret.",
    :last_visited_on=>Date.parse("Thu, 02 Apr 2020"),
    :birthday=>Date.parse("Sun, 27 Dec 1953"),
    :is_alive=>false,
    :is_organ_donor=>false
  },
  {
    :name=>"Lorena Skiles",
    :last_visited_on=>Date.parse("Wed, 12 Aug 2020"),
    :birthday=>Date.parse("Fri, 23 Jul 1982"),
    :is_insured=>true,
    :insurance_provider=>"Independence Blue Cross",
    :is_alive=>true,
    :is_organ_donor=>true
  },
  {
    :name=>"Kirk Walter DDS",
    :last_visited_on=>nil,
    :birthday=>Date.parse("Sat, 22 Nov 1969"),
    :is_alive=>true,
    :is_organ_donor=>false
  },
  {
    :name=>"Pauline Kozey",
    :last_visited_on=>Date.parse("Mon, 31 Aug 2020"),
    :birthday=>Date.parse("Sat, 14 Jul 1990"),
    :is_insured=>true,
    :insurance_provider=>"Kaiser Permanente",
    :is_alive=>false,
    :is_organ_donor=>false
  },
  {
    :name=>"Kiara Konopelski",
    :last_visited_on=>Date.parse("Sat, 28 Dec 2019"),
    :birthday=>Date.parse("Mon, 27 Mar 1967"),
    :is_insured=>true,
    :insurance_provider=>"WellCare",
    :is_alive=>true,
    :is_organ_donor=>true
  },
  {
    :name=>"Malcolm Heidenreich IV",
    :last_visited_on=>Date.parse("Sat, 27 Mar 2021"),
    :birthday=>Date.parse("Tue, 04 Sep 1956"),
    :is_alive=>true,
    :is_organ_donor=>false
  },
  {
    :name=>"Bill Maggio",
    :last_visited_on=>Date.parse("Sun, 08 Sep 2019"),
    :birthday=>Date.parse("Tue, 17 Jun 1986"),
    :is_insured=>true,
    :insurance_provider=>"Aetna",
    :is_alive=>true,
    :is_organ_donor=>true
  },
  {
    :name=>"Faviola Weber",
    :last_visited_on=>nil,
    :birthday=>Date.parse("Sat, 22 May 1999"),
    :is_insured=>true,
    :insurance_provider=>"Humana",
    :is_alive=>true,
    :is_organ_donor=>false
  },
  {
    :name=>"Everette Leuschke",
    :is_insured=>false,
    :is_alive=>true,
    :is_organ_donor=>true
  },
  {
    :name=>"Vanda Rowe",
    :last_visited_on=>nil,
    :birthday=>Date.parse("Thu, 21 Dec 1972"),
    :is_insured=>true,
    :insurance_provider=>"Liberty Medical",
    :is_alive=>false,
    :is_organ_donor=>true
  },
  {
    :name=>"Jame Lowe", 
    :last_visited_on=>nil, 
    :birthday=>Date.parse("Wed, 29 Aug 1951"),
    :is_alive=>false, 
    :is_organ_donor=>false
  },
  {
    :name=>"Jude Bergstrom",
    :last_visited_on=>Date.parse("Sun, 10 May 2020"),
    :birthday=>Date.parse("Sun, 08 Mar 2015"),
    :is_insured=>true,
    :insurance_provider=>"State Farm",
    :is_alive=>true,
    :is_organ_donor=>true
  },
  {
    :name=>"Danelle Davis",
    :last_visited_on=>Date.parse("Tue, 16 Jun 2020"),
    :birthday=>Date.parse("Mon, 13 Oct 1958"),
    :is_alive=>false,
    :is_organ_donor=>true
    },
  {
    :name=>"Jeffrey Parker V",
    :last_visited_on=>Date.parse("Tue, 10 Dec 2019"),
    :birthday=>Date.parse("Sat, 05 May 2001"),
    :is_insured=>true,
    :insurance_provider=>"Health Net",
    :is_alive=>false,
    :is_organ_donor=>false
  },
  {
    :name=>"Lanita Witting",
    :last_visited_on=>nil,
    :birthday=>Date.parse("Sun, 14 Dec 2014"),
    :is_insured=>true,
    :insurance_provider=>"Independence Blue Cross",
    :is_alive=>false,
    :is_organ_donor=>false
  }
]

PATIENTS_ATTRIBUTES.map do |attributes|
  Patient.find_or_create_by(attributes)
end