# Admin Mode Guide

## Quick Access
- **Activation**: Press `Ctrl+Shift+A` anywhere in the application
- **Password**: `password321`
- **Toggle Panel**: Press `Ctrl+Shift+A` again while logged in

## Features

### 🔑 Chapter Access Override
- Click any locked chapter to access it immediately
- Visual indicators: Gold key icon and dashed border on admin-unlocked chapters
- Students still need to complete prerequisites normally

### 🛠️ Admin Panel
- **Unlock All Chapters**: Make all chapters accessible for testing
- **Reset Progress**: Clear all user progress (useful for testing)
- **Quick Navigation**: Jump directly to any chapter
- **Debug Tools**: Download progress data, view debug information

### 🎯 Testing Workflow
1. Enable admin mode with `Ctrl+Shift+A`
2. Jump to any chapter to test content
3. Use reset progress to test the new user experience
4. Verify quiz completion and chapter unlocking logic

## Visual Indicators
- **Admin Badge**: Appears in top-right corner when admin mode is active
- **Gold Key Icons**: Show on chapters unlocked via admin access
- **Dashed Borders**: Indicate admin-unlocked content vs. naturally unlocked

## Session Management
- **Auto-logout**: After 1 hour of inactivity
- **Persistent**: Survives page refreshes
- **Manual Logout**: Click admin badge or wait for timeout

## Security
- Password is SHA-256 hashed and stored in `js/data/config.js`
- Session data stored temporarily in localStorage
- No permanent admin privileges stored

## Configuration

### Changing Admin Password
1. Generate SHA-256 hash of new password
2. Update `js/data/config.js`:
```javascript
adminConfig: {
    passwordHash: "your-new-hash-here",
    sessionTimeout: 3600000 // 1 hour in milliseconds
}
```

### For Production
- **Always change the default password**
- Consider removing admin mode entirely for public deployment
- Or set a strong password and document it securely

## Common Use Cases
- **Content Testing**: Jump to specific chapters to test new lessons
- **Bug Reproduction**: Reset progress to test various user states  
- **Demo Preparation**: Unlock specific chapters for presentations
- **Development**: Quickly navigate to different sections while coding
