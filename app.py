from flask import Flask, jsonify, request
app = Flask(__name__)

# Sample data for demonstration purposes
orders = []
shipments = []
inventory = []
warehouses = []
suppliers = []

@app.route('/orders', methods=['GET', 'POST'])
def handle_orders():
    if request.method == 'POST':
        order = request.json
        orders.append(order)
        return jsonify(order), 201
    return jsonify(orders)

@app.route('/shipments', methods=['GET', 'POST'])
def handle_shipments():
    if request.method == 'POST':
        shipment = request.json
        shipments.append(shipment)
        return jsonify(shipment), 201
    return jsonify(shipments)

@app.route('/inventory', methods=['GET', 'POST'])
def handle_inventory():
    if request.method == 'POST':
        item = request.json
        inventory.append(item)
        return jsonify(item), 201
    return jsonify(inventory)

@app.route('/warehouses', methods=['GET', 'POST'])
def handle_warehouses():
    if request.method == 'POST':
        warehouse = request.json
        warehouses.append(warehouse)
        return jsonify(warehouse), 201
    return jsonify(warehouses)

@app.route('/suppliers', methods=['GET', 'POST'])
def handle_suppliers():
    if request.method == 'POST':
        supplier = request.json
        suppliers.append(supplier)
        return jsonify(supplier), 201
    return jsonify(suppliers)

@app.route('/dashboard/metrics', methods=['GET'])
def get_dashboard_metrics():
    metrics = {'total_orders': len(orders), 'total_shipments': len(shipments)}
    return jsonify(metrics)

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify(status='healthy'), 200

if __name__ == '__main__':
    app.run(debug=True)