# Complete Java Interview Questions & Answers with Live Examples

---

## 🟢 Introduction to Java Interview Questions

### Q1. What is Java and why is it not considered a pure object-oriented programming language?

**Answer:**
Java is a general-purpose, object-oriented programming language developed by Sun Microsystems (now owned by Oracle) in 1995. It follows the "write once, run anywhere" (WORA) principle.

**Why Java is NOT a pure OOP language:**
- **Primitive Data Types**: Java has 8 primitive types (int, float, double, char, boolean, byte, short, long) that are not objects. Pure OOP languages treat everything as objects.
- **Static Methods and Variables**: You can call static methods without creating an object instance, which violates pure OOP principles.

**Live Example:**
```java
public class PureOOPExample {
    public static void main(String[] args) {
        // Primitive type - not an object (not pure OOP)
        int age = 25;
        
        // Static method call without object (not pure OOP)
        printMessage();
        
        // Object-oriented way
        Person person = new Person("John", 25);
        person.display();
    }
    
    static void printMessage() {
        System.out.println("Static method - not pure OOP");
    }
}

class Person {
    String name;
    int age;
    
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

// Output:
// Static method - not pure OOP
// Name: John, Age: 25
```

---

### Q2. What are the key components required to run a Java program?

**Answer:**
To run a Java program, you need:

1. **JDK (Java Development Kit)** - Contains compiler (javac) and other tools
2. **JRE (Java Runtime Environment)** - Provides runtime environment with JVM
3. **JVM (Java Virtual Machine)** - Executes bytecode
4. **Source Code** - .java files
5. **Bytecode** - Compiled .class files

**Live Example - Step by Step:**
```java
// File: HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java World!");
    }
}

// Step 1: Compile (javac HelloWorld.java)
// Creates: HelloWorld.class (bytecode)

// Step 2: Run (java HelloWorld)
// Output: Hello, Java World!
```

**Process Flow:**
```
Source Code (.java) → Compiler (javac) → Bytecode (.class) → JVM → Machine Code → Output
```

---

### Q3. What are the main features of Java?

**Answer:**
The main features of Java are:

1. **Object-Oriented** - Organizes code into objects and classes
2. **Platform Independent** - WORA (Write Once, Run Anywhere)
3. **Simple & Easy to Learn** - Clean syntax similar to C/C++
4. **Secure** - Bytecode verification, no pointers, exception handling
5. **Robust** - Strong memory management, garbage collection
6. **Multithreaded** - Can execute multiple threads simultaneously
7. **Architecture Neutral** - Works on any processor
8. **Portable** - Can run on any OS with JVM
9. **High Performance** - Just-In-Time (JIT) compilation
10. **Distributed** - Network support, RMI, EJB

**Live Example:**
```java
public class JavaFeatures {
    
    // 1. Object-Oriented
    static class Student {
        String name;
        Student(String name) { this.name = name; }
    }
    
    public static void main(String[] args) throws InterruptedException {
        // 2. Simple & Easy to Learn
        int age = 25;
        System.out.println("Age: " + age);
        
        // 3. Secure - No pointers, automatic memory management
        Student student = new Student("Alice");
        System.out.println("Student: " + student.name);
        
        // 4. Robust - Exception Handling
        try {
            int result = 10 / 2;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
        
        // 5. Multithreaded
        Thread thread1 = new Thread(() -> System.out.println("Thread 1"));
        Thread thread2 = new Thread(() -> System.out.println("Thread 2"));
        thread1.start();
        thread2.start();
    }
}

// Output:
// Age: 25
// Student: Alice
// Result: 5
// Thread 1
// Thread 2
```

---

### Q4. What is the Java String Pool?

**Answer:**
The Java String Pool is a special memory region in the heap where string literals are stored. It improves memory efficiency by storing unique string values only once.

**Key Points:**
- String literals are stored in String Pool
- If a string with the same value already exists, the reference to that existing string is returned
- Strings created with `new` keyword are stored in the regular heap memory
- String Pool helps reduce memory usage

**Live Example:**
```java
public class StringPoolExample {
    public static void main(String[] args) {
        // String literals - stored in String Pool
        String str1 = "Java";
        String str2 = "Java";
        String str3 = "Java";
        
        // Both refer to the same object in String Pool
        System.out.println("str1 == str2: " + (str1 == str2));  // true
        System.out.println("str1 == str3: " + (str1 == str3));  // true
        
        // Using 'new' keyword - stored in heap (not in String Pool)
        String str4 = new String("Java");
        String str5 = new String("Java");
        
        System.out.println("str1 == str4: " + (str1 == str4));  // false
        System.out.println("str4 == str5: " + (str4 == str5));  // false
        
        // Using equals() method for content comparison
        System.out.println("str1.equals(str4): " + str1.equals(str4));  // true
        
        // intern() method adds string to pool if not present
        String str6 = new String("Java").intern();
        System.out.println("str1 == str6: " + (str1 == str6));  // true
    }
}

// Output:
// str1 == str2: true
// str1 == str3: true
// str1 == str4: false
// str4 == str5: false
// str1.equals(str4): true
// str1 == str6: true
```

**Memory Visualization:**
```
String Pool (Heap):
┌─────────────────┐
│  "Java" ────┐   │
└─────────────┼───┘
              ↓
        str1, str2, str3, str6 all reference here

Regular Heap:
str4 → new "Java" object
str5 → new "Java" object (different object)
```

---

### Q5. What is a Wrapper Class?

**Answer:**
Wrapper Classes are classes that wrap primitive data types into objects. They allow primitives to be used as objects and provide utility methods.

**Primitive types and their Wrapper Classes:**
- int → Integer
- float → Float
- double → Double
- boolean → Boolean
- char → Character
- byte → Byte
- short → Short
- long → Long

**Live Example:**
```java
public class WrapperClassExample {
    public static void main(String[] args) {
        // 1. Auto-boxing: Converting primitive to Wrapper Object
        int primitiveInt = 10;
        Integer wrappedInt = primitiveInt;  // Auto-boxing
        System.out.println("Auto-boxing: " + wrappedInt);
        
        // 2. Unboxing: Converting Wrapper Object to primitive
        Integer wrappedInt2 = 20;
        int primitiveInt2 = wrappedInt2;  // Unboxing
        System.out.println("Unboxing: " + primitiveInt2);
        
        // 3. Using Wrapper Classes with Collections
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(100);  // Auto-boxing
        numbers.add(200);
        for (Integer num : numbers) {
            System.out.println("Number: " + num);
        }
        
        // 4. Utility Methods
        String str = "100";
        int value = Integer.parseInt(str);  // String to int
        System.out.println("Parsed value: " + value);
        
        String binary = Integer.toBinaryString(10);
        System.out.println("Binary of 10: " + binary);
        
        String hex = Integer.toHexString(255);
        System.out.println("Hex of 255: " + hex);
        
        // 5. Constants
        System.out.println("Max Integer: " + Integer.MAX_VALUE);
        System.out.println("Min Integer: " + Integer.MIN_VALUE);
    }
}

// Output:
// Auto-boxing: 10
// Unboxing: 20
// Number: 100
// Number: 200
// Parsed value: 100
// Binary of 10: 1010
// Hex of 255: ff
// Max Integer: 2147483647
// Min Integer: -2147483648
```

---

### Q6. Scenario-based question on Collections in Java

**Scenario:** "You need to store a list of students, retrieve them by ID, and ensure no duplicates based on student ID. How would you do it?"

**Answer:**
Use appropriate Collections based on requirements:
- **List** (ArrayList) - For ordered collection
- **Map** (HashMap) - For ID-based retrieval
- **Set** (HashSet) - For uniqueness

