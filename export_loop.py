import json
import os
import urllib.request
import re

project_file = "/Users/farouksadqi/.gemini/antigravity/brain/d0ecf9ef-238b-410d-a7b9-8665c0111e5e/.system_generated/steps/35/output.txt"
screens_file = "/Users/farouksadqi/.gemini/antigravity/brain/d0ecf9ef-238b-410d-a7b9-8665c0111e5e/.system_generated/steps/50/output.txt"

with open(project_file, "r") as f:
    project_data = json.load(f)

with open(screens_file, "r") as f:
    screens_data = json.load(f)

# Save DESIGN.md
with open(".stitch/DESIGN.md", "w") as f:
    f.write(project_data.get("designMd", ""))

# Prepare and save metadata.json
metadata = {
    "name": project_data.get("name"),
    "projectId": project_data.get("name", "").split("/")[-1],
    "title": project_data.get("title"),
    "visibility": project_data.get("visibility"),
    "createTime": project_data.get("createTime"),
    "updateTime": project_data.get("updateTime"),
    "projectType": project_data.get("projectType"),
    "origin": project_data.get("origin"),
    "deviceType": project_data.get("deviceType"),
    "designTheme": project_data.get("designTheme"),
    "metadata": project_data.get("metadata"),
    "screens": {}
}

# Add screens to metadata
for s_instance in project_data.get("screenInstances", []):
    s_id = s_instance.get("id")
    s_src = s_instance.get("sourceScreen")
    if s_src:
        metadata["screens"][s_id] = {
            "id": s_id,
            "sourceScreen": s_src,
            "x": s_instance.get("x", 0),
            "y": s_instance.get("y", 0),
            "width": s_instance.get("width", 0),
            "height": s_instance.get("height", 0)
        }

with open(".stitch/metadata.json", "w") as f:
    json.dump(metadata, f, indent=2)

def sanitize_title(title):
    t = re.sub(r'[^a-zA-Z0-9_\-]', '_', title)
    return t

for screen in screens_data.get("screens", []):
    title = screen.get("title", "untitled")
    s_id = screen.get("name", "").split("/")[-1]
    
    # Use title without .html for base name
    base_name = title
    if base_name.endswith(".html"):
        base_name = base_name[:-5]
    base_name = sanitize_title(base_name)
    
    # Download HTML
    html_info = screen.get("htmlCode", {})
    if html_info and "downloadUrl" in html_info:
        url = html_info["downloadUrl"]
        print(f"Downloading HTML for {title}...")
        try:
            urllib.request.urlretrieve(url, f".stitch/designs/{base_name}.html")
            urllib.request.urlretrieve(url, f"site/public/{base_name}.html")
        except Exception as e:
            print(f"Error downloading HTML for {title}: {e}")

    # Download Screenshot
    screenshot_info = screen.get("screenshot", {})
    if screenshot_info and "downloadUrl" in screenshot_info:
        width = screen.get("width", "390")
        url = screenshot_info["downloadUrl"] + f"=w{width}"
        print(f"Downloading Screenshot for {title}...")
        try:
            urllib.request.urlretrieve(url, f".stitch/designs/{base_name}.png")
        except Exception as e:
            print(f"Error downloading screenshot for {title}: {e}")

print("Done downloading assets.")
