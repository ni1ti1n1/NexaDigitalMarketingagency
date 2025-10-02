# NEXA Digital Marketing Agency - Full Stack Application

## Overview
A modern, professional full-stack digital marketing agency website with Express.js backend and dynamic frontend service management. Built with Node.js, Express.js, vanilla JavaScript, HTML5, and CSS3.

## Project Type
Full-stack web application with RESTful API and dynamic content management.

## Tech Stack

### Backend
- **Node.js** (v20) - JavaScript runtime
- **Express.js** (v5.1.0) - Web framework
- **CORS** (v2.8.5) - Cross-origin resource sharing

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **Vanilla JavaScript** - Dynamic interactions and API integration

## Custom Color Scheme
- Green Treeline: #478559
- Purple Baseline: #161748
- Pink Highlight: #f95d9b
- Bluewater Lowlight: #39a0ca

## Project Structure
```
/
├── index.html          # Main HTML file (all page sections)
├── css/
│   └── styles.css      # All CSS styles with custom color scheme
├── js/
│   └── script.js       # Frontend JavaScript (API calls, interactivity)
├── server.js           # Express.js backend server
├── package.json        # Node.js dependencies and scripts
├── .gitignore          # Git ignore patterns
└── README.md           # Original project documentation
```

## API Documentation

### Base URL
All API requests are made to: `/api`

### Endpoints

#### 1. GET /api/services
**Description:** Retrieve all services  
**Method:** GET  
**Response:** JSON array of service objects  
**Example:**
```json
[
  {
    "id": 1,
    "name": "SEO Optimization",
    "icon": "🔍",
    "description": "Boost your search engine rankings..."
  }
]
```

#### 2. POST /api/services
**Description:** Add a new service  
**Method:** POST  
**Headers:** `Content-Type: application/json`  
**Request Body:**
```json
{
  "name": "Service Name",
  "icon": "🎯",
  "description": "Service description..."
}
```
**Response:** JSON object of the created service with ID  
**Status:** 201 Created on success, 400 Bad Request if validation fails

#### 3. DELETE /api/services/:id
**Description:** Remove a service by ID  
**Method:** DELETE  
**URL Parameter:** `id` (integer)  
**Response:** JSON object with success message  
**Status:** 200 OK on success, 404 Not Found if service doesn't exist

## How to Start & Use

### Development
1. **Install Dependencies** (if needed):
   ```bash
   npm install
   ```

2. **Start the Server**:
   ```bash
   npm start
   ```
   Server will run on http://0.0.0.0:5000

3. **Access the Application**:
   - Open browser and navigate to the Replit preview URL
   - Website loads with all sections
   - Services are fetched dynamically from the backend API

### Using the Service Management Feature

1. **View Services**:
   - Services section displays all services from the backend
   - Each service shows icon, name, and description
   - Hover over a service card to see the delete button

2. **Add a New Service**:
   - Click "➕ Add New Service" button
   - Fill in the form:
     - Service Name (required)
     - Icon emoji (required, 1-2 characters)
     - Description (required)
   - Click "Add Service" to submit
   - Service appears immediately in the grid

3. **Remove a Service**:
   - Hover over any service card
   - Click the "✕" button in top-right corner
   - Confirm deletion in the popup
   - Service is removed immediately

## Features

### Frontend Features
- Responsive design (mobile, tablet, desktop)
- Smooth scroll navigation
- Dynamic service loading from API
- Service add/remove functionality
- Real-time success/error messaging
- Contact form with validation
- Scroll reveal animations
- Stats counter animation
- Mobile menu support
- SEO-ready structure

### Backend Features
- RESTful API architecture
- CORS enabled for cross-origin requests
- In-memory data storage (services array)
- JSON request/response handling
- Static file serving
- Error handling and validation
- Detailed console logging

## Frontend-Backend Interaction

1. **Page Load**: 
   - Frontend loads index.html
   - JavaScript makes GET request to `/api/services`
   - Services are dynamically rendered in the grid

2. **Adding Service**:
   - User fills form and submits
   - JavaScript sends POST request with service data
   - Backend validates and adds service
   - Frontend receives response and reloads services
   - Success message displayed

3. **Deleting Service**:
   - User clicks delete button
   - JavaScript sends DELETE request to `/api/services/:id`
   - Backend removes service from array
   - Frontend reloads services to reflect changes
   - Success message displayed

## Deployment

### Development Deployment (Replit)
- Workflow automatically starts with `npm start`
- Server binds to 0.0.0.0:5000
- Static files served from root directory

### Production Deployment
- Configured for autoscale deployment (stateless)
- Uses `npm start` command
- Backend serves both API and static files
- No build step required

## Environment Variables
None required for basic operation. The app runs on PORT 5000 by default.

## Data Persistence
Currently uses in-memory storage. Services reset when server restarts. For persistence, consider adding:
- Database (PostgreSQL, MongoDB, etc.)
- JSON file storage
- Redis for caching

## Security Considerations
- CORS enabled for all origins (restrict in production)
- No authentication/authorization (add if needed)
- Input validation on backend
- Frontend form validation

## Recent Changes
**October 02, 2025** - Converted from static website to full-stack application:
- Added Express.js backend with RESTful API
- Implemented dynamic service management (add/remove)
- Reorganized file structure (css/, js/ directories)
- Updated frontend to consume backend API
- Added CORS support
- Created comprehensive API documentation

## Date Imported
October 02, 2025 (originally static, converted to full-stack same day)
