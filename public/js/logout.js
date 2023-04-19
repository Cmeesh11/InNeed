// Selects logout button
const logout = $('#logout');

// Fetches logout route on click if the logout button exists
if (logout) {
  logout.on('click', async () => {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      // Redirects to homepage
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  });
}
