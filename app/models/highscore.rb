# == Schema Information
#
# Table name: highscores
#
#  id         :bigint           not null, primary key
#  score      :integer          not null
#  username   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Highscore < ApplicationRecord
  validates :score, :username, presence: true

  def self.get_top_10
    Highscore.order(score: :desc).limit(10)
  end
end
