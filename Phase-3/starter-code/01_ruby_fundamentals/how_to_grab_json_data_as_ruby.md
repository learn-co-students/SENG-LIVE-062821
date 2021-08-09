```
gem install faraday
```

```irb
require 'faraday'
require 'json'

data = JSON.parse(Faraday.get('http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast').body)

def save_data_to_file(data)
  File.open('data.rb', 'w+') do |f|
    f.puts data
  end
end

save_data_to_file(pp data)
```