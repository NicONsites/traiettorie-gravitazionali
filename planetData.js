document.addEventListener("DOMContentLoaded", function () {
    let tableBody = document.getElementById("planet-data-table");
    let planetData = [
        { name: "Mercury", color: "Gray", distance: 0.39, radius: 0.4 },
        { name: "Venus", color: "Yellow", distance: 0.72, radius: 0.9 },
        { name: "Earth", color: "Blue", distance: 1.0, radius: 1.0 },
        { name: "Mars", color: "Red", distance: 1.52, radius: 0.5 },
        { name: "Jupiter", color: "Orange", distance: 5.2, radius: 11 },
        { name: "Saturn", color: "Pale Yellow", distance: 9.58, radius: 9 },
        { name: "Uranus", color: "Light Blue", distance: 19.22, radius: 4 },
        { name: "Neptune", color: "Blue", distance: 30.05, radius: 4 }
    ];

    planetData.forEach(planet => {
        let row = document.createElement("tr");

        let nameCell = document.createElement("td");
        nameCell.textContent = planet.name;
        row.appendChild(nameCell);

        let colorCell = document.createElement("td");
        colorCell.textContent = planet.color;
        row.appendChild(colorCell);

        let distanceCell = document.createElement("td");
        distanceCell.textContent = planet.distance;
        row.appendChild(distanceCell);

        let radiusCell = document.createElement("td");
        radiusCell.textContent = planet.radius;
        row.appendChild(radiusCell);

        tableBody.appendChild(row);
    });
});
