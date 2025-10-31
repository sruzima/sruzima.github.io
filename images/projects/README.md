# Project Images

This directory is for storing images from your GitHub projects that you want to display on your portfolio homepage.

## How to Add Images

### Option 1: Add Images to This Repository

1. Save your project images to this `images/projects/` folder
2. Update the `index.html` file to reference them:

```html
<div class="image-card">
    <img src="images/projects/your-image.png" alt="Your Project">
    <div class="image-caption">
        <div class="image-title">Your Project Name</div>
        <div>Brief description</div>
    </div>
</div>
```

### Option 2: Link Directly to GitHub Repository Images

If your GitHub projects already have images (like screenshots, diagrams, or logos), you can reference them directly:

1. Navigate to the image in your GitHub repository
2. Click on the image to view it
3. Right-click and select "Copy image address" or use the raw URL format:
   ```
   https://raw.githubusercontent.com/sruzima/repository-name/main/path/to/image.png
   ```

4. Update `index.html` to use this URL:

```html
<div class="image-card">
    <img src="https://raw.githubusercontent.com/sruzima/tombola/main/screenshot.png" alt="Tombola Project">
    <div class="image-caption">
        <div class="image-title">Tombola</div>
        <div>Python lottery project</div>
    </div>
</div>
```

## Supported Image Formats

- PNG (.png)
- JPEG (.jpg, .jpeg)
- GIF (.gif)
- SVG (.svg)
- WebP (.webp)

## Example

Replace the placeholder in `index.html` with your actual project images. The grid will automatically adjust to accommodate multiple images.
