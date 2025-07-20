# Admin Mode Documentation

## Overview
The Admin Mode provides secure administrative access for testing and content development. It allows bypassing the normal educational progression while keeping the student experience intact.

## Activation

### Method 1: Keyboard Shortcut
- Press **Ctrl+Shift+A** anywhere in the application
- Enter the admin password when prompted
- Default password: `password` (for development)

### Method 2: Browser Console
```javascript
window.adminManager.showAdminLogin()
```

## Admin Features

### 🔑 Chapter Access Override
- **Skip Chapter Requirements**: Access any chapter regardless of completion status
- **Visual Indicators**: Admin-unlocked chapters show a gold key icon and dashed border
- **Normal vs Admin Access**: Students still need to complete prerequisites

### 🛠️ Admin Panel (Ctrl+Shift+A while logged in)
- **Unlock All Chapters**: Temporarily make all chapters accessible
- **Quick Navigation**: Jump directly to any chapter
- **Reset Progress**: Clear all user progress (for testing)
- **Debug Tools**: Show debug information and download progress data

### 🚀 Quick Actions
- **Jump to Chapter**: Click any locked chapter with admin access
- **Review Mode**: Test completed chapters and retake functionality
- **Content Preview**: Test lessons and quizzes without progression

## Security Features

### Password Protection
- SHA-256 hashed password storage
- Configurable in `js/data/config.js`
- Session timeout (1 hour default)

### Session Management
- Persistent login across page refreshes
- Automatic logout on session expiry
- Manual logout option

### Visual Indicators
- Admin indicator in top-right corner when active
- Gold badges on admin-unlocked content
- Clear distinction between student and admin access

## Configuration

### Admin Settings (`js/data/config.js`)
```javascript
admin: {
    enabled: true,
    passwordHash: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
    sessionTimeout: 3600000, // 1 hour
    features: {
        skipChapterRequirements: true,
        unlockAllChapters: true,
        skipQuizRequirements: true,
        debugMode: true,
        contentPreview: true
    }
}
```

### Changing Admin Password
1. Generate SHA-256 hash of your password:
```javascript
// In browser console:
crypto.subtle.digest('SHA-256', new TextEncoder().encode('your-password'))
  .then(hash => console.log(Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0')).join('')))
```
2. Update `passwordHash` in config.js
3. Restart the application

## Usage Scenarios

### 📚 Content Development
- Add new lessons and immediately test them
- Skip to later chapters to test progression
- Verify quiz logic and scoring

### 🧪 Testing Workflows
- Test completion flows end-to-end
- Verify chapter unlocking mechanics
- Test rank progression systems

### 🐛 Bug Reproduction
- Jump to specific states to reproduce issues
- Test edge cases in progression
- Debug event flows and state management

### 👥 Demo Preparation
- Quickly navigate to showcase specific features
- Show advanced content without completing prerequisites
- Reset to clean state for demos

## Visual Design

### Admin Indicators
- **🔑 ADMIN MODE** indicator in top-right
- **Gold dashed borders** on admin-unlocked chapters
- **Key icons** instead of play icons for admin access
- **Gold badges** on admin-accessible content

### User Experience
- **Non-intrusive**: Normal users won't see admin features
- **Clear Distinction**: Easy to tell admin vs student access
- **Quick Access**: Keyboard shortcuts for efficiency
- **Safe Testing**: Can't accidentally break student experience

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+A` | Toggle admin login/panel |
| `Ctrl+Shift+D` | Show debug info (admin only) |

## Security Notes

### For Development
- Default password is intentionally simple
- All admin features are client-side only
- No server-side privileges required

### For Production
- Change default password before deployment
- Consider disabling admin mode in production
- Monitor admin access for security auditing

## API Reference

### AdminManager Methods
```javascript
// Check admin status
window.adminManager.isAdminMode

// Access specific features
window.adminManager.hasFeature('unlockAllChapters')
window.adminManager.isChapterAdminUnlocked(chapterId)

// Programmatic actions
window.adminManager.jumpToChapter(chapterId)
window.adminManager.unlockAllChapters()
window.adminManager.resetProgress()

// Session management
window.adminManager.login()
window.adminManager.logout()
```

### Events
```javascript
// Listen for admin events
eventManager.on('admin:login', (data) => { /* Admin logged in */ })
eventManager.on('admin:logout', () => { /* Admin logged out */ })
eventManager.on('admin:jump-to-chapter', (data) => { /* Chapter jump */ })
```

## Troubleshooting

### Common Issues

**Admin mode not working**
- Check console for errors
- Verify AdminManager script is loaded
- Ensure config.js has admin settings

**Password not accepted**
- Verify password hash is correct
- Check for typos in config.js
- Clear browser cache and reload

**Admin indicators not showing**
- Check CSS is loaded properly
- Verify ChapterComponent updates
- Refresh the page after login

### Debug Information
Use `Ctrl+Shift+D` in admin mode to see:
- Current admin session status
- Enabled features
- Configuration settings
- Component states

## Best Practices

### Development Workflow
1. Enable admin mode for content development
2. Test both admin and student paths
3. Verify progression works correctly
4. Disable admin mode for user testing

### Content Testing
1. Use admin access to reach target chapters
2. Test lesson content and interactivity
3. Verify quiz logic and scoring
4. Check chapter completion flows

### Demo Preparation
1. Reset progress for clean state
2. Use admin access to show features
3. Demonstrate both student and admin views
4. Have admin panel ready for quick navigation

This admin system provides powerful testing capabilities while maintaining the integrity of the educational experience for students.
