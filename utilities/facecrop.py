import cv2
import dlib
import os

'''
Small program used to auto-crop headshots to a square.
'''

input_folder = "" # input path of all member photos here
output_folder = "" # output directory (must create)

if not os.path.exists(output_folder):
    os.makedirs(output_folder)

detector = dlib.get_frontal_face_detector()

# change scale-factor for zoom depth
def crop_face(image_path, output_path, scale_factor=3.5, final_size=400):
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

        if x1 < 0: x1 = 0
        if y1 < 0: y1 = 0
        if x2 > image.shape[1]: x2 = image.shape[1]
        if y2 > image.shape[0]: y2 = image.shape[0]

        # Crop the image to be square
        cropped = image[y1:y2, x1:x2]

        cropped = cv2.resize(cropped, (final_size, final_size))

        cv2.imwrite(output_path, cropped)
    else:
        print(f"No face detected in {image_path}")

for filename in os.listdir(input_folder):
    if filename.endswith((".jpg", ".jpeg", ".png")):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)
        crop_face(input_path, output_path)