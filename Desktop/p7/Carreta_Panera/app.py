from flask import Flask, render_template
from flask_tailwind import tailwind

app = Flask(__name__)

tailwind = tailwind(app)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)