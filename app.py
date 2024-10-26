from flask import Flask, render_template

app = Flask(__name__)

# Главная страница
@app.route('/')
def home():
    return render_template('index.html')

# Страница Mint Ticket
@app.route('/mint-ticket')
def mint_ticket():
    return render_template('mint_ticket.html')

# Страница Task (Soon)
@app.route('/task')
def task():
    return render_template('soon.html', page_name='Task')

# Страница Frens (Soon)
@app.route('/frens')
def frens():
    return render_template('soon.html', page_name='Frens')

# Страница Leaderboards (Soon)
@app.route('/leaderboards')
def leaderboards():
    return render_template('soon.html', page_name='Leaderboards')

if __name__ == '__main__':
    app.run(debug=True)

