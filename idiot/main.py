import tkinter as tk
from tkinter import messagebox

# Function to check if any player has won
def check_winner():
    global board

    # Check rows
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] != "":
            return board[i][0]

    # Check columns
    for i in range(3):
        if board[0][i] == board[1][i] == board[2][i] != "":
            return board[0][i]

    # Check diagonals
    if board[0][0] == board[1][1] == board[2][2] != "":
        return board[0][0]

    if board[0][2] == board[1][1] == board[2][0] != "":
        return board[0][2]

    # Check for a tie
    if all(board[i][j] != "" for i in range(3) for j in range(3)):
        return "Tie"

    return None

# Function to handle button click
def button_click(row, col):
    global player, board

    if board[row][col] == "":
        # Update the button text
        buttons[row][col].config(text=player)

        # Update the board
        board[row][col] = player

        # Check for a winner or tie
        result = check_winner()
        if result:
            if result == "Tie":
                messagebox.showinfo("Game Over", "It's a tie!")
            else:
                messagebox.showinfo("Game Over", f"Player {result} wins!")

            # Update the score
            if result == "X":
                score["X"] += 1
            elif result == "O":
                score["O"] += 1

            # Update the score labels
            x_score_label.config(text=f"Player X: {score['X']}")
            o_score_label.config(text=f"Player O: {score['O']}")

            # Reset the game
            reset_game()
        else:
            # Switch players
            player = "O" if player == "X" else "X"

# Function to reset the game
def reset_game():
    global player, board

    # Reset the player
    player = "X"

    # Clear the board
    for i in range(3):
        for j in range(3):
            board[i][j] = ""
            buttons[i][j].config(text="")

# Create the main window
window = tk.Tk()
window.title("Tic Tac Toe")

# Create the score labels
score = {"X": 0, "O": 0}
x_score_label = tk.Label(window, text="Player X: 0", font=("Arial", 14))
o_score_label = tk.Label(window, text="Player O: 0", font=("Arial", 14))
x_score_label.grid(row=0, column=0, columnspan=3)
o_score_label.grid(row=1, column=0, columnspan=3)

# Create the buttons
buttons = []
for i in range(3):
    row = []
    for j in range(3):
        button = tk.Button(window, text="", width=10, height=5,
                          command=lambda row=i, col=j: button_click(row, col))
        button.grid(row=i+2, column=j, padx=5, pady=5)
        row.append(button)
    buttons.append(row)

# Create the board
board = [["" for _ in range(3)] for _ in range(3)]

# Initialize the player
player = "X"

# Start the game
reset_game()

# Start the main loop
window.mainloop()
