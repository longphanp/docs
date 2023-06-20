# Keygens

```
    ssh-keygen -t ed25519 -a 100 -C <comment>
```

# Copy key to server

```
    ssh-copy-id -i <private_key> <host>
```

# Config file

```
    Host <name>
        Hostname <host>
        User <uname>
        Port <port>
        AddKeysToAgent yes
        PreferredAuthentications publickey
        UseKeychain yes
        IdentityFile "<private_key>"
```

# Ssh agent

Ssh agent to save private key passphrase

```
    eval "$(ssh-agent -s)"
    ssh-add <private_key>
```

# Connect ssh

```
    ssh <user>@<hostname>
    ssh <host>
```
