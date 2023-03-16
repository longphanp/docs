#!/bin/bash

echo "Hi, $(whoami) you are $( pwd )"
echo "$*"
echo "$@"
echo "$#"

#sleep 1

#for i in $(cat script.sh);
#do
    #echo "$i"
#done

for i in a b c d e;
do
    echo "$i+"
done
