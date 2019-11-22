json.set! @highscore.id do
  json.extract! @highscore, :id, :username, :score
end
