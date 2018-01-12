#!/usr/bin/python3
simple_array = [1,2,3]
my_array = []
my_array.append(1)

# Should log: [1,2,3]
print(simple_array)

# Should log: [1]
print(my_array)

# Should log: 1
print(len(my_array))

# Basic for in statement. Following : you need a new line with 4 spaces
# In this case, there are 4 spaces ahead of print()
for thing in simple_array:
	print('the current ele ment in my array is ', thing)

brother2, brother1 = ["Nick", "Jeff"]
print(brother2, "is the younger brother")
print(brother1, "is the older brother")

# Key value pairs
students = {
	'one': 'Vanessa',
	'two': "Jeff"
}

# Print information in students 
print(students)
print(students.get('two'))
print(students.values())

for key, value in students.items():
	print('key:',key,'| value:',value)

	