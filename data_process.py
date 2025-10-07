import pandas as pd
import zipfile
import os

# Unzip the dataset
with zipfile.ZipFile('MisInfoText-master.zip', 'r') as zip_ref:
    zip_ref.extractall('MisInfoText_master')

# Explore the contents
os.listdir('MisInfoText_master')

# Load main file (example: claims.csv)
df = pd.read_csv('MisInfoText_master/claims.csv')
df.head()
