const TOTAL_SPOTS = 5;
const RATE_PER_MIN = 2; // ₹2 per minute

// Initialize parking data
if (!localStorage.getItem("parking")) {
  let spots = [];
  for (let i = 1; i <= TOTAL_SPOTS; i++) {
    spots.push({ id: i, status: "free" });
  }
  localStorage.setItem("parking", JSON.stringify(spots));
}

function loadSpots() {
  const spotsDiv = document.getElementById("spots");
  spotsDiv.innerHTML = "";
  const spots = JSON.parse(localStorage.getItem("parking"));

  spots.forEach(spot => {
    const div = document.createElement("div");
    div.className = `spot ${spot.status}`;
    div.innerText = `Spot ${spot.id} - ${spot.status.toUpperCase()}`;
    spotsDiv.appendChild(div);
  });
}

function bookSpot() {
  const vehicle = document.getElementById("vehicleNumber").value;
  if (!vehicle) return alert("Enter vehicle number");

  let spots = JSON.parse(localStorage.getItem("parking"));
  let freeSpot = spots.find(s => s.status === "free");

  if (!freeSpot) {
    document.getElementById("result").innerText = "❌ No free spots available";
    return;
  }

  freeSpot.status = "occupied";
  freeSpot.vehicle = vehicle;
  freeSpot.startTime = Date.now();

  localStorage.setItem("parking", JSON.stringify(spots));
  document.getElementById("result").innerText =
    `✅ Spot ${freeSpot.id} booked for ${vehicle}`;

  loadSpots();
}

function exitParking() {
  const vehicle = document.getElementById("exitVehicle").value;
  let spots = JSON.parse(localStorage.getItem("parking"));

  let spot = spots.find(s => s.vehicle === vehicle);
  if (!spot) {
    document.getElementById("result").innerText = "❌ Vehicle not found";
    return;
  }

  const timeSpent = Math.ceil((Date.now() - spot.startTime) / 60000);
  const fare = timeSpent * RATE_PER_MIN;

  spot.status = "free";
  delete spot.vehicle;
  delete spot.startTime;

  localStorage.setItem("parking", JSON.stringify(spots));

  document.getElementById("result").innerText =
    `🧾 Time: ${timeSpent} min | Fare: ₹${fare}`;

  loadSpots();
}

loadSpots();
