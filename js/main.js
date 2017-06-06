/**
 * Created by komar on 6/5/2017.
 */
// Problem 1
var Multiplier = function (number) {
	this.currentValue = 1;
	this.multiply = function () {
		this.currentValue *= number;
	};
	this.getCurrentValue = function () {
		return this.currentValue;
	};
};
var multi = new Multiplier(5);
multi.multiply();
console.log(multi.getCurrentValue());
multi.multiply();
console.log(multi.getCurrentValue());
multi.multiply();
console.log(multi.getCurrentValue());
multi.multiply();
console.log(multi.getCurrentValue());
multi.multiply();
console.log(multi.getCurrentValue());

// Problem 2

function photo(fileName, location){
	this.fileName = fileName;
	this.location = location;
}
var album = {
	photos: [],
	size: 0,
	addNewPhoto: function (fileName, location) {
		var p = new photo(fileName,location);
		this.photos.push(p);
		this.size++;
	},
	listPhotos: function () {
		for(i = 0; i<this.photos.length; i++){
			console.log(this.photos[i].fileName);
		}
	},
	getAllPhotosInHTML: function () {
		var str = "";
		for(i = 0; i<album.size; i++){
			str += "<img src='"+album.getPhoto(i).fileName+"'>";
		}
		return str;
	},
	getPhoto: function (photo) {
		return this.photos[photo];
	}
};

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
		return "Books: "+this.books.length;
	}
};
console.log(library.count());
library.addBook("Way of Kings", "Brandon Sanderson", "Fantasy");
library.getBook("Way of Kings");
console.log(library.count());
library.removeBook("Way of Kings");
console.log(library.count());

// Problem 4
var Person = function(name, age, height, sex) {
	this.name = name;
	this.age = age;
	this.height = height;
	this.sex = sex;
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
	}
};

var Teacher = function (name,age,height,sex,subject, grade) {
	Person.call(this,name,age,height,sex);
	this.grade = grade;
	this.subject = subject;
};

var Student = function (name,age,height,sex,grade) {
	Person.call(this,name,age,height,sex);
	this.grade = grade;
};

var School = {
	name: "Hillcrest High School",
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
	},
	addToSchool: function () {
		for(i = 0; i<arguments.length; i++){
			var person = arguments[i];
			if(person instanceof Teacher){
				this.Teachers.push(person);
			}
			if(person instanceof Student){
				this.Students.push(person);
			}
		}
	}
};

var smith = new Teacher("Mr.Smith",45,"6'4\"", "Male", "Math", 10);
var john = new Student("John", 16, "5'8\"", "Male", 10);

School.hireTeachers(smith);
School.enrollStudents(john)
School.addToSchool(smith, john);
console.log(School.Teachers, School.Students);

// Extra
function $(element) {
	return document.getElementById(element);
}

album.addNewPhoto("img/img (1).jpg", "Utah");
album.addNewPhoto("img/img (2).jpg", "Utah");
album.addNewPhoto("img/img (3).jpg", "Utah");
album.addNewPhoto("img/img (4).jpg", "Utah");
album.addNewPhoto("img/img (5).jpg", "Utah");
album.addNewPhoto("img/img (6).jpg", "Utah");
album.addNewPhoto("img/img (7).jpg", "Utah");
album.addNewPhoto("img/img (8).jpg", "Utah");
album.addNewPhoto("img/img (9).jpg", "Utah");
album.listPhotos();
for(i = 0; i<album.size; i++){
	$('gallery').innerHTML = album.getAllPhotosInHTML();
}