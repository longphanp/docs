#!/bin/bash

# Read files
echo "Read line by line"
#----------
printf "line1\nline2" | { while IFS=$'\n' read -r line || [[ -n "$line" ]]; do printf "%s\n" "$line"; done; }
#----------
echo ""

echo "Pass ls command to stdin"
#----------
read -r result < <(ls) && echo "$result"
#----------
echo ""

# Process array
echo "Push file to array"
#----------
arry=()
for i in *.md;do
    arry+=("$i")
done

echo "${arry[@]}"
#----------
echo ""

echo "Join array to string"
#----------
arr=("Long" "Pip" "Pop pan")
IFS=';' ; echo "${arr[*]}"; unset -v IFS
#----------
echo ""

echo "Split string to array"
#----------
IFS=', ' read -r -a array <<< "1, 2, 3  2, 4, 5-23, 6"
echo "${array[@]}"
#----------
echo ""

echo "Get function return value"
#----------
readme() {
    return 99
}
readme
#----------
echo "$?"

