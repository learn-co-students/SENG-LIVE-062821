# define a method called favorite_meals that returns a hash with three keys:
# - breakfast
# - lunch
# - dinner
# each of these three keys should have a value of an array of strings. Each string will represent the name of a favorite meal of that fits into the appropriate category of breakfast, lunch of dinner

# to test out your code as you go, you can run the `rspec --fail-fast` command in your terminal.

def get_episodes
  friends["_embedded"]["episodes"]
end

def get_episode_names
  get_episodes.map{|episode_hash| episode_hash["name"]}
end

def get_episode_name(season_number, episode_number)
  episode = get_episodes.find do |hash| 
    hash["season"] == season_number && hash["number"] == episode_number
  end
  episode["name"]
end

def get_episodes_by_season(season_number)
  get_episodes.filter{|hash| hash["season"] == season_number}
end

def who_played(character_name)
  cast_member = friends["_embedded"]["cast"].find do |hash| 
    hash["character"]["name"] == character_name
  end
  cast_member["person"]["name"]
end

def get_episode_by_name(name)
  get_episodes.find{|episode| episode["name"] == name}
end