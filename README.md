# Tic-Tac-Toe Web App

A classic tic-tac-toe game built with vanilla JavaScript, HTML, and CSS. This interactive web application features a clean, modern design with smooth gameplay mechanics.

## 🎮 Features

- **Two-Player Gameplay**: Alternating turns between X and O players
- **Win Detection**: Automatic detection of winning combinations (rows, columns, diagonals)
- **Draw Detection**: Handles tie games when the board is full
- **Game Reset**: Easy restart functionality for multiple rounds
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with hover effects and animations

## 🚀 Demo

![Tic-Tac-Toe Screenshot](https://github.com/user-attachments/assets/6c791f7a-92c2-4aa4-acda-61326cdfdcc3)

## 🛠️ Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling, animations, and responsive design
- **JavaScript** - Game logic and interactivity
- **CSS Grid/Flexbox** - Layout and positioning

## 📁 Project Structure

```
tic-tac-toe/
├── .vscode/            # VS Code configuration
├── index.html          # Main HTML file
├── package.json        # Project dependencies and scripts
├── script.js           # Game logic and functionality
├── styles.css          # Stylesheet and responsive design
└── README.md           # Project documentation
```

## 🎯 How to Play

1. The game starts with Player X
2. Click on any empty cell to place your mark
3. Players alternate turns (X, then O)
4. First player to get 3 marks in a row (horizontally, vertically, or diagonally) wins
5. If all cells are filled without a winner, the game ends in a draw
6. Click "Reset" to start a new game

## 💻 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/FayaadAbrahams/tic-tac-toe.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd tic-tac-toe
   ```

3. **Install dependencies (if any)**
   ```bash
   npm install
   ```

4. **Open in your browser**
   - Simply open `index.html` in your preferred web browser
   - Or use a local server for development:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## 🔧 Development

### Key Functions

- `makeMove(index)` - Handles player moves and game state updates
- `checkWinner()` - Evaluates current board state for win conditions
- `resetGame()` - Clears board and resets game state
- `updateDisplay()` - Updates UI elements based on game state

### Game Logic

The game implements a simple state management system:
- Board state tracked in a 9-element array
- Current player toggled after each valid move
- Win conditions checked after every move
- Game end states handled with appropriate UI updates

## 🎨 Customization

You can easily customize the game by modifying:

- **Colors**: Update CSS variables in `styles.css`
- **Board Size**: Modify grid dimensions (requires logic updates)
- **Animations**: Adjust CSS transitions and keyframes
- **Sounds**: Add audio feedback for moves and wins

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Classic tic-tac-toe game rules and mechanics
- Modern web development best practices
- Responsive design principles

## 📧 Contact

Fayaad Abrahams - [GitHub Profile](https://github.com/FayaadAbrahams)

Project Link: [https://github.com/FayaadAbrahams/tic-tac-toe](https://github.com/FayaadAbrahams/tic-tac-toe)

---

⭐ If you found this project helpful, please give it a star!
