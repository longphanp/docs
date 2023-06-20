# Built in funcions

## echo

print string to stdout

```
    echo <string>
```

## read

read from stdin

```
    read
```

## export

export variables

```
    export FOO="BAR"
```

## alias

alias commands

```
    alias ll='ls -l'
```

## uniq

return uniq lines

```
    printf "1\n1\n2\n" | uniq
```

## sort

sort lines

```
    printf "1\n1\n2\n" | sort
```

## eval

run arguments as commands

```
    eval $(ssh-agent)
```

## kill

send signal to process

```
    kill -9 <pid>
```

## wc

count number of lines of a file

```
    wc --lines <file>
```
