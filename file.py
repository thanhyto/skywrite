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

scatter_path = "data/SH_Scatter_f.jsonl"  
scatter_path_dicts = jsonl_to_list_of_dicts(scatter_path)

anchor_path = "data/SH_f.jsonl"
anchor_path_dicts = jsonl_to_list_of_dicts(anchor_path)

nn_path = "data/NN_f.jsonl"
nn_path_dicts = jsonl_to_list_of_dicts(nn_path)

combined_dicts = scatter_path_dicts + anchor_path_dicts + nn_path_dicts


counter = 0
for obj in combined_dicts:
    obj['class'] = counter
    counter += 1


# print(combined_dicts[69])

with jsonlines.open('data/all_sh_f.jsonl', mode='w') as writer:
    writer.write_all(combined_dicts)