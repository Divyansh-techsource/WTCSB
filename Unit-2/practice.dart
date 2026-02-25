/*void main() {

	var student1 = Student(); 		// One Object, student1 is reference variable
	student1.id = 23;
	student1.name = "Peter";
	print("${student1.id} and ${student1.name}");

	student1.study();
	student1.sleep();

	var student2 = Student();		// One Object, student2 is reference variable
	student2.id = 45;
	student2.name = "Sam";
	print("${student2.id} and ${student2.name}");
	student2.study();
	student2.sleep();
}

// Define states (properties) and behavior of a Student
class Student {
	int id = -1; 			// Instance or Field Variable, default value is -1
	String? name;  		// Instance or Field Variable, default value is null

	void study() {
		print("${this.name} is now studying");
	}

	void sleep() {
		print("${this.name} is now sleeping");
	}
}*/


// Objectives
// 1. Default Constructor
// 2. Parameterized Constructor
// 3. Named Constructor
// 4. Constant Constructor

/*void main() {

	var student1 = Student(23, "Peter"); 		// One Object, student1 is reference variable
	print("${student1.id} and ${student1.name}");

	student1.study();
	student1.sleep();

	var student2 = Student(45, "Sam");		// One Object, student2 is reference variable
	print("${student2.id} and ${student2.name}");

	student2.study();
	student2.sleep();


	var student3 = Student.myCustomConstructor();   // One object, student3 is a reference variable
	student3.id = 54;
	student3.name = "Rahul";
	print("${student3.id} and ${student3.name}");


	var student4 = Student.myAnotherNamedConstructor(87, "Paul");
	print("${student4.id} and ${student4.name}");
}

// Define states (properties) and behavior of a Student
class Student {
	int id = -1;
	String? name;

	Student(this.id, this.name);    // Parameterised Constructor

	Student.myCustomConstructor() {                 // Named Constructor
		print("This is my custom constructor");
	}

	Student.myAnotherNamedConstructor(this.id, this.name);  // Named Constructor

	void study() {
		print("${this.name} is now studying");
	}

	void sleep() {
		print("${this.name} is now sleeping");
	}
}*/

// Objectives
// 1. Default Getter and Setter
// 2. Custom Getter and Setter
// 3. Private Instance Variable

/*void main() {

  var student = Student();
  student.name = "Peter";     // Calling default Setter to set value
  print(student.name);        // Calling default Getter to get value

  student.percentage = 438.0;   // Calling Custom Setter to set value
  print(student.percentage);    // Calling Custom Getter to get value
}

class Student {

  String? name;        // Instance Variable with default Getter and Setter

  double? _percent;    // Private Instance Variable for its own library

  // Instance variable with Custom Setter
  void set percentage(double marksSecured) => _percent = (marksSecured / 500) * 100;
  // Instance variable with Custom Getter
  double? get percentage => _percent;
}*/

// Objectives
// 1. Exploring Inheritance

/*void main() {

	var dog = Dog();
	dog.breed = "Labrador";
	dog.color = "Black";
	dog.bark();
	dog.eat();

	var cat = Cat();
	cat.color = "White";
	cat.age = 6;
	cat.eat();
	cat.meow();

	var animal = Animal();
	animal.color = "brown";
	animal.eat();
}

class Animal {

	String? color;

	void eat() {
		print("Eat !");
	}
}

class Dog extends Animal {      // Dog is Child class or sub class, Animal is super or parent class

	String? breed;

	void bark() {
		print("Bark !");
	}
}

class Cat extends Animal {      // Cat is Child class or sub class, Animal is super or parent class

	int? age;

	void meow() {
		print("Meow !");
	}
}*/

// Objectives
// 1. Interface

void main() {

	var tv = Television();
	tv.volumeUp();
	tv.volumeDown();
}

class Remote {

	void volumeUp() {
		print("______Volume Up from Remote_______");
	}

	void volumeDown() {
		print("______Volume Down from Remote_______");
	}
}

class AnotherClass {

	void justAnotherMethod(){
		// Code
	}

}

// Here Remote and AnotherClass acts as Interface
class Television implements Remote, AnotherClass {

	void volumeUp() {
//		super.volumeUp();       // Not allowed to call super while implementing a class as Interface
		print("______Volume Up in Television_______");
	}

	void volumeDown() {
		print("______Volume Down in Television_______");
	}

	void justAnotherMethod() {
		print("Some code");
	}
}