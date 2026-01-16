#  Smart Parking System

A simple **Smart Parking System** built using **HTML, CSS, and JavaScript**, designed for beginners and mini-projects. It simulates parking spot booking, vehicle entry/exit, and fare calculation using the browser's **localStorage**.

---

## 📌 Features

* View available parking spots in real time
* Book a parking spot (vehicle entry)
* Exit parking with automatic fare calculation
* **QR code based entry access to the website**
* **QR code based exit for quick billing and checkout**
* Parking data stored using `localStorage`
* Simple and clean UI

---

##  Technologies Used

* **HTML5** – Structure of the web page
* **CSS3** – Styling (via `style.css`)
* **JavaScript (Vanilla JS)** – Logic and functionality
* **LocalStorage** – To store parking data persistently
* **Google Maps Platform (API)** – To display parking location and nearby parking spots (Hackathon Feature)

## ⚙️ How It Works

* Total parking spots are fixed (`TOTAL_SPOTS = 5`)
* Each spot can be either **free** or **occupied**
* **At Entry:**

  * User scans a **QR code at the parking entrance**
  * QR redirects to the parking web application
  * Vehicle number is entered and a free spot is assigned
  * Entry time is recorded automatically
* **At Exit:**

  * User scans a **QR code at the exit gate**
  * Vehicle number is verified
  * Parking duration and fare are calculated
  * Spot is freed after payment

>  **Rate:** ₹2 per minute


---

##  Usage Instructions

### ➤ Entry (QR-Based Access)

1. Scan the **QR code placed at the parking entrance**
2. The QR code redirects the user to the Smart Parking web application
3. Enter the vehicle number
4. Click **Book Spot**
5. A free parking spot is assigned and entry time is recorded

### ➤ Exit (QR-Based Checkout)

1. Scan the **QR code placed at the parking exit**
2. Enter the same vehicle number used during entry
3. Click **Exit & Pay**
4. Parking duration and total fare are displayed
5. The parking spot is marked as free again

---










