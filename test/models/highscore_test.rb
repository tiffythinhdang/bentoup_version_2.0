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

require 'test_helper'

class HighscoreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
