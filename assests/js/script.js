console.log('Welcome to My GitHub Website!');


# Create folders and files
for folder, files in structure.items():
    folder_path = os.path.join(base_dir, folder)
    os.makedirs(folder_path, exist_ok=True)
    for file_name in files:
        file_path = os.path.join(folder_path, file_name)
        with open(file_path, "w") as file:
            if file_name == "index.html":
                file.write(index_html)
            elif file_name == "styles.css":
                file.write(styles_css)
            elif file_name == "script.js":
                file.write(script_js)