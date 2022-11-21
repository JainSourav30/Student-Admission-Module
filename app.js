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

