RSpec.describe "get_episodes" do 
  it "returns an array of hashes containing episode information" do
    episodes = get_episodes
    expect(episodes).to be_an Array
    expect(episodes.length).to eq(236)
    expect(episodes.first).to be_a Hash
    expect(episodes.first["name"]).to eq("The One Where Monica Gets a Roommate")
    expect(episodes.last["name"]).to eq("The Last One,\n  Part 2")
  end
end

RSpec.describe "get_episode_names" do
  it "returns an array of episode names" do
    expect(get_episode_names.length).to eq(236)
    expect(get_episode_names.first).to eq("The One Where Monica Gets a Roommate")
    expect(get_episode_names.last).to eq("The Last One,\n  Part 2")
  end
end

RSpec.describe "get_episode_name(season_number, episode_number)" do
  it "takes a season number and episode number as arguments and returns the name of the episode" do
    expect(get_episode_name(9, 4)).to eq("The One With the Sharks")
    expect(get_episode_name(7, 21)).to eq("The One With the Vows")
  end
end

RSpec.describe "get_episodes_by_season(season_number)" do
  it "takes a season number as an argument and returns an array of that season's episodes (hashes)" do
    episodes = get_episodes_by_season(1)
    first_episode = episodes.first
    last_episode = episodes.last
    expect(first_episode["name"]).to eq("The One Where Monica Gets a Roommate")
    expect(last_episode["name"]).to eq("The One Where Rachel Finds Out")
    expect(episodes.length).to eq(24)
    # our method should return an array of episodes where the first is named "The One Where Monica Gets a Roommate"
    # and the last is named "The One Where Rachel Finds Out"
    episodes_2 = get_episodes_by_season(2)
    first_episode = episodes_2.first
    last_episode = episodes_2.last
    expect(first_episode["name"]).to eq("The One With Ross's New Girlfriend")
    expect(last_episode["name"]).to eq("The One With Barry and Mindy's Wedding")
    expect(episodes_2.length).to eq(24)
  end
end

RSpec.describe "who_played(character_name)" do
  it "takes a character name as an argument and returns the name of the actor who played that character" do
    expect(who_played("Joey Tribbiani")).to eq("Matt LeBlanc")
    expect(who_played("Chandler Bing")).to eq("Matthew Perry")
    expect(who_played("Ross Geller")).to eq("David Schwimmer")
    expect(who_played("Phoebe Buffay")).to eq("Lisa Kudrow")
    expect(who_played("Monica Geller")).to eq("Courteney Cox")
    expect(who_played("Rachel Green")).to eq("Jennifer Aniston")
  end
end


RSpec.describe "get_episode_by_name" do
  it "takes an episode name as an argument and returns a hash of data about that episode" do
    episode = { "id" => 40809,
                "url" => "https://www.tvmaze.com/episodes/40809/friends-7x18-the-one-with-joeys-award",
                "name" => "The One With Joey's Award",
                "season" => 7,
                "number" => 18,
                "type" => "regular",
                "airdate" => "2001-03-29",
                "airtime" => "20:00",
                "airstamp" => "2001-03-30T01:00:00+00:00",
                "runtime" => 30,
                "image" => { "medium" => "https://static.tvmaze.com/uploads/images/medium_landscape/159/398753.jpg",
                             "original" => "https://static.tvmaze.com/uploads/images/original_untouched/159/398753.jpg" },
                "summary" => "<p>Joey is nominated for a Soapie Award,
  and will go to any length to get the award. He loses,
  but he steals a trophy from one of his co-stars (Jessica) who doesn't appreciate the award. One of Ross's students convinces him that he failed his midterm because he's in love with Ross. When a guy hits on Phoebe instead of her,
  Monica realises that Chandler is the only one left in her life to kiss,
  sleep with,
  and so on.</p>",
                "_links" => { "self" => { "href" => "https://api.tvmaze.com/episodes/40809" } } }
    expect(get_episode_by_name("The One With Joey's Award")).to eq(episode)
  end
end
