document.getElementById('complaintForm').onsubmit = async (e) => {
  e.preventDefault();
  const data = {
    title: e.target.title.value,
    description: e.target.description.value,
    severity: e.target.severity.value
  };
  // CHANGE THE URL BELOW TO YOUR DEPLOYED BACKEND URL
  const res = await fetch('https://jortal-backend.onrender.com/api/complaint', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
  const result = await res.json();
  document.getElementById('result').innerText = result.message.replace(/Boyfriend/g, 'Jusband').replace(/BoyfriendTech/g, 'JusbandTech');
  e.target.reset();
};
