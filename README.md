# Misinformation Detection on Social Media

## Project Overview
This project detects **misinformation on social media platforms** using machine learning, targeting elderly users to help them identify false or misleading posts.  
It is part of a cybersecurity initiative to improve online safety.

### Project Workflow
1. Collect real-world social media datasets.
2. Process and clean text data.
3. Extract features such as text content and user behavior.
4. Train and evaluate machine learning models.
5. Build a web application to demonstrate predictions.

---

## Phase 1: Data Processing
Prepare datasets for ML analysis:

**Goals**
- Inspect and load raw data.
- Clean text (remove URLs, punctuation, numbers).
- Handle missing values and duplicates.
- Save cleaned datasets for model training.

**How to run:**
```bash
python3 data_process.py
pip install pandas numpy

Web App (React)

npm start – Run locally

npm test – Run tests

npm run build – Build for production

Project Structure
frontend/  # React frontend
backend/   # FastAPI backend
README.md  # This file