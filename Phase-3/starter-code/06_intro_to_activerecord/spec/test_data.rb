Patient.destroy_all
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