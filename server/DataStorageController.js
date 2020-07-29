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
const port = process.env.DB_PORT;

// Establish a connection to the database
const mysql = require('mysql')
const pool = mysql.createPool({
	connectionLimit: 10,
	host: host,
	user: user,
	password: password,
	database: database,
	port: port
})

// Import database from file
const Importer = require('mysql-import');
const importer = new Importer({host, user, password, database});
function sqldumpImporter(){
	importer.import(`./${database}.sql`).then(()=>{
		console.log('SQL file imported.');
	}).catch(err => {
		console.error(err);
	});
}

// Export database to file
var db_file_writer = require('mysqldump');
function sqldumpexporter() {
	db_file_writer({
		connection: {
			host: host,
			user: user,
			password: password,
			database: database,
		},
		dumpToFile: `./${database}.sql`
	});
}

function getCategories () {
	pool.query('SELECT * FROM categories', async function(err, result, fields) {
		if (err) {
			handleEmptyDBError()
			return getCategories()
		}
		else {
			categoryList = await result
		}
	})
}

function getQuestions () {
	pool.query("SELECT * FROM questions", async function (err, result, fields) {
		if (err) {
			handleEmptyDBError()
			return getQuestions()
		}
		else {
			questionList = await result
		}
	})
}

function handleEmptyDBError () {
	pool.query("DROP TABLE IF EXISTS questions", function (err, result) {
		if (err) {
			console.error(err)
		}
	})
	pool.query("DROP TABLE IF EXISTS categories", function (err, result) {
		if (err) {
			console.error(err)
		}
	})

	// Empty or bad database
	sqldumpImporter()
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

let questionList
getQuestions()
let categoryList
getCategories()

// Exports --------------------------------------------------------------------
module.exports.readAQuestion = function () {
	return questionList[Math.floor(Math.random() * questionList.length)]
}

module.exports.updateCategories = async function(categories) {
	for (c in categories) {
		const category = categories[c]
		pool.query(
			`
				UPDATE categories
				SET name = '${category.name}', color = '${category.color}'
				WHERE id = ${category.id};
			`, function(err, result) {
				if (err) console.error(err)
			}
		)
	}

	// DB doesn't have enough time to commit w/o this sleep here
	await sleep(300)
	categoryList = getCategories()
}

module.exports.addNewQuestion = function (
	categoryID,
	question,
	correctAnswer,
	incorrectAnswer1,
	incorrectAnswer2,
	incorrectAnswer3
){
	pool.query(
		`
			INSERT INTO questions (question, correct_answer, incorrect_answer1,
														 incorrect_answer2, incorrect_answer3, category_id)
			VALUES ('${question}', '${correctAnswer}', '${incorrectAnswer1}',
						  '${incorrectAnswer2}', '${incorrectAnswer3}', ${categoryID});
		`, function(err, result) {
			if (err) {
				console.error(err)
			}
			questionList = getQuestions()
		}
	)
}

module.exports.deleteQuestion = function(questionID) {
	pool.query(
		`
			DELETE FROM questions WHERE id = ${questionID};
		`, function(err,result) {
			if (err) {
				console.error(err)
			}
			questionList = getQuestions()
		}
	)
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
	pool.query(
		`
			UPDATE questions
			SET category_id = ${categoryID}, question = '${question}',
				correct_answer = '${correctAnswer}',
				incorrect_answer1 = '${incorrectAnswer1}',
				incorrect_answer2 = '${incorrectAnswer2}',
				incorrect_answer3 = '${incorrectAnswer3}'
			WHERE id = ${questionID};
		`, function(err, result) {
			if (err) {
				console.error(err)
			}
			questionList = getQuestions()
		})
}

module.exports.exportCategoryList = function() {
	return categoryList;
}

module.exports.exportQuestionList = function() {
	return questionList;
}

module.exports.uploadQuestionFile = async function(questions) {
	for (q in questions) {
		const question = questions[q]

		pool.query(
			`
			INSERT INTO questions (question, correct_answer, incorrect_answer1,
														 incorrect_answer2, incorrect_answer3, category_id)
			VALUES ('${question.question}', '${question.correct_answer}',
							'${question.incorrect_answer1}', '${question.incorrect_answer2}',
							'${question.incorrect_answer3}', ${question.category_id}
						)
			`, function(err, result) {
				if (err) {
					console.error(err)
				}
			}
		)
	}

	await sleep(300)
	questionList = getQuestions()
}