**Live Example:**
```java
import java.util.*;

class Student {
    int id;
    String name;
    
    Student(int id, String name) {
        this.id = id;
        this.name = name;
    }
    
    @Override
    public String toString() {
        return "Student{" + "id=" + id + ", name='" + name + '\'' + '}';
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Student)) return false;
        Student student = (Student) o;
        return id == student.id;
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

public class CollectionsScenario {
    public static void main(String[] args) {
        // 1. Using ArrayList - ordered, allows duplicates
        List<Student> studentList = new ArrayList<>();
        studentList.add(new Student(1, "Alice"));
        studentList.add(new Student(2, "Bob"));
        studentList.add(new Student(3, "Charlie"));
        
        System.out.println("=== Using ArrayList ===");
        for (Student s : studentList) {
            System.out.println(s);
        }
        
        // 2. Using HashMap - ID-based retrieval, no duplicates by key
        Map<Integer, Student> studentMap = new HashMap<>();
        studentMap.put(1, new Student(1, "Alice"));
        studentMap.put(2, new Student(2, "Bob"));
        studentMap.put(3, new Student(3, "Charlie"));
        studentMap.put(1, new Student(1, "Alice Updated"));  // Replaces old entry
        
        System.out.println("\n=== Using HashMap (ID-based) ===");
        System.out.println("Student with ID 1: " + studentMap.get(1));
        System.out.println("All Students: " + studentMap.values());
        
        // 3. Using Set - ensures no duplicates
        Set<Student> studentSet = new HashSet<>();
        studentSet.add(new Student(1, "Alice"));
        studentSet.add(new Student(2, "Bob"));
        studentSet.add(new Student(3, "Charlie"));
        studentSet.add(new Student(1, "Alice"));  // Won't be added (duplicate)
        
        System.out.println("\n=== Using HashSet (No Duplicates) ===");
        System.out.println("Total Students: " + studentSet.size());
        for (Student s : studentSet) {
            System.out.println(s);
        }
    }
}

// Output:
// === Using ArrayList ===
// Student{id=1, name='Alice'}
// Student{id=2, name='Bob'}
// Student{id=3, name='Charlie'}
//
// === Using HashMap (ID-based) ===
// Student with ID 1: Student{id=1, name='Alice Updated'}
// All Students: [Student{id=1, name='Alice Updated'}, Student{id=2, name='Bob'}, Student{id=3, name='Charlie'}]
//
// === Using HashSet (No Duplicates) ===
// Total Students: 3
// Student{id=1, name='Alice'}
// Student{id=2, name='Bob'}
// Student{id=3, name='Charlie'}
```

---

### Q7. What is the use of this and super keywords?

**Answer:**

**this keyword:**
- Refers to the current object (instance)
- Used to call current class methods/variables
- Used to call current class constructor

**super keyword:**
- Refers to the parent/superclass object
- Used to call parent class methods
- Used to call parent class constructor
- Used to access parent class variables

**Live Example:**
```java
// Parent Class
class Animal {
    String name = "Animal";
    
    Animal() {
        System.out.println("Parent Constructor");
    }
    
    void eat() {
        System.out.println("Animal is eating");
    }
}

// Child Class
class Dog extends Animal {
    String name = "Dog";
    
    Dog() {
        super();  // Calls parent constructor
        System.out.println("Child Constructor");
    }
    
    void display() {
        System.out.println("this.name (current): " + this.name);
        System.out.println("super.name (parent): " + super.name);
    }
    
    @Override
    void eat() {
        System.out.println("Dog is eating");
        super.eat();  // Calls parent method
    }
    
    void callThisMethod() {
        this.eat();  // Calls current class method
    }
}

public class ThisSuperExample {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.display();
        dog.callThisMethod();
    }
}

// Output:
// Parent Constructor
// Child Constructor
// this.name (current): Dog
// super.name (parent): Animal
// Dog is eating
// Animal is eating
```

---

### Q8. What is the difference between static and instance methods?

**Answer:**

| Feature | Static Method | Instance Method |
|---------|--------------|-----------------|
| Declaration | `static void method()` | `void method()` |
| Belongs to | Class | Object/Instance |
| Call | Without object: `ClassName.method()` | With object: `obj.method()` |
| Memory | Shared across all instances | Separate for each instance |
| Access | Can't access instance variables | Can access both static and instance |
| Override | Can't override | Can override |

**Live Example:**
```java
public class StaticVsInstanceExample {
    
    // Static variable - shared across all instances
    static int staticCount = 0;
    
    // Instance variable - unique for each instance
    int instanceCount = 0;
    
    // Static method
    static void staticMethod() {
        staticCount++;
        System.out.println("Static method called. Static count: " + staticCount);
        // Cannot access instance variables or methods here
    }
    
    // Instance method
    void instanceMethod() {
        instanceCount++;
        staticCount++;
        System.out.println("Instance method called. Instance count: " + instanceCount + 
                         ", Static count: " + staticCount);
    }
    
    public static void main(String[] args) {
        // Calling static method without object
        StaticVsInstanceExample.staticMethod();
        StaticVsInstanceExample.staticMethod();
        
        // Creating objects to call instance methods
        StaticVsInstanceExample obj1 = new StaticVsInstanceExample();
        obj1.instanceMethod();  // instanceCount=1, staticCount=3
        
        StaticVsInstanceExample obj2 = new StaticVsInstanceExample();
        obj2.instanceMethod();  // instanceCount=1, staticCount=4
        
        System.out.println("\nobj1.instanceCount: " + obj1.instanceCount);
        System.out.println("obj2.instanceCount: " + obj2.instanceCount);
        System.out.println("Total staticCount: " + StaticVsInstanceExample.staticCount);
    }
}

// Output:
// Static method called. Static count: 1
// Static method called. Static count: 2
// Instance method called. Instance count: 1, Static count: 3
// Instance method called. Instance count: 1, Static count: 4
//
// obj1.instanceCount: 1
// obj2.instanceCount: 1
// Total staticCount: 4
```

---

### Q9. What are constructors and their types?

**Answer:**
A constructor is a special method used to initialize objects. It has the same name as the class and no return type.

**Types of Constructors:**

1. **Default Constructor** - No parameters
2. **Parameterized Constructor** - With parameters
3. **Copy Constructor** - Creates copy of another object

**Live Example:**
```java
public class ConstructorExample {
    String name;
    int age;
    String email;
    
    // 1. Default Constructor
    ConstructorExample() {
        this.name = "Unknown";
        this.age = 0;
        this.email = "N/A";
        System.out.println("Default Constructor called");
    }
    
    // 2. Parameterized Constructor
    ConstructorExample(String name, int age, String email) {
        this.name = name;
        this.age = age;
        this.email = email;
        System.out.println("Parameterized Constructor called");
    }
    
    // Another Parameterized Constructor (Constructor Overloading)
    ConstructorExample(String name, int age) {
        this.name = name;
        this.age = age;
        this.email = "N/A";
        System.out.println("Parameterized Constructor (2 params) called");
    }
    
    // 3. Copy Constructor
    ConstructorExample(ConstructorExample other) {
        this.name = other.name;
        this.age = other.age;
        this.email = other.email;
        System.out.println("Copy Constructor called");
    }
    
    void display() {
        System.out.println("Name: " + name + ", Age: " + age + ", Email: " + email);
    }
    
    public static void main(String[] args) {
        // 1. Default Constructor
        ConstructorExample person1 = new ConstructorExample();
        person1.display();
        
        // 2. Parameterized Constructor (3 params)
        ConstructorExample person2 = new ConstructorExample("Alice", 25, "alice@example.com");
        person2.display();
        
        // 3. Parameterized Constructor (2 params)
        ConstructorExample person3 = new ConstructorExample("Bob", 30);
        person3.display();
        
        // 4. Copy Constructor
        ConstructorExample person4 = new ConstructorExample(person2);
        person4.display();
    }
}

// Output:
// Default Constructor called
// Name: Unknown, Age: 0, Email: N/A
// Parameterized Constructor called
// Name: Alice, Age: 25, Email: alice@example.com
// Parameterized Constructor (2 params) called
// Name: Bob, Age: 30, Email: N/A
// Copy Constructor called
// Name: Alice, Age: 25, Email: alice@example.com
```

---

### Q10. What is the difference between StringBuffer and StringBuilder?

**Answer:**

| Feature | StringBuffer | StringBuilder |
|---------|-------------|---------------|
| Thread Safety | Synchronized (Thread-safe) | Not synchronized (Not thread-safe) |
| Performance | Slower (due to synchronization) | Faster |
| Use Case | Multi-threaded applications | Single-threaded applications |
| Introduced | Java 1.0 | Java 1.5 |
| Methods | Same as StringBuilder | Same as StringBuffer |

