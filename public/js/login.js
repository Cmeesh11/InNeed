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

// When form is submitted, confirmation page is rendered
$('#post-form').on('submit', async (event) => {
  event.preventDefault();
  // Selecting elements
  const jobTitle = $('.job-title').val().trim();
  const salary = $('.salary').val().trim();
  const state = $('#dropdown-menu').val();
  const requirements = $('.requirements').val().trim();
  const description = $('.job-description').val().trim();

  try {
    const response = await fetch('/api/post/create', {
      method: 'POST',
      body: JSON.stringify({ job_title: jobTitle, salary, state, requirements, description }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      document.location.replace('/employer/confirm');
    }
  } catch (err) {
    alert('Post was not created. Please try again');
    document.location.replace('/employer/post');
  }
});
