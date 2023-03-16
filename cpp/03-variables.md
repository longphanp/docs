# Các cách tạo biến:

## Tạo trên stack

```cpp
int a; // no init
int b = 5; // copy init
int c( 6 ); // direct init
int d { 7 }; // brace init
```
- No init: gán giá trị bất kì cho biến

```cpp
int a;
std::cout << a; // a = 403988517

```

- Copy init: copy giá trị vào biến, biến sẽ được khởi tạo với giá trị mặc định sau đó được gán giá trị sau dấu `=` vào.
Phù hợp cho khởi tạo biến với kiểu giữ liệu **đơn giản**.

```cpp
int a = 5;
int b = 1.5; // warning implicit conversion
std::cout << a; // a = 5
std::cout << b; // b = 1
```

- Direct init: biến sẽ được khởi tạo với giá trị trong dấu `()`.
Phù hợp cho khởi tạo biến với kiểu giữ liệu **phức tạp**.

```cpp
int a(5);
int b(2.325); //  warning implicit conversion
int c(); // warning  address of function 'c' will always evaluate to 'true'
std::cout << a; // a = 5
std::cout << b; // b = 2
std::cout << c; // c = 1
```

- Brace init: biến sẽ được khởi tạo với giá trị trong dấu `{}`.
Không cho phép chuyển kiểu dữ liệu.
Khởi tạo giá trị mặc định nếu không truyền giá trị.

```cpp
int a{5};
int b{1.5}; //  error implicit conversion
int c{}; // not work for c++98
std::cout << a; // a = 5
std::cout << c; // c = 0
```

