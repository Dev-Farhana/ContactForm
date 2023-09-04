  import { getDatabase, ref, push,set} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";
// Initialize Realtime Database and get a reference to the service
const database = getDatabase();

// const contactFormDb = database().ref("contactForm");
const contactFormDb = ref(database, "contactForm");

document.getElementById("contactForm").addEventListener('submit', submitform);

function submitform(e){
  e.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let msg =  document.getElementById('msgContent').value;

  saveMsg(name,email,msg);
  //enable alert;
  document.querySelector('.alert').style.display = "block"
  //remove alert;
  setTimeout( () => {
    document.querySelector('.alert').style.display = "none";
  }, 4000);

  //reset form;
  document.getElementById('contactForm').reset();
}

const saveMsg = (name, email, msg) => {
  // let newContactForm = contactFormDb.push();
  let newContactForm = push(contactFormDb);

  set(newContactForm, {
    name: name,
    email: email,
    msgContent: msg
  });

}
