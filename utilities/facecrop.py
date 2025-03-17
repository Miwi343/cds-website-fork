import cv2
import dlib
import os
from PIL import Image

# Define paths
input_folder = "/Users/wangzhongxuan/Downloads/cdsimages"  # Input folder with original images
output_folder = "/Users/wangzhongxuan/Downloads/cdsimages"  # Output folder for processed images

if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Face detector
detector = dlib.get_frontal_face_detector()

def crop_face(image_path, output_path, scale_factor=3.5, final_size=400):
    """ Detects, crops the face, and saves it as a 400x400 square image """
    image = cv2.imread(image_path)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    rects = detector(gray, 1)

    if len(rects) > 0:
        rect = rects[0]
        x, y, w, h = rect.left(), rect.top(), rect.width(), rect.height()

        center_x, center_y = x + w // 2, y + h // 2
        size = int(max(w, h) * scale_factor)

        x1, y1 = max(0, center_x - size // 2), max(0, center_y - size // 2)
        x2, y2 = min(image.shape[1], center_x + size // 2), min(image.shape[0], center_y + size // 2)

        # Ensure valid crop dimensions
        x1, y1, x2, y2 = max(0, x1), max(0, y1), min(image.shape[1], x2), min(image.shape[0], y2)

        # Crop and resize
        cropped = image[y1:y2, x1:x2]
        cropped = cv2.resize(cropped, (final_size, final_size))

        # Save the cropped face
        cv2.imwrite(output_path, cropped)
        return output_path  # Return the new image path
    else:
        print(f"No face detected in {image_path}")
        return None

def compress_image(input_path, target_size_kb=70, max_iterations=10):
    """ Compresses an image to be around the target file size """
    target_size_bytes = target_size_kb * 1024
    quality = 85
    step = 5

    # Generate new filename with "_new"
    base, ext = os.path.splitext(input_path)
    output_path = f"{base}_new.jpg"

    # Open image
    image = Image.open(input_path)
    
    for _ in range(max_iterations):
        try:
            image.save(output_path, "JPEG", quality=quality, optimize=True)
        except:
            image = image.convert("RGB")
            image.save(output_path, "JPEG", quality=quality, optimize=True)
        
        if os.path.getsize(output_path) <= target_size_bytes:
            break
        
        quality -= step
        if quality <= 10:
            break

    print(f"Compressed image saved as: {output_path}, Quality={quality}, Size={os.path.getsize(output_path) / 1024:.2f} KB")
    return output_path  # Return the compressed image path

# Process all images in input folder
for filename in os.listdir(input_folder):
    if filename.lower().endswith((".jpg", ".jpeg", ".png")):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)

        input_path = crop_face(input_path, output_path)
        compress_image(input_path=input_path)