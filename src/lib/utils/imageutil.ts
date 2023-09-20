export async function compressAndEncodeImage(
  inputImage: string
): Promise<string> {
  try {
    const image = new Image();
    image.src = inputImage;

    await new Promise<void>((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new Error("Failed to load the image."));
    });

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const maxWidth = 1024;
    const maxHeight = 1024;

    let width = image.width;
    let height = image.height;

    if (width > height) {
      if (width > maxWidth) {
        height *= maxWidth / width;
        width = maxWidth;
      }
    } else {
      if (height > maxHeight) {
        width *= maxHeight / height;
        height = maxHeight;
      }
    }

    canvas.width = width;
    canvas.height = height;

    ctx?.drawImage(image, 0, 0, width, height);

    const compressedImageData = canvas.toDataURL("image/jpeg", 0.8);

    // Check if the image size is less than 10MB
    if (compressedImageData.length > 10 * 1024 * 1024) {
      throw new Error("Image size exceeds 10MB.");
    }

    return compressedImageData;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}

// Example usage:
