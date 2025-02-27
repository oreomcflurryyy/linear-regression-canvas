# Canvas Sample Collector and Linear Regression

## Overview
The Canvas Sample Collector is a web application that allows users to click on a canvas to collect sample points. After collecting the samples, users can perform linear regression from scratch using a provided Jupyter Notebook. This project demonstrates the integration of HTML5 canvas for data collection and Python for data analysis and modeling.
```markdown
## Features
- Click on the canvas to collect sample points.
- Visualize collected points as red circles on the canvas.
- Download the collected points as a CSV file.
- Perform linear regression on the collected data using a Jupyter Notebook.

## Technologies Used
- Frontend: HTML5, CSS3, JavaScript, Canvas API
- Backend: Python, Jupyter Notebook, NumPy, Matplotlib

## Installation
To run this project locally, follow these steps:
```
1. **Clone the repository**:
   ```bash
   git clone https://github.com/oreomcflurryyy/linear-regression-canvas.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd linear-regression-canvas
   ```

3. **Open the `index.html` file** in your web browser:
   - You can simply double-click the `index.html` file or open it using your browser's "Open File" option.

4. **Set up the Jupyter Notebook**:
   - Ensure you have Jupyter Notebook installed. If not, you can install it using pip:
     ```bash
     pip install notebook
     ```
   - Open the Jupyter Notebook in the project directory:
     ```bash
     jupyter notebook
     ```

## Usage
1. **Collect Sample Points**:
   - Click anywhere on the canvas to create sample points. Each click will add a red circle at the clicked location.

2. **Download Samples**:
   - Once you have collected the desired number of points, click the **"Confirm Samples"** button to download the points as a CSV file.

3. **Perform Linear Regression**:
   - Open the provided Jupyter Notebook in your browser.
   - Load the CSV file containing the collected samples.
   - Follow the instructions in the notebook to perform linear regression on the collected data.

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please fork the repository and submit a pull request. 

## Acknowledgments
- This project is inspired by Andrew Ng's Machine Learning courses on Coursera.
- Ideation from 'Browser based Models with TensorFlow.js" course by Laurence Moroney.
