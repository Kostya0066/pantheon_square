from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/tasks')
def tasks():
    return render_template('tasks.html')

@app.route('/friends')
def friends():
    return render_template('friends.html')

@app.route('/leaderboards')
def leaderboards():
    return render_template('leaderboards.html')

@app.route('/daily-boost')
def daily_boost():
    return render_template('daily_boost.html')

@app.route('/mint-ticket')
def mint_ticket():
    return render_template('mint_ticket.html')



if __name__ == '__main__':
    app.run(debug=True)


