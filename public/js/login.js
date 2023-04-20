// Element selection
const loginForm = $('#login-form');
const signupForm = $('#signup-form');
const employerCheckbox = $('#employer-checkbox');
const jobseekerCheckbox = $('#jobseeker-checkbox');
const companyInput = $('#company-input');

const loginHandlerEmployer = async (event) => {
  event.preventDefault();
  // Selecting elements
  const email = $('#login-email').val().trim();
  const password = $('#login-password').val().trim();

  try {
    const response = await fetch('/api/user/employerLogin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Incorrect email or password');
      document.location.replace('/login');
    }
  } catch (err) {
    alert('Login Unsuccessful');
    document.location.replace('/login');
  }
};

const loginHandlerJobseeker = async (event) => {
  event.preventDefault();
  // Selecting elements
  const email = $('#login-email').val().trim();
  const password = $('#login-password').val().trim();

  try {
    const response = await fetch('/api/user/jobSeekerLogin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Incorrect email or password');
      document.location.replace('/login');
    }
  } catch (err) {
    alert('Login Unsuccessful');
    document.location.replace('/login');
  }
};

const signupHandlerJobseeker = async (event) => {
  event.preventDefault();
  // Selecting elements
  const email = $('#signup-email').val().trim();
  const password = $('#signup-password').val().trim();
  const firstName = $('#signup-first-name').val().trim();
  const lastName = $('#signup-last-name').val().trim();

  try {
    const response = await fetch('/api/user/signupJobseeker', {
      method: 'POST',
      body: JSON.stringify({ email, password, first_name: firstName, last_name: lastName }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('There was an error when signing up. Please try again.');
      document.location.replace('/signup');
    }
  } catch (err) {
    alert('Signup Unsuccessful');
    document.location.replace('/signup');
  }
};

const signupHandlerEmployer = async (event) => {
  event.preventDefault();
  // Selecting elements
  const email = $('#signup-email').val().trim();
  const firstName = $('#signup-first-name').val().trim();
  const lastName = $('#signup-last-name').val().trim();
  const password = $('#signup-password').val().trim();
  const company = $('#signup-company').val().trim();

  try {
    const response = await fetch('/api/user/signupEmployer', {
      method: 'POST',
      body: JSON.stringify({ email, password, first_name: firstName, last_name: lastName, company }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('There was an error when signing up. Please try again.');
      document.location.replace('/signup');
    }
  } catch (err) {
    alert('Signup Unsuccessful');
    document.location.replace('/signup');
  }
};

// Initiating checkbox function on all checkbox items
$('.ui.radio.checkbox').checkbox();

// Shows company row if employer is checked
employerCheckbox.on('click', () => {
  companyInput.show();
});

// Hides company row is jobseeker is checked
jobseekerCheckbox.on('click', () => {
  companyInput.hide();
});

loginForm.on('submit', (event) => {
  if ($('#jobseeker-login-input').prop('checked')) {
    loginHandlerJobseeker(event);
  } else {
    loginHandlerEmployer(event);
  }
});

signupForm.on('submit', (event) => {
  console.log($('#jobseeker-input').prop('checked'));
  if ($('#jobseeker-input').prop('checked')) {
    signupHandlerJobseeker(event);
  } else {
    signupHandlerEmployer(event);
  }
});

// Hides company field on page load
companyInput.hide();
