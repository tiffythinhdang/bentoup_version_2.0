json.set! @highscore.id do
  json.extract! @highscore, :username, :score
end
