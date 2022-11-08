const try_alloting = (pref, branches, current_status, flag) => {
    let branch = branches.find((b)=>{return b.name === pref})
    if(branch.seats){
        branch.seats--
        return !flag? 0:branch.status
    }
    else{
        return current_status
    }
}

const Allot_Seat = (applicant, branches) => {
    if(applicant.status){
        let current_status = applicant.status
        for(let i=0;i<applicant.prefs.length;++i){
            if(applicant.status == current_status){
                applicant.status = try_alloting(applicant.prefs[i], branches, current_status, i);
                if(applicant.status != current_status){break;}
            }
        }
    }
}

const Round = (applicants, branches) => {
    applicants.map((applicant)=>Allot_Seat(applicant,branches))
    applicants.map((applicant)=> {
        let alloted_branch_name = !applicant.status? applicant.prefs[0]: branches.find((b) => {return b.status === applicant.status}).name
        console.log(`${applicant.name} has been alloted ${alloted_branch_name}\n`)
    })
}
module.exports = Round