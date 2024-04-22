let x = new Date()
document.cookie = "Date="+ x.getDay();

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

let y = getCookie("Date");

console.log(y)

var texts = document.querySelectorAll('#newsText');

for (const text of texts) {
    console.log(text)
    text.textContent = "Bacon ipsum dolor amet pastrami meatball hamburger brisket shank ground round. Picanha ribeye drumstick, cow alcatra brisket swine pastrami leberkas t-bone ball tip bacon. Ball tip filet mignon capicola drumstick sausage. Shank burgdoggen rump alcatra, cupim tongue jerky."
}