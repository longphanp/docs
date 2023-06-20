# Process management

## ps

### Show all process with more stats

```
    PROCESS STATE CODES
       Here are the different values that the s, stat and state output specifiers (header "STAT" or "S") will display to describe the state of a process:
       D    uninterruptible sleep (usually IO)
       R    running or runnable (on run queue)
       S    interruptible sleep (waiting for an event to complete)
       T    stopped, either by a job control signal or because it is being traced.
       W    paging (not valid since the 2.6.xx kernel)
       X    dead (should never be seen)
       Z    defunct ("zombie") process, terminated but not reaped by its parent.

       For BSD formats and when the stat keyword is used, additional characters may be displayed:
       <    high-priority (not nice to other users)
       N    low-priority (nice to other users)
       L    has pages locked into memory (for real-time and custom IO)
       s    is a session leader
       l    is multi-threaded (using CLONE_THREAD, like NPTL pthreads do)
       +    is in the foreground process group.
```

```bash
    ps aux # mac
    ps -aux # linux
```

## top/htop

## lsof

### List files opened by user

```bash
    lsof -u <user>
```

### List files open for tcp connection

```bash
    lsof -i TCP
```

# Monitoring

## iostat

```
    iostat -x
```

Report i/o stat

## pidstat

Report cpu usage for each process

## vmstat

Report virtual memory stat

```
   Procs
       r: The number of runnable processes (running or waiting for run time).
       b: The number of processes blocked waiting for I/O to complete.

   Memory
       These are affected by the --unit option.
       swpd: the amount of swap memory used.
       free: the amount of idle memory.
       buff: the amount of memory used as buffers.
       cache: the amount of memory used as cache.
       inact: the amount of inactive memory.  (-a option)
       active: the amount of active memory.  (-a option)

   Swap
       These are affected by the --unit option.
       si: Amount of memory swapped in from disk (/s).
       so: Amount of memory swapped to disk (/s).

   IO
       bi: Blocks received from a block device (blocks/s).
       bo: Blocks sent to a block device (blocks/s).

   System
       in: The number of interrupts per second, including the clock.
       cs: The number of context switches per second.

   CPU
       These are percentages of total CPU time.
       us: Time spent running non-kernel code.  (user time, including nice time)
       sy: Time spent running kernel code.  (system time)
       id: Time spent idle.  Prior to Linux 2.5.41, this includes IO-wait time.
       wa: Time spent waiting for IO.  Prior to Linux 2.5.41, included in idle.
       st: Time stolen from a virtual machine.  Prior to Linux 2.6.11, unknown.
```

## free

Actual memory used = used - buff/cache

```
    total        used        free      shared  buff/cache   available
```

### Show memory stat in human readable

```bash
    free -h
```

### Show network stat

Enable sar

```
    sudo vim /etc/default/sysstat
    ENABLE="true"
```

Start sar

```
    systemctl start sysstat sysstat-collect.timer sysstat-summary.timer
```

```
    sar -n DEV <interval> <count>
```

# Network

## ifconfig

## traceroute

## netstat

### Show route

```
    netstat -r
```

### List all tcp connection

```
    netstat -t
```

### Show statistics

```
    netstat -s
```

## nmap

### Ping scan

```bash
    nmap -sn -p <port> <ip>/<netmask>

```

### TCP Sync scan

```bash
    nmap -sS -p <port> <ip>/<netmask>
```

### Aggressive scan

```bash
    nmap -A <ip>/<nestmask>
```

## ufw

Setup firewall

Config file: /etc/default/ufw

### Enable firewall

```bash
    ufw enable
```

### Disable firewall

```bash
    ufw disable
```

### status firewall

```bash
    ufw status numbered
```

### Set rules

```bash
    ufw deny/allow [out/in] <port>/<name>
    # ex: ufw allow ssh

    ufw deny/allow [out/in] from <ip>/<netmask>
    # ex: ufw deny from 192.168.1.1/24

    ufw deny/allow from <ip>/<netmask> to any port <port>
```

### Delete rules

```bash
    ufw delete <ruleNumber>
```

### Limit connection

```bash
    ufw limit <port>/<proto>
```

## iptables

### Rules:

```
    ACCEPT – will allow the packet to pass through.
    DROP – will not let the packet pass through.
    RETURN – stops the packet from traversing through a chain and tell it to go back to the previous chain.
```

### Chains:

```
    INPUT –  controls incoming packets to the server.
    FORWARD – filters incoming packets that will be forwarded somewhere else.
    OUTPUT – filter packets that are going out from your server.
```

### Tables

```
    filter(default) | nat | manage | raw
```

### List all rules

```bash
    sudo iptables -L -v --line-numbers
```

### Append rules to table

```bash
    sudo iptables -t <table> -A <chain> -i <interface> -p <protocol (tcp/udp) > -s <source> --dport <port no.>  -j <target>

    # ex: sudo iptables -A INPUT -i lo -j ACCEPT
```

### Delete rule

```bash
    sudo iptables -D <chain> <line-number>
```

### Save changes

```bash
    sudo iptables-save > /etc/iptables/rules.v4
    sudo iptables-save > /etc/iptables/rules.v6
```

### Restore rules

```bash
    sudo iptables-restore < /etc/iptables/rules.v4
    sudo iptables-restore < /etc/iptables/rules.v6
```

## tcpdump

### Show all interface

```bash
    sudo tcpdump -D
```

### Capture packets

```bash
    sudo tcpdump -i <interface> -c <count-packet> -nn

    sudo tcpdump -i <interface> host <ip> # Filter by host

    sudo tcpdump -i <interface> port <port> # Filter by port

    sudo tcpdump -i <interface> src <ip> # Filter by source ip

    sudo tcpdump -i <interface> dst <ip> # Filter by destination ip

    sudo tcpdump -i <interface> <filter1> [or|and] <filter2>
    # ex: sudo tcpdump -i lo "src 192.168.70.26 and port 80"
```

### Save to file

```bash
    sudo tcpdump -i <interface> -w <file>.pcap
```

### Restore file

```
    sudo tcpdump -r <file>.pcap <filters>
```

## dig

### Resovle domain name to ip

```bash
    dig @<dns-server> <host> <record-type>
```

### Trace dns route

```bash
    dig <host> +trace
```

### Reverse lookup

```
    dig -x <ip>
```

# Text manipulation

## awk

[https://linuxize.com/post/awk-command/](https://linuxize.com/post/awk-command/)

```
    # print first field
    awk '{print $1}' file.txt

    # print last field with : as separator
    awk -F ':' '{print $NF}' file.txt

    # print whole line contains pattern number
    awk '/\d+/ {print}' file.txt
    # same as
    awk '$0 ~ /\d+/ {print}' file.txt

    # print first field with second field containes pattern
    awk '$2 ~ /s\b/ {print $1}' file.txt

    # print first field with second field not containes pattern
    awk '$2 !~ /s\b/ {print $1}' file.txt

    # run awk script
    awk -f script.awk file.txt
```

## sed

### Replace text

```
    sed -i 's/<src>/dst/' <file>
```

# Files

## rm

### Remove files and dir match glob

```
    rm -rf <glob>
    rm -rf * # remove all files and dir except dot files and dot dir
    rm -rf * .* # remove all
```

## find

### Find all files under dir recursively

```
    find <dir>

    find <dir> --maxdepth 1 # Only search for files are directly in child dir

    find <dir> -print0 # Seperate files with NULL
```

### Find files or dir by glob and regrex

```
    find <dir> -type [d|f] -name <glob>
    find <dir> -type [d|f] -regex <regrex>
```
