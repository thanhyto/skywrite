import json
import pyperclip

def jsonl_to_list_of_dicts(file_path):
    list_of_dicts = []
    with open(file_path, 'r') as file:
        for line in file:
            # Load each line as a JSON object
            data = json.loads(line)
            # Append the JSON object to the list
            list_of_dicts.append(data)
    return list_of_dicts

def add_color_blue(list_of_dicts):
    for item in list_of_dicts:
        item['color'] = 'blue'
    return list_of_dicts

file_path = "data/quotes_scaled.jsonl"  
list_of_dicts = jsonl_to_list_of_dicts(file_path)

# Convert list of dictionaries to a string
output_str = json.dumps(list_of_dicts, indent=4)

# Copy the string to the clipboard
pyperclip.copy(output_str)

print(list_of_dicts)
