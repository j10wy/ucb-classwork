# 1

Assign one student of the three of you to be the group’s typist. All others in the group will help supervise, offer guidance, and help catch bugs that the group’s typist might not be able to catch. Throughout this activity (and many of today’s activities) you will be switching roles with those in your group.

Then create a Basic To-Do application using the 1-student-do-todolist.html as a starting point. The HTML is already created for you so you will only have to fill in the javascript sections where there are large blanks. Alternatively, if you are feeling bold and capable, your group may code it from scratch without the use of the base code provided.

Helpful Hint: Each of the buttons and text elements should have a dynamically created identifier or data attribute that differentiates one item on the list from another. You should use these attributes to close out the appropriate items when you click on the “X” beside them.

# 2

# Sign In (no persistence)

## File

* [`2-student-do-signin-no-persistence`](Unsolved/2-student-do-signin-no-persistence.html)

## Instructions

* Using the `2-student-do-signin-no-persistence` as a starting point, fill in the JavaScript code necessary to make the page “save user inputs” and then re-display them on the second panel (most recent member).

* **NOTE:** Don’t worry about using client-side saving just yet. Just focus on getting the text inside the inputs and then displaying them via html in the second panel.

# 3 

kent_ou [1:10 PM] 
Instructions:

Using the solution provided to you in 2-student-do-signin-no-persistence-solution.html, re-configure the application so that it utilizes localStorage.

If your code worked it should save/display the last inputted user even if the tab is closed or if the page is closed and reopened.


droxey [2:26 PM] 
http://cookie-example-rcb.herokuapp.com/


# 4

Instructions:

Using a working example of the to-do application 1-student-do-todolist-solution.html incorporate the use of localStorage to create data persistence.

Have the group member who hasn’t typed yet become the typist in the group while the other two take on the role of supervisor.

HINT: You will need to create an additional array of todos that you can keep adding todo items to.

HINT: You will need to selectively delete array elements to get this working properly. (Suggestion: Look into .splice)

HINT: You will need to take an array and dump the contents into localStorage (Suggestion: Use JSON.stringify(todoArray)).

HINT: Don’t freak out. This is hard, but push yourselves as best you can!