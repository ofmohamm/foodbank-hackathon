from flask import Flask, request, jsonify
from flask_bcrypt import Bcrypt
from models import db, User, Donation
from config import Config
from auth import auth
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file

# Now you can access the variables
db_user = os.getenv('DATABASE_URL')


app = Flask(__name__)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = db_user
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
db.init_app(app)
bcrypt = Bcrypt(app)
app.register_blueprint(auth)

with app.app_context():
    db.create_all()  # Create the database tables

# Sign-Up Route
# @app.route('/signup', methods=['POST'])
# def signup():
#     data = request.get_json()
#     username = data.get('username')
#     email = data.get('email')
#     password = data.get('password')
#     role = data.get('role')

#     if not username or not email or not password or not role:
#         return jsonify({"msg": "Missing fields"}), 400

#     if role not in ['dining_hall', 'charity']:
#         return jsonify({"msg": "Invalid role"}), 400

#     if User.query.filter_by(username=username).first() or User.query.filter_by(email=email).first():
#         return jsonify({"msg": "User already exists"}), 400

#     hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
#     new_user = User(username=username, email=email, password=hashed_password, role=role)
#     db.session.add(new_user)
#     db.session.commit()

#     return jsonify({"msg": "User created"}), 201

# Donation Management Routes
@app.route('/donations', methods=['POST'])
def create_donation():
    data = request.get_json()
    food_type = data.get('food_type')
    quantity = data.get('quantity')
    pickup_time = data.get('pickup_time')

    if not food_type or not quantity or not pickup_time:
        return jsonify({"msg": "Missing fields"}), 400

    # Without user authentication, you may want to associate donations differently
    # For example, you could allow donations to be created by anyone and not associate with users.
    new_donation = Donation(food_type=food_type, quantity=quantity, pickup_time=pickup_time, user_id=None)  # Set user_id to None or adjust as necessary
    db.session.add(new_donation)
    db.session.commit()

    return jsonify({"msg": "Donation created"}), 201

@app.route('/donations', methods=['GET'])
def get_donations():
    donations = Donation.query.all()  # Fetch all donations
    return jsonify([{"Name": d.name, "Food?": d.fooddrink, "Availability": d.availability, "Milk": d.Milk, "Fish": d.Fish, "Soy": d.Soy, "Eggs": d.Eggs, "Wheat": d.Wheat, "Peanuts": d.Peanuts, "TreeNuts": d.TreeNuts, "ShellFish": d.ShellFish, "Sesame": d.Sesame, "Halal": d.Halal, "Vegan": d.Vegan, "Vegetarian": d.Vegetarian, "Pork": d.Pork, "GlutenFree": d.GlutenFree, "Dining Hall": d.diningHall} for d in donations]), 200
@app.route('/orders', methods=['POST'])
def create_order():
    data = request.get_json()

# Run the application
if __name__ == '_main_':
    app.run(debug=True)