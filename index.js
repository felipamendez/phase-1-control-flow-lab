function scuberGreetingForFeet(value){
  let result
  if (value  <= 400) {
    result = "This one is on me!"
  } else if (value > 2500) {
    result = 'No can do.'
  } else if (value > 2000) {
  result = 'I will gladly take your thirty bucks.'}
  return result
  
}

scuberGreetingForFeet(199);

function ternaryCheckCity(city) {
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

ternaryCheckCity('Pittsburgh');



function switchOnCharmFromTip(tip) {
  switch(tip) {
    case 'generous':
    return "Thank you so much."
    case 'not as generous':
    return 'Thank you.'
    default:
    return 'Bye.'
  }
}

switchOnCharmFromTip('generous');