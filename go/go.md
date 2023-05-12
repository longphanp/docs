# Useful resources

[Go specifications](https://go.dev/ref/spec)
[Go effective](https://go.dev/doc/effective_go)
[Go example](https://gobyexample.com/)

# Go commands

## Init go workspace

```
    go mod init [module_name]
```

## Run go

```
    go run [file]
    go run .
```

## Build file

```
    go build -o [file]
```

## Run test

```
    go test
```

## Install dependencies

```
    go get [module]
    go mod tidy
```

# Go packages

## Import package

```
    import [package_name]

```

## Import package from subdirectory

```
    import [my_module_name]/[sub_dir]/[package_name]
```

# Go string format

[https://gobyexample.com/string-formatting](https://gobyexample.com/string-formatting)

```
    %v	the value in a default format
	when printing structs, the plus flag (%+v) adds field names
    %%	a literal percent sign; consumes no value

    %t	the word true or false
    %b	base 2
    %d	base 10
    %o	base 8
    %U	Unicode format: U+1234; same as "U+%04X"
    %f	decimal point but no exponent, e.g. 123.456
    %s	the uninterpreted bytes of the string or slice
    %p print pointer
```

# Go types

## List data types

```
    Basic:
        string
        bool
        int8, uint8 (byte), int16, uint16, int32 (rune), uint32, int64, uint64, int, uint, uintptr
        float32, float64
        complex64, complex128


    Map: map[type1]type2
    Array: [array_length]type
    Slice: []type
    Struct: type <struct_name> struct {}
    Interface: type <interface_name> interface {}
    Channel: chan type, <-chan type, chan<- type
```

## Type definitions

```
    // Create new types
    type <type_name> <type_rep>

    // Create type alias
    type <type_name> = <type_rep>
```

## Type conversion

```
    var a int
    var s string = string(a)

    // Check type
    switch(x.(type)) {

    }
}
```

## Generics

[https://gobyexample.com/generics](https://gobyexample.com/generics)
