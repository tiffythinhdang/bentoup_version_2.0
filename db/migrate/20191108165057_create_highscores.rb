class CreateHighscores < ActiveRecord::Migration[5.2]
  def change
    create_table :highscores do |t|
      t.integer :score, null: false
      t.string :username, null: false

      t.timestamps
    end

    add_index :highscores, :score
  end
end
