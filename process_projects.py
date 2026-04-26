import os
import json

# Updated Configuration:
# "public" folder contains the static assets (images).
# We scan "public" for folders ending in "_Pics".
PROJECTS_DIR = "public"
OUTPUT_FILE = "src/assets/projects.json"

def process_projects():
    projects = []
    
    if not os.path.exists(PROJECTS_DIR):
        print(f"Error: Directory '{PROJECTS_DIR}' not found.")
        return

    print(f"Scanning '{PROJECTS_DIR}' for project folders...")

    for item in os.listdir(PROJECTS_DIR):
        project_path = os.path.join(PROJECTS_DIR, item)
        
        # We look for directories ending in "_Pics"
        if os.path.isdir(project_path) and item.endswith("_Pics"):
            project_name = item.replace("_Pics", "")
            
            print(f"Found project: {project_name}")
            
            # Paths to metadata (assumed to be inside the _Pics folder or constructed)
            # Note: Previously these might have been in the root project folder.
            # If description/logo are missing, we use defaults.
            
            description_file = os.path.join(project_path, f"{project_name}_description")
            
            # Helper to find logo
            # Logically, if the logo is for the website display, it should be in the _Pics folder now 
            # if that's where assets are.
            logo_candidates = [
                f"{project_name}_logo.png",
                f"{project_name}_logo.jpg",
                "main_icon.png"
            ]
            
            logo_path = ""
            for candidate in logo_candidates:
                candidate_full_path = os.path.join(project_path, candidate)
                if os.path.exists(candidate_full_path):
                    # For web path, we want relative to public, e.g., "hackTheTrack_Pics/logo.png"
                    logo_path = os.path.join(item, candidate)
                    break
            
            # Find Images
            all_files = os.listdir(project_path)
            # Filter for images (picture* or projectname_pic*)
            images = [f for f in all_files if f.startswith("picture") or f.startswith(f"{project_name}_pic")]
            images.sort() # Ensure consistent order
            
            # Read Description
            description = ""
            if os.path.exists(description_file):
                with open(description_file, "r") as f:
                    description = f.read().strip()
            
            # Web-ready image paths (relative to public root)
            web_images = [os.path.join(item, img) for img in images]
            
            projects.append({
                "name": project_name,
                "description": description,
                "logo": logo_path,
                "images": web_images
            })

    # write to json
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, "w") as f:
        json.dump(projects, f, indent=2)
    
    print(f"Successfully processed {len(projects)} projects into {OUTPUT_FILE}")

if __name__ == "__main__":
    process_projects()