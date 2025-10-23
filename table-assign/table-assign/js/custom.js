/********************************************************************
 * 
 * Your introductory remarks go here.
 * 
 *******************************************************************/

 // The array of objects, one object for each artist.
 
 const artists = [
   {
     name: "Ms Scandalous",
     birthYear: 1985,
     link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
   },
   {
    name: "Juggy D",
    birthYear: 1981,
    link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
  },
  {
    name: "Sukhbir Singh",
    birthYear: 1969,
    link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
  },
  {
    name: "Abrar-ul-Haq",
    birthYear: 1989,
    link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
  },
  {
    name: "Rishi Rich",
    birthYear: 1970,
    link: "https://www.youtube.com/watch?v=O95-w2gACuA"
  }
 ]

 // complete with code to select and populate the table
document.addEventListener("DOMContentLoaded", () => {
  // Locate the table by ID from index.html
  const table = document.querySelector("#bhangra");
  if (!table) return;

  // Create and append the header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["Name", "Year of Birth", "Link"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create and append the body
  const tbody = document.createElement("tbody");

  artists.forEach(artist => {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = artist.name;

    const tdYear = document.createElement("td");
    tdYear.textContent = artist.birthYear;

    const tdLink = document.createElement("td");
    const a = document.createElement("a");
    a.href = artist.link;
    a.textContent = "Video";
    a.target = "_blank";
    a.rel = "noopener";
    tdLink.appendChild(a);

    tr.append(tdName, tdYear, tdLink);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
});



