/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: categories
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `color` varchar(7) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: questions
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `questions` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `question` varchar(500) NOT NULL,
  `correct_answer` varchar(100) NOT NULL,
  `incorrect_answer1` varchar(100) NOT NULL,
  `incorrect_answer2` varchar(100) NOT NULL,
  `incorrect_answer3` varchar(100) NOT NULL,
  `category_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `category_id_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 7 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: categories
# ------------------------------------------------------------

INSERT INTO
  `categories` (`id`, `name`, `color`)
VALUES
  (1, 'TestCat', '#000000');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: questions
# ------------------------------------------------------------

INSERT INTO
  `questions` (
    `id`,
    `question`,
    `correct_answer`,
    `incorrect_answer1`,
    `incorrect_answer2`,
    `incorrect_answer3`,
    `category_id`
  )
VALUES
  (
    1,
    'Test Question',
    'Correct answer',
    'Incorrect answer 1',
    'Incorrect answer 2',
    'Incorrect answer 3',
    1
  );
INSERT INTO
  `questions` (
    `id`,
    `question`,
    `correct_answer`,
    `incorrect_answer1`,
    `incorrect_answer2`,
    `incorrect_answer3`,
    `category_id`
  )
VALUES
  (
    2,
    'Test Question 2',
    'Correct Answer',
    'Incorrect Answer 1',
    'Incorrect Answer 2',
    'Incorrect Answer 3',
    1
  );
INSERT INTO
  `questions` (
    `id`,
    `question`,
    `correct_answer`,
    `incorrect_answer1`,
    `incorrect_answer2`,
    `incorrect_answer3`,
    `category_id`
  )
VALUES
  (
    3,
    'Test Question 2',
    'Correct Answer',
    'Incorrect Answer 1',
    'Incorrect Answer 2',
    'Incorrect Answer 3',
    1
  );
INSERT INTO
  `questions` (
    `id`,
    `question`,
    `correct_answer`,
    `incorrect_answer1`,
    `incorrect_answer2`,
    `incorrect_answer3`,
    `category_id`
  )
VALUES
  (
    4,
    'Test Question 3',
    'Correct Answer',
    'Incorrect Answer 1',
    'Incorrect Answer 2',
    'Incorrect Answer 3',
    1
  );
INSERT INTO
  `questions` (
    `id`,
    `question`,
    `correct_answer`,
    `incorrect_answer1`,
    `incorrect_answer2`,
    `incorrect_answer3`,
    `category_id`
  )
VALUES
  (
    5,
    'Test Question 4',
    'Correct Answer',
    'Incorrect Answer 1',
    'Incorrect Answer 2',
    'Incorrect Answer 3',
    1
  );
INSERT INTO
  `questions` (
    `id`,
    `question`,
    `correct_answer`,
    `incorrect_answer1`,
    `incorrect_answer2`,
    `incorrect_answer3`,
    `category_id`
  )
VALUES
  (
    6,
    'Test Question 5',
    'Correct Answer',
    'Incorrect Answer 1',
    'Incorrect Answer 2',
    'Incorrect Answer 3',
    1
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
