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

heart_path = "data/heart_scaled_f.jsonl"  
heart_path_dicts = jsonl_to_list_of_dicts(heart_path)

quotes_path = 'data/quotes_scaled_f.jsonl'
quotes_path_dicts = jsonl_to_list_of_dicts(quotes_path)

combined_dicts = heart_path_dicts + quotes_path_dicts


counter = 0
for obj in combined_dicts:
    obj['class'] = counter
    counter += 1 


print(combined_dicts[69])

with jsonlines.open('data/all_quotes_scaled_f.jsonl', mode='w') as writer:
    writer.write_all(combined_dicts)