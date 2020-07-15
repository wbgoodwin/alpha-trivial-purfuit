/* DataStorageController.js

   This module is used as an interfact to the database.
   All database reads or updates should be done through this module.

   Trivial Purfuit
   Team Alpha
*/

// Default DB parameters
require('dotenv-safe').config();
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;

// Establish a connection to the database
const mySQL = require('mysql')
const con = mySQL.createConnection({
	'host': host,
	'user': user,
	'password': password,
	'database': database
})
con.connect(function(err){
	if (err) throw err
	con.query('CREATE DATABASE IF NOT EXISTS ' + database, function(err, result){
		if (err) throw err
	})
})

// Import database from file
const Importer = require('mysql-import');
const importer = new Importer({host, user, password, database});
function sqldumpImporter(){
	importer.import('./' + database + '.sql').then(()=>{
		console.log('SQL file imported.');
	}).catch(err=>{
		console.error(err);
	});
}

// Export database to file
var db_file_writer = require('mysqldump');
function sqldumpexporter(){
	db_file_writer({
		connection: {
			host: host,
			user: user,
			password: password,
			database: database,
		},
		dumpToFile: './' + database + '.sql',
	});
}

function getCategories(){
	con.query("SELECT * FROM categories", function (err, result, fields){
		if(err)
		{
			con.query("DROP TABLE IF EXISTS questions", function (err, result){
				if (err) throw err;
			});
			con.query("DROP TABLE IF EXISTS categories", function (err, result){
				if (err) throw err;
			});

			// Empty or bad database
			sqldumpImporter();

			con.query("SELECT * FROM categories", function (err, result, fields){
				if (err) throw err;
				categoryList = result;
			});
		}
		else
		{
			categoryList = result;
		}
	});
}

function getQuestions(){
	con.query("SELECT * FROM questions", function (err, result, fields){
		if(err)
		{
			con.query("DROP TABLE IF EXISTS questions", function (err, result){
				if (err) throw err;
			});
			con.query("DROP TABLE IF EXISTS categories", function (err, result){
				if (err) throw err;
			});

			// Empty or bad database
			sqldumpImporter();

			con.query("SELECT * FROM questions", function (err, result, fields){
				if (err) throw err;
				questionList = result;
			});
		}
		else
		{
			questionList = result;
		}
	});
}

var questionList;
getQuestions();
var categoryList;
getCategories();

// Exports

module.exports.readAQuestion = function(){
	return questionList[Math.floor(Math.random() * questionList.length)];
}

module.exports.updateCategoryName = function(categoryID, newCategoryName){
	con.query("UPDATE categories SET name = '" + newCategoryName + "' WHERE id = " + categoryID + ";", function (err, result){
		if (err) throw err;
		sqldumpexporter();
		getCategories();
	});
}

module.exports.updateCategoryColor = function(categoryID, newCategoryColor){
	con.query("UPDATE categories SET color = '" + newCategoryColor + "' WHERE id = " + categoryID + ";", function (err, result){
		if (err) throw err;
		sqldumpexporter();
		getQuestions();
	});
}

module.exports.addNewQuestion = function(categoryID, question, correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3){
	con.beginTransaction(function(err) {
		con.query("INSERT INTO questions(`question`, `correct_answer`,`incorrect_answer1`, `incorrect_answer2`, `incorrect_answer3`, `category_id`)" +
			"VALUES('" + question + "', '" + correctAnswer + "', '" + incorrectAnswer1 + "', '" + incorrectAnswer2 + "', '" + incorrectAnswer3 + "', " + categoryID + ");",
			function(err, result){
			if (err) throw err;
			sqldumpexporter();
		});
		con.commit();
	})
}

module.exports.deleteQuestion = function(questionID){
	con.query("DELETE FROM questions WHERE id = " + questionID + ";",function(err,result){
		if(err) throw err;
		sqldumpexporter();
	});
	con.commit();
}

module.exports.getQuestion = function(questionID) {
	return questionList.find(q => q.id.toString() === questionID)
}

module.exports.editQuestion = function (
	questionID,
	categoryID,
	question,
	correctAnswer,
	incorrectAnswer1,
	incorrectAnswer2,
	incorrectAnswer3
) {
	con.query(
		`
			UPDATE questions
			SET category_id = ${categoryID}, question = '${question}',
				correct_answer = '${correctAnswer}',
				incorrect_answer1 = '${incorrectAnswer1}',
				incorrect_answer2 = '${incorrectAnswer2}',
				incorrect_answer3 = '${incorrectAnswer3}'
			WHERE id = ${questionID};
		`, function(err, result) {
			if (err) throw err
			sqldumpexporter()
		})
		con.commit()
}

module.exports.exportCategoryList = function(){
	return categoryList;
}

module.exports.exportQuestionList = function(){
	return questionList;
}

module.exports.importQuestionList = function(newQuestionList){
	questionList = newQuestionList;
	con.query("DROP TABLE questions;",function(err,result){
		if(err) throw err;
	});
	for(var i = 0; i < newQuestionList.length; i++) {
		addNewQuestion(newQuestionList.category_id, newQuestionList.question, newQuestionList.correct_answer,
			newQuestionList.incorrect_answer1, newQuestionList.incorrect_answer2, newQuestionList.incorrect_answer3);
    }
}
