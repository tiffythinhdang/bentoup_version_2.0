@top_10_scores.each_with_index do |score, idx|
  json.set! idx do
    json.extract! score, :username, :score
    json.rank idx
  end
end
