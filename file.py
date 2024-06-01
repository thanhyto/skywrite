import argparse
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

def apply_color_from_index(combined_list, index_dicts):
    for idx_dict in index_dicts:
        index = idx_dict["index"]
        color = idx_dict["color"]
        if 0 <= index < len(combined_list):
            combined_list[index]["color"] = color
            combined_list[index]["type"] = "nearest neighbor"
        else:
            print(f"Index {index} is out of range.")

def main():
    parser = argparse.ArgumentParser(description="Combine JSONL files and apply colors based on index.")
    parser.add_argument("num_files", type=int, help="Number of files to combine")
    parser.add_argument("file_paths", nargs="+", help="Paths to the JSONL files")
    parser.add_argument("output_path", help="Path to the output JSONL file")

    args = parser.parse_args()

    if args.num_files < 2:
        print("Please specify at least two files to combine.")
        return

    file_dicts = []
    for file_path in args.file_paths:
        file_dicts.append(jsonl_to_list_of_dicts(file_path))

    combined_dicts = file_dicts[0]
    for dicts in file_dicts[1:]:
        combined_dicts = combine_dicts_by_position(combined_dicts, dicts)

    index_dicts = jsonl_to_list_of_dicts(args.index_path)
    apply_color_from_index(combined_dicts, index_dicts)

    counter = 0
    for obj in combined_dicts:
        obj['class'] = counter
        counter += 1

    with jsonlines.open(args.output_path, mode='w') as writer:
        writer.write_all(combined_dicts)

if __name__ == "__main__":
    main()
