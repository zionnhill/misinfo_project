import pandas as pd

df = pd.read_csv("FACTOID-dataset-main.csv")
print(df.head())
print(df.info())
print(df.describe())
print(df.isnull().sum())
print(df['label'].value_counts())