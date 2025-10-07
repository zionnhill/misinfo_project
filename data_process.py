import pandas as pd
import numpy as np
import re
import string

# Load your dataset
df = pd.read_csv('your_dataset.csv')  # Replace with your actual file path

# Display basic info
print("Initial Data Overview:")
print(df.info())
print(df.head())

# Drop duplicates
df.drop_duplicates(inplace=True)

# Handle missing values
df.fillna({'text': '', 'user_name': 'unknown'}, inplace=True)  # Customize based on your columns

# Clean text content
def clean_text(text):
    text = text.lower()  # Lowercase
    text = re.sub(r"http\S+|www\S+|https\S+", '', text, flags=re.MULTILINE)  # Remove URLs
    text = re.sub(r'\@\w+|\#','', text)  # Remove mentions and hashtags
    text = text.translate(str.maketrans('', '', string.punctuation))  # Remove punctuation
    text = re.sub(r'\d+', '', text)  # Remove numbers
    text = text.strip()
    return text

df['clean_text'] = df['text'].apply(clean_text)

# Normalize user metadata (example)
if 'followers_count' in df.columns:
    df['followers_count'] = df['followers_count'].apply(lambda x: np.log1p(x) if pd.notnull(x) else 0)

# Save cleaned data
df.to_csv('cleaned_dataset.csv', index=False)
print("Data cleaning complete. Saved to 'cleaned_dataset.csv'.")