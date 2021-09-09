class User < ApplicationRecord
    has_secure_password
    #def password=(new_password)
    # salt = BCrypt::Engine::generate_salt
    # self.password_digest = BCrypt::Engin::has_secret(new_password, salt)
    #end

    #def authenticate(password)
    # salt = password_digest[0..28]
    # BCrypt::Engin::has_secret(password, salt) == self.password_digest
    #end 
end
