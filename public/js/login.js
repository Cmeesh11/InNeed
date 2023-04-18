const loginForm = $('#login-form');
const signupForm = $('#signup-form');
const employerCheckbox = $('#employer-checkbox');
const jobseekerCheckbox = $('#jobseeker-checkbox');
const companyInput = $('#company-input');

$('.ui.radio.checkbox').checkbox();

employerCheckbox.on('click', () => {
  companyInput.show();
});

jobseekerCheckbox.on('click', () => {
  companyInput.hide();
});

companyInput.hide();
