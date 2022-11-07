applicants = [
    {
        name: 'A',
        percentile : 100,
        prefs: ['CSE','CCE','ECE'],
       /*  pref1 : 'CSE',
        pref2 : 'CCE',
        pref3 : 'ECE', */
        status: -1
         
    },
    {
        name: 'B',
        percentile: 90,
        prefs: ['CSE','ECE','ME'],
        /* pref1: 'CSE',
        pref2: 'ECE',
        pref3: 'ME', */
        status: -1
    },
    {
        name: 'C',
        percentile: 80,
        prefs: ['CCE','CSE','ME'],
        /* pref1: 'CCE',
        pref2: 'CSE',
        pref3: 'ME', */
        status: -1
    },
    {
        name: 'D',
        percentile: 70,
        prefs: ['ME','CCE','CSE'],
        /* pref1: 'ME',
        pref2: 'CCE',
        pref3: 'CSE', */
        status: -1
    },
    {
        name: 'E',
        percentile: 60,
        prefs: ['CSE','CCE','ME'],
        /* pref1: 'CSE',
        pref2: 'CCE',
        pref3: 'ME', */
        status: -1
    },
    {
        name: 'F',
        percentile: 50,
        prefs: ['ECE','CSE','ME'],
        /* pref1: 'ECE',
        pref2: 'CSE',
        pref3: 'ME', */
        status: -1
    },
    {
        name: 'G',
        percentile: 40,
        prefs: ['ME','CSE','ECE'],
        /* pref1: 'ME',
        pref2: 'CSE',
        pref3: 'ECE', */
        status: -1
    },
    {
        name: 'H',
        percentile: 30,
        prefs: ['ECE','CCE','CSE'],
        /* pref1: 'ECE',
        pref2: 'CCE',
        pref3: 'CSE', */
        status: -1
    },
    {
        name: 'I',
        percentile: 20,
        prefs: ['CCE','CSE','ECE'],
        /* pref1: 'CCE',
        pref2: 'CSE',
        pref3: 'ECE', */
        status: -1
    },
    {
        name: 'J',
        percentile: 10,
        prefs: ['CSE','ME','ECE'],
        /* pref1: 'CSE',
        pref2: 'ME',
        pref3: 'ECE', */
        status: -1
    },
]


branches = [
    {
        name: 'CSE',
        seats: 3,
        status: 1
    },
    {
        name: 'CCE',
        seats: 3,
        status: 2
    },
    {
        name: 'ECE',
        seats: 3,
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