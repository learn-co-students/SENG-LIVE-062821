ENV['SINATRA_ENV'] = "test"
require "bundler/setup"
require "activerecord_associations_one_to_many"
ActiveRecord::Base.logger = nil
begin
  ActiveRecord::Migration.check_pending!
rescue  
  raise ActiveRecord::PendingMigrationError.new("Migrations are pending. To resolve this issue, run: \n\n rake db:migrate SINATRA_ENV=test\n\n\n...................................")
end

RSpec.configure do |config|
  # Enable flags like --only-failures and --next-failure
  config.example_status_persistence_file_path = ".rspec_status"

  config.before(:suite) do
    DatabaseCleaner.strategy = :transaction
    DatabaseCleaner.clean_with(:truncation)
  end

  # Disable RSpec exposing methods globally on `Module` and `main`
  config.disable_monkey_patching!

  config.expect_with :rspec do |c|
    c.syntax = :expect
  end
end
