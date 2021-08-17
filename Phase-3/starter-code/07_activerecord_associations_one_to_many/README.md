# ActiveRecord Associations - One to Many

### Learning Goals:
- [] Recognize the connection between the primary key - foreign key relationship and ActiveRecord associations
- [] Implement a one to many association between two models
- [] Implement a one to one association between two models
- [] Read and understand documentation on ActiveRecord association methods
- [] Identify one to many relationships in a domain model

---

## Important Resources for Today
- [RailsGuides on ActiveRecord](https://guides.rubyonrails.org/v5.2/active_record_basics.html)
- [RailsGuides on ActiveRecord Migrations](https://guides.rubyonrails.org/v5.2/active_record_migrations.html)
- [RailsGuides for ActiveRecord Query Interface](https://guides.rubyonrails.org/v5.2/active_record_querying.html)
- [RailsGuides for ActiveRecord Associations](https://guides.rubyonrails.org/v5.2/association_basics.html)
- [Rails documentation (section on ActiveRecord)](https://api.rubyonrails.org/v5.2.6/)
- [APIDock has_many](https://apidock.com/rails/ActiveRecord/Associations/ClassMethods/has_many)
- [APIDock belongs_to](https://apidock.com/rails/v5.2.3/ActiveRecord/Associations/ClassMethods/belongs_to)
- [VSCode Sqlite Extension](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)

## Topics

### What is the difference between a primary key and a foreign key?
- primary key is an id, foreign_key is an id of a row in another table.
- primary key is auto-assigned
- foreign key is manually assigned by our code.
...
### If we have a one to many relationship between two tables, which table gets the foreign key?

...
### Association methods are which kind of methods–instance methods or class methods?

...


Reddit Example

Posts
Comments belongs_to :user (supported by user_id foreign_key)
Users

If a user deletes their account, we don't want to lose their comments, so we allow the foreign key to be null. If it's null, on the frontend we display [Deleted User]

migrations:

```rb
class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :content
      t.belongs_to :user, foreign_key: true
    end
  end
end
```

### Discussion Questions

#### What are the database requirements for a has_many relationship? 

...
#### What about the belongs_to relationship?

...


## Database naming conventions for associations:

```rb
class Post
  # belongs_to :author # AR Assumes we have an Author class and our foreign_key in posts table will be author_id
  belongs_to :author, class_name: 'User'
end

class User
  has_many :posts #AR Assumes we have a Post class and that it has a user_id foreign key
  has_many :posts, foreign_key: 'author_id'
end
```

We want author to give us a user back.