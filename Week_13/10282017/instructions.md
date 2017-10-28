# **Instructions**

## Part 1

* It's time to test your skills in creating databases and tables as you create a database called `top_songsDB` which will eventually house all of the music data contained within `TopSongs.csv`

* Within your database create a table called `Top5000` and create columns capable of holding all of the data contained within `TopSongs.csv` properly.

* All of your code should be written and saved within a filed called `schema.sql` so that you can use this same code later should the need ever arise

* HINT: Try to have your table's columns match those within the CSV file as closely as possible or else you may find the next step in this assignment more difficult than it would otherwise be

* BONUS: Create a `seeds.sql` file that contains the data for the first three songs found within `TopSongs.csv`

* BONUS: Look into how MySQL Workbench can import and export data files. What file types does it accept? How does it convert the data?

## Part 2

* When dealing with big databases, it is very likely that you will have to work with two or more datasets that are related, but which have some degree of separation between them. In this case we have a table of the top 5000 songs and a table of the top 3000 albums.

  * Emphasize the relationship between databases and tables: Tables live **in** databases—i.e., databases consist of tables.

  * A **table** is a set of rows and columns. This set of rows and columns itself is _not_ a "database". We might, however, have a database that consists of only a single table, but there remains a conceptual distinction between the database and the table.

* It is your task to take these two large sets of data and come up with a method to join them together in order to figure out if a given artist's song and album made it into the charts at the time of their release.

  * HINT: This can be done in a couple different ways using external data as well, but you do have all of the data you need within your database to find the correlations. Give your methods some though before having to rely upon external info.

  * HINT: Remember that MySQL has the ability to combine two or more tables together so long as they share equivalent data. What data is similar between the two lists?

* Once you have managed to successfully bring the two datasets together, start making queries like those you made earlier to this new table as well.

