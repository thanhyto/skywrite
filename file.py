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
def combine_dicts_by_position(dicts1, dicts2):
    combined = []
    for d1, d2 in zip(dicts1, dicts2):
        combined_entry = {**d1, **d2}
        combined.append(combined_entry)
    return combined

scatter_path = "data/scaled/scaledscatterembeddings.jsonl"  
scatter_path_dicts = jsonl_to_list_of_dicts(scatter_path)

anchor_path = "data/scaled/scaledheartshape.jsonl"
anchor_path_dicts = jsonl_to_list_of_dicts(anchor_path)

nn_path = "data/NearestNeighbor/NearestNeighbor.jsonl"
nn_path_dicts = jsonl_to_list_of_dicts(nn_path)

for obj in nn_path_dicts:
    obj['type'] = 'noise'
    obj['color'] = 'steelblue'

combined_dicts = scatter_path_dicts + anchor_path_dicts + nn_path_dicts


counter = 0
for obj in combined_dicts:
    obj['class'] = counter
    counter += 1


# print(combined_dicts[69])

with jsonlines.open('data/all_sh_f.jsonl', mode='w') as writer:
    writer.write_all(combined_dicts)