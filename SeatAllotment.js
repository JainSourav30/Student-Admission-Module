
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
    //Need to sort applicants by percentile before calling this function
    applicants.map((applicant)=>Allot_Seat(applicant,branches))
    applicants.map((applicant)=> {
        let alloted_branch_name
        if(!applicant.status){
            alloted_branch_name = applicant.prefs[0]
        }
        else{
            let alloted_branch = branches.find((b) => {return b.status === applicant.status})
            alloted_branch_name = alloted_branch!=null?alloted_branch.name:'nothing'
        }
        console.log(`${applicant.name} has been alloted ${alloted_branch_name}\n`)
        
        
    })
}
module.exports = Round