applicants = [
    {
        name: 'A',
        percentile : 100,
        prefs: ['CSE','CCE','ECE'],
        status: -1
         
    },
    {
        name: 'B',
        percentile: 90,
        prefs: ['CSE','ECE','ME'],
        status: -1
    },
    {
        name: 'C',
        percentile: 80,
        prefs: ['CCE','CSE','ME'],  
        status: -1
    },
    {
        name: 'D',
        percentile: 70,
        prefs: ['CCE','ME','CSE'],
        status: -1
    },
    {
        name: 'E',
        percentile: 60,
        prefs: ['CSE','CCE','ME'],
        status: -1
    },
    {
        name: 'F',
        percentile: 50,
        prefs: ['ECE','CSE','ME'],
        status: -1
    },
    {
        name: 'G',
        percentile: 40,
        prefs: ['CSE','ME','ECE'],
        status: -1
    },
    {
        name: 'H',
        percentile: 30,
        prefs: ['ECE','CCE','CSE'],
        status: -1
    },
    {
        name: 'I',
        percentile: 20,
        prefs: ['CCE','CSE','ECE'],
        status: -1
    },
    {
        name: 'J',
        percentile: 10,
        prefs: ['CSE','ME','ECE'],
        status: -1
    },
]


branches = [
    {
        name: 'CSE',
        seats: 2,
        status: 1
    },
    {
        name: 'CCE',
        seats: 1,
        status: 2
    },
    {
        name: 'ECE',
        seats: 1,
        status: 3
    },
    {
        name: 'ME',
        seats: 3,
        status: 4
    },
    {
        name: 'DCS',
        seats: 3,
        status: 5
    },
    {
        name: 'DEC',
        seats: 3,
        status: 6
    },
]

module.exports = {applicants, branches}