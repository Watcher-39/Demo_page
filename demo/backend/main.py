from flask import request, jsonify
from config import app, db
from models import Admin, Product, Employee

## -------------Admin paths-------------
@app.route("/admins", methods=["GET"])
def get_admins():
    admins = Admin.query.all()
    json_admins = list(map(lambda x: x.to_json(), admins))
    return jsonify({"admins": json_admins})

@app.route("/create_admin", methods=["POST"])
def create_admin():
    name = request.json.get("name")
    password = request.json.get("password")
    phone = request.json.get("phone")

    if not name or not password or not phone:
        return jsonify({"message": "You must include a name, password and phone"}), 400

    
    new_admin = Admin(name=name, password=password, phone=phone)
    try:
        db.session.add(new_admin)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Admin created"}), 201

@app.route("/update_admin/<int:admin_id>", methods=["PATCH"])
def update_admin(admin_id):
    admin = Admin.query.get(admin_id)

    if not admin:
        return jsonify({"message": "Admin not found"}), 404

    data = request.json
    admin.name = data.get("name", admin.name)
    admin.password = data.get("password", admin.password)

    db.session.commit()

    return jsonify({"message": "Admin updated."}), 200

@app.route("/delete_admin/<int:admin_id>", methods=["DELETE"])
def delete_admin(admin_id):
    admin = Admin.query.get(admin_id)

    if not admin:
        return jsonify({"message": "Admin not found."}), 404

    db.session.delete(admin)
    db.session.commit()

    return jsonify({"message": "Admin deleted!"}), 200

## ---------Employee paths---------------
@app.route("/employees", methods=["GET"])
def get_employees():
    employees = Employee.query.all()
    json_employee = list(map(lambda x: x.to_json(), employees))
    return jsonify({"employee": json_employee})

@app.route("/create_employee", methods=["POST"])
def create_employee():
    name = request.json.get("name")
    password = request.json.get("password")
    phone = request.json.get("phone")

    if not name or not password or not phone:
        return jsonify({"message": "You must include a name, password and phone"}), 400

    
    new_employee = Employee(name=name, password=password, phone=phone)
    try:
        db.session.add(new_employee)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Employee created"}), 201

@app.route("/update_employee/<int:employee_id>", methods=["PATCH"])
def update_employee(employee_id):
    employee = Employee.query.get(employee_id)

    if not employee:
        return jsonify({"message": "Employee not found"}), 404

    data = request.json
    employee.name = data.get("name", employee.name)
    employee.password = data.get("password", employee.password)

    db.session.commit()

    return jsonify({"message": "Employee updated."}), 200

@app.route("/delete_employee/<int:employee_id>", methods=["DELETE"])
def delete_employee(employee_id):
    employee = Employee.query.get(employee_id)

    if not employee:
        return jsonify({"message": "Employee not found."}), 404

    db.session.delete(employee)
    db.session.commit()

    return jsonify({"message": "Employee deleted!"}), 200

## ------Products paths----------
@app.route("/products", methods=["GET"])
def get_products():
    products = Product.query.all()
    json_products = list(map(lambda x: x.to_json(), products))
    return jsonify({"products": json_products})

@app.route("/create_product", methods=["POST"])
def create_product():
    name = request.json.get("name")
    price = request.json.get("price")
    description = request.json.get("description")

    if not name or not price:
        return jsonify({"message": "You must include a name and price"}), 400

    new_product = Product(name=name, price=price, description=description)
    try:
        db.session.add(new_product)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Product created"}), 201

@app.route("/update_product/<int:product_id>", methods=["PATCH"])
def update_product(product_id):
    product = Product.query.get(product_id)

    if not product:
        return jsonify({"message": "Product not found"}), 404

    data = request.json
    product.name = data.get("name", product.name)
    product.price = data.get("price", product.price)
    product.description = data.get("description", product.description)

    db.session.commit()

    return jsonify({"message": "Product updated."}), 201

@app.route("/delete_product/<int:product_id>", methods=["DELETE"])
def delete_product(product_id):
    product = Product.query.get(product_id)

    if not product:
        return jsonify({"message": "Product not found."}), 404

    db.session.delete(product)
    db.session.commit()

    return jsonify({"message": "Product deleted!"}), 200

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(host="0.0.0.0", port=5000, debug=False)