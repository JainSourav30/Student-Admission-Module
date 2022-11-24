import {Round} from './SeatAllotment.js'
import {retrieveData} from './data.js'
import {PostAllotment} from './PostAllotment.js'

let applicants = []
let branches = []
let total_rounds = 2

const process = async()=>{
    await retrieveData(applicants, branches)
    let round_no = 0

    Round(applicants,branches)
    round_no++
    PostAllotment(applicants, branches, round_no, total_rounds)

    console.log('ROUND 2\n\n')
    Round(applicants,branches)
    round_no++
    PostAllotment(applicants,branches, round_no, total_rounds)
    applicants.map((applicant)=> console.log(applicant.id, applicant.prefs))
}

process()


/*
import {Round} from './SeatAllotment.js'
import {retrieveData} from './data.js'
import {PostAllotment} from './PostAllotment.js'

let applicants = []
let branches = []
let total_rounds = 2
const prefs = [
    {dsp: 'CSE', waiting: 19},
    {dsp: 'ME', waiting: 19},
    {dsp: 'ECE', waiting: 19}            
]

const Make_pair = (pref) =>{
    const pair = "('"+ pref.dsp+"',"+pref.waiting+")"
    // pair.concat(pref.dsp)
    // pair.concat("',")
    // pair.concat(pref.waiting)
    // pair.concat(")")
    console.log(pair)
}

const applicant = {
    id: 'A',
    percentile : 100,
    prefs: [
        {dsp: 'CSE', waiting: 19},
        {dsp: 'CCE', waiting: 19},
        {dsp: 'ECE', waiting: 19}            
    ],
    status: -1,
    on_hold: false
}

const process = async()=>{
    //await retrieveData(applicants, branches)
    // for(let round_no = 1; round_no<total_rounds+1;++round_no){
    //     console.log(`ROUND ${round_no}\n\n`)
    //     Round(applicants,branches)
    //     PostAllotment(applicants, branches, round_no, total_rounds)
    // }

    // applicants.map((applicant)=> console.log(applicant.id, applicant.prefs))

    // Make_pair(prefs[0])

    let temp = []
    applicant.prefs.forEach((pref)=>{
        const pair = ('(\''+pref.dsp + '\',' + pref.waiting+')')
        temp.push(pair)
    })

    console.log(temp.toString())

}

process()
*/
