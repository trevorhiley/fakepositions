from pandas.io.json import json_normalize
import json
import gzip


with gzip.open('generated_files/2.txt.gz', 'rb') as f:
    data = json.load(f)
    print(data['portfolios'][0]['investments'][0]['lots'][0])
