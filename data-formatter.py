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

def main():
    parser = argparse.ArgumentParser(description="Combine JSONL files and apply colors based on index.")
    parser.add_argument("num_files", type=int, help="Number of files to combine")
    parser.add_argument("file_paths", nargs="+", help="Paths to the JSONL files")
    parser.add_argument("output_path", help="Path to the output JSONL file")

    args = parser.parse_args()

    if args.num_files < 2:
        print("Please specify at least two files to combine.")
        return

    combined_dicts = []
    for file_path in args.file_paths:
        combined_dicts.extend(jsonl_to_list_of_dicts(file_path))

    counter = 0
    for obj in combined_dicts:
        obj['class'] = counter
        counter += 1

    with jsonlines.open(args.output_path, mode='w') as writer:
        writer.write_all(combined_dicts)

if __name__ == "__main__":
    main()