**Live Example:**
```java
public class StringBufferVsBuilderExample {
    public static void main(String[] args) {
        // 1. StringBuffer - Thread-safe, Synchronized
        StringBuffer sb = new StringBuffer("Hello");
        sb.append(" ");
        sb.append("World");
        System.out.println("StringBuffer: " + sb);
        System.out.println("StringBuffer Reverse: " + sb.reverse());
        
        // 2. StringBuilder - Not thread-safe, Faster
        StringBuilder builder = new StringBuilder("Java");
        builder.append(" ");
        builder.append("Programming");
        System.out.println("StringBuilder: " + builder);
        
        // 3. Performance Comparison
        long startTime, endTime;
        
        // StringBuffer performance
        startTime = System.nanoTime();
        StringBuffer buffer = new StringBuffer();
        for (int i = 0; i < 100000; i++) {
            buffer.append("a");
        }
        endTime = System.nanoTime();
        System.out.println("\nStringBuffer time: " + (endTime - startTime) + " ns");
        
        // StringBuilder performance
        startTime = System.nanoTime();
        StringBuilder build = new StringBuilder();
        for (int i = 0; i < 100000; i++) {
            build.append("a");
        }
        endTime = System.nanoTime();
        System.out.println("StringBuilder time: " + (endTime - startTime) + " ns");
        
        // 4. Common Methods
        StringBuilder sb3 = new StringBuilder("Hello");
        System.out.println("\nOriginal: " + sb3);
        System.out.println("Insert: " + sb3.insert(5, " World"));
        System.out.println("Delete: " + sb3.delete(5, 11));
        System.out.println("Replace: " + sb3.replace(0, 5, "Hi"));
        System.out.println("Reverse: " + sb3.reverse());
    }
}

// Output:
// StringBuffer: Hello World
// StringBuffer Reverse: dlroW olleH
// StringBuilder: Java Programming
//
// StringBuffer time: 2345678 ns
// StringBuilder time: 1234567 ns
//
// Original: Hello
// Insert: Hello World
// Delete: Hello
// Replace: Hi
// Reverse: iH
```

---

## 🟡 Intermediate Level Java Interview Questions

### Q11. What is the difference between Abstract Classes and Interfaces?

**Answer:**

| Feature | Abstract Class | Interface |
|---------|---|---|
| Declaration | `abstract class` | `interface` |
| Constructor | Can have constructors | Cannot have constructors (Java 8+) |
| Methods | Can have concrete and abstract | Only abstract (before Java 8) |
| Variables | Any access modifier | Only public static final |
| Inheritance | `extends` (single) | `implements` (multiple) |
| Use Case | "IS-A" relationship | Contract/capability |
| Access Modifier | Any | Public only |

**Live Example:**
```java
// Abstract Class
abstract class Vehicle {
    abstract void start();
    
    void stop() {
        System.out.println("Vehicle stopped");
    }
}

// Interface
interface Drivable {
    void drive();
    void brake();
}

interface Fuelable {
    void refuel();
}

// Concrete Class implementing both Interface and extending Abstract Class
class Car extends Vehicle implements Drivable, Fuelable {
    @Override
    void start() {
        System.out.println("Car engine started");
    }
    
    @Override
    public void drive() {
        System.out.println("Car is driving");
    }
    
    @Override
    public void brake() {
        System.out.println("Car is braking");
    }
    
    @Override
    public void refuel() {
        System.out.println("Car is refueling");
    }
}

public class AbstractVsInterfaceExample {
    public static void main(String[] args) {
        Car car = new Car();
        car.start();
        car.drive();
        car.brake();
        car.refuel();
        car.stop();
    }
}

// Output:
// Car engine started
// Car is driving
// Car is braking
// Car is refueling
// Vehicle stopped
```

---

### Q12. What is Method Overloading? Can we overload the main() method?

**Answer:**
Method Overloading allows a class to have multiple methods with the same name but different parameters.

**Rules for Method Overloading:**
1. Different number of parameters
2. Different type of parameters
3. Different order of parameters

**Note:** We CAN overload main() method, but JVM always calls `main(String[] args)`

**Live Example:**
```java
public class MethodOverloadingExample {
    
    // Method 1: No parameters
    void display() {
        System.out.println("No parameters");
    }
    
    // Method 2: One int parameter
    void display(int a) {
        System.out.println("Int parameter: " + a);
    }
    
    // Method 3: One String parameter
    void display(String name) {
        System.out.println("String parameter: " + name);
    }
    
    // Method 4: Two int parameters
    void display(int a, int b) {
        System.out.println("Two int parameters: " + a + ", " + b);
    }
    
    // Method 5: Different order (int, String)
    void display(int a, String name) {
        System.out.println("Int and String: " + a + ", " + name);
    }
    
    // Method 6: Different order (String, int)
    void display(String name, int a) {
        System.out.println("String and Int: " + name + ", " + a);
    }
    
    // Overloaded main() method
    public static void main() {
        System.out.println("main() with no parameters");
    }
    
    public static void main(String[] args) {
        System.out.println("=== Method Overloading Example ===");
        MethodOverloadingExample obj = new MethodOverloadingExample();
        
        obj.display();
        obj.display(10);
        obj.display("Alice");
        obj.display(10, 20);
        obj.display(10, "Bob");
        obj.display("Charlie", 25);
        
        // Calling overloaded main() method
        main();
    }
}

// Output:
// === Method Overloading Example ===
// No parameters
// Int parameter: 10
// String parameter: Alice
// Two int parameters: 10, 20
// Int and String: 10, Bob
// String and Int: Charlie, 25
// main() with no parameters
```

---

### Q13. What is Method Overriding?

**Answer:**
Method Overriding allows a child class to provide a specific implementation of a method that is already defined in the parent class.

**Rules for Method Overriding:**
1. Method name must be same
2. Parameters must be same
3. Return type must be same or covariant
4. Cannot reduce visibility (private → public is fine, public → private is NOT)
5. Cannot throw new checked exceptions
6. Must use `@Override` annotation (optional but recommended)

**Live Example:**
```java
// Parent Class
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
    
    void move() {
        System.out.println("Animal is moving");
    }
}

// Child Class 1
class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks: Woof Woof");
    }
    
    @Override
    void move() {
        System.out.println("Dog runs on four legs");
    }
}

// Child Class 2
class Bird extends Animal {
    @Override
    void sound() {
        System.out.println("Bird chirps: Tweet Tweet");
    }
    
    @Override
    void move() {
        System.out.println("Bird flies in the sky");
    }
}

public class MethodOverridingExample {
    public static void main(String[] args) {
        // Using Parent reference with Child object (Polymorphism)
        Animal animal1 = new Dog();
        animal1.sound();  // Calls Dog's sound()
        animal1.move();   // Calls Dog's move()
        
        System.out.println();
        
        Animal animal2 = new Bird();
        animal2.sound();  // Calls Bird's sound()
        animal2.move();   // Calls Bird's move()
    }
}

// Output:
// Dog barks: Woof Woof
// Dog runs on four legs
//
// Bird chirps: Tweet Tweet
// Bird flies in the sky
```

---

### Q14. What is Exception Handling in Java?

**Answer:**
Exception Handling is a mechanism to handle runtime errors gracefully using try-catch-finally blocks.

**Hierarchy:**
```
Throwable
├── Exception
│   ├── Checked Exceptions (IOException, SQLException)
│   └── Unchecked Exceptions (RuntimeException)
│       ├── NullPointerException
│       ├── ArithmeticException
│       └── ArrayIndexOutOfBoundsException
└── Error
    ├── OutOfMemoryError
    └── StackOverflowError
```

**Live Example:**
```java
import java.io.FileReader;
import java.io.IOException;

public class ExceptionHandlingExample {
    
    public static void main(String[] args) {
        exampleBasicTryCatch();
        exampleMultipleCatch();
        exampleFinally();
        exampleThrows();
    }
    
    // 1. Basic Try-Catch
    static void exampleBasicTryCatch() {
        System.out.println("=== Basic Try-Catch ===");
        try {
            int result = 10 / 2;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
    
    // 2. Multiple Catch Blocks
    static void exampleMultipleCatch() {
        System.out.println("\n=== Multiple Catch ===");
        try {
            String str = null;
            System.out.println(str.length());  // NullPointerException
        } catch (NullPointerException e) {
            System.out.println("Caught NullPointerException");
        } catch (Exception e) {
            System.out.println("Caught Exception: " + e.getMessage());
        }
    }
    
    // 3. Try-Catch-Finally
    static void exampleFinally() {
        System.out.println("\n=== Try-Catch-Finally ===");
        try {
            int[] arr = {1, 2, 3};
            System.out.println("Element: " + arr[5]);  // ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Caught ArrayIndexOutOfBoundsException");
        } finally {
            System.out.println("Finally block always executes");
        }
    }
    
    // 4. Method with throws
    static void exampleThrows() throws IOException {
        System.out.println("\n=== Throws Keyword ===");
        // FileReader reader = new FileReader("nonexistent.txt");  // throws IOException
    }
    
    // 5. Custom Exception
    static class InvalidAgeException extends Exception {
        InvalidAgeException(String message) {
            super(message);
        }
    }
    
    static void validateAge(int age) throws InvalidAgeException {
        if (age < 0) {
            throw new InvalidAgeException("Age cannot be negative");
        }
        System.out.println("Age is valid: " + age);
    }
    
    static {
        System.out.println("\n=== Custom Exception ===");
        try {
            validateAge(-5);
        } catch (InvalidAgeException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}

// Output:
// === Basic Try-Catch ===
// Result: 5
// === Multiple Catch ===
// Caught NullPointerException
// === Try-Catch-Finally ===
// Caught ArrayIndexOutOfBoundsException
// Finally block always executes
// === Custom Exception ===
// Caught: Age cannot be negative
```

