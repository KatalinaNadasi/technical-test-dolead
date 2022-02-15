#!/usr/bin/env python3
from flask import Flask, render_template

app = Flask(__name__, template_folder="templates")


@app.route("/")
def home_endpoint():
    return render_template('home.html', title="Home")


@app.route("/about")
def about_endpoint():
    return render_template('about.html', title="About")


if __name__ == '__main__':
    app.run(debug=True)
