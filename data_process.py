import pandas as pd
import numpy as np
import re
import string
import os


csv_files = [
    'test_pos.csv',
    'train_pos.csv',
    'valid_pos.csv'
]

# Function to clean text content
def clean_text(text):
    if pd.isnull(text):
        return ''
    text = text.lower()
    text = re.sub(r"http\S+|www\S+|https\S+", '', text)
    text = re.sub(r'\@\w+|\#','', text)
    text = text.translate(str.maketrans('', '', string.punctuation))
    text = re.sub(r'\d+', '', text)
    text = text.strip()
    return text

# List to hold cleaned DataFrames
cleaned_dfs = []

for file in csv_files:
    if not os.path.exists(file):
        print(f"❌ File not found: {file}")
        continue

    print(f"✅ Processing {file}...")
    df = pd.read_csv(file)

    # Drop duplicates
    df.drop_duplicates(inplace=True)

  
    for col in df.columns:
        if df[col].dtype == 'object':
            df[col].fillna('', inplace=True)
        else:
            df[col].fillna(0, inplace=True)

    # Clean text columns
    text_columns = [col for col in df.columns if 'text' in col.lower() or 'statement' in col.lower()]
    for col in text_columns:
        df[f'clean_{col}'] = df[col].apply(clean_text)

    # Save individual cleaned file
    cleaned_filename = f"cleaned_{os.path.basename(file)}"
    df.to_csv(cleaned_filename, index=False)
    print(f"💾 Saved cleaned data to {cleaned_filename}")

    cleaned_dfs.append(df)

# Merge all cleaned DataFrames if they have the same structure
if cleaned_dfs and all(df.columns.equals(cleaned_dfs[0].columns) for df in cleaned_dfs):
    combined_df = pd.concat(cleaned_dfs, ignore_index=True)
    combined_df.to_csv('cleaned_combined_dataset.csv', index=False)
    print("✅ Saved merged cleaned dataset to cleaned_combined_dataset.csv")
else:
    print("⚠️ Files have different structures; skipping merge.")