# Examples: Adding Images from Your GitHub Projects

Here are practical examples showing how to add images to your portfolio homepage.

## Example 1: Adding an Image from the Tombola Project

If you have a screenshot or diagram in your `tombola` repository:

```html
<div class="image-card">
    <img src="https://raw.githubusercontent.com/sruzima/tombola/main/screenshot.png" 
         alt="Tombola Python Project"
         onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22150%22%3E%3Crect width=%22200%22 height=%22150%22 fill=%22%230a0e27%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fill=%22%2300ff41%22 font-family=%22monospace%22 font-size=%2212%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ETombola%3C/text%3E%3C/svg%3E'">
    <div class="image-caption">
        <div class="image-title">Tombola</div>
        <div>Python lottery simulation</div>
    </div>
</div>
```

## Example 2: Multiple Projects

To showcase multiple projects, just add more image cards:

```html
<div class="images-grid">
    <!-- Tombola Project -->
    <div class="image-card">
        <img src="https://raw.githubusercontent.com/sruzima/tombola/main/preview.png" alt="Tombola">
        <div class="image-caption">
            <div class="image-title">Tombola</div>
            <div>Python Project</div>
        </div>
    </div>

    <!-- Batch-1 Project -->
    <div class="image-card">
        <img src="https://raw.githubusercontent.com/sruzima/batch-1/master/screenshot.png" alt="Batch-1">
        <div class="image-caption">
            <div class="image-title">Batch-1</div>
            <div>Your project description</div>
        </div>
    </div>

    <!-- Add more projects as needed -->
</div>
```

## Example 3: Using Local Images

If you want to store images in this repository:

1. Save your image to `images/projects/tombola-screenshot.png`
2. Reference it in the HTML:

```html
<div class="image-card">
    <img src="images/projects/tombola-screenshot.png" alt="Tombola">
    <div class="image-caption">
        <div class="image-title">Tombola</div>
        <div>Python lottery project</div>
    </div>
</div>
```

## Tips

- **Recommended image size**: 400x300 pixels or similar aspect ratio
- **Supported formats**: PNG, JPG, GIF, SVG, WebP
- **Fallback**: The `onerror` attribute provides an SVG placeholder if the image fails to load
- **Performance**: Use optimized images (compress large files before uploading)
- **Linking**: Make the entire card clickable by wrapping it in an `<a>` tag:

```html
<a href="https://github.com/sruzima/tombola" target="_blank" style="text-decoration: none;">
    <div class="image-card">
        <!-- image card content -->
    </div>
</a>
```