---

### Q15. What is the lifecycle of a thread?

**Answer:**
A thread goes through 5 states:

1. **NEW** - Thread object created, not started yet
2. **RUNNABLE** - Thread is ready to run (waiting for CPU time)
3. **RUNNING** - Thread is currently executing
4. **BLOCKED/WAITING** - Thread is waiting for resources or another thread
5. **TERMINATED/DEAD** - Thread execution completed

**State Transitions:**
```
NEW → RUNNABLE → RUNNING ↔ BLOCKED/WAITING → TERMINATED
```

**Live Example:**
```java
public class ThreadLifecycleExample {
    
    static class MyThread extends Thread {
        @Override
        public void run() {
            System.out.println("Thread is in RUNNING state");
            try {
                Thread.sleep(2000);  // Thread goes to BLOCKED state
                System.out.println("Thread resumed after blocking");
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("Thread execution completed");
        }
    }
    
    public static void main(String[] args) throws InterruptedException {
        MyThread thread = new MyThread();
        
        // State: NEW
        System.out.println("State: " + thread.getState());  // NEW
        
        // Move to RUNNABLE
        thread.start();
        System.out.println("After start(): " + thread.getState());  // RUNNABLE
        
        // Main thread sleeps, allowing MyThread to run
        Thread.sleep(1000);
        System.out.println("During execution: " + thread.getState());  // Might be RUNNING or TIMED_WAITING
        
        // Wait for thread to complete
        thread.join();
        System.out.println("After completion: " + thread.getState());  // TERMINATED
    }
}

// Output:
// State: NEW
// After start(): RUNNABLE
// During execution: TIMED_WAITING
// Thread is in RUNNING state
// Thread resumed after blocking
// Thread execution completed
// After completion: TERMINATED
```

---

### Q16. What is a Singleton class?

**Answer:**
A Singleton class is a class that can have only one object (instance) at a time. After the first time, if you try to instantiate another object, it returns the first instance.

**Ways to create Singleton:**
1. Eager Initialization
2. Lazy Initialization
3. Bill Pugh Singleton (Static Helper)
4. Enum Singleton (Best)
5. Thread-Safe Singleton

**Live Example:**
```java
// 1. Eager Initialization Singleton
class EagerSingleton {
    private static EagerSingleton instance = new EagerSingleton();
    
    private EagerSingleton() {
        System.out.println("EagerSingleton instance created");
    }
    
    public static EagerSingleton getInstance() {
        return instance;
    }
}

// 2. Lazy Initialization Singleton
class LazySingleton {
    private static LazySingleton instance;
    
    private LazySingleton() {
        System.out.println("LazySingleton instance created");
    }
    
    public static LazySingleton getInstance() {
        if (instance == null) {
            instance = new LazySingleton();
        }
        return instance;
    }
}

// 3. Thread-Safe Singleton (Synchronized)
class ThreadSafeSingleton {
    private static ThreadSafeSingleton instance;
    
    private ThreadSafeSingleton() {
        System.out.println("ThreadSafeSingleton instance created");
    }
    
    public static synchronized ThreadSafeSingleton getInstance() {
        if (instance == null) {
            instance = new ThreadSafeSingleton();
        }
        return instance;
    }
}

// 4. Bill Pugh Singleton (Best Practice)
class BillPughSingleton {
    private BillPughSingleton() {
        System.out.println("BillPughSingleton instance created");
    }
    
    static class SingletonHelper {
        private static final BillPughSingleton INSTANCE = new BillPughSingleton();
    }
    
    public static BillPughSingleton getInstance() {
        return SingletonHelper.INSTANCE;
    }
}

// 5. Enum Singleton (Best - Thread-Safe, Serialization-Safe)
enum EnumSingleton {
    INSTANCE;
    
    EnumSingleton() {
        System.out.println("EnumSingleton instance created");
    }
    
    public void doSomething() {
        System.out.println("Doing something");
    }
}

public class SingletonExample {
    public static void main(String[] args) {
        System.out.println("=== Eager Singleton ===");
        EagerSingleton e1 = EagerSingleton.getInstance();
        EagerSingleton e2 = EagerSingleton.getInstance();
        System.out.println("e1 == e2: " + (e1 == e2));  // true
        
        System.out.println("\n=== Lazy Singleton ===");
        LazySingleton l1 = LazySingleton.getInstance();
        LazySingleton l2 = LazySingleton.getInstance();
        System.out.println("l1 == l2: " + (l1 == l2));  // true
        
        System.out.println("\n=== Bill Pugh Singleton ===");
        BillPughSingleton b1 = BillPughSingleton.getInstance();
        BillPughSingleton b2 = BillPughSingleton.getInstance();
        System.out.println("b1 == b2: " + (b1 == b2));  // true
        
        System.out.println("\n=== Enum Singleton ===");
        EnumSingleton enum1 = EnumSingleton.INSTANCE;
        EnumSingleton enum2 = EnumSingleton.INSTANCE;
        System.out.println("enum1 == enum2: " + (enum1 == enum2));  // true
        enum1.doSomething();
    }
}

// Output:
// === Eager Singleton ===
// EagerSingleton instance created
// e1 == e2: true
//
// === Lazy Singleton ===
// LazySingleton instance created
// l1 == l2: true
//
// === Bill Pugh Singleton ===
// BillPughSingleton instance created
// b1 == b2: true
//
// === Enum Singleton ===
// EnumSingleton instance created
// enum1 == enum2: true
// Doing something
```

---

### Q17. What is the difference between Aggregation and Composition in Java?

**Answer:**

