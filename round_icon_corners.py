from PIL import Image, ImageDraw

def round_corners(image_path, output_path, radius):
    img = Image.open(image_path).convert("RGBA")
    
    # Create a mask
    mask = Image.new("L", img.size, 0)
    draw = ImageDraw.Draw(mask)
    
    # Draw rounded rectangle
    # PIL's rounded_rectangle might not be available in older versions, 
    # but we'll try to use a standard approach with arcs if needed, 
    # checking for the method first is safe but let's just use the method 
    # and if it fails (unlikely in this env) default to rectangle.
    # Actually, let's use a safe manual method to be sure.
    
    w, h = img.size
    
    # Draw central rectangles
    draw.rectangle((radius, 0, w - radius, h), fill=255)
    draw.rectangle((0, radius, w, h - radius), fill=255)
    
    # Draw four circles for corners
    draw.pieslice((0, 0, radius * 2, radius * 2), 180, 270, fill=255)
    draw.pieslice((w - radius * 2, 0, w, radius * 2), 270, 360, fill=255)
    draw.pieslice((0, h - radius * 2, radius * 2, h), 90, 180, fill=255)
    draw.pieslice((w - radius * 2, h - radius * 2, w, h), 0, 90, fill=255)
    
    # Apply mask
    result = img.copy()
    result.putalpha(mask)
    
    result.save(output_path)
    print(f"Saved to {output_path}")

if __name__ == "__main__":
    # Radius of 20% of width roughly
    round_corners(
        "/home/myhp/Documents/dev/personalWebsiteP/webPage/src/assets/mainlogo16.jpeg",
        "/home/myhp/Documents/dev/personalWebsiteP/webPage/src/assets/mainlogo16_rounded.png",
        radius=120 
    )
