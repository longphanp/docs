#Cmake: Là công cụ để hỗ trợ biên dịch

[Cmake](https://cmake.org/)
[Tutorial](https://github.com/ttroy50/cmake-examples)

Cấu trúc files

```
Project/
	CMakeLists.txt [0]
	src/
		CMakeLists.txt
		main.cpp
		subprojects/
			CMakeLists.txt	
		...
	modules/
		CMakeLists.txt
		glfw
		...
	build/
```

## Các macro
- `${PROJECT_NAME}`: tên đặt project từ hàm `project`
- `${CMAKE_SOURCE_DIR}`: thư mục vị trí của `[0]` 
- `${CMAKE_CURRENT_SOURCE_DIR}`: thư mục vị trí hiện tại của `CMakeLists.txt`

## Các hàm
- ``project(<PROJECT_NAME>)``: đặt tên project
- ``set(<VAR_NAME> <VALUE>)``: đặt biến
- ``add_excutable(<APP_NAME> <FILES> <LIBRARIES>)``: tạo file chạy.
- `add_libary(<LIB_NAME> [PUBLIC|PRIVATE|INTERFACE] <FILES>)`: thêm thư viện.
- `target_link_libary(<TARGET_LIB> [PUBLIC|PRIVATE|INTERFACE]) <SOURCE_LIB>`: link các thư viện source mà target cần dùng
- `target_inlcude_directory(<TARGET_LIB> [PUBLIC|PRIVATE|INTERFACE] <DIRS>)`: thư mục chứa các thư mục chứa file mà target cần dùng