import os

# Get the current directory
current_directory = os.getcwd()

# Get a list of all .otf files in the current directory
otf_files = [file for file in os.listdir(
    current_directory) if file.endswith(".otf")]

# Iterate through each .otf file
for file in otf_files:
    # Split the file name by '-'
    file_parts = file.split("-")

    # Check if there are at least two '-' characters in the file name
    if len(file_parts) >= 3:
        # Remove all text after the second '-' and join the remaining parts
        new_file_name = "-".join(file_parts[:2]) + ".otf"

        # Rename the file
        os.rename(file, new_file_name)
        print(f"Renamed {file} to {new_file_name}")
