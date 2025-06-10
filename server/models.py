from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import UserMixin

db = SQLAlchemy()
bcrypt = Bcrypt()

class User(db.Model, UserMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    role = db.Column(db.String(20), nullable=False)  # Roles: 'dining_hall' or 'charity'
class Donation(db.Model):
    __tablename__ = 'category'
    name = db.Column(db.String(100), primary_key=True)
    fooddrink = db.Column(db.Boolean, nullable=False)
    availability = db.Column(db.Boolean, nullable=False)
    Milk = db.Column(db.Boolean, nullable=False)
    Fish = db.Column(db.Boolean, nullable=False)
    Soy = db.Column(db.Boolean, nullable=False)
    Eggs = db.Column(db.Boolean, nullable=False)
    Soy = db.Column(db.Boolean, nullable=False)
    Eggs = db.Column(db.Boolean, nullable=False)
    Wheat = db.Column(db.Boolean, nullable=False)
    Peanuts = db.Column(db.Boolean, nullable=False)
    TreeNuts = db.Column(db.Boolean, nullable=False)
    ShellFish = db.Column(db.Boolean, nullable=False)
    Sesame = db.Column(db.Boolean, nullable=False)
    Halal = db.Column(db.Boolean, nullable=False)
    Vegan = db.Column(db.Boolean, nullable=False)
    Vegetarian = db.Column(db.Boolean, nullable=False)
    Pork = db.Column(db.Boolean, nullable=False)
    GlutenFree = db.Column(db.Boolean, nullable=False)
    diningHall = db.Column(db.String(100), nullable=False)
    #user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    #user = db.relationship('User', backref=db.backref('category', lazy=True))