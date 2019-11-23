export const saveScore = (request) => (
  $.ajax({
    url: '/api/highscores',
    method: "POST",
    data: {request}
  })
);

export const fetchTopTenScores = (request) => (
  $.ajax({
    url: '/api/highscores',
    method: "GET",
    data: {request}
  })
);
