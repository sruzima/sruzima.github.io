# Examples: Adding Images from Your GitHub Projects

Here are practical examples showing how to add images to your portfolio homepage.

## Example 1: Adding an Image from the Tombola Project

If you have a screenshot or diagram in your `tombola` repository:

```html
<div class="image-card">
    <img src="https://raw.githubusercontent.com/sruzima/tombola/main/screenshot.png" 
         alt="Tombola Python Project"
         data-fallback-text="Tombola"
         class="project-image">
    <div class="image-caption">
        <div class="image-title">Tombola</div>
        <div>Python lottery simulation</div>
    </div>
</div>
```

Note: The `project-image` class automatically handles missing images by displaying a terminal-themed placeholder.

## Example 2: Multiple Projects

To showcase multiple projects, just add more image cards:

```html
<div class="images-grid">
    <!-- Tombola Project -->
    <div class="image-card">
        <img src="https://raw.githubusercontent.com/sruzima/tombola/main/preview.png" 
             alt="Tombola"
             data-fallback-text="Tombola"
             class="project-image">
        <div class="image-caption">
            <div class="image-title">Tombola</div>
            <div>Python Project</div>
        </div>
    </div>

    <!-- Batch-1 Project -->
    <div class="image-card">
        <img src="https://raw.githubusercontent.com/sruzima/batch-1/master/screenshot.png" 
             alt="Batch-1"
             data-fallback-text="Batch-1"
             class="project-image">
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
    <img src="images/projects/tombola-screenshot.png" 
         alt="Tombola"
         data-fallback-text="Tombola"
         class="project-image">
    <div class="image-caption">
        <div class="image-title">Tombola</div>
        <div>Python lottery project</div>
    </div>
</div>
```

## Tips

- **Recommended image size**: 400x300 pixels or similar aspect ratio
- **Supported formats**: PNG, JPG, GIF, SVG, WebP
- **Fallback**: Add `class="project-image"` and `data-fallback-text="Your Text"` to automatically display a terminal-themed placeholder if the image fails to load
- **Performance**: Use optimized images (compress large files before uploading)
- **Linking**: Make the entire card clickable by wrapping it in an `<a>` tag:

```html
<a href="https://github.com/sruzima/tombola" target="_blank" style="text-decoration: none;">
    <div class="image-card">
        <!-- image card content -->
    </div>
</a>
```
