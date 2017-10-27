**STEP 1: Instructions**

Throughout this class we are going to be working on creating an application that takes in music data to create personalized playlists

Make sure to get as far as you can over the course of these assignments as the coding you do here will be extremely useful to you when you begin working on the homework

For now we will simply be creating your database in MySQL and then creating a connection to said database using Node. 

**Remember, you must create a database before attempting to connect to it. Doing otherwise will return an error.**

BONUS: Using MySQL Workbench, create a table in your database with four columns...
- Primary Key of "ID" which auto-increments
- A column called "title"
- A column called "artist"
- A column called "genre"

BONUS: Using MySQL Workbench, populate your table with a few rows of dummy data

BONUS: Start looking into how you can use the MySQL package to read data from a MySQL database

**STEP 2: Instructions**

* Using the connection and song data you put together earlier into the class, we are going to print playlists to the Git Bash console based upon the genre or artist.

* First create code that prints all songs within your database to the terminal.

* Now create code that prints songs of a specific genre/artist to the terminal.

  * If you don't have many songs in your database at this point in time, take this moment to add some more to it. Try to give yourself a variety of songs to work with.

  * HINT: Remember that you can call specific data using SQL commands we went over last class. If you are having trouble, make sure to look into SQL commands once more.

* BONUS: Use 'placeholder' values or string concatenation to build a MySQL query which allows you to change pieces of the query on the fly (e.g. using a variable to build the `WHERE` clause, instead of a static string).

  * There are a couple different ways to accomplish this task, but the most common one can be found within the [documentation for the MySQL package](https://github.com/mysqljs/mysql#performing-queries).
