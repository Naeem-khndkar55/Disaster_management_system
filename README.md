# Disaster Management Backend

## Setup Instructions

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file with:
4.
## Database
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5100

4. Run `npm start` to start the server
5. The API will be available at `http://localhost:5000`

## API Endpoints

- Auth: `/api/auth/register`, `/api/auth/login`
- Crisis: `/api/crisis` (POST, GET)
- Donation: `/api/donation` (POST, GET)
- Volunteer: `/api/volunteer` (GET)
- Inventory: `/api/inventory` (POST, GET) [Protected]
- Admin: 
  - `/api/admin/crisis/:id` (PUT)
  - `/api/admin/volunteer/:id` (PUT)
  - `/api/admin/report/:type` (GET)
