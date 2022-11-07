const know_my_branch = (b, applicant) => {
    if(applicant.status === 0){
        return applicant.pref1
    }
    if(b.status === applicant.status){
        return b.name
    }
    console.log(`${applicant.name} has status ${branches.find((b)=>know_my_branch(b,applicant))}\n`)
}

const Allot_Seat = (applicant, branches) => {
    if(applicant.status){
        let branch = branches.find((b)=>{return b.name === applicant.pref1})
        if(branch.seats){
            branch.seats--
            applicant.status = 0
            return 
        }
        //else{console.log(`no seat available for branch ${branch.name}! Sorry ${applicant.name}!`)}
        branch = branches.find((b)=>{return b.name === applicant.pref2})
        if(branch.seats){
            branch.seats--
            applicant.status = branch.status
            return 
        }

        branch = branches.find((b)=>{return b.name === applicant.pref3})
        if(branch.seats){
            branch.seats--
            applicant.status = branch.status
            return 
        }
    }
}


const Round = (applicants, branches) => {
    applicants.map((applicant)=>Allot_Seat(applicant,branches))
    applicants.map((applicant)=> {
        console.log(`${applicant.name} has status ${branches.find((b)=>know_my_branch(b,applicant))}\n`)
    })
}

module.exports = Round