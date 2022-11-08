const Drop = (applicant, branches) => {
    if(applicant.status != -1){
        let branch_alloted
        if(!applicant.status){
            branch_alloted = branches.find((b) => {return b.name == applicant.pref[0]})
        }
        else{
            branch_alloted = branches.find((b) => {return b.status == applicant.status})
        }
        branch_alloted.seats++;
    }
    applicant.prefs = []
    applicant.status = 0
    console.log(`${applicant.name} has dropped from the process\n`)
}

const Float = (applicant, branches) => {
    let branch_alloted = branches.find((b) => {return b.status == applicant.status})
    branch_alloted.seats++;
    console.log(`${applicant.name} has floated away his seat\n`)
}

const Hold = (applicant, branches) => {
    //empty
    console.log(`${applicant.name} is holding his seat\n`)
}

const Freeze = (applicant, branches) => {
    let branch_alloted
    if(!applicant.status){
        branch_alloted = branches.find((b) => {return b.name == applicant.pref[0]})
    }
    else{
        branch_alloted = branches.find((b) => {return b.status == applicant.status})
    }
    applicant.prefs = [branch_alloted.name]
    applicant.status = 0
    console.log(`${applicant.name} has freezed his seat\n`)
}

const DecideStatus = (applicant, branches) => {
    console.log(`You are ${applicant.name}`)





    const prompt = require("prompt-sync")({ sigint: true });
    
    if(applicant.status == -1){
        //nothing
        let choice = prompt("Press 0 for Drop\nElse will continue");
        if(choice==0){Drop(applicant,branches);}
        else{console.log(`${applicant.name} continues to stay in further rounds\n`)}
    }
    else if(!applicant.status){
        //1st pref case
        let choice = prompt("Press 0 for Drop\nPress 3 for Freeze\n");
        if(choice==0){Drop(applicant,branches);}
        else if(choice==3){Freeze(applicant, branches);}
        else{console.log(`WRONG INPUT`)}
    }
    else{
        //nth pref case
        let choice = prompt("Press 0 for Drop\nPress 1 for Float\nPress 2 for Hold\nPress 3 for Freeze");
        if(choice==0){Drop(applicant,branches)}
        else if(choice==1){Float(applicant,branches);}
        else if(choice==2){Hold(applicant,branches);}
        else if(choice==3){Freeze(applicant, branches)}
    }
}

const PostAllotment = (applicants,branches) => {
    applicants.map(DecideStatus)
}

module.exports = PostAllotment