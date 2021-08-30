# Phase-2-Rails-Fundamentals-&-CRUD

## SWBAT
- [ ] Describe the MVC design pattern
- [ ] Create routes in Rails 
- [ ] Identify the differences between Sinatra and Rails
- [ ] Scaffold an API using rails generators


### What are we making?
![project](assets/flatironTheater.png)

### The backend
* Should have 2 models 
* CrewMembers > Productions
![migrations](assets/migrations.png)

**Routs**  
`GET /Productions :` Should return a collection of cats  
`GET /Productions/:id` Should return a single production
`POST /Productions :` Creates a production   
`PUT /Productions/:id` Updates a production  
`Delete /Productions/:id` Destroys a production  

### Creating a rails api
1. create the api
2. migrations 
3. relationships
4. seeds
5. cors
6. routes 
7. controllers 

```

rails new flatiron-theater-backend --api --minimal 

```

**Cross-Origin Resource Sharing (CORS)**
CORS allows our rails server to permit http request from specific domains.

When we host our applications we can configure our app to only take requests from our react front-end.

![CORS from mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png)

For now, we will accept all request to make the development process easier as we are learning. Navigate to config, initializers and cors.rb. 

Uncomment the following and set origins to '*'



```
//cors.rb

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end

```
We will also need to uncomment rack-cors in our gemfile and re-bundle.

```
//gemfile
gem 'rack-cors'

```

### Setting up Models
`rails generate` will create resources in our rails app.

```
rails g resources crewmembers name job_title salary productions:belongs_to

rails g resources productions title genera description:text budget:float image director artistic_director ongoing:boolean 
```

### setting up routes
`config/routes.rb`
Because of rails resources we will have the routes for our models set up. But we will want to limit these routes to the ones we need!  
```
  #custom routes can be created, but resources will do the work for us!
  get “/productions, to: productions#index”

  resources :productions, only: [:index,:show,:create,:update,:destroy]



```