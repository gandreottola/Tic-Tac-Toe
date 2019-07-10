# VARIABLE=VALUE sh curl-scripts/game/index.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
--include \
--request GET \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-Type: application/json" \
