# == Schema Information
#
# Table name: highscores
#
#  id         :bigint           not null, primary key
#  score      :integer          not null
#  username   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  mode       :string           not null
#

class Highscore < ApplicationRecord
  validates :score, :username, :mode, presence: true
  validates :mode, inclusion: { in: ["easy", "competitive"] }

  def self.get_top_10(mode)
    Highscore.where(mode: mode).order(score: :desc).limit(10)
  end
end
