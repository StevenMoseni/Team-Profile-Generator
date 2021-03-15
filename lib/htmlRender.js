function render(team){
    
}
module.exports = render

// --notes from Tutoring session -- 
// use template literal to build HTML
// have it broken up in different varible. head of html, bottom, for closing tags. 
// make it in html first, then copy chunks to template literals
// make a card function where it takes current team member your on, checks which type employee they are, and then creates a card for that specific employee
// make a card template for each type of employee
// have a var that will take the head and then do a for loop through all the team members
// add each card you make in the for loop to that previous var
// once for loop ends, add the end bottom html to close off html.
// return the variable, so that fs write file can use it to create HMTL
// default HTML (! )
// copy a card over from bootstrap
// when using ${team[i].getRole()} 