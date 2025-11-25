const projects = [
  { title: "Demo Project 1", desc: "Short description of project 1." },
  { title: "Demo Project 2", desc: "Short description of project 2." },
  { title: "Demo Project 3", desc: "Short description of project 3." }
];
const container = document.getElementById("portfolio-container");
if (container) {
  projects.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
    container.appendChild(div);
  });
}
