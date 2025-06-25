# Rock Paper Scissors Game 🪨📄✂️

A fun and interactive web-based Rock Paper Scissors game built with HTML, CSS, and JavaScript. Challenge the computer and enjoy a celebratory confetti animation when you win!

## 🎮 Features

- **Interactive Gameplay**: Choose between Rock, Paper, or Scissors with clickable buttons
- **Computer Opponent**: Play against a computer that makes random choices
- **Visual Feedback**: Clear display of your choice vs the computer's choice
- **Result Animation**: Color-coded results (green for win, red for lose, gray for tie)
- **Celebration Effects**: Confetti animation when you win!
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean interface using Bootstrap styling

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation

1. **Clone or Download** the project:
   ```bash
   git clone <repository-url>
   cd Rock-Paper-Scissors-Game
   ```

2. **Navigate to the game folder**:
   ```bash
   cd Folder
   ```

3. **Open the game**:
   - Double-click `index.html` to open in your browser
   - Or drag `index.html` into your browser window
   - Or use a local server (optional)

### Using a Local Server (Optional)

If you want to run the game on a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have it installed)
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🎯 How to Play

1. **Choose Your Weapon**: Click on Rock, Paper, or Scissors button
2. **Confirm Your Choice**: Your selection will be displayed
3. **Shoot!**: Click the "Shoot!" button to play against the computer
4. **See the Result**: View the outcome and enjoy confetti if you win!

### Game Rules

- **Rock** beats **Scissors**
- **Paper** beats **Rock**  
- **Scissors** beats **Paper**
- Same choices result in a tie

## 🛠️ Technical Details

### Project Structure
```
Rock-Paper-Scissors-Game/
├── Folder/
│   ├── index.html          # Main game page
│   ├── about.html          # About page
│   ├── script.js           # Game logic
│   ├── style.css           # Styling
│   ├── package.json        # Dependencies
│   └── images/
│       └── 1_G9UfaUBS_VqtFILMe37fZw.jpg
```

### Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Styling and animations
- **JavaScript**: Game logic and interactivity
- **Bootstrap 5.3.3**: UI framework for responsive design
- **Canvas Confetti**: Celebration animation library

### Key Features Implementation

- **Random Computer Choice**: Uses `Math.random()` to generate computer moves
- **Game Logic**: Implements standard Rock Paper Scissors rules
- **Visual Feedback**: CSS classes for win/lose/tie states
- **Confetti Animation**: Triggered on player wins using canvas-confetti library

## 🎨 Customization

### Styling
The game uses a light blue color scheme. You can customize colors by modifying:
- `.section` for overall layout
- `h1` for the title styling
- `.win`, `.lose`, `.tie` for result colors
- Button styling in the CSS file

### Adding Features
Potential enhancements:
- Score tracking
- Best of 3/5/7 games
- Sound effects
- Player statistics
- Different difficulty levels

## 📱 Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📄 License

This project is open source and available under the [ISC License](LICENSE).

## 🙏 Acknowledgments

- Bootstrap for the responsive UI framework
- Canvas Confetti for the celebration animation
- The classic game of Rock Paper Scissors for inspiration

---

**Have fun playing!** 🎉 