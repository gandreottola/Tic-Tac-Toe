# VARIABLE=VALUE sh curl-scripts/game/create.sh
curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
--include \
--request POST \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
        "game": {
          "id": "'"${ID}"'",
          "cells":["","","","","","","","",""],
          "over": false,
          "player_x": {
              "id": 1,
              "email": "'"${EMAIL}"'"
            },
            "player_o": null
        }
  }'


echo
