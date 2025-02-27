const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const samples = [];

// Function to handle mouse clicks on the canvas
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left; // Correctly calculate x
    const y = event.clientY - rect.top;  // Correctly calculate y

    // Store the sample point
    samples.push({ x, y: canvas.height - y });

    // Draw the circle on the canvas
    ctx.fillStyle = 'red';
    ctx.beginPath(); // Start a new path
    ctx.arc(x, y, 5, 0, Math.PI * 2); // Draw a circle with radius 5
    ctx.fill(); // Fill the circle
});

// Function to confirm samples and fit the regression line
document.getElementById('confirm').addEventListener('click', () => {
    if (samples.length > 0) {
        downloadCSV(samples); // Call the function to download CSV
    } else {
        alert('Please click on the canvas to create samples first.');
    }
});

// Function to refresh the page
document.getElementById('refresh').addEventListener('click', () => {
    location.reload(); // Refresh the page
});

// Function to download the samples as a CSV file
function downloadCSV(samples) {
    const csvContent = "data:text/csv;charset=utf-8," 
        + "X,Y\n" // Header
        + samples.map(sample => `${sample.x},${sample.y}`).join("\n"); // Data rows

    // Create a link element
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "samples.csv");

    // Append to the body and trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
}