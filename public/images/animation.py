from PIL import Image


def crossfade_webp(image1_path, image2_path, output_path, steps=20, duration=50):
    img1 = Image.open(image1_path).convert("RGBA")
    img2 = Image.open(image2_path).convert("RGBA")

    if img1.size != img2.size:
        img2 = img2.resize(img1.size, Image.Resampling.LANCZOS)

    frames = []
    durations = []

    # Generate transition frames
    for i in range(steps + 1):
        alpha = i / float(steps)
        # Blend the two images using alpha interpolation
        blended = Image.blend(img1, img2, alpha)
        frames.append(blended)

        # Apply 1000ms (1 second) to the first and last frame, else use the default duration
        if i == 0 or i == steps:
            durations.append(1000)
        else:
            durations.append(duration)

    for i in range(steps - 1, 0, -1):
        alpha = i / float(steps)
        blended = Image.blend(img1, img2, alpha)
        frames.append(blended)
        durations.append(duration)

    # Save as an animated WebP
    frames[0].save(
        output_path,
        save_all=True,
        append_images=frames[1:],
        duration=durations,
        loop=0,
        optimize=True,
        lossless=False,
    )


# Run the function
for i in range(6):
    crossfade_webp(
        f"item{i + 1}_before.webp",
        f"item{i + 1}_after.webp",
        f"item{i + 1}_anim.webp",
        steps=10,
        duration=40
    )