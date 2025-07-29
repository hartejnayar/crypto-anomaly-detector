
# Crypto/NFT Market Anomaly Detector
This project detects suspicious blockchain transactions in real time using Etherscan API data and Machine Learning (Isolation Forest).
The results are displayed in a clean, interactive web dashboard with a pie chart and searchable transaction table.

It’s a unique project that combines blockchain, machine learning, and web development to showcase how AI can detect anomalies in crypto markets.

## What Does the Project Do?
- Fetches real-time transaction data from the Etherscan API

- Uses Isolation Forest, an unsupervised ML algorithm, to detect unusual/suspicious transactions

- Saves results in a JSON file (anomaly_results.json)

- Displays results on a dashboard with a pie chart and transaction table

- Allows search and sorting for easy analysis

##  How the Project Works (Step by Step)
1️. Data Collection – Real-Time Using Etherscan API
- We create an API key on Etherscan.

- The Python notebook (.ipynb file) fetches transactions for a given wallet or contract address.

- Data includes transaction hash, sender, receiver, timestamp, gas, and value.

2️.  Machine Learning – Isolation Forest in Google Colab
- The data is processed in Colab.

- Features like transaction value, gas, and gas price are used.

- Isolation Forest detects outliers by isolating unusual points faster than normal ones.

- Each transaction is labeled as Normal (0) or Suspicious (1).

- Final output is saved as anomaly_results.json.

3️.  Dashboard – HTML, CSS, and JavaScript
- The dashboard fetches the JSON file.

- A Pie Chart (using Plotly.js) shows Normal vs Suspicious transactions.

- A Table displays transaction details with search and sorting.

## File Structure

dashboard/
├── index.html               Main dashboard page
├── style.css                Styles for layout and table
├── script.js                Loads JSON, creates chart, table, search & sort
└── data/
    └── anomaly_results.json → Output from Isolation Forest model
## Dashboard Features
-  Pie Chart – Visual breakdown of normal vs suspicious transactions
- Search Box – Filter transactions by hash or sender address
-  Sortable Table – Click headers to sort transactions
-  Real Blockchain Data – Uses Etherscan API for real-time transactions

##  What I Learned
-  How to fetch real-time blockchain transactions using the Etherscan API
-  How to preprocess data and train an Isolation Forest model for anomaly detection
-  How to convert ML outputs into JSON for web apps
-  How to build a dashboard using HTML, CSS, JavaScript, and Plotly.js
-  How to integrate data science + blockchain + web development into one meaningful project

## analogy behind isolation forest and how its practical for this project 
- The model works by randomly splitting data points and isolating points that are far from others.
- Transactions that are statistically very different (too high/low value or abnormal gas/gasPrice patterns) are marked as anomalies.
  
## Why This Project Stands Out
- Uses Real-Time Blockchain Data (not just static datasets)

- Applies AI for Financial Anomaly Detection

- Interactive Dashboard for Visual Insights

- Demonstrates Full-Stack Skills (Data + ML + Frontend)
  
## Dashboard link : 
https://hartejnayar.github.io/crypto-anomaly-detector/
