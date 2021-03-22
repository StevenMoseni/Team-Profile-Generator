 function finishRender(cards){
     return  `<!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
         <title>Document</title>
     </head>
     <body>
         ${cards}
     </body>
     </html>`
 }
function makeCard(emp){
    
    return ` 
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${emp.getRole()}</h5>
      <p class="card-text">${emp.getName()}</p>
      <p class="card-text">${emp.getId()}</p>
      <p class="card-text">${emp.getEmail()}</p>
      <p class="card-text">${emp.getEmail()}</p>
    </div>
  </div>
  `
}
function render(team){
    let cards = ""
    for(let i = 0; i < team.length; i++){
        cards = cards + makeCard(team[i])
    }
    return finishRender(cards)
}
module.exports = render;

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