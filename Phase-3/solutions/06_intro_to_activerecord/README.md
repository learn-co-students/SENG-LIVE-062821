# Intro to ActiveRecord

## Learning Goals:
- [] Explain The Importance of ActiveRecord
  * Install the [Sqlite extension for VSCode](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite). It's a good resource for navigating through your DB right within VSCode.
  * You can also explore provided data through [DB Browser for SQLite](https://sqlitebrowser.org/dl/)
- [] Describe how ActiveRecord uses SQL to query databases
- [] Explore how to interact with a sqlite3 database with ActiveRecord migrations and queries
- [] Perform CRUD actions using ActiveRecord query methods.

---

## Getting Started

From the root of the cohort repo, run these commands:
```bash
git pull
code Phase-3/starter-code/06_intro_to_activerecord
```

Why ActiveRecord is important:
- allows different database adapters
- allows multiple databases for different environments
- separation of concerns

Today, we'll be building on our understanding of SQL to use ActiveRecord to construct queries to single table database domains.

## Important Resources for Today
- [RailsGuides on ActiveRecord](https://guides.rubyonrails.org/v5.2/active_record_basics.html)
- [RailsGuides on ActiveRecord Migrations](https://guides.rubyonrails.org/v5.2/active_record_migrations.html)
- [Rails documentation for SchemaStatements (used within a migration's change method)](https://api.rubyonrails.org/v5.2.6/classes/ActiveRecord/ConnectionAdapters/SchemaStatements.html)
- [RailsGuides for ActiveRecord Query Interface](https://guides.rubyonrails.org/v5.2/active_record_querying.html)
- [VSCode Sqlite Extension](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)


## Part 1 - Rake and Creating, Running and Rolling Back Migrations

- What is rake?
- Why is it important?
- Practical Use Cases:
  - fetching data from 3rd party APIs to update our database
  - generating reports based on data within a particular time period
  - automated file/folder creation

### Recollection Time!
#### How do I see all of the rake tasks I can run?
...
#### How do I create a new migration? (then make dogs with name, age and breed)
...

#### How do I run a migration? (then run our migration)

...
### A Key Gotcha to Look out For

If we decide that we want to change our migration so we're storing the dog's birthday instead of their age. Let's see what happens if we change it and run it again.

Look at the `schema.rb` file. 

#### Why aren't we seeing any change here?

...
## Part 2 - ActiveRecord Migrations

### Activity - Creating Patients

Deliverables:
- Create a patients table which will store the following information:
  - name (text)	
  - last_visited_on (datetime)
  - birthday (date)	
  - insurance_provider (text)	
  - is_insured (boolean)
  - is_alive (boolean)	
  - is_organ_donor (boolean)
- Create a Patient class that inherits from `ActiveRecord::Base`
- run `rspec spec/02_patients_migration_spec.rb` until all specs pass

## Part 3 - ActiveRecord Query Interface

### Activity - Querying Patients

#### **Deliverables**:
- update the methods defined within `lib/intro_to_activerecord/patient_queries.rb`
- run the specs using `rspec spec/04_patient_queries_spec.rb`
- Use [ActiveRecord query methods](https://guides.rubyonrails.org/v5.2/active_record_migrations.html) to return the values described in the comments above each of the following methods
  - create_a_new_patient(attributes)
  - all_patients
  - organ_donors
  - dead
  - find_patient_by_name(patient_name)
  - delete_patient_by_id(patient_id)
  - doctors_visit(patient_id)