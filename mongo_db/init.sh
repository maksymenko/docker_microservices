#!/bin/bash

set -m

USER=${MONGODB_USER}
PWD=${MONGODB_PWD}
DB=${MONGODB_DB}

if [[ -z "$USER" ]]; then
  echo " >>> MONGODB_USER is required"
  exit 1;
fi

if [[ -z "$PWD" ]]; then
  echo " >>> MONGODB_PASS is required"
  exit 1;
fi

if [[ -z "$DB" ]]; then
  echo " >>> MONGODB_DATABASE is required"
  exit 1;
fi


echo "Init mongo"
mongod  --dbpath /mongo_data/db --httpinterface --rest --storageEngine wiredTiger &

RET=1
while [[ RET -ne 0 ]]; do
    echo ">>> Waiting for Mongo to start"
    sleep 2
    mongo admin --eval "help" >/dev/null 2>&1
    RET=$?
done

echo "Creating user: '"$USER"' Password: '"$PWD"' Database: '"$DB"'"
mongo admin --eval "db.createUser({user: '$USER', pwd: '$PWD', roles:[{role:'root',db:'admin'}]});"
mongo admin -u $USER -p $PWD << EOF
use $DB
db.createUser({user: '$USER', pwd: '$PWD', roles:[{role:'dbOwner',db:'$DB'}]})
EOF

fg