// Element selection
const loginForm = $('#login-form');
const signupForm = $('#signup-form');
const employerCheckbox = $('#employer-checkbox');
const jobseekerCheckbox = $('#jobseeker-checkbox');
const companyInput = $('#company-input');

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

companyInput.hide();
