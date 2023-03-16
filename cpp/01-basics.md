# Compilers
MAC: Clang
LINUX: GNU
WINDOWS: MSVC

Clang trình tự thực hiện:

[Toolchain](https://releases.llvm.org/7.0.0/tools/clang/docs/Toolchain.html)

1. Preprocessing(liên quan đến các macro)
2. Phân tích thành AST
2. Chuyển thành LLVMIR
3. Tối ưu hoá LLVMIR
4. Chuyển thành hợp ngữ (ASM)
5. Chuyển thành ngôn ngữ máy(010110)
6. Link các thành phần phụ thuộc

### Preprocess
```bash
	$ clang -E foo.c
```


### Chuyển thành LLVMIR 
```bash
	$ clang -S -emit-llvm foo.c
	foo.ll
```

### Chuyển thành AST
```bash
	$ clang -ast-print foo.c
	foo.ll
```


###  Chuyển thành hợp ngữ
```bash
	$ clang -S foo.c
	foo.s
```


### Clang optimize
```bash
	$ clang -[O1|O2|O3|Ofast]
```