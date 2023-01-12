class Comment < ApplicationRecord
  include Likeable

  belongs_to :user
  belongs_to :tweet
  # has_many :likes, as: :likeable

end
