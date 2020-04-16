#!/bin/bash

db="abc"

echo "confuguring db $db"

dropdb -U huirenchuah abc 
createdb -U huirenchuah abc

psql -U huirenchuah abc< ./bin/sql/monsters.sql

echo "$db configured"