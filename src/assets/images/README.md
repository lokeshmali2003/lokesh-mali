# Images Folder

यहाँ आप अपनी images add कर सकते हैं।

## Usage:

### Method 1: Import in Components
```jsx
import profileImage from '../assets/images/profile.jpg'

<img src={profileImage} alt="Profile" />
```

### Method 2: Use Public Folder
अगर आप images को `public/images` folder में रखते हैं:
```jsx
<img src="/images/profile.jpg" alt="Profile" />
```

## Recommended Image Formats:
- **JPG/JPEG**: Photos के लिए
- **PNG**: Transparent background के लिए
- **SVG**: Icons और logos के लिए
- **WebP**: Better compression के लिए

## Image Sizes:
- **Profile Images**: 400x400px या 500x500px
- **Project Images**: 800x600px या 1200x800px
- **Banner Images**: 1920x1080px

