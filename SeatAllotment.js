const try_alloting = (applicant, branches, current_status, flag) => {
    let branch = branches.find((b)=>{return b.name === applicant.prefs[flag].dsp})
    if(branch.seats){
        branch.seats--
        if(!flag){
            for(let i=0; i<applicant.prefs.length;++i){
                applicant.prefs[i].waiting = 0
            }
            return 0
        }
        else{
            let temp = applicant.prefs.find((p) => {return p.dsp == branch.name})
            temp.waiting = 0
            return branch.status
        }
    }
    else{
        let temp = applicant.prefs.find((p) => {return p.dsp == branch.name})
        temp.waiting = branch.wl_no
        branch.wl_no++
        return current_status
    }
}

const Allot_Seat = (applicant, branches) => {
    if(applicant.status){
        let current_status = applicant.status
        for(let i=0;i<applicant.prefs.length;++i){
            if(applicant.status == current_status){
                applicant.status = try_alloting(applicant, branches, current_status, i);
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
            if(!applicant.prefs.length){
                alloted_branch_name = 'dropped-out-of-college'
            }
            else{
                alloted_branch_name = applicant.prefs[0].dsp
            }
        }
        else{
            let alloted_branch = branches.find((b) => {return b.status === applicant.status})
            alloted_branch_name = alloted_branch!=null?alloted_branch.name:'nothing'
        }
        console.log(`${applicant.name} has been alloted ${alloted_branch_name}\n`)
    })
}
module.exports = Round