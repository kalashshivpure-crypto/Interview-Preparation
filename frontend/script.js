async function analyzeATS() {
  const fileInput = document.getElementById("resumeInput");
  if (!fileInput.files.length) return alert("Upload a resume first");

  const formData = new FormData();
  formData.append("resume", fileInput.files[0]);

  const res = await fetch("http://localhost:5000/api/ats", {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  document.getElementById("output").innerHTML =
    `<h3>ATS Score: ${data.score}%</h3><p>${data.feedback}</p>`;
}

async function startInterview() {
  const role = document.getElementById("roleSelect").value;

  const res = await fetch(`http://localhost:5000/api/interview/${role}`);
  const data = await res.json();

  document.getElementById("output").innerHTML =
    `<h3>Interview Questions</h3><ul>${data.questions.map(q => `<li>${q}</li>`).join("")}</ul>`;
}

window.onload = async () => {
  const res = await fetch("http://localhost:5000/api/interview/roles");
  const roles = await res.json();

  const select = document.getElementById("roleSelect");
  roles.forEach(r => {
    const option = document.createElement("option");
    option.value = r.role;
    option.textContent = r.role;
    select.appendChild(option);
  });
};
