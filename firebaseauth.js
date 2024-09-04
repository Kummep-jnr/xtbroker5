// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore, collection, addDoc, serverTimestamp, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwQ2MbYwCKCfJT60X0tP7tTtCvp_E_Jyo",
  authDomain: "xtbbroker-b93b4.firebaseapp.com",
  projectId: "xtbbroker-b93b4",
  storageBucket: "xtbbroker-b93b4.appspot.com",
  messagingSenderId: "903304858095",
  appId: "1:903304858095:web:c0fbd5dd88d0f836380e1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Reference to the form
const registrationForm = document.getElementById('registrationForm');

// Add event listeners to inputs to hide labels when typing
document.querySelectorAll('input[type="text"], input[type="email"]').forEach((input) => {
  const label = input.previousElementSibling; // Assuming label is just before the input

  input.addEventListener('input', () => {
    label.classList.toggle('hidden', input.value !== '');
  });

  input.addEventListener('focus', () => {
    label.classList.add('hidden');
  });

  input.addEventListener('blur', () => {
    if (input.value === '') {
      label.classList.remove('hidden');
    }
  });
});

// Listen for form submission
registrationForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  // Get form values
  const email = document.getElementById('email_email').value;
  const country = document.getElementById('country_country').value;
  const consentProcessingData = document.getElementById('consentProcessingData').checked;
  const consentCommunication = document.getElementById('consentCommunication').checked;

  try {
    // Validate form data
    if (!email || !country || !consentProcessingData || !consentCommunication) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Information',
        text: 'Please fill all required fields and give your consents.',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    // Check if the email already exists in Firestore
    const emailQuery = query(collection(db, 'registrations'), where('email', '==', email));
    const querySnapshot = await getDocs(emailQuery);

    if (!querySnapshot.empty) {
      Swal.fire({
        icon: 'warning',
        title: 'Email Already Used',
        text: 'This email has already been registered. Please use a different email.',
        confirmButtonColor: '#d33',
      });
      return;
    }

    // Save the user data to Firestore
    await addDoc(collection(db, 'registrations'), {
      email: email,
      country: country,
      consentProcessingData: consentProcessingData,
      consentCommunication: consentCommunication,
      timestamp: serverTimestamp()
    });

    // Notify user of successful submission and wait for confirmation before redirecting
    Swal.fire({
      icon: 'success',
      title: 'Registration Successful!',
      text: 'Your account has been created successfully. The company will send you an email of your account profile.',
      confirmButtonColor: '#3085d6',
    }).then(() => {
      // Clear form after confirmation
      registrationForm.reset();
      // Redirect to the homepage
      window.location.href = 'index.html'; // Replace with your homepage URL if different
    });

  } catch (error) {
    console.error('Error submitting form:', error);
    Swal.fire({
      icon: 'error',
      title: 'Submission Failed',
      text: 'Failed to submit the form. Please try again.',
      confirmButtonColor: '#d33',
    });
  }
});
