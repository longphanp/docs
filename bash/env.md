```bash
	$SHELL # shell using
	$RANDOM # get random number 0 - 32767
	$USER # get user
	$PWD # get current dir
	$HOSTNAME # hostname
	$HOME # home dir

	$PATH # search path
	$TMPDIR # temp dir

```

# REPLY

```
    read
    echo "What you type is $REPLY"
```

# PATH

### Append PATH

````bash
	mkdir -p "$HOME/bin"
	echo "$PATH=$HOME/bin:$PATH" >> "$HOME/.bashrc"

```[]()
````

# IFS

```bash
    IFS=, read -a  var <<< "a,b,c" # var = ("a", "b", "c")

```

