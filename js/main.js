/**
 * Created by komar on 6/5/2017.
 */
// Problem 1
var Multiplier = function (number) {
	this.currentValue = 1;
	this.multiply = function () {
		this.currentValue *= this.currentValue;
		return this.currentValue;
	};
	this.getCurrentValue = function () {
		return this.currentValue;
	};
};
Multiplier.multiply(5);
console.log(Multiplier.getCurrentValue());

// Problem 2
var album = {
	photo: function(fileName, location){
		this.fileName = fileName;
		this.location = location;
	},
	photos: [],
	size: 0,
	addNewPhoto: function (fileName, location) {
		var p = new this.photo(fileName,location);
		this.photos.push(p);
	},
	listPhotos: function () {
		for(i = 0; i<this.size; i++){
			console.log(this.photos[i].fileName +", " + this.photos[i].location);
		}
	},
	getPhoto: function (photo) {
		return this.photos[photo];
	}
};
album.addNewPhoto("img/file", "location");
album.listPhotos();
album.getPhoto(0);

// Problem 3
var library = {
	book: function book(title, author, genre) {
		this.title = title;
		this.author = author;
		this.genre = genre;
	},
	books: [],
	getBook: function (title) {
		for(i = 0; i<this.books.length; i++){
			if(this.books[i].title === title){
				return this.books[i];
			}
		}
	},
	addBook: function (title, author, genre) {
		this.books.push(new this.book(title,author,genre));
	},
	removeBook: function (title) {
		for(i = 0; i<this.books.length; i++){
			if(this.books[i].title === title){
				this.books.splice(i,1);
			}
		}
	},
	count: function () {
		return this.books.length;
	}
};
library.addBook("Way of Kings", "Brandon Sanderson", "Fantasy");
library.getBook("Way of Kings");
library.removeBook("Way of Kings");
library.count();

// Problem 4
var Person = function() {
	this.name = "";
	this.age = 0;
	this.height = "";
	this.sex = "";
};
Person.prototype = {
	getName: function () {
		return this.name;
	},
	getAge: function () {
		return this.age;
	},
	getHeight: function () {
		return this.height;
	},
	getSex: function () {
		return this.sex;
	},
	setName: function (name) {
		this.name = name;
	},
	setAge: function (age) {
		this.age = age;
	},
	setHeight: function (height) {
		this.height = height;
	},
	setSex: function (sex) {
		this.sex = sex;
	},
	define: function (name,age,height,sex) {
		this.setName(name);
		this.setAge(age);
		this.setHeight(height);
		this.setSex(sex);
	}
};

var Teacher = function (name,age,height,sex,subject, grade) {
	this.define(name,age,height,sex);
	this.grade = grade;
	this.subject = subject;
};
Teacher.prototype = new Person();
Teacher.prototype.constructor = Teacher;

var Student = function (name,age,height,sex,grade) {
	this.define(name,age,height,sex);
	this.grade = grade;
};
Student.prototype = new Person();
Student.prototype.constructor = Teacher;

var School = {
	name: "Corner Canyon",
	Teachers: [],
	Students: [],
	hireTeachers: function () {
		for(i = 0; i<arguments.length; i++){
			this.Teachers.push(arguments[i]);
		}
	},
	enrollStudents: function () {
		for(i = 0; i<arguments.length; i++){
			this.Students.push(arguments[i]);
		}
	}
};

var smith = new Teacher("Mr.Smith",45,"6'4\"", "Male", "Math", 10);
var john = new Student("John", 16, "5'8\"", "Male", 10);

School.hireTeachers(smith);
School.enrollStudents(john);