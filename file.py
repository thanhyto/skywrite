import json
import jsonlines

def jsonl_to_list_of_dicts(file_path):
    list_of_dicts = []
    with open(file_path, 'r') as file:
        for line in file:
            # Load each line as a JSON object
            data = json.loads(line)
            # Append the JSON object to the list
            list_of_dicts.append(data)
    return list_of_dicts

file_path = "data/PATHS.jsonl"  
list_of_dicts = jsonl_to_list_of_dicts(file_path)

# Convert list of dictionaries to a string
output_str = json.dumps(list_of_dicts, indent=4)

df = []
for obj in list_of_dicts:
    new_obj = {}
    new_obj['x'] = obj['2d'][0]
    new_obj['y'] = obj['2d'][1]
    new_obj['quote'] = obj['quote']
    df.append(new_obj)


print(df)

with jsonlines.open('data/PATHS_f.jsonl', mode='w') as writer:
    writer.write_all(df)