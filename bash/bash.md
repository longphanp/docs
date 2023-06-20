**#!/bin/bash**

### Command

```bash
    # -- mean end of options
    [command] -- [...]
```

### Navigation

```bash
 cd [path] | [.] | [..] | [~]
 # . : current dir
 # .. : parrent dir
 # ~ : home dir (define by $HOME)
```

### Permission

```bash
	chmod [options] [mode] [files]
	# options: -R - apply for all chidren files and folders
	# mode: 0 - none, 1 - x, 2 - w, 3 - wx
	# 4 - r, 5 - rx, 6 - rw, 7 - rwx
	# -: files, d: folders
	# order: owner > owner group > everyone
	# +: add permssion, -: clear permission

# Example:
	chmod -R 777 ./file
	chmod +x ./file
```

### Xargs

```bash
    printf "1;2;3;4;5" | xargs -d ';' -I {} touch {}.txt

	find /dir -name "*.txt" | xargs -I {} tar cf file.tar {}
```

### Curl

```bash
	curl [options] -X [GET|POST|PUT|DELETE] [path] -d [data] -o [output file]
	# 	options:
	#  -i: get response headers
	#  -I: only get headers
```

### SSH

```bash
	ssh -p [port] -i [private-key] [user]@[host]
	scp -r [src_user]@[src_host]:[path] [des_user]@[des_host]:[path]
```

### Normal command

```
	apropos # find command
	time [command] # stopwatch
```

### Files

```bash
	pwd  # current workding dir
	mkdir # make dir
	touch # make file
	ls # list dir
	rm # remove file or dir
	cp # copy file or dir
	mv # move file or dir
	less # page through a file
	cat # print whole file
	head # print first 10 lines
	tail # print last 10 lines
```

### System

```bash
	date # current date and time
	whoami # who am i
	df # disk usage
	du # dir space usage
	whereis [app] # show location of app
	which [app] # show which app using
```

### Process

```bash
	ps # current active processes
	top # display all runnning processes
	kill [pid] # kill process
	bg # backfround jobs
	fg # bring job to foreground
```

### Compression

```bash
	tar cf file.tar files # create tar
	tar xf file.tar # extract files
	tar czf file.tar.gz files # create gzip
	tar xzf file.tar.gz # extract gzip
```

### Network

```bash
	ping [host] # ping
	whois [domain] # get infor for domain
	dig [domain] # get DNS info for domain
```

### Searching

```bash
	grep -r -e [regrex] [dir] # search in files
	find [path] -type [f|d] -name [name]
```

### Pipes

```bash
	cmd1 | cmd2  # for stdout
	cmd1 |& cmd2 # for stderr
```

### Chain operator

```bash
	cmd1; cmd2 # each command run independently
	cmd1 && cmd2 # cmd2 only run if cmd1 run successful
	cmd1 || cmd2 # cmd2 only if cmd1 run fail
```

### Redirection

```bash
	[command] > [file] # default output
	[command] 1> [file] # stdout
	[error] 2> [file]  # stderr
	[command] $> [file]: # both
    [command] > [file] 2>&1 # combine stderr and stdout
    [command] >&2 # output to stderr
    [command1] <(command2) # result of command2 pass as file to command1
```

### Heredocs

```bash
    echo <<EOF
    dsadsadsad
    asdsadsa
    sdsadsadasd
    EOF

```

### Herestring

```bash
    echo <<<"dsddsadsa"
```
