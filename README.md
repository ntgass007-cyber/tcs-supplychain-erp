# TCS Supply Chain ERP

## Project Overview
The TCS Supply Chain ERP is an integrated solution designed to enhance the efficiency and effectiveness of supply chain operations. It provides real-time visibility and control over supply chain processes, enabling organizations to manage inventory, orders, and suppliers with ease.

## Features
- Comprehensive inventory management
- Order processing and tracking
- Supplier management
- Real-time reporting and analytics
- User-friendly interface

## Technology Stack
- Frontend: React.js
- Backend: Node.js
- Database: MongoDB
- Hosting: AWS

## Installation Instructions
1. Clone the repository
   ```bash
   git clone https://github.com/ntgass007-cyber/tcs-supplychain-erp.git
   ```
2. Navigate to the project directory
   ```bash
   cd tcs-supplychain-erp
   ```
3. Install the required dependencies
   ```bash
   npm install
   ```
4. Set up environment variables
   Create a `.env` file in the root directory and add necessary configurations.
5. Start the application
   ```bash
   npm start
   ```

## API Endpoints
- **GET /api/inventory**: Fetches the list of inventory items.
- **POST /api/orders**: Creates a new order.
- **GET /api/suppliers**: Retrieves the list of suppliers.

## Usage Examples
1. **Fetch Inventory**
   ```bash
   curl -X GET http://localhost:3000/api/inventory
   ```

2. **Create Order**
   ```bash
   curl -X POST http://localhost:3000/api/orders -d '{"productId": "123", "quantity": 2}'
   ```

## Project Roadmap
- **Q1 2026**: Launch MVP
- **Q2 2026**: User feedback integration and feature enhancements
- **Q3 2026**: Expand API functionalities
- **Q4 2026**: Start mobile application development