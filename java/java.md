# Usefull resources

[https://dev.java/learn/](https://dev.java/learn/)

# Java setup

## Installations

```bash
    brew install openjdk
    sudo ln -sfn /opt/homebrew/opt/openjdk/libexec/openjdk.jdk \
    /Library/Java/JavaVirtualMachines/openjdk.jdk

    // Set specific version
    brew install openjdk@11
    sudo ln -sfn /opt/homebrew/opt/openjdk@11/libexec/openjdk.jdk \
    /Library/Java/JavaVirtualMachines/openjdk-11.jdk


    export PATH="/usr/local/opt/openjdk/bin:$PATH"
    export CPPFLAGS="-I/usr/local/opt/openjdk/include"
    export JAVA_HOME=$(/usr/libexec/java_home)
```

## Switch version

```bash
    JAVA_HOME=$(/usr/libexec/java_home -v "$1")
    export JAVA_HOME
    echo "JAVA_HOME:" "$JAVA_HOME"
    echo "java -version:"
    java -version
```

## Compile

```bash
    javac [file].java
```

## Create excecutable jar file

```bash
    jar cfm <file>.jar manifest.mf *.class

```

```
    // In manifest.mf
    Manifest-Version: 1.0
    Main-Class: package.<Main.class>
```

## Run

```bash
    java [file].java
    java [class]
    java -jar file.jar
```

## Reference Jar

```bash
    java -cp [file].jar [class]
    java -cp "lib/*" [class]
```

# Java core

## Basic types

[https://dev.java/learn/numbers-strings/](https://dev.java/learn/numbers-strings/)

```java
    // Convert int to Integer
    int a = 1;
    Integer.valueOf(a);

    // Convert int to String
    Integer.valueOf(a).toString();

    // Convert Integer to int
    i.intValue();

    // Convert String to int
    Integer.parseInt(s);


    // String
    String s1 = "java";
    String s2 = "java";
    String s3 = new String("java");
    String s4 = new String("java");

    s1 == s2 // true
    s1 == s3 // false
    s1 == s3.intern() // true
    s4 == s3 // false

    // Using StringBuilder
    StringBuilder sb = new StringBuilder();
    sb.append("123");
    sb.append("abc");

```

## Short For

```java
    for (var item: list) {

    }
```

## Switch expression

```java
    int a = switch(type) {
        case 1 -> 1;
        case 2 -> 2;
        case 3 -> {
            yield 3;
        }
        default -> 0;
    };
```

## Class

### Public class name has to be the file name

```java
    // Long.java
    package cls;
    public class Long {
        // constructor
        public Long() {

        }
    }
```

### Classes in same package don't need import

### Inherit only one class.

```java
    public class CLong extends Long {

    }
```

### Access superclass

```java
    class Long {
        public Long() {

        };

        public void print() {

        };
    }

    class Clong extends Long {
        public Clong() {
            super();
        }

        public void print() {
            super.print();
        }
    }
```

### Abstract class cannot initialize, like interface but member can be private, not static, not final

```java
    public abstract class AbstractLong {

    }
```

### Anonymous class

```java
    class Anon {
        public void greet();
    }

    void testAnon () {
        Anon an = new Anon() {
            {
                // initialize code here
            }

            public void greet() {
                System.out.println("Hi anon");
            };
        };

        an.greet();
    }

```

## Package

```java
    // pip/com/Pop.java
    package pip.com;
    public class Pop {

    }
```

## Interface

- By default, variables in interface are `public static final`

```java
    interface Test {
        public static final int a = 1;
        void print();
    }
```

- Implement interface, can implements multiple interface

```java
    public class Pop implements Test {

    }
```

- Default methods don't need to implements in subclass

```java
    interface Simple {
        default void print()  {
            System.out.println("hi");
        }
    }
```

## Enum

```java
    public enum Level {
        LOW, MEDIUM, HIGH
    }
```

## Generics

```java
    class Pip<T, T2, T3> {
        private T a;
        private T2 b;
        private T3 c;

        public <T, T2> void print(T a, T2 c) {}
    }
```

- Add bound to type

```java
    interface Simple<T> {
        default void print() {
            System.out.println("default");
        }
    }

    class Pop implements Simple<Pop> {
        public Pop() {
        };
    }

    class Pip<T extends Simple<T>> {
        public T a;

        public Pip(T a) {
            this.a = a;
            System.out.println("pip");
            a.print();
        }
    }

    public static void main(String [] argv) {
        Pip<Pop>(new Pop());
    }
```

## Lambda

[https://www.baeldung.com/java-8-lambda-expressions-tips](https://www.baeldung.com/java-8-lambda-expressions-tips)

```java
    ArrayList<Integer> numbers = new ArrayList<Integer>();
    numbers.add(5);
    numbers.add(9);
    numbers.add(8);
    numbers.add(1);
    numbers.forEach( (n) -> { System.out.println(n); } );
```

## Anotation

[https://www.youtube.com/watch?v=DkZr7_c9ry8](https://www.youtube.com/watch?v=DkZr7_c9ry8)

```java
    public @interface Anot {
        String name();
        int version() default 1;
    }

    @Anot(name = "Long", version=2)
    class Pup {}
```

```java
    @Target(ElementType.TYPE)
    public @interface OnlyOnClass {

    }

    @Target(ElementType.METHOD)
    public @interface OnlyOnFunction {

    }

    @Target({ElementType.TYPE, ElementType.METHOD})
    public @interface BothOnClassAndFunction {

    }

    @Target(ElementType.FIELD) // Only on field


    // Rentation anotation
    @Rentation(RentationPolicy.RUNTIME) // Keep at runtime
    @Rentation(RentationPolicy.SOURCE) // Remove before compile, eg: Warning,...
    @Rentation(RentationPolicy.CLASS) // Remove after compile

```

```java
    // Check anotations
    Cat cat = new Cat();
    cat.getClass().isAnotationPresent(OnlyOnClass.class);

    // Get anotation
    OnlyOnClass ooc = cat.getClass().getAnotation(OnlyOnClass.class);
```

## Exceptions

```
    try{

    }catch(Exception1 e){

    }
    catch(Exception2 e){

    }
    catch (Exception3|Exception4 ex) {
        logger.log(ex);
        throw ex;
    }
    finally{

    }
```

## Collections

[https://dev.java/learn/api/collections-framework/](https://dev.java/learn/api/collections-framework/)

```java

    List<Integer> list = Arrays.asList(1,2,3,4,5,6);

    //Convert int[] to List<Integer>
    int[] arr = { 1, 2, 3, 4, 4, 56, 7 };
    List<Integer> list = Arrays.stream(arr)     // IntStream
                                    .boxed()        // Stream<Integer>
                                    .collect(Collectors.toList());

    ArrayList<Integer> arr = new ArrayList<>(List.of(1,2,3,4,5,6));
    arr.add(7);
    arr.forEach(item -> System.out.println(item));

    Map<String, Integer> map = new HashMap<String, Integer>(Map.of("a",1, "b", 2));
    map.put("c", 3);
    map.get("a"); // -> 1
    map.forEach((key, val) -> System.out.println(key + " " + val));
    map.replaceAll((key, val) -> val += 1);
```

- Comparable

```java
    public class Player implements Comparable<Player> {

    @Override
    public int compareTo(Player otherPlayer) {
        return Integer.compare(getRanking(), otherPlayer.getRanking());
    }
}
```

## Stream

```java
    List<Integer> l = List.of(1,2,3,4,4,6);
    l.stream().filter(i -> i > 3).toList(); // [4,4,6]
    l.stream().distinct().map(i -> i *= 2).collect(Collectors.toList()); // [2, 4, 6, 8, 12]
    l.stream().reduce(0, (result, i) -> result += i); // 20

```

# Maven

[https://www.baeldung.com/maven](https://www.baeldung.com/maven)
[https://www.baeldung.com/maven-goals-phases](https://www.baeldung.com/maven-goals-phases)
[https://spring.io/guides/gs/maven/](https://spring.io/guides/gs/maven/)

## Installation

```bash
    brew install maven
```

## Init project

```bash
    mvn archetype:generate
```

## Maven life circle

- validate – checks the correctness of the project
- compile – compiles the provided source code into binary artifacts
- test – executes unit tests
- package – packages compiled code into an archive file
- integration-test – executes additional tests, which require the packaging
- verify – checks if the package is valid
- install – installs the package file into the local Maven repository
- deploy – deploys the package file to a remote server or repository

```bash
    mvn <phrase>
```

## Clean build folder

```bash
    mvn clean
```

## Run java

Set configure in pom.xml

```xml
    <build>
        <plugins>
            <plugin>
                <groupId>org.codehaus.mojo</groupId>
                <artifactId>exec-maven-plugin</artifactId>
                <version>3.0.0</version>
                <configuration>
                    <mainClass>com.pip.App</mainClass>
                </configuration>
            </plugin>
        <plugins>
    <build>
```

```bash
    mvn exec:java
```

## Maven wrapper

[https://maven.apache.org/wrapper/](https://maven.apache.org/wrapper/)

```bash
    mvn wrapper:wrapper
```

# Gradle

[https://docs.gradle.org/current/userguide/userguide.html](https://docs.gradle.org/current/userguide/userguide.html)
[https://docs.gradle.org/current/userguide/java_plugin.html](https://docs.gradle.org/current/userguide/java_plugin.html)

## Init project

```bash
    gradle init
```

## Show tasks

```bash
    gradle tasks
```

## Build project

```bash
    gradle build
```

# Springboot

[https://docs.spring.io/spring-boot/docs/current/reference/html/index.html](https://docs.spring.io/spring-boot/docs/current/reference/html/index.html)
