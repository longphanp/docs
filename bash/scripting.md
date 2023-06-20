# Bash

[Commands](https://mywiki.wooledge.org/BashGuide/CommandsAndArguments)

[Keywords](https://mywiki.wooledge.org/BashGuide/SpecialCharacters)

### Variables

[Docs](https://mywiki.wooledge.org/BashGuide/Parameters)

```bash
	ME=LONG && echo "HI $ME ${ME}"
	FILELIST=$(ls) && echo $FILELIST

    declare -A map
    local l=1
```

### Arguments

```bash
	echo "File name is "$0
	echo "Hi "$1
	echo $# # print number of arguments
	echo $@ # print string argument
```

### Array

[Docs](https://mywiki.wooledge.org/BashGuide/Arrays)

```bash
	array=(1 2 "hoho" "a b c")
    array=(./*.md)

	echo "${#array[@]}" # 4
	echo "${array[2]}" # hoho
    echo "${array[@]}" # 1 2 hoho "a b c"
    echo "${!array[@]}" # 0 1 2 3

    (IFS=','; echo "${array[*]}") # 1,2,hoho,a b c

    array+=(123) # (1 2 "hoho" "a b c" 123)
    array=("${array[@]}" "new") # (1 2 "hoho" "a b c" 123 "new")
```

### Associated array

```bash
    declare -A map
    map=([a]=1 [b]=2)

    echo "${map[a]}" # 1
```

### Operator

```bash
	A=4
	echo $((100 + 5 * $A)) # 120
	((A ++ ))
```

### String

[Docs](https://mywiki.wooledge.org/BashGuide/TestsAndConditionals)

```bash
	STR="123456789"
	echo ${#STR} # 9
	echo ${STR:1:4} # 2345
	S=3
	L=5
	echo ${STR:$S:$L} # 45678
```

### Condition

```bash
	## Numeric Comparision -lt, -gt, -le, -ge, -eq, -ne
	## String comparision -z: is empty, -n: length > 0
	ME=LONG
	if [ $ME = LONG ]; then
		echo "Hi LONG"
	elif [ $ME = PIP]; then
		echo "Chao PIP"
	else
		echo "Hello $ME"
	fi


	case $ME in
		LONG) echo "LO";;
		PIP) echo;;
	esac
```

### Loop

```bash
	NAMES = (Long, Pip, Pop)
	for name in ${NAMES[@]};
	do
		echo $name
	done

	for i in 1 2 3 4 5;
	do
		echo $i
	done

	for i in {1..5};
	do
		echo $i
	done

	COUNT=4
	while [ $COUNT -gt 0 ]; do
	    echo "Value of count is: $COUNT"
	    COUNT=$((COUNT - 1))
	done

	until [$COUNT == 0]; do
		echo "Hi"
		((COUNT --))
	done
```

### Function

```bash
	function print {
		echo "Hi $1"
	}

	print LONG # Hi LONG

```

### File testing

```bash
	filename=test.txt
	if [-e "$filename"]; then
		echo "$filename exists"
	fi

	dirname=test
	if [-d "$dirname"]; then
		echo "$dirname exists"
	fi

	# options: -r, -w, -x TRUE if file readable, writable, executable
```
