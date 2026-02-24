// import 'dart:io';

// void main() {
//   stdout.write("Enter your name: ");
//   String name = stdin.readLineSync() ?? "Guest";

//   stdout.write("Enter your age: ");
//   int age = int.parse(stdin.readLineSync() ?? "0");

//   if (age >= 18) {
//     print("Hi $name, you are an adult.");
//   } else {
//     print("Hi $name, you are a minor.");
//   }
// }



// void main() {

// 	// This is my first line of code
// 	print("Hello World"); 			// this is another comment ....

// 	print("This is my first application");

// 	// Performing arithematic operation
// 	print(12 / 4);

// 	// Printing out boolean value
// 	print(false);
// }


// void main(List<String> arguments) {

// 	// Numbers: int
// 	int score = 23;
// 	var count = 23;     // It is inferred as integer automatically by compiler
// 	int hexValue = 0xEADEBAEE;

// 	// Numbers: double
// 	double percentage = 93.4;
// 	var percent = 82.533;
// 	double exponents = 1.42e5; 

// 	// Strings
// 	String name = "Henry";
// 	var company = "Google";

// 	// Boolean
// 	bool isValid = true;
// 	var isAlive = false;

// 	print(score);
// 	print(exponents);

// 	// NOTE: All data types in Dart are Objects.
// 	// Therefore, their initial value is by default 'null'
// }


// void main() {

// 	// Literals
// 	var isCool = true;
// 	int x = 2;
// 	"John";
// 	4.5;

// 	//Various ways to define String Literals in Dart
// 	String s1 = 'Single';
// 	String s2 = "Double";
// 	String s3 = 'It\'s easy';
//   print(s3);
// 	String s4 = "It's easy";
//   print(s4);
// 	String s5 = 'This is going to be a very long String. '
// 			'This is just a sample String demo in Dart Programming Language';
//       print(s5);

// 	// String Interpolation : Use ["My name is $name"] instead of ["My name is " + name]
// 	String name = "Kevin";

// 	print("My name is $name");
// 	print("The number of characters in String Kevin is ${name.length}");


// 	int l = 20;
// 	int b = 10;

// 	print("The sum of $l and $b is ${l + b}");
// 	print("The area of rectangle with length $l and breadth $b is ${l * b}");
// }

// import 'dart:io';
void main(){
  // String a=stdin.readLineSync() ?? "Guest";
  // print(a);
  // String? b;
  // b??="Guest";
  // print(b);
  // String a=stdin.readLineSync()!;
  // print(a);
  // print(""); 
  print("CASE 5");
	// CASE 5: Custom Exception
	try {
		depositMoney(-200);
	} catch (e) {
		print(e);
	} finally {
    print("This block will always be ececuted");
		// Code
	}
}
class DepositException implements Exception {
	String errorMessage() {
		return "You cannot enter amount less than 0";
	}
  String toString(){
    return errorMessage();
  }
}

void depositMoney(int amount) {
	if (amount < 0) {
		throw new DepositException();
	}
}