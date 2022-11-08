const Round = require('./SeatAllotment');
const {applicants, branches} = require('./data');
const PostAllotment = require('./PostAllotment')


Round(applicants,branches)
PostAllotment(applicants, branches)
//Round(applicants,branches)
console.log(applicants, branches)
