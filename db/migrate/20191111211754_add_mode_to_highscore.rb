class AddModeToHighscore < ActiveRecord::Migration[5.2]
  def change
    add_column :highscores, :mode, :string, null: false
    add_index :highscores, :mode
  end
end
