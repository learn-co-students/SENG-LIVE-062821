Production.destroy_all
CrewMember.destroy_all

Production.create(title: 'Carmen', genre:'Opera', budget: 80000.00, image:'https://images.pexels.com/photos/3087907/pexels-photo-3087907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', director:'Beatrix Steadman', ongoing:true, description: " set in southern Spain and tells the story of the downfall of Don José, a naïve soldier who is seduced by the wiles of Carmen. José abandons his childhood sweetheart and deserts from his military duties, yet loses Carmen's love to the glamorous torero Escamillo." )
Production.create(title: 'Cats' , genre:'Musical', budget:50000.00 , image:'https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' , director:'Imran Keeling' , ongoing:true, description:"Cats is a sung-through musical composed by Andrew Lloyd Webber, based on the 1939 poetry collection Old Possum's Book of Practical Cats by T. S. Eliot. It tells the story of a tribe of cats called the Jellicles and the night they make the 'Jellicle choice' by deciding which cat will ascend to the Heaviside layer and come back to a new life."  )
Production.create(title:'Hamilton' , genre:'Musical' , budget:100000.00 , image:'https://images.pexels.com/photos/6896187/pexels-photo-6896187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' , director: 'Martha Tang', ongoing:false, description: "Hamilton: An American Musical is a sung-and-rapped-through musical by Lin-Manuel Miranda. It tells the story of American Founding Father Alexander Hamilton." )
Production.create(title: 'Hamlet', genre:'Shakespearean' , budget:70000.00 , image: 'https://images.pexels.com/photos/1270184/pexels-photo-1270184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', director: 'Donna Costa' , ongoing:false, description: "Hamlet is considered among the most powerful and influential works of world literature, with a story capable of 'seemingly endless retelling and adaptation by others'")

30.times{CrewMember.create(name:Faker::Name.name , job_title:'Stagehand', salary: 65000.00, production:Production.all.sample)}

headshots = ['https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80','https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNob3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZHNob3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1601931935821-5fbe71157695?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHNob3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1523477800337-966dbabe060b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHNob3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60']
30.times{|i| Performer.create(name:Faker::Name.name, headshot:headshots[i])}


#Carmen
carmen = ['Carmen', 'Don José', 'Micaëla', 'Escamillo', 'Zuniga', 'Frasquita', 'Mercédès', 'El Remendado', 'El Dancaïro', 'Moralès', 'Chorus']
carmen.length.times{|i| CharacterRole.create(performer:Performer.all[i], production: Production.find_by(title:'Carmen'), role:carmen[i-1])}
#Cats
cats = ['Bombalurina', 'Skimbleshanks', 'Jennyanydots', 'Grizabella', 'Demeter', 'Rumpleteazer', 'Munkustrap', 'Victoria', 'Rum Tum Tugger', 'Mr. Mistoffelees']
cats.length.times{|i| CharacterRole.create(performer:Performer.all[i+15], production: Production.find_by(title:'Cats'), role:cats[i-1])}
#Hamilton
hamilton = ['Alexander Hamilton', 'Aaron Burr', 'Eliza Hamilton', 'Angelica Schuyler', 'Thomas Jefferson', 'George Washington', 'Philip Hamilton', ' James Madison', 'King George III', 'Maria Reynolds']
hamilton.length.times{|i| CharacterRole.create(performer:Performer.all[i+20], production: Production.find_by(title:'Hamilton'), role:hamilton[i-1])}


puts 'done'