const Round = require('./SeatAllotment')
const {Preference, Applicant, Branch} = require('./classes/Applicant.js')
const {applicants, branches} = require('./data.js')
const PostAllotment = require('./PostAllotment')

console.log(applicants);
Round(applicants,branches)
PostAllotment(applicants, branches)
console.log('ROUND 2\n\n')
Round(applicants,branches)
applicants.map((applicant)=> console.log(applicant.id, applicant.prefs))