| Feature | Aggregation | Composition |
|---------|---|---|
| Relationship | Weak "HAS-A" | Strong "HAS-A" |
| Dependency | Dependent can exist independently | Child cannot exist without parent |
| Lifecycle | Independent lifecycles | Parent-child lifecycle dependency |
| Example | Car HAS Engine (Engine can exist independently) | House HAS Rooms (Rooms don't exist without House) |

**Live Example:**
```java
// AGGREGATION Example
class Engine {
    String type;
    
    Engine(String type) {
        this.type = type;
    }
    
    void start() {
        System.out.println("Engine type " + type + " started");
    }
}

class CarWithAggregation {
    String model;
    Engine engine;  // Weak association
    
    CarWithAggregation(String model, Engine engine) {
        this.model = model;
        this.engine = engine;
    }
    
    void drive() {
        engine.start();
        System.out.println("Car " + model + " is driving");
    }
}

// COMPOSITION Example
class Address {
    String city;
    String country;
    
    Address(String city, String country) {
        this.city = city;
        this.country = country;
    }
    
    void display() {
        System.out.println("City: " + city + ", Country: " + country);
    }
}

class Person {
    String name;
    Address address;  // Strong association (Person creates Address)
    
    Person(String name, String city, String country) {
        this.name = name;
        this.address = new Address(city, country);  // Creating dependency
    }
    
    void display() {
        System.out.println("Person: " + name);
        address.display();
    }
}

public class AggregationVsCompositionExample {
    public static void main(String[] args) {
        System.out.println("=== AGGREGATION (Weak Association) ===");
        Engine engine = new Engine("V8");
        CarWithAggregation car = new CarWithAggregation("BMW", engine);
        car.drive();
        
        // Engine can exist independently
        engine.start();
        
        System.out.println("\n=== COMPOSITION (Strong Association) ===");
        Person person = new Person("Alice", "New York", "USA");
        person.display();
        
        // address cannot exist without person
        // If person is deleted, address is also deleted (logically)
    }
}

// Output:
// === AGGREGATION (Weak Association) ===
// Engine type V8 started
// Car BMW is driving
// Engine type V8 started
//
// === COMPOSITION (Strong Association) ===
// Person: Alice
// City: New York, Country: USA
```

---

### Q18. What is an Anonymous Inner Class?

**Answer:**
An Anonymous Inner Class is a class that is defined without a name and is declared and instantiated in a single expression. It's used to override methods of a class or interface instantly.

**Key Points:**
- No explicit class name
- Created at the point of use
- Used to create instances that override methods of parent class/interface
- Often used for event handling and callbacks

**Live Example:**
```java
// Parent Class
class Shape {
    void draw() {
        System.out.println("Drawing shape");
    }
}

// Interface
interface Drawable {
    void draw();
    void fill();
}

public class AnonymousInnerClassExample {
    public static void main(String[] args) {
        
        System.out.println("=== Anonymous Inner Class extending Class ===");
        // Anonymous Inner Class extending Shape
        Shape shape = new Shape() {
            @Override
            void draw() {
                System.out.println("Drawing Circle");
            }
        };
        shape.draw();
        
        System.out.println("\n=== Anonymous Inner Class implementing Interface ===");
        // Anonymous Inner Class implementing Drawable
        Drawable drawable = new Drawable() {
            @Override
            public void draw() {
                System.out.println("Drawing Rectangle");
            }
            
            @Override
            public void fill() {
                System.out.println("Filling with Red color");
            }
        };
        drawable.draw();
        drawable.fill();
        
        System.out.println("\n=== Anonymous Class with Method Parameter ===");
        printMessage(new Drawable() {
            @Override
            public void draw() {
                System.out.println("Drawing Triangle");
            }
            
            @Override
            public void fill() {
                System.out.println("Filling with Blue color");
            }
        });
    }
    
    static void printMessage(Drawable d) {
        d.draw();
        d.fill();
    }
}

// Output:
// === Anonymous Inner Class extending Class ===
// Drawing Circle
//
// === Anonymous Inner Class implementing Interface ===
// Drawing Rectangle
// Filling with Red color
//
// === Anonymous Class with Method Parameter ===
// Drawing Triangle
// Filling with Blue color
```

---

### Q19. What is the difference between Implicit and Explicit Type Conversion?

**Answer:**

| Feature | Implicit | Explicit |
|---------|---|---|
| Process | Automatic conversion | Manual conversion using cast |
| Data Loss | No data loss | May lose data |
| Safety | Always safe | Unsafe if range exceeded |
| Example | `int a = 10; double b = a;` | `double a = 10.5; int b = (int)a;` |

**Live Example:**
```java
public class TypeConversionExample {
    public static void main(String[] args) {
        System.out.println("=== Implicit Type Conversion ===");
        // Widening conversion (safe, no data loss)
        int intValue = 100;
        double doubleValue = intValue;  // Implicit conversion
        System.out.println("int to double: " + doubleValue);
        
        byte byteValue = 50;
        int intValue2 = byteValue;  // Implicit conversion
        System.out.println("byte to int: " + intValue2);
        
        System.out.println("\n=== Explicit Type Conversion ===");
        // Narrowing conversion (manual, may lose data)
        double d = 50.75;
        int i = (int) d;  // Explicit conversion (lost decimal part)
        System.out.println("double to int: " + i);  // 50
        
        int num = 300;
        byte b = (byte) num;  // Explicit conversion (overflow)
        System.out.println("int to byte: " + b);  // overflow
        
        System.out.println("\n=== String to Number ===");
        String str = "123";
        int num2 = Integer.parseInt(str);
        System.out.println("String to int: " + num2);
        
        String str2 = "45.67";
        double d2 = Double.parseDouble(str2);
        System.out.println("String to double: " + d2);
        
        System.out.println("\n=== Number to String ===");
        int num3 = 999;
        String str3 = String.valueOf(num3);
        System.out.println("int to String: " + str3);
        
        double d3 = 123.45;
        String str4 = Double.toString(d3);
        System.out.println("double to String: " + str4);
    }
}

// Output:
// === Implicit Type Conversion ===
// int to double: 100.0
// byte to int: 50
//
// === Explicit Type Conversion ===
// double to int: 50
// int to byte: 44
//
// === String to Number ===
// String to int: 123
// String to double: 45.67
//
// === Number to String ===
// int to String: 999
// double to String: 123.45
```

---

### Q20. What is the purpose of the volatile keyword?

**Answer:**
The `volatile` keyword is used to indicate that a variable's value may be changed by multiple threads and should not be optimized by the compiler.

**Key Points:**
- Makes variable visible to all threads
- Prevents compiler optimizations
- No mutual exclusion like `synchronized`
- Used for simple flags or status variables

**Live Example:**
```java
// WITHOUT volatile - Thread may not see updated value
class Counter {
    boolean stopFlag = false;  // Without volatile
    
    void run() {
        while (!stopFlag) {
            System.out.println("Working...");
        }
        System.out.println("Stopped!");
    }
}

// WITH volatile - Thread immediately sees updated value
class VolatileCounter {
    volatile boolean stopFlag = false;  // With volatile
    
    void run() {
        while (!stopFlag) {
            System.out.println("Working...");
        }
        System.out.println("Stopped!");
    }
}

public class VolatileExample {
    public static void main(String[] args) throws InterruptedException {
        System.out.println("=== With Volatile Keyword ===");
        VolatileCounter counter = new VolatileCounter();
        
        // Thread 1: Reading stopFlag
        Thread thread1 = new Thread(() -> {
            for (int i = 0; i < 1000000000; i++) {
                if (counter.stopFlag) {
                    System.out.println("Thread 1 saw stop signal");
                    break;
                }
            }
        });
        
        // Thread 2: Writing to stopFlag
        Thread thread2 = new Thread(() -> {
            try {
                Thread.sleep(100);
                counter.stopFlag = true;
                System.out.println("Thread 2 set stop signal");
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        
        thread1.start();
        thread2.start();
        
        thread1.join();
        thread2.join();
        
        System.out.println("Program completed");
    }
}

// Output:
// Thread 2 set stop signal
// Thread 1 saw stop signal
// Program completed
```

---

## 🔴 Advanced / Experienced Level Java Interview Questions

### Q21. What are System.out, System.err, and System.in?

**Answer:**

**System.out** - PrintStream for standard output
- Used for normal output messages
- Connected to console by default

**System.err** - PrintStream for error output
- Used for error messages
- Connected to console by default (but can be redirected separately)

**System.in** - InputStream for standard input
- Used to read input from keyboard
- Connected to keyboard by default

**Live Example:**
```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class SystemStreamsExample {
    public static void main(String[] args) throws IOException {
        System.out.println("=== System.out Example ===");
        System.out.println("This is a normal output message");
        System.out.println("Value: " + 100);
        
        System.out.println("\n=== System.err Example ===");
        System.err.println("This is an error message");
        System.err.println("Error occurred at: " + new java.util.Date());
        
        System.out.println("\n=== System.in Example ===");
        System.out.println("Enter your name (simulated): ");
        // Simulating input
        String input = "Alice";  // In real program, read from System.in
        System.out.println("You entered: " + input);
        
        System.out.println("\n=== Reading from System.in ===");
        // Uncomment to read actual input
        /*
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter your age: ");
        String age = reader.readLine();
        System.out.println("Your age is: " + age);
        */
        
        System.out.println("\n=== Redirecting Streams ===");
        System.out.println("System.out class: " + System.out.getClass());
        System.out.println("System.err class: " + System.err.getClass());
        System.out.println("System.in class: " + System.in.getClass());
    }
}

// Output:
// === System.out Example ===
// This is a normal output message
// Value: 100
//
// === System.err Example ===
// This is an error message
// Error occurred at: ...
//
// === System.in Example ===
// Enter your name (simulated):
// You entered: Alice
//
// === Reading from System.in ===
// ...
```

---

### Q22. What are Access Specifiers in Java and their purpose?

**Answer:**
Access Specifiers control the visibility and accessibility of classes, methods, and variables.

**Types:**

| Specifier | Class | Package | Subclass | Outside |
|-----------|-------|---------|----------|---------|
| public | ✓ | ✓ | ✓ | ✓ |
| protected | ✓ | ✓ | ✓ | ✗ |
| package (default) | ✓ | ✓ | ✗ | ✗ |
| private | ✓ | ✗ | ✗ | ✗ |

**Live Example:**
```java
public class AccessSpecifiersExample {
    
    // PUBLIC - Accessible everywhere
    public int publicVar = 10;
    public void publicMethod() {
        System.out.println("Public method");
    }
    
    // PROTECTED - Accessible in same package and subclasses
    protected int protectedVar = 20;
    protected void protectedMethod() {
        System.out.println("Protected method");
    }
    
    // PACKAGE (Default) - Accessible in same package only
    int packageVar = 30;
    void packageMethod() {
        System.out.println("Package private method");
    }
    
    // PRIVATE - Accessible only in same class
    private int privateVar = 40;
    private void privateMethod() {
        System.out.println("Private method");
    }
    
    // Getter for private variable
    public int getPrivateVar() {
        return privateVar;
    }
    
    public static void main(String[] args) {
        AccessSpecifiersExample obj = new AccessSpecifiersExample();
        
        // Accessing all members within same class
        System.out.println("Public: " + obj.publicVar);
        System.out.println("Protected: " + obj.protectedVar);
        System.out.println("Package: " + obj.packageVar);
        System.out.println("Private: " + obj.getPrivateVar());
        
        obj.publicMethod();
        obj.protectedMethod();
        obj.packageMethod();
        obj.privateMethod();
    }
}

// Child class (same package)
class Child extends AccessSpecifiersExample {
    void testAccess() {
        System.out.println("=== From Child Class ===");
        System.out.println("Public: " + this.publicVar);
        System.out.println("Protected: " + this.protectedVar);
        // System.out.println("Package: " + this.packageVar);  // Not accessible
        // System.out.println("Private: " + this.privateVar);  // Not accessible
    }
}

// Output:
// Public: 10
// Protected: 20
// Package: 30
// Private: 40
// Public method
// Protected method
// Package private method
// Private method
```

---

### Q23. What is the difference between final, finally, and finalize?

**Answer:**

| Feature | final | finally | finalize |
|---------|-------|---------|----------|
| Type | Keyword | Block | Method |
| Use | Restrict modification | Exception handling | Garbage collection |
| For Classes | Prevent inheritance | — | — |
| For Methods | Prevent overriding | — | — |
| For Variables | Make immutable | — | — |

**Live Example:**
```java
// FINAL keyword
final class FinalClass {
    final int finalVariable = 100;
    
    final void finalMethod() {
        System.out.println("Final method - cannot override");
    }
}

// Trying to extend final class - ERROR
// class ChildOfFinalClass extends FinalClass { }

// FINALLY block
class FinallyExample {
    void divideNumbers(int a, int b) {
        try {
            int result = a / b;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: Division by zero");
        } finally {
            System.out.println("Finally block always executes");
        }
    }
}

// FINALIZE method
class FinalizeExample {
    @Override
    protected void finalize() throws Throwable {
        System.out.println("finalize() called by garbage collector");
        super.finalize();
    }
}

public class FinalFinallyFinalizeExample {
    public static void main(String[] args) {
        System.out.println("=== FINAL Keyword ===");
        FinalClass obj = new FinalClass();
        System.out.println("Final Variable: " + obj.finalVariable);
        // obj.finalVariable = 200;  // ERROR - Cannot modify final variable
        obj.finalMethod();
        
        System.out.println("\n=== FINALLY Block ===");
        FinallyExample example = new FinallyExample();
        example.divideNumbers(10, 2);
        System.out.println("---");
        example.divideNumbers(10, 0);
        
        System.out.println("\n=== FINALIZE Method ===");
        FinalizeExample obj2 = new FinalizeExample();
        obj2 = null;  // Eligible for garbage collection
        System.gc();  // Request garbage collection
        System.out.println("Program ended");
    }
}

// Output:
// === FINAL Keyword ===
// Final Variable: 100
// Final method - cannot override
//
// === FINALLY Block ===
// Result: 10
// Finally block always executes
// ---
// Error: Division by zero
// Finally block always executes
//
// === FINALIZE Method ===
// finalize() called by garbage collector
// Program ended
```

---

### Q24. Write a program to toggle the characters of a given string

**Answer:**
Toggle means convert uppercase to lowercase and vice versa.

**Live Example:**
```java
public class ToggleCharactersExample {
    
    // Method 1: Using Character class methods
    static String toggleCharacters(String str) {
        char[] chars = str.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            if (Character.isUpperCase(chars[i])) {
                chars[i] = Character.toLowerCase(chars[i]);
            } else if (Character.isLowerCase(chars[i])) {
                chars[i] = Character.toUpperCase(chars[i]);
            }
        }
        return new String(chars);
    }
    
    // Method 2: Using ASCII values
    static String toggleCharactersASCII(String str) {
        StringBuilder result = new StringBuilder();
        for (char c : str.toCharArray()) {
            if (c >= 'A' && c <= 'Z') {
                result.append((char)(c + 32));  // Convert to lowercase
            } else if (c >= 'a' && c <= 'z') {
                result.append((char)(c - 32));  // Convert to uppercase
            } else {
                result.append(c);  // Keep non-alphabetic characters as is
            }
        }
        return result.toString();
    }
    
    // Method 3: Using regex
    static String toggleCharactersRegex(String str) {
        return str.replaceAll("[a-z]", "X").replaceAll("[A-Z]", "x").replaceAll("X", "x").replaceAll("x", "X");
    }
    
    public static void main(String[] args) {
        String input = "Hello World! 123";
        
        System.out.println("=== Toggle Characters ===");
        System.out.println("Original: " + input);
        System.out.println("Method 1: " + toggleCharacters(input));
        System.out.println("Method 2: " + toggleCharactersASCII(input));
        
        System.out.println("\n=== More Examples ===");
        System.out.println(toggleCharacters("JAVA"));
        System.out.println(toggleCharacters("python"));
        System.out.println(toggleCharacters("PyThOn 123"));
    }
}

// Output:
// === Toggle Characters ===
// Original: Hello World! 123
// Method 1: hELLO wORLD! 123
// Method 2: hELLO wORLD! 123
//
// === More Examples ===
// java
// PYTHON
// pYtHoN 123
```

---

### Q25. Write a program to count the occurrence of digits in a number

**Answer:**

**Live Example:**
```java
import java.util.*;

public class CountDigitsExample {
    
    // Method 1: Using String conversion
    static void countDigitsString(int num) {
        String str = String.valueOf(Math.abs(num));
        System.out.println("Number: " + num);
        System.out.println("Total digits: " + str.length());
        
        Map<Character, Integer> digitCount = new LinkedHashMap<>();
        for (char digit : str.toCharArray()) {
            digitCount.put(digit, digitCount.getOrDefault(digit, 0) + 1);
        }
        System.out.println("Digit occurrences: " + digitCount);
    }
    
    // Method 2: Using mathematical approach
    static void countDigitsMath(int num) {
        num = Math.abs(num);
        int totalDigits = 0;
        int[] digitCount = new int[10];
        
        while (num > 0) {
            int digit = num % 10;
            digitCount[digit]++;
            totalDigits++;
            num /= 10;
        }
        
        System.out.println("\nTotal digits: " + totalDigits);
        System.out.println("Digit occurrences:");
        for (int i = 0; i < 10; i++) {
            if (digitCount[i] > 0) {
                System.out.println(i + ": " + digitCount[i]);
            }
        }
    }
    
    // Method 3: Using streams
    static void countDigitsStream(int num) {
        String str = String.valueOf(Math.abs(num));
        System.out.println("\n=== Using Streams ===");
        System.out.println("Number: " + num);
        System.out.println("Total digits: " + str.length());
        
        str.chars().boxed()
            .collect(Collectors.groupingBy(c -> (char)c.intValue(), Collectors.counting()))
            .forEach((digit, count) -> System.out.println(digit + ": " + count));
    }
    
    public static void main(String[] args) {
        int number = 112233445;
        
        System.out.println("=== Method 1: String Approach ===");
        countDigitsString(number);
        
        System.out.println("\n=== Method 2: Mathematical Approach ===");
        countDigitsMath(number);
        
        System.out.println("\n=== Method 3: Stream Approach ===");
        countDigitsStream(number);
    }
}

// Output:
// === Method 1: String Approach ===
// Number: 112233445
// Total digits: 9
// Digit occurrences: {1=2, 2=2, 3=2, 4=2, 5=1}
//
// === Method 2: Mathematical Approach ===
// Total digits: 9
// Digit occurrences:
// 1: 2
// 2: 2
// 3: 2
// 4: 2
// 5: 1
//
// === Method 3: Stream Approach ===
// Number: 112233445
// Total digits: 9
// 1: 2
// 2: 2
// 3: 2
// 4: 2
// 5: 1
```

---

### Q26. Write a program to print a reverse array

**Answer:**

**Live Example:**
```java
import java.util.*;

public class ReverseArrayExample {
    
    // Method 1: Using two pointers
    static void reverseArrayTwoPointers(int[] arr) {
        System.out.println("Original array: " + Arrays.toString(arr));
        int left = 0, right = arr.length - 1;
        
        while (left < right) {
            // Swap
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            
            left++;
            right--;
        }
        System.out.println("Reversed array: " + Arrays.toString(arr));
    }
    
    // Method 2: Using temporary array
    static int[] reverseArrayNewArray(int[] arr) {
        System.out.println("\nOriginal array: " + Arrays.toString(arr));
        int[] reversed = new int[arr.length];
        
        for (int i = 0; i < arr.length; i++) {
            reversed[i] = arr[arr.length - 1 - i];
        }
        System.out.println("Reversed array: " + Arrays.toString(reversed));
        return reversed;
    }
    
    // Method 3: Using Collections.reverse()
    static void reverseArrayCollections(Integer[] arr) {
        System.out.println("\nOriginal array: " + Arrays.toString(arr));
        Collections.reverse(Arrays.asList(arr));
        System.out.println("Reversed array: " + Arrays.toString(arr));
    }
    
    // Method 4: Using recursion
    static void reverseArrayRecursion(int[] arr, int left, int right) {
        if (left < right) {
            // Swap
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            
            reverseArrayRecursion(arr, left + 1, right - 1);
        }
    }
    
    // Method 5: Using streams
    static void reverseArrayStreams(int[] arr) {
        System.out.println("\nOriginal array: " + Arrays.toString(arr));
        int[] reversed = java.util.stream.IntStream.rangeClosed(1, arr.length)
                                                      .map(i -> arr[arr.length - i])
                                                      .toArray();
        System.out.println("Reversed array: " + Arrays.toString(reversed));
    }
    
    public static void main(String[] args) {
        int[] array1 = {10, 20, 30, 40, 50};
        int[] array2 = {1, 2, 3, 4, 5, 6};
        Integer[] array3 = {100, 200, 300};
        
        System.out.println("=== Method 1: Two Pointers ===");
        reverseArrayTwoPointers(array1);
        
        System.out.println("\n=== Method 2: Temporary Array ===");
        reverseArrayNewArray(array2);
        
        System.out.println("\n=== Method 3: Collections.reverse() ===");
        reverseArrayCollections(array3);
        
        System.out.println("\n=== Method 4: Recursion ===");
        int[] array4 = {5, 10, 15, 20};
        System.out.println("Original array: " + Arrays.toString(array4));
        reverseArrayRecursion(array4, 0, array4.length - 1);
        System.out.println("Reversed array: " + Arrays.toString(array4));
        
        System.out.println("\n=== Method 5: Streams ===");
        reverseArrayStreams(new int[]{7, 14, 21, 28});
    }
}

// Output:
// === Method 1: Two Pointers ===
// Original array: [10, 20, 30, 40, 50]
// Reversed array: [50, 40, 30, 20, 10]
//
// === Method 2: Temporary Array ===
// Original array: [1, 2, 3, 4, 5, 6]
// Reversed array: [6, 5, 4, 3, 2, 1]
//
// === Method 3: Collections.reverse() ===
// Original array: [100, 200, 300]
// Reversed array: [300, 200, 100]
//
// === Method 4: Recursion ===
// Original array: [5, 10, 15, 20]
// Reversed array: [20, 15, 10, 5]
//
// === Method 5: Streams ===
// Original array: [7, 14, 21, 28]
// Reversed array: [28, 21, 14, 7]
```

---

### Q27. What are Anagram Strings?

**Answer:**
Anagram strings are two strings that contain the same characters with the same frequencies but in a different order.

**Example:** "listen" and "silent" are anagrams

**Live Example:**
```java
import java.util.*;

public class AnagramExample {
    
    // Method 1: Using character frequency array
    static boolean areAnagramsFrequency(String str1, String str2) {
        // Remove spaces and convert to lowercase
        str1 = str1.replaceAll(" ", "").toLowerCase();
        str2 = str2.replaceAll(" ", "").toLowerCase();
        
        if (str1.length() != str2.length()) {
            return false;
        }
        
        int[] freq = new int[26];
        
        // Count characters in str1
        for (char c : str1.toCharArray()) {
            freq[c - 'a']++;
        }
        
        // Subtract characters in str2
        for (char c : str2.toCharArray()) {
            freq[c - 'a']--;
        }
        
        // Check if all frequencies are zero
        for (int f : freq) {
            if (f != 0) {
                return false;
            }
        }
        return true;
    }
    
    // Method 2: Using sorting
    static boolean areAnagramsSorting(String str1, String str2) {
        str1 = str1.replaceAll(" ", "").toLowerCase();
        str2 = str2.replaceAll(" ", "").toLowerCase();
        
        char[] arr1 = str1.toCharArray();
        char[] arr2 = str2.toCharArray();
        
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        
        return Arrays.equals(arr1, arr2);
    }
    
    // Method 3: Using HashMap
    static boolean areAnagramsHashMap(String str1, String str2) {
        str1 = str1.replaceAll(" ", "").toLowerCase();
        str2 = str2.replaceAll(" ", "").toLowerCase();
        
        if (str1.length() != str2.length()) {
            return false;
        }
        
        Map<Character, Integer> charCount = new HashMap<>();
        
        for (char c : str1.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }
        
        for (char c : str2.toCharArray()) {
            if (!charCount.containsKey(c)) {
                return false;
            }
            charCount.put(c, charCount.get(c) - 1);
            if (charCount.get(c) < 0) {
                return false;
            }
        }
        return true;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Method 1: Frequency Array ===");
        System.out.println("listen & silent: " + areAnagramsFrequency("listen", "silent"));
        System.out.println("hello & world: " + areAnagramsFrequency("hello", "world"));
        System.out.println("abc & bca: " + areAnagramsFrequency("abc", "bca"));
        
        System.out.println("\n=== Method 2: Sorting ===");
        System.out.println("dormitory & dirty room: " + 
                          areAnagramsSorting("dormitory", "dirty room"));
        System.out.println("java & avaj: " + areAnagramsSorting("java", "avaj"));
        
        System.out.println("\n=== Method 3: HashMap ===");
        System.out.println("anagram & nagaram: " + 
                          areAnagramsHashMap("anagram", "nagaram"));
        System.out.println("evil & vile: " + areAnagramsHashMap("evil", "vile"));
    }
}

// Output:
// === Method 1: Frequency Array ===
// listen & silent: true
// hello & world: false
// abc & bca: true
//
// === Method 2: Sorting ===
// dormitory & dirty room: true
// java & avaj: true
//
// === Method 3: HashMap ===
// anagram & nagaram: true
// evil & vile: true
```

---

### Q28. Write a program to find the first and last occurrence of an element in an array

**Answer:**

**Live Example:**
```java
import java.util.*;

public class FirstAndLastOccurrenceExample {
    
    // Method 1: Linear search
    static void findOccurrencesLinear(int[] arr, int target) {
        System.out.println("Array: " + Arrays.toString(arr));
        System.out.println("Target: " + target);
        
        int first = -1, last = -1;
        
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                if (first == -1) {
                    first = i;
                }
                last = i;
            }
        }
        
        if (first == -1) {
            System.out.println("Element not found");
        } else {
            System.out.println("First occurrence: " + first);
            System.out.println("Last occurrence: " + last);
        }
    }
    
    // Method 2: Binary search (for sorted array)
    static void findOccurrencesBinary(int[] arr, int target) {
        System.out.println("\nArray (sorted): " + Arrays.toString(arr));
        System.out.println("Target: " + target);
        
        int first = findFirstBinary(arr, target);
        int last = findLastBinary(arr, target);
        
        if (first == -1) {
            System.out.println("Element not found");
        } else {
            System.out.println("First occurrence: " + first);
            System.out.println("Last occurrence: " + last);
        }
    }
    
    static int findFirstBinary(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        int result = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) {
                result = mid;
                right = mid - 1;  // Look in left half
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }
    
    static int findLastBinary(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        int result = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) {
                result = mid;
                left = mid + 1;  // Look in right half
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }
    
    // Method 3: Using streams
    static void findOccurrencesStream(int[] arr, int target) {
        System.out.println("\nArray: " + Arrays.toString(arr));
        System.out.println("Target: " + target);
        
        OptionalInt first = IntStream.range(0, arr.length)
                                    .filter(i -> arr[i] == target)
                                    .findFirst();
        
        int last = IntStream.range(0, arr.length)
                           .filter(i -> arr[i] == target)
                           .reduce(-1, (a, b) -> b);
        
        if (first.isEmpty()) {
            System.out.println("Element not found");
        } else {
            System.out.println("First occurrence: " + first.getAsInt());
            System.out.println("Last occurrence: " + last);
        }
    }
    
    public static void main(String[] args) {
        int[] array1 = {1, 2, 3, 5, 5, 5, 5, 8, 10};
        int[] array2 = {1, 2, 3, 5, 5, 5, 5, 8, 10};
        int[] array3 = {10, 20, 30, 40, 30, 20, 10};
        
        System.out.println("=== Method 1: Linear Search ===");
        findOccurrencesLinear(array1, 5);
        findOccurrencesLinear(array1, 15);
        
        System.out.println("\n=== Method 2: Binary Search (Sorted) ===");
        findOccurrencesBinary(array2, 5);
        
        System.out.println("\n=== Method 3: Using Streams ===");
        findOccurrencesStream(array3, 30);
        findOccurrencesStream(array3, 50);
    }
}

// Output:
// === Method 1: Linear Search ===
// Array: [1, 2, 3, 5, 5, 5, 5, 8, 10]
// Target: 5
// First occurrence: 3
// Last occurrence: 6
// Array: [1, 2, 3, 5, 5, 5, 5, 8, 10]
// Target: 15
// Element not found
//
// === Method 2: Binary Search (Sorted) ===
// Array (sorted): [1, 2, 3, 5, 5, 5, 5, 8, 10]
// Target: 5
// First occurrence: 3
// Last occurrence: 6
//
// === Method 3: Using Streams ===
// Array: [10, 20, 30, 40, 30, 20, 10]
// Target: 30
// First occurrence: 2
// Last occurrence: 4
// Array: [10, 20, 30, 40, 30, 20, 10]
// Target: 50
// Element not found
```

---

### Q29. What are the reasons behind making strings immutable in Java?

**Answer:**
Strings are immutable in Java for several important reasons:

1. **Security** - Prevents tampering with sensitive data
2. **Thread Safety** - No synchronization needed
3. **Caching & Reusability** - String Pool optimization
4. **Performance** - Faster hash code calculation
5. **Design** - HashMaps and Sets use hash codes
6. **Classloading** - Security in classloading mechanism

**Live Example:**
```java
public class StringImmutabilityExample {
    public static void main(String[] args) {
        System.out.println("=== Immutability Benefits ===");
        
        // 1. Security Example
        String password = "secretPassword123";
        String userPassword = password;
        // password cannot be changed, so userPassword is always secure
        System.out.println("Original password: " + password);
        System.out.println("User password: " + userPassword);
        
        // Attempting to change
        password = "newPassword";
        System.out.println("After reassignment:");
        System.out.println("Original: " + password);
        System.out.println("User password (unchanged): " + userPassword);
        
        // 2. Thread Safety Example
        System.out.println("\n=== Thread Safety ===");
        String str = "Java";
        System.out.println("String: " + str);
        System.out.println("Hash code: " + str.hashCode());
        
        // Multiple threads can share the same string safely
        Thread t1 = new Thread(() -> System.out.println("Thread 1: " + str));
        Thread t2 = new Thread(() -> System.out.println("Thread 2: " + str));
        t1.start();
        t2.start();
        
        // 3. String Pool Example
        System.out.println("\n=== String Pool Optimization ===");
        String s1 = "Java";
        String s2 = "Java";
        String s3 = new String("Java");
        
        System.out.println("s1 == s2: " + (s1 == s2));  // true (same reference)
        System.out.println("s1 == s3: " + (s1 == s3));  // false (different objects)
        System.out.println("s1.equals(s3): " + s1.equals(s3));  // true (same content)
        
        // 4. HashMap/HashSet Example
        System.out.println("\n=== HashMap Usage ===");
        java.util.Map<String, Integer> map = new java.util.HashMap<>();
        String key1 = "key";
        map.put(key1, 100);
        
        // Immutability ensures key doesn't change
        System.out.println("Value for key: " + map.get("key"));
        
        // 5. What happens with concatenation
        System.out.println("\n=== Concatenation Creates New Objects ===");
        String original = "Hello";
        String result = original.concat(" World");
        System.out.println("Original: " + original);
        System.out.println("Result: " + result);
        System.out.println("Same object? " + (original == result));
    }
}

// Output:
// === Immutability Benefits ===
// Original password: secretPassword123
// User password: secretPassword123
// After reassignment:
// Original: newPassword
// User password (unchanged): secretPassword123
//
// === Thread Safety ===
// String: Java
// Hash code: 2301506
// Thread 1: Java
// Thread 2: Java
//
// === String Pool Optimization ===
// s1 == s2: true
// s1 == s3: false
// s1.equals(s3): true
//
// === HashMap Usage ===
// Value for key: 100
//
// === Concatenation Creates New Objects ===
// Original: Hello
// Result: Hello World
// Same object? false
```

---

### Q30. What is the difference between deep copy and shallow copy?

**Answer:**

| Feature | Shallow Copy | Deep Copy |
|---------|---|---|
| References | Copies object references | Copies actual values |
| Nested Objects | Shared between original and copy | Separate for copy |
| Memory | Less memory | More memory |
| Changes | Affect both original and copy | Affect only one |
| Use Case | When objects are immutable | When objects are mutable |

**Live Example:**
```java
import java.util.Arrays;

class Address {
    String city;
    String country;
    
    Address(String city, String country) {
        this.city = city;
        this.country = country;
    }
    
    @Override
    public String toString() {
        return city + ", " + country;
    }
}

class Person implements Cloneable {
    String name;
    Address address;
    
    Person(String name, String city, String country) {
        this.name = name;
        this.address = new Address(city, country);
    }
    
    // Shallow Copy
    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();  // Creates shallow copy
    }
    
    // Deep Copy
    public Person deepCopy() {
        return new Person(this.name, this.address.city, this.address.country);
    }
    
    @Override
    public String toString() {
        return "Person{" + "name='" + name + '\'' + ", address=" + address + '}';
    }
}

public class DeepVsShallowCopyExample {
    public static void main(String[] args) throws CloneNotSupportedException {
        Person original = new Person("Alice", "New York", "USA");
        
        System.out.println("=== Shallow Copy ===");
        Person shallowCopy = (Person) original.clone();
        
        System.out.println("Original: " + original);
        System.out.println("Shallow Copy: " + shallowCopy);
        System.out.println("Same address object? " + (original.address == shallowCopy.address));
        
        // Modifying nested object
        shallowCopy.address.city = "Los Angeles";
        System.out.println("\nAfter modifying shallow copy's address:");
        System.out.println("Original: " + original);
        System.out.println("Shallow Copy: " + shallowCopy);
        System.out.println("Both changed! (shared reference)");
        
        // Reset
        original = new Person("Bob", "London", "UK");
        
        System.out.println("\n=== Deep Copy ===");
        Person deepCopy = original.deepCopy();
        
        System.out.println("Original: " + original);
        System.out.println("Deep Copy: " + deepCopy);
        System.out.println("Same address object? " + (original.address == deepCopy.address));
        
        // Modifying nested object
        deepCopy.address.city = "Manchester";
        System.out.println("\nAfter modifying deep copy's address:");
        System.out.println("Original: " + original);
        System.out.println("Deep Copy: " + deepCopy);
        System.out.println("Only deep copy changed!");
        
        System.out.println("\n=== Array Copy Example ===");
        int[] original_arr = {1, 2, 3, 4, 5};
        int[] shallow_arr = original_arr;  // Shallow copy (reference)
        int[] deep_arr = original_arr.clone();  // Deep copy
        
        System.out.println("Original array: " + Arrays.toString(original_arr));
        
        shallow_arr[0] = 100;
        deep_arr[0] = 100;
        
        System.out.println("After modification:");
        System.out.println("Original: " + Arrays.toString(original_arr));
        System.out.println("Shallow copy: " + Arrays.toString(shallow_arr));
        System.out.println("Deep copy: " + Arrays.toString(deep_arr));
    }
}

// Output:
// === Shallow Copy ===
// Original: Person{name='Alice', address=New York, USA}
// Shallow Copy: Person{name='Alice', address=New York, USA}
// Same address object? true
//
// After modifying shallow copy's address:
// Original: Person{name='Alice', address=Los Angeles, USA}
// Shallow Copy: Person{name='Alice', address=Los Angeles, USA}
// Both changed! (shared reference)
//
// === Deep Copy ===
// Original: Person{name='Bob', address=London, UK}
// Deep Copy: Person{name='Bob', address=London, UK}
// Same address object? false
//
// After modifying deep copy's address:
// Original: Person{name='Bob', address=London, UK}
// Deep Copy: Person{name='Bob', address=Manchester, UK}
// Only deep copy changed!
//
// === Array Copy Example ===
// Original array: [1, 2, 3, 4, 5]
// After modification:
// Original: [100, 2, 3, 4, 5]
// Shallow copy: [100, 2, 3, 4, 5]
// Deep copy: [100, 2, 3, 4, 5]
```

---

## Summary

This comprehensive guide covers all 30 Java interview questions with detailed explanations and live code examples. These questions span from basic concepts to advanced topics and are essential for cracking Java interviews at all levels.

**Key Takeaways:**
- Understanding OOP concepts is fundamental
- Collections and their usage patterns are critical
- Exception handling and thread safety are important
- Code examples should demonstrate practical understanding
- Always consider edge cases and performance implications

Good luck with your Java interviews! 🚀

