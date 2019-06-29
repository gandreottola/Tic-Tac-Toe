# VARIABLE=VALUE sh curl-scripts/game/index.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/index" \
--include \
--request PATCH \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
  "game": {
    "cell": {
      "index": 0, 1, 2, 3, 4, 5, 6, 7, 8,
      "value":"x"
    },
    "over": false
  }
}'
