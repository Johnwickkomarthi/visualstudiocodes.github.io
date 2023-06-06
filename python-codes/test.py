hobbies = {
    'steve': ['fashion', 'pino', 'reading'],
    'patty': ['drama', 'magic', 'pets'],
    'chad': ['puzzels', 'pets', 'yoga']
}
hobby=input('enter the hobby')
def names(hobbies, hobby):
    people = []
    for person, hobbies_list in hobbies.items():
        if hobby in hobbies_list:
            people.append(person)
    return people

print(names(hobbies,hobby))

# SELECT DISTINCT country 
# FROM companies 
# ORDER BY country;
