applicants = [
    {
        name: 'A',
        percentile : 100,
        prefs: [
            {dsp: 'CSE', waiting: 1e9},
            {dsp: 'CCE', waiting: 1e9},
            {dsp: 'ECE', waiting: 1e9}            
        ],
        status: -1,
        on_hold: false
         
    },
    {
        name: 'B',
        percentile: 90,
        prefs: [
            {dsp: 'CSE', waiting: 1e9},
            {dsp: 'ECE', waiting: 1e9},
            {dsp: 'ME', waiting: 1e9}            
        ],
        status: -1,
        on_hold: false
    },
    {
        name: 'C',
        percentile: 80,
        prefs: [
            {dsp: 'CCE', waiting: 1e9},
            {dsp: 'CSE', waiting: 1e9},
            {dsp: 'ME', waiting: 1e9}            
        ],
        status: -1,
        on_hold: false
    },
    {
        name: 'D',
        percentile: 70,
        prefs: [
            {dsp: 'CCE', waiting: 1e9},
            {dsp: 'ME', waiting: 1e9},
            {dsp: 'CSE', waiting: 1e9}            
        ],
        status: -1,
        on_hold: false
    },
    {
        name: 'E',
        percentile: 60,
        prefs: [
            {dsp: 'CSE', waiting: 1e9},
            {dsp: 'CCE', waiting: 1e9},
            {dsp: 'ME', waiting: 1e9}            
        ],
        status: -1,
        on_hold: false
    },
    {
        name: 'F',
        percentile: 50,
        prefs: [
            {dsp: 'ECE', waiting: 1e9},
            {dsp: 'CSE', waiting: 1e9},
            {dsp: 'ME', waiting: 1e9}            
        ],
        status: -1,
        on_hold: false
    },
    {
        name: 'G',
        percentile: 40,
        prefs: [
            {dsp: 'CSE', waiting: 1e9},
            {dsp: 'ME', waiting: 1e9},
            {dsp: 'ECE', waiting: 1e9}            
        ],
        status: -1,
        on_hold: false
    },
    {
        name: 'H',
        percentile: 30,
        prefs: [
            {dsp: 'ECE', waiting: 1e9},
            {dsp: 'CCE', waiting: 1e9},
            {dsp: 'CSE', waiting: 1e9}            
        ],
        status: -1,
        on_hold: false
    },
    {
        name: 'I',
        percentile: 20,
        prefs: [
            {dsp: 'CCE', waiting: 1e9},
            {dsp: 'CSE', waiting: 1e9},
            {dsp: 'ECE', waiting: 1e9}            
        ],
        status: -1,
        on_hold: false
    },
    {
        name: 'J',
        percentile: 10,
        prefs: [
            {dsp: 'CSE', waiting: 1e9},
            {dsp: 'ME', waiting: 1e9},
            {dsp: 'ECE', waiting: 1e9}            
        ],
        status: -1,
        on_hold: false
    },
]


branches = [
    {
        name: 'CSE',
        seats: 2,
        status: 1,
        wl_no: 1 
    },
    {
        name: 'CCE',
        seats: 1,
        status: 2,
        wl_no: 1 
    },
    {
        name: 'ECE',
        seats: 1,
        status: 3,
        wl_no: 1 
    },
    {
        name: 'ME',
        seats: 3,
        status: 4,
        wl_no: 1 
    },
    {
        name: 'DCS',
        seats: 3,
        status: 5,
        wl_no: 1 
    },
    {
        name: 'DEC',
        seats: 3,
        status: 6,
        wl_no: 1
    },
]

module.exports = {applicants, branches}