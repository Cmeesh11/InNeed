const loginForm = $('#login-form');
const signupForm = $('#signup-form');
const checkboxes = $('.ui.radio.checkbox');
const employerCheckbox = $('#employer-checkbox');
const jobseekerCheckbox = $('#jobseeker-checkbox');
const companyInput = $('#company-input');

checkboxes.on('click', () => {
  checkboxes.checkbox();
});

employerCheckbox.on('click', () => {
  companyInput.show();
});

jobseekerCheckbox.on('click', () => {
  companyInput.hide();
});

companyInput.hide();
