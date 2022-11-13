const Round = require('./SeatAllotment');
const {applicants, branches} = require('./data');
const PostAllotment = require('./PostAllotment')

Round(applicants,branches)
PostAllotment(applicants, branches)
console.log('ROUND 2\n\n')
Round(applicants,branches)
applicants.map((applicant)=> console.log(applicant.id, applicant.prefs))
