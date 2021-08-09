RSpec.describe "favorite_meals" do 
  it "returns a hash containing the team's favorite meals" do 
    expect(favorite_meals).to be_a(Hash)
    expect(favorite_meals.keys).to eq([:breakfast, :lunch, :dinner])
    expect(favorite_meals[:breakfast]).to be_a(Array)
    expect(favorite_meals[:breakfast].first).to be_a(String)
    expect(favorite_meals[:lunch]).to be_a(Array)
    expect(favorite_meals[:lunch].first).to be_a(String)
    expect(favorite_meals[:dinner]).to be_a(Array)
    expect(favorite_meals[:dinner].first).to be_a(String)
  end
end