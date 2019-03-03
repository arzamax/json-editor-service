FROM mongo
COPY init.json /init.json
CMD mongoimport --host mongodb --db db --collection structures --type json --file /init.json --jsonArray