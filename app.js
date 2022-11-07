const Round = require('./SeatAllotment');
const {applicants, branches} = require('./data');

//applicants.map((t) => {console.log(t.name)})
//new_applicants = Algorithm(applicants,seats)
Round(applicants,branches)