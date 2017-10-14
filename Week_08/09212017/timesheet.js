$(document).ready(function () {

	var database = firebase.database();

	var table = $(".table");

	database.ref().on("child_added", function (snapshot) {

		var snap = snapshot.val();

		var tr = $("<tr>");
		var employeeName = $("<td></td>").text(snap.name).addClass("employee");
		var employeeRole = $("<td></td>").text(snap.role).addClass("employee");
		var startDate = $("<td></td>").text(snap.startDate).addClass("employee");
		var monthsWorked = $("<td></td>").text("10").addClass("employee");
		var monthlyRate = $("<td></td>").text(snap.monthlyRate).addClass("employee");
		var totalBilled = $("<td></td>").text("billed").addClass("employee");

		tr.append(employeeName);
		tr.append(employeeRole);
		tr.append(startDate);
		tr.append(monthsWorked);
		tr.append(monthlyRate);
		tr.append(totalBilled);

		table.append(tr);

	});

	$("#add").on("click", function (event) {

		// Capture User Inputs and store into variables
		var name = $("#name").val();
		var role = $("#role").val();
		var startDate = $("#startDate").val();
		var monthlyRate = $("#monthlyRate").val();

		event.preventDefault();
		database.ref().push({
			name: name,
			role: role,
			startDate: startDate,
			monthlyRate: monthlyRate,
			dateAdded: firebase.database.ServerValue.TIMESTAMP
		});
	});
});