# VARIABLE=VALUE sh curl-scripts/game/show.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
--include \
--request GET \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-Type: application/json" \
