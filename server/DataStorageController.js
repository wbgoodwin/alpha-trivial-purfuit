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
	return new Promise(function(resolve, reject) {
		pool.query("SELECT * FROM categories", function (err, result, fields) {
			if (err) {
				console.error(err)
				reject(err)
			}
			else {
				return resolve(result)
			}
		})
	})
}

function getQuestions () {
	return new Promise(function(resolve, reject) {
		pool.query("SELECT * FROM questions", function (err, result, fields) {
			if (err) {
				console.error(err)
				reject(err)
			}
			else {
				return resolve(result)
			}
		})
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

// Exports --------------------------------------------------------------------
module.exports.readAQuestion = async function (categoryID) {
	const allQuestions = await getQuestions()
	const filteredQuestions = allQuestions.filter(q => q.category_id.toString() === categoryID)

	return filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)]
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
}

module.exports.addNewQuestion = function (
	categoryID,
	question,
	correctAnswer,
	incorrectAnswer1,
	incorrectAnswer2,
	incorrectAnswer3
) {
	pool.query(
		`
			INSERT INTO questions (question, correct_answer, incorrect_answer1,
														 incorrect_answer2, incorrect_answer3, category_id)
			VALUES ('${question}', '${correctAnswer}', '${incorrectAnswer1}',
						  '${incorrectAnswer2}', '${incorrectAnswer3}', ${categoryID});
		`, function(err, result) {
			if (err) console.error(err)
		})
}

module.exports.deleteQuestion = function(questionID) {
	pool.query(
		`
			DELETE FROM questions WHERE id = ${questionID};
		`, function(err, result) {
			if (err) console.error(err)
		}
	)
}

module.exports.getQuestion = async function(questionID) {
	const questionList = await getQuestions()
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
			if (err) console.error(err)
		})
}

module.exports.exportCategoryList = async function() {
	return await getCategories()
}

module.exports.exportQuestionList = async function() {
	return await getQuestions()
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
				if (err) console.error(err)
			})
	}
}
