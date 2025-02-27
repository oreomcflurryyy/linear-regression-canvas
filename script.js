const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const samples = [];

// Function to handle mouse clicks on the canvas
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left; 
    const y = event.clientY - rect.top;  
    
    samples.push({ x, y: canvas.height - y });

    // Draw a circle
    ctx.fillStyle = 'red';
    ctx.beginPath(); 
    ctx.arc(x, y, 5, 0, Math.PI * 2); 
    ctx.fill(); 
});

// Function to confirm samples 
document.getElementById('confirm').addEventListener('click', () => {
    if (samples.length > 0) {
        downloadCSV(samples); 
    } else {
        alert('Please click on the canvas to create samples first.');
    }
});

// Function to refresh the page
document.getElementById('refresh').addEventListener('click', () => {
    location.reload(); 
});

// Function to download the samples as a CSV file
function downloadCSV(samples) {
    const csvContent = "data:text/csv;charset=utf-8," 
        + "X,Y\n" 
        + samples.map(sample => `${sample.x},${sample.y}`).join("\n"); 

    // Create a link element and trigger download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "samples.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 
}
