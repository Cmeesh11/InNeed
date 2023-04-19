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
      // Redirects to confirmation page
      document.location.replace('/employer/confirm');
    }
  } catch (err) {
    alert('Post was not created. Please try again');
    document.location.replace('/employer/post');
  }
});
