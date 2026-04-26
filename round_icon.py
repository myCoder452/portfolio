from PIL import Image, ImageDraw

def round_image(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    
    # Create a mask
    mask = Image.new("L", img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0) + img.size, fill=255)
    
    # Apply mask
    result = img.copy()
    result.putalpha(mask)
    
    result.save(output_path)
    print(f"Saved to {output_path}")

if __name__ == "__main__":
    round_image(
        "/home/myhp/Documents/dev/personalWebsiteP/webPage/src/assets/mainlogo16.jpeg",
        "/home/myhp/Documents/dev/personalWebsiteP/webPage/src/assets/mainlogo16_rounded.png"
    )
