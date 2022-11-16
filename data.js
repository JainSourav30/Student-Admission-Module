const pool = require('./database')

/* applicants = [
    {
        id: 'A',
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
        id: 'B',
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
        id: 'C',
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
        id: 'D',
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
        id: 'E',
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
        id: 'F',
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
        id: 'G',
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
        id: 'H',
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
        id: 'I',
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
        id: 'J',
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
        id: 'CSE',
        seats: 2,
        status: 1,
        wl_no: 1 
    },
    {
        id: 'CCE',
        seats: 1,
        status: 2,
        wl_no: 1 
    },
    {
        id: 'ECE',
        seats: 1,
        status: 3,
        wl_no: 1 
    },
    {
        id: 'ME',
        seats: 3,
        status: 4,
        wl_no: 1 
    },
    {
        id: 'DCS',
        seats: 3,
        status: 5,
        wl_no: 1 
    },
    {
        id: 'DEC',
        seats: 3,
        status: 6,
        wl_no: 1
    },
] */

//(XXX,nnnn)

 const getwait = (pref) => {
    let str
    for(let i=5;pref[i]!=')';i++){
        str = str.concat(pref[i])
    }
    let b = parseint(str)
    return b
}

const getstring = (pref) => {
    let str
        for(let i=1;pref[i]!=',';i++){
            str = str.concat(pref[i])
        }
    return str

}

const applicants = []
const branches = []


/* const retrieveData = async() => {
    const results = await pool.query("SELECT * FROM applicants;")
    console.log(results.rows);
}

retrieveData() */

/* const prom = new Promise((resolve, reject)=>{
    const results = pool.query("SELECT UNNEST(prefs) FROM applicants;")
    resolve(results);
})


prom.then((data)=>console.log(data.rows[0].unnest))  */

console.log(getstring("(CSE,100)"))

/*

INSERT INTO "public"."applicants" ("id", "percentile", "prefs", "status", "on_hold") VALUES
(1, 100, '{"(CSE,100)","(CCE,100)","(ECE,100)"}', -1, 'f'),
(2, 90, '{"(CSE,100)","(ECE,100)","(MME,100)"}', -1, 'f'),
(3, 80, '{"(CCE,100)","(CSE,100)","(MME,100)"}', -1, 'f'),
(4, 70, '{"(CCE,100)","(MME,100)","(CSE,100)"}', -1, 'f'),
(5, 60, '{"(CSE,100)","(CCE,100)","(MME,100)"}', -1, 'f'),
(6, 50, '{"(ECE,100)","(CSE,100)","(MME,100)"}', -1, 'f'),
(7, 40, '{"(CSE,100)","(MME,100)","(ECE,100)"}', -1, 'f'),
(8, 30, '{"(ECE,100)","(CCE,100)","(CSE,100)"}', -1, 'f'),
(9, 20, '{"(CCE,100)","(CSE,100)","(ECE,100)"}', -1, 'f'),
(10, 10, '{"(CSE,100)","(MME,100)","(ECE,100)"}', -1, 'f');

INSERT INTO "public"."branches" ("id", "seats", "status", "wl_no") VALUES
('CCE', 1, 2, 1),
('CSE', 2, 1, 1),
('DCS', 3, 5, 1),
('DEC', 3, 6, 1),
('ECE', 1, 3, 1),
('MME', 3, 4, 1);
*/



module.exports = {applicants, branches}