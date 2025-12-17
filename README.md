# E-Mart Dashboard Application

A comprehensive full-stack e-commerce dashboard application for managing products, orders, users, and business analytics. Built with Angular (frontend) and Node.js/Express (backend), using MongoDB as the database.

---

## 1. Introduction

### Technology Stack

**Frontend:**
- Angular 16.1.0
- Angular Material UI Components
- Bootstrap 5.3.0
- Chart.js & ng2-charts for data visualization
- RxJS for reactive programming

**Backend:**
- Node.js with Express.js framework
- MongoDB with Mongoose ODM
- JWT (JSON Web Tokens) for authentication
- bcryptjs for password hashing
- Multer for file uploads
- Nodemailer for email notifications

### Core Features

- **User Management**: Registration, authentication, profile management, password recovery
- **Product Management**: Complete CRUD operations for product catalog
- **Order Management**: Order processing, status tracking, cancellation handling
- **Analytics Dashboard**: Real-time charts and reports for business insights
- **Security**: JWT-based authentication, route guards, password encryption

---

## 2. Project Specifications

### 2.1 Project Need

The E-Mart Dashboard Application was developed to address the critical need for a centralized, efficient, and user-friendly platform to manage all aspects of an e-commerce business. The project addresses several key business requirements:

#### Business Challenges Addressed:

1. **Fragmented Management Systems**
   - **Problem**: Many businesses struggle with managing products, orders, and customer data across multiple disconnected systems or manual processes.
   - **Solution**: Provides a unified dashboard that consolidates all e-commerce operations in one place, eliminating the need for multiple tools and reducing operational complexity.

2. **Lack of Real-Time Business Insights**
   - **Problem**: Business owners often lack immediate visibility into sales trends, order patterns, and product performance, making data-driven decision-making difficult.
   - **Solution**: Integrated analytics dashboard with weekly and monthly charts that provide real-time insights into orders and product trends, enabling proactive business decisions.

3. **Inefficient Order Processing**
   - **Problem**: Manual order management leads to delays, errors, and poor customer experience. Tracking order status and managing cancellations becomes cumbersome.
   - **Solution**: Automated order management system with status tracking (Pending, Completed, Cancelled), approval workflows, and streamlined cancellation processes with customer detail tracking.

4. **User Account Management Complexity**
   - **Problem**: Managing user accounts, authentication, password resets, and profile updates requires secure and efficient systems.
   - **Solution**: Comprehensive user management system with secure authentication (JWT), password recovery via email, profile management, and account deletion capabilities.

5. **Product Catalog Management**
   - **Problem**: Maintaining an up-to-date product catalog with accurate pricing, inventory, and images is time-consuming and error-prone.
   - **Solution**: Complete product management system with image uploads, product codes, pricing (original and discounted), quantity tracking, and date management.

6. **Security and Data Protection**
   - **Problem**: E-commerce platforms handle sensitive customer data and require robust security measures to protect user information and prevent unauthorized access.
   - **Solution**: Implements industry-standard security practices including JWT authentication, password hashing with bcrypt, route guards, and secure session management.

7. **Scalability and Maintainability**
   - **Problem**: Businesses need systems that can grow with their operations and are easy to maintain and extend.
   - **Solution**: Built with modern, scalable technologies (Angular, Node.js, MongoDB) following best practices, making it easy to add new features and scale as needed.

#### Target Users:

- **E-commerce Business Owners**: Who need to manage their online store operations efficiently
- **Store Administrators**: Who handle day-to-day operations including order processing and product management
- **Business Analysts**: Who require insights into sales trends and business performance

#### Key Benefits:

- **Increased Efficiency**: Streamlined workflows reduce time spent on administrative tasks
- **Better Decision Making**: Real-time analytics provide actionable business insights
- **Improved Customer Service**: Quick access to order and customer information enables faster response times
- **Enhanced Security**: Robust authentication and data protection measures ensure user data safety
- **Cost Reduction**: Single integrated system eliminates need for multiple software subscriptions

### 2.2 Project Overview

The E-Mart Dashboard Application is a comprehensive web-based solution designed to serve as the central command center for e-commerce operations. The application provides a complete suite of tools for managing all aspects of an online business, from product catalog management to order processing and business analytics.

#### System Architecture:

The application follows a **three-tier architecture**:

1. **Presentation Layer (Frontend)**
   - Angular-based single-page application (SPA)
   - Responsive UI built with Angular Material and Bootstrap
   - Client-side routing with route guards for security
   - Real-time data visualization with Chart.js

2. **Business Logic Layer (Backend API)**
   - RESTful API built with Express.js
   - Authentication and authorization middleware
   - Business logic for order processing, user management, and product operations
   - File upload handling for images

3. **Data Layer (Database)**
   - MongoDB for flexible document storage
   - Mongoose ODM for data modeling and validation
   - Collections for Users, Products, Orders, and Cancellations

#### Application Modules:

**1. Authentication & User Management Module**
   - User registration with profile image upload
   - Secure login with JWT token generation (7-day expiration)
   - Password management (change, forgot, reset via email)
   - User profile viewing and editing
   - Account deletion with verification
   - Session management with token-based authentication

**2. Product Management Module**
   - Create, Read, Update, Delete (CRUD) operations for products
   - Product attributes: name, code, quantity, pricing (original and discounted)
   - Image upload and management
   - Product date tracking
   - Product listing and search functionality

**3. Order Management Module**
   - Order creation with complete customer information
   - Order status management (Pending → Completed/Cancelled)
   - Order approval/rejection workflow
   - Order cancellation with reason tracking
   - Customer details viewing (name, email, phone, address)
   - Advanced search and filtering (by item name, product code, order date)
   - Order history tracking with dates

**4. Analytics & Reporting Module**
   - **Weekly Analysis**: Line chart showing orders and products for the last 7 days
   - **Monthly Report**: Bar chart displaying trends over the last 12 months
   - Real-time data updates
   - Visual representation of business performance metrics

**5. Category & Offer Management Module**
   - Category organization for products
   - Deal and offer management
   - Sales tracking

**6. Cancellation Management Module**
   - Order cancellation processing
   - Cancellation reason tracking
   - Cancellation date logging
   - Integration with order status updates

#### Technical Features:

**Security Features:**
- JWT-based authentication with token expiration
- Password hashing using bcrypt (10 rounds)
- Route guards to protect authenticated routes
- HTTP interceptors for request/response handling
- CORS configuration for secure cross-origin requests
- Secure cookie management

**Data Management:**
- MongoDB document-based storage for flexible schemas
- Mongoose schema validation
- File upload handling with Multer
- Image storage and management
- Data relationships between users, products, and orders

**User Experience:**
- Responsive design for desktop and mobile devices
- Material Design components for modern UI
- Loading indicators and error handling
- Search and filter capabilities
- Status indicators with color coding
- Dialog modals for confirmations and details
- Toast notifications for user feedback

**API Architecture:**
- RESTful API design
- Standardized error handling
- JSON request/response format
- File upload support (multipart/form-data)
- Token-based authentication headers

#### Data Flow:

1. **User Authentication Flow:**
   - User submits credentials → Backend validates → JWT token generated → Token stored in localStorage → Protected routes accessible

2. **Order Processing Flow:**
   - Order created with customer details → Stored in database with "Pending" status → Admin reviews order → Approve (Completed) or Cancel → Status updated → Customer notified

3. **Product Management Flow:**
   - Product created/updated → Image uploaded (if provided) → Data validated → Stored in database → Available in product catalog → Visible in analytics

4. **Analytics Generation Flow:**
   - Orders and products fetched from database → Data processed by date → Chart data prepared → Visualizations rendered → Real-time updates on data changes

#### Development Environment:

- **Frontend Server**: `http://localhost:4200` (Angular Development Server)
- **Backend API**: `http://localhost:9000` (Node.js/Express Server)
- **Database**: MongoDB (local or cloud instance)
- **File Storage**: `backend/src/uploads/` directory

#### Future Enhancement Possibilities:

- Payment gateway integration
- Inventory management with low-stock alerts
- Customer relationship management (CRM) features
- Advanced reporting and export capabilities
- Multi-user roles and permissions
- Email notifications for order status changes
- Product reviews and ratings
- Shipping and delivery tracking
- Multi-currency support
- Mobile application development

---

## 3. Specific Requirements

### 3.1 External Interface Requirements

External interface requirements define how the E-Mart Dashboard Application interacts with external systems, users, and services.

#### 3.1.1 User Interfaces

**Web Browser Interface:**
- **Supported Browsers**: 
  - Google Chrome (latest 2 versions)
  - Mozilla Firefox (latest 2 versions)
  - Microsoft Edge (latest 2 versions)
  - Safari (latest 2 versions)
- **Screen Resolution Support**: 
  - Desktop: 1920x1080 (Full HD) and above
  - Laptop: 1366x768 and above
  - Tablet: 768x1024 (portrait/landscape)
  - Mobile: 375x667 (iPhone SE) and above
- **Responsive Design**: Mobile-first approach with breakpoints at 320px, 768px, 1024px, and 1920px
- **Accessibility**: WCAG 2.1 Level AA compliance for screen readers and keyboard navigation

**User Interface Components:**
- **Navigation**: Side navigation drawer with collapsible menu
- **Dashboard**: Interactive charts and data visualization widgets
- **Forms**: Material Design form controls with validation
- **Tables**: Sortable and filterable data tables
- **Modals**: Dialog boxes for confirmations and detailed views
- **Notifications**: Toast messages for user feedback
- **Loading States**: Spinner indicators for async operations

#### 3.1.2 API Interfaces

**RESTful API Endpoints:**
- **Base URL**: `http://localhost:9000/api` (development) / `https://api.emart.com/api` (production)
- **Authentication**: Token-based authentication via JWT
- **Request Format**: JSON (application/json) for most endpoints
- **File Upload Format**: multipart/form-data for image uploads
- **Response Format**: JSON with standardized structure:
  ```json
  {
    "message": "Success message",
    "status": 200,
    "data": { ... }
  }
  ```

**External Service Interfaces:**

1. **Email Service (Nodemailer)**
   - **Purpose**: Password reset and account notifications
   - **Protocol**: SMTP
   - **Configuration**: Environment-based SMTP settings
   - **Email Types**: 
     - Password reset links
     - Account verification (future enhancement)
     - Order status notifications (future enhancement)

2. **File Storage Interface**
   - **Local Storage**: File system storage in `backend/src/uploads/`
   - **Supported Formats**: 
     - Images: JPG, JPEG, PNG, GIF
     - Max File Size: 5MB per file
   - **Naming Convention**: Timestamp-based filenames (e.g., `1765219413966.jpg`)
   - **Access URL**: `http://localhost:9000/uploads/{filename}`

#### 3.1.3 Database Interface

**MongoDB Connection:**
- **Connection String**: Environment variable `DB_URI` or `MONGODB_URI`
- **Connection Method**: Mongoose ODM
- **Connection Options**: 
  - `useNewUrlParser: true`
  - Automatic connection pooling
  - Connection retry mechanism
- **Database Collections**:
  - `users` - User accounts and authentication data
  - `products` - Product catalog information
  - `oderlists` - Order records (Note: typo in model name)
  - `cancels` - Cancellation records

#### 3.1.4 Third-Party Library Interfaces

**Frontend Libraries:**
- **Angular Material**: UI component library
- **Chart.js / ng2-charts**: Data visualization
- **RxJS**: Reactive programming and HTTP client
- **Bootstrap**: CSS framework for responsive design
- **ngx-cookie-service**: Cookie management

**Backend Libraries:**
- **Express.js**: Web application framework
- **Mongoose**: MongoDB object modeling
- **JWT (jsonwebtoken)**: Token generation and verification
- **bcryptjs**: Password hashing
- **Multer**: File upload handling
- **Nodemailer**: Email service integration
- **CORS**: Cross-origin resource sharing

### 3.2 Hardware Interfaces

The E-Mart Dashboard Application is a web-based software solution that operates on standard computing hardware through web browsers. The application does not require direct hardware interfaces but has specific hardware requirements for optimal performance.

#### 3.2.1 Client-Side Hardware Requirements

**Minimum Requirements:**
- **Processor**: Intel Core i3 or equivalent (2.0 GHz or higher)
- **RAM**: 4 GB minimum, 8 GB recommended
- **Storage**: 500 MB free disk space for browser cache
- **Network**: Broadband internet connection (minimum 1 Mbps)
- **Display**: 1366x768 resolution minimum
- **Input Devices**: Keyboard and mouse/touchpad

**Recommended Requirements:**
- **Processor**: Intel Core i5 or equivalent (2.5 GHz or higher)
- **RAM**: 8 GB or higher
- **Storage**: 2 GB free disk space
- **Network**: High-speed internet connection (10 Mbps or higher)
- **Display**: 1920x1080 (Full HD) or higher
- **Graphics**: Hardware acceleration support for smooth chart rendering

**Mobile Device Requirements:**
- **Smartphones**: iOS 12+ or Android 8.0+
- **Tablets**: iPad (iOS 12+) or Android tablets (Android 8.0+)
- **Screen Size**: Minimum 4.7 inches (smartphone), 7 inches (tablet)
- **Touch Support**: Multi-touch capable

#### 3.2.2 Server-Side Hardware Requirements

**Development Environment:**
- **Processor**: Dual-core processor (2.0 GHz or higher)
- **RAM**: 4 GB minimum
- **Storage**: 10 GB free space (for application, dependencies, and file uploads)
- **Network**: Local network or internet connection

**Production Environment (Recommended):**
- **Processor**: Quad-core processor (2.5 GHz or higher)
- **RAM**: 8 GB minimum, 16 GB recommended
- **Storage**: 
  - 50 GB SSD for application and database
  - Additional storage for file uploads (scales with usage)
- **Network**: 
  - High-speed internet connection (100 Mbps or higher)
  - Static IP address for production deployment
  - Load balancer support (for scaling)

**Database Server Requirements:**
- **MongoDB Server**: 
  - Minimum: 2 CPU cores, 4 GB RAM, 20 GB storage
  - Recommended: 4 CPU cores, 8 GB RAM, 100 GB SSD storage
  - Can run on same server or separate dedicated server

#### 3.2.3 Network Hardware

**Network Infrastructure:**
- **Router/Switch**: Standard network equipment
- **Firewall**: Hardware or software firewall for security
- **Load Balancer**: For high-availability deployments (optional)
- **SSL/TLS Certificate**: For HTTPS encryption (production requirement)

### 3.3 Software Interfaces

Software interfaces define the interactions between the application and other software components, operating systems, and runtime environments.

#### 3.3.1 Operating System Interfaces

**Client-Side:**
- **Windows**: Windows 10 or later
- **macOS**: macOS 10.14 (Mojave) or later
- **Linux**: Ubuntu 18.04 LTS or later, Fedora 30+, Debian 10+
- **Mobile OS**: 
  - iOS 12.0 or later
  - Android 8.0 (API level 26) or later

**Server-Side:**
- **Windows Server**: Windows Server 2016 or later
- **Linux**: Ubuntu 20.04 LTS or later (recommended)
- **macOS**: macOS 10.14 or later (for development)

#### 3.3.2 Runtime Environment Interfaces

**Frontend Runtime:**
- **Node.js**: Version 14.x or higher (for Angular CLI)
- **Angular CLI**: Version 16.1.0
- **Browser JavaScript Engine**: 
  - V8 (Chrome, Edge)
  - SpiderMonkey (Firefox)
  - JavaScriptCore (Safari)

**Backend Runtime:**
- **Node.js**: Version 14.x or higher (LTS recommended)
- **npm**: Version 6.x or higher
- **Express.js**: Version 4.18.2

#### 3.3.3 Database Software Interface

**MongoDB:**
- **Version**: MongoDB 4.4 or higher (compatible with Mongoose 7.4.3)
- **Connection Protocol**: MongoDB wire protocol
- **ODM**: Mongoose 7.4.3
- **Connection String Format**: 
  ```
  mongodb://[username:password@]host[:port][/database][?options]
  ```
- **Cloud Alternative**: MongoDB Atlas (cloud-hosted MongoDB)

#### 3.3.4 Development Tools Interfaces

**Package Managers:**
- **npm**: Node Package Manager (v6.x or higher)
- **yarn**: Alternative package manager (optional)

**Build Tools:**
- **Angular CLI**: Build and development server
- **TypeScript Compiler**: Version 5.1.3
- **Webpack**: Bundled with Angular CLI

**Version Control:**
- **Git**: For source code version control
- **GitHub/GitLab/Bitbucket**: Repository hosting (optional)

#### 3.3.5 API Integration Interfaces

**HTTP Client:**
- **Angular HttpClient**: Built-in HTTP client for API calls
- **Request Interceptors**: For adding authentication tokens
- **Response Interceptors**: For error handling

**Authentication Interface:**
- **JWT Library**: jsonwebtoken (v9.0.1)
- **Token Storage**: Browser localStorage
- **Token Format**: Bearer token in Authorization header
- **Token Expiration**: 7 days (604800 seconds)

**File Upload Interface:**
- **Multer**: Middleware for handling multipart/form-data
- **Storage**: Local file system (configurable for cloud storage)
- **File Processing**: Automatic filename generation with timestamps

### 3.4 Communications Protocols (Networking Protocols)

The application uses standard web protocols for communication between client and server, as well as for external service integration.

#### 3.4.1 Application Layer Protocols

**HTTP/HTTPS:**
- **Protocol**: HTTP 1.1 (development) / HTTPS (production)
- **Port**: 
  - Frontend: 4200 (development)
  - Backend: 9000 (development) / 443 (HTTPS production) / 80 (HTTP production)
- **Methods**: GET, POST, PUT, DELETE (via POST for updates)
- **Status Codes**: 
  - 200: Success
  - 201: Created
  - 400: Bad Request
  - 401: Unauthorized
  - 404: Not Found
  - 500: Internal Server Error

**REST API Protocol:**
- **Architecture Style**: RESTful
- **Content-Type**: 
  - `application/json` for JSON data
  - `multipart/form-data` for file uploads
- **Accept Headers**: `application/json`
- **Base Path**: `/api`

#### 3.4.2 Transport Layer Protocols

**TCP/IP:**
- **Protocol**: Transmission Control Protocol (TCP)
- **Reliability**: Connection-oriented, guaranteed delivery
- **Port Configuration**: 
  - Frontend dev server: 4200
  - Backend API server: 9000
  - MongoDB: 27017 (default)

#### 3.4.3 Network Security Protocols

**CORS (Cross-Origin Resource Sharing):**
- **Configuration**: 
  ```javascript
  {
    origin: "http://localhost:4200",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
  }
  ```
- **Purpose**: Allow frontend to communicate with backend API
- **Credentials**: Cookies and authorization headers enabled

**TLS/SSL (Production):**
- **Protocol**: TLS 1.2 or higher (recommended for production)
- **Certificate**: SSL/TLS certificate required for HTTPS
- **Encryption**: AES-256 encryption for data in transit

**JWT (JSON Web Tokens):**
- **Algorithm**: HS256 (HMAC with SHA-256)
- **Token Structure**: Header.Payload.Signature
- **Transmission**: Bearer token in Authorization header
- **Format**: `Authorization: Bearer <token>`

#### 3.4.4 Database Communication Protocol

**MongoDB Wire Protocol:**
- **Protocol**: MongoDB native wire protocol
- **Port**: 27017 (default)
- **Connection**: TCP/IP connection
- **Authentication**: Username/password (if configured)
- **Connection String**: Environment variable based

#### 3.4.5 Email Communication Protocol

**SMTP (Simple Mail Transfer Protocol):**
- **Protocol**: SMTP for sending emails
- **Port**: 587 (TLS) or 465 (SSL)
- **Library**: Nodemailer
- **Configuration**: Environment-based SMTP settings
- **Use Cases**: Password reset emails, account notifications

#### 3.4.6 WebSocket (Future Enhancement)**

**Potential Protocol:**
- **WebSocket**: For real-time updates (not currently implemented)
- **Use Cases**: Real-time order notifications, live dashboard updates
- **Port**: 8080 or 3001 (typical WebSocket ports)

### 3.5 Security / Maintainability / Performance

#### 3.5.1 Security Requirements

**Authentication & Authorization:**
- **JWT Authentication**: 
  - Token-based authentication with 7-day expiration
  - Secure token storage in localStorage
  - Token validation on every protected route
  - Automatic token refresh mechanism (future enhancement)
- **Password Security**:
  - bcrypt hashing with 10 salt rounds
  - Password confirmation on registration
  - Password strength requirements (future enhancement)
  - Password history tracking (future enhancement)
- **Route Protection**:
  - Angular route guards for frontend protection
  - Backend middleware authentication for API endpoints
  - Unauthorized access redirects to login

**Data Security:**
- **Input Validation**: 
  - Frontend form validation
  - Backend schema validation with Mongoose
  - SQL injection prevention (N/A - using NoSQL)
  - XSS (Cross-Site Scripting) prevention via Angular's built-in sanitization
- **Data Encryption**:
  - Passwords hashed with bcrypt
  - JWT tokens signed with secret key
  - HTTPS for data in transit (production requirement)
- **File Upload Security**:
  - File type validation (images only)
  - File size limits (5MB maximum)
  - Secure filename generation
  - File storage in protected directory

**Session Management:**
- **Token Storage**: localStorage (consider httpOnly cookies for enhanced security)
- **Token Expiration**: 7 days with automatic cleanup
- **Logout**: Token invalidation on server and client
- **Session Timeout**: Implemented via token expiration

**API Security:**
- **CORS Configuration**: Restricted to specific origins
- **Rate Limiting**: Recommended for production (future enhancement)
- **Request Validation**: All inputs validated before processing
- **Error Handling**: Generic error messages to prevent information leakage

**Security Best Practices:**
- Environment variables for sensitive data (SECRET_KEY, DB_URI)
- No hardcoded credentials
- Regular dependency updates for security patches
- Security headers (future enhancement: Helmet.js)

#### 3.5.2 Maintainability Requirements

**Code Organization:**
- **Modular Architecture**: 
  - Component-based frontend structure
  - Service-based backend architecture
  - Separation of concerns (models, routes, middleware)
- **File Structure**: 
  - Clear directory hierarchy
  - Consistent naming conventions
  - Feature-based organization
- **Code Documentation**:
  - Inline comments for complex logic
  - README documentation
  - API endpoint documentation

**Version Control:**
- **Git Repository**: Source code version control
- **Branching Strategy**: Feature branches for new development
- **Commit Messages**: Descriptive commit messages
- **Code Review**: Peer review process (recommended)

**Dependency Management:**
- **Package Management**: npm with package.json
- **Version Pinning**: Specific versions for stability
- **Dependency Updates**: Regular security and feature updates
- **Lock Files**: package-lock.json for reproducible builds

**Testing & Quality Assurance:**
- **Unit Testing**: Angular testing framework (Jasmine/Karma)
- **Integration Testing**: API endpoint testing
- **Code Quality**: ESLint/TSLint for code standards
- **Error Logging**: Console logging with error tracking (enhance with logging service)

**Documentation:**
- **README**: Comprehensive project documentation
- **API Documentation**: Endpoint descriptions and examples
- **Code Comments**: Inline documentation for complex functions
- **User Guide**: Application usage documentation (future enhancement)

**Refactoring & Updates:**
- **Code Reusability**: Shared services and components
- **DRY Principle**: Don't Repeat Yourself
- **Regular Refactoring**: Code cleanup and optimization
- **Backward Compatibility**: Maintain API compatibility during updates

#### 3.5.3 Performance Requirements

**Frontend Performance:**
- **Initial Load Time**: 
  - Target: < 3 seconds on 3G connection
  - Target: < 1 second on broadband
- **Page Load Optimization**:
  - Lazy loading for routes
  - Code splitting and tree shaking
  - Image optimization and lazy loading
  - Minification and compression (production build)
- **Runtime Performance**:
  - Smooth scrolling and interactions (60 FPS)
  - Fast search and filter operations
  - Efficient chart rendering
  - Optimized change detection (Angular)

**Backend Performance:**
- **API Response Time**:
  - Target: < 200ms for simple queries
  - Target: < 500ms for complex queries
  - Target: < 1s for file uploads
- **Database Performance**:
  - Indexed queries for fast lookups
  - Connection pooling
  - Query optimization
  - Efficient data aggregation
- **Server Resources**:
  - CPU usage: < 70% under normal load
  - Memory usage: Efficient memory management
  - File I/O: Optimized file operations

**Database Performance:**
- **Query Optimization**: 
  - Indexed fields (email, _id, productCode)
  - Efficient aggregation pipelines
  - Connection pooling
- **Data Storage**:
  - Efficient document structure
  - Minimal data duplication
  - Proper data relationships

**Network Performance:**
- **Bandwidth Optimization**:
  - Compressed responses (gzip)
  - Efficient data transfer formats (JSON)
  - Image compression
  - Caching strategies
- **Concurrent Users**:
  - Support for 100+ concurrent users (development)
  - Scalable to 1000+ users with proper infrastructure
  - Load balancing support (future enhancement)

**Caching Strategies:**
- **Browser Caching**: Static assets caching
- **API Response Caching**: Implement caching for frequently accessed data (future enhancement)
- **Session Caching**: Token and user data caching

**Monitoring & Optimization:**
- **Performance Monitoring**: 
  - Response time tracking
  - Error rate monitoring
  - Resource usage monitoring
- **Optimization Tools**:
  - Angular DevTools for frontend profiling
  - Node.js profiling tools
  - Database query analysis
  - Network analysis tools

**Scalability:**
- **Horizontal Scaling**: Support for multiple server instances
- **Database Scaling**: MongoDB replica sets and sharding support
- **Load Balancing**: Ready for load balancer integration
- **CDN Integration**: Static asset delivery via CDN (future enhancement)

---

## 4. Software Product Features

### 4.1 System Architecture

The E-Mart Dashboard Application follows a **three-tier client-server architecture** that separates concerns into distinct layers for better maintainability, scalability, and security.

#### 4.1.1 Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                        │
│                    (Angular Frontend)                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Login   │  │  Home    │  │ Products │  │  Orders  │   │
│  │ Component│  │ Component│  │Component │  │ Component │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│         │            │              │              │         │
│         └────────────┴──────────────┴──────────────┘         │
│                            │                                  │
│                    ┌───────▼────────┐                        │
│                    │  Dashboard     │                        │
│                    │  Service       │                        │
│                    │  (HTTP Client) │                        │
│                    └───────┬────────┘                        │
└────────────────────────────┼─────────────────────────────────┘
                              │ HTTP/REST API
                              │ (JSON, JWT Token)
┌─────────────────────────────▼─────────────────────────────────┐
│                  BUSINESS LOGIC LAYER                        │
│                  (Node.js/Express Backend)                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Routes     │  │  Middleware  │  │   Services   │      │
│  │  (API)       │  │  (Auth, CORS) │  │  (Business   │      │
│  │              │  │              │  │   Logic)     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│         │                │                    │              │
│         └────────────────┴────────────────────┘              │
│                            │                                  │
│                    ┌───────▼────────┐                        │
│                    │  Controllers   │                        │
│                    │  & Validators  │                        │
│                    └───────┬────────┘                        │
└────────────────────────────┼─────────────────────────────────┘
                              │ Mongoose ODM
                              │ MongoDB Wire Protocol
┌─────────────────────────────▼─────────────────────────────────┐
│                      DATA LAYER                                │
│                    (MongoDB Database)                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│  │  Users   │  │ Products │  │  Orders  │  │ Cancels  │     │
│  │ Collection│ │Collection│ │Collection│ │Collection │     │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘     │
└────────────────────────────────────────────────────────────────┘
```

#### 4.1.2 Presentation Layer (Frontend)

**Technology Stack:**
- **Framework**: Angular 16.1.0 (TypeScript)
- **UI Libraries**: Angular Material, Bootstrap 5.3.0
- **State Management**: RxJS Observables, BehaviorSubject
- **HTTP Client**: Angular HttpClient with interceptors
- **Routing**: Angular Router with route guards

**Key Components:**
- **App Component**: Root component with navigation structure
- **App Nav Component**: Side navigation drawer and toolbar
- **Home Component**: Dashboard with analytics charts
- **Login/Register Components**: Authentication interfaces
- **Product Components**: Product management UI
- **Order Components**: Order management and tracking
- **User Components**: Profile management
- **Service Layer**: DashboardService for API communication

**Architecture Patterns:**
- **Component-Based Architecture**: Modular, reusable components
- **Service-Oriented**: Business logic in services
- **Reactive Programming**: RxJS for async operations
- **Dependency Injection**: Angular DI for loose coupling

#### 4.1.3 Business Logic Layer (Backend)

**Technology Stack:**
- **Runtime**: Node.js (v14+)
- **Framework**: Express.js 4.18.2
- **Language**: JavaScript (ES6+)

**Layer Structure:**

1. **Route Layer** (`/routes/router.js`):
   - RESTful API endpoint definitions
   - Request routing and parameter extraction
   - Response formatting

2. **Middleware Layer** (`/middleware/`):
   - **Authentication Middleware**: JWT token validation
   - **Email Middleware**: SMTP email service integration
   - **CORS Middleware**: Cross-origin resource sharing
   - **Error Handling**: Centralized error processing

3. **Controller Logic** (within routes):
   - Request validation
   - Business rule enforcement
   - Data transformation
   - Response generation

4. **File Upload Handler**:
   - Multer middleware for multipart/form-data
   - File validation and storage
   - Image processing

#### 4.1.4 Data Layer

**Technology Stack:**
- **Database**: MongoDB (NoSQL document database)
- **ODM**: Mongoose 7.4.3
- **Connection**: MongoDB wire protocol

**Data Models:**
- **User Model**: User accounts and authentication
- **Product Model**: Product catalog
- **OrderList Model**: Order records
- **Cancel Model**: Cancellation records

**Data Access Pattern:**
- **ODM Pattern**: Mongoose provides object-document mapping
- **Schema Validation**: Mongoose schemas enforce data structure
- **Connection Pooling**: Automatic connection management

#### 4.1.5 Communication Flow

1. **User Request Flow**:
   ```
   User Action → Angular Component → DashboardService → HTTP Request 
   → Express Router → Middleware (Auth) → Controller → Mongoose Model 
   → MongoDB → Response → Component Update → UI Refresh
   ```

2. **Authentication Flow**:
   ```
   Login Request → Backend Validation → JWT Generation → Token Storage 
   → Protected Route Access → Token Validation → Request Processing
   ```

3. **File Upload Flow**:
   ```
   File Selection → FormData Creation → Multer Middleware → File Validation 
   → Storage (uploads/) → Path Storage in DB → Image URL Generation
   ```

#### 4.1.6 Security Architecture

- **Frontend Security**: Route guards, token storage, XSS prevention
- **Backend Security**: JWT validation, password hashing, input sanitization
- **Network Security**: CORS configuration, HTTPS (production)
- **Data Security**: Encrypted passwords, secure token transmission

### 4.2 Database Requirements

The application uses MongoDB, a NoSQL document database, which provides flexibility for evolving data structures and efficient storage of related data.

#### 4.2.1 Database System

**Database Type**: MongoDB (Document-Oriented NoSQL Database)
**ODM**: Mongoose 7.4.3
**Connection**: MongoDB wire protocol via Mongoose

#### 4.2.2 Database Collections

**1. Users Collection**
- **Purpose**: Store user account information and authentication data
- **Schema Fields**:
  - `_id`: ObjectId (Primary Key, Auto-generated)
  - `name`: String (Required) - User's full name
  - `email`: String (Required, Unique) - User's email address
  - `password`: String (Required, Hashed) - Encrypted password
  - `newPassword`: String (Optional) - For password updates
  - `confirmPassword`: String (Required, Hashed) - Password confirmation
  - `phone`: Number (Unique) - User's phone number
  - `image`: String (Optional) - Profile image path
  - `location`: String (Optional) - User's location
  - `tokens`: Array of Objects - JWT tokens for session management
    - `token`: String (Required) - Individual JWT token

**Indexes:**
- `email`: Unique index
- `phone`: Unique index
- `_id`: Primary key index (automatic)

**2. Products Collection**
- **Purpose**: Store product catalog information
- **Schema Fields**:
  - `_id`: ObjectId (Primary Key, Auto-generated)
  - `itemName`: String (Required) - Product name
  - `quantity`: Number (Optional) - Available stock quantity
  - `productCode`: String (Required) - Unique product identifier
  - `productDate`: String (Optional) - Product creation/update date
  - `actualPrice`: Number (Required) - Original price (Note: not included in POST /api/product route, but model supports it)
  - `price`: Number (Required) - Selling price (discounted)
  - `image`: String (Optional) - Product image path (Note: image upload not implemented in POST /api/product route)

**Indexes:**
- `productCode`: Index for fast product lookups
- `_id`: Primary key index (automatic)

**3. OrderList Collection (OderList - Note: typo in model name)**
- **Purpose**: Store order records and customer information
- **Model File**: `backend/src/models/orderList.js`
- **Collection Name**: 'OderList' (Note: typo - missing 'r' in collection name)
- **Schema Fields**:
  - `_id`: ObjectId (Primary Key, Auto-generated)
  - `itemName`: String (Required) - Ordered product name
  - `quantity`: Number (Optional) - Order quantity
  - `productCode`: String (Required) - Product code reference
  - `orderDate`: String (Optional) - Order placement date
  - `price`: Number (Required) - Order price
  - `actualPrice`: Number (Optional) - Original product price
  - `image`: String (Optional) - Product image path
  - `orderCancelDate`: String (Optional) - Cancellation date
  - `orderStatus`: String (Default: 'Pending', Enum: ['Pending', 'Cancelled', 'Completed'])
  - `customerName`: String (Optional) - Customer's name
  - `customerEmail`: String (Optional) - Customer's email
  - `customerPhone`: Number (Optional) - Customer's phone
  - `customerAddress`: String (Optional) - Customer's address

**Indexes:**
- `productCode`: Index for order lookups
- `orderStatus`: Index for filtering orders by status
- `orderDate`: Index for date-based queries
- `_id`: Primary key index (automatic)

**4. Cancel Collection**
- **Purpose**: Store order cancellation records
- **Model File**: `backend/src/models/model.js` (Note: file is named `model.js`, not `cancel.js`)
- **Schema Fields**:
  - `_id`: ObjectId (Primary Key, Auto-generated)
  - `name`: String (Required) - Customer name
  - `itemName`: String (Required) - Cancelled product name
  - `productCode`: String (Required) - Product code
  - `orderDate`: String (Required) - Original order date
  - `cancelDate`: String (Required) - Cancellation date
  - `quantity`: Number (Optional) - Cancelled quantity
  - `price`: Number (Required) - Order price
  - `description`: String (Required) - Cancellation reason

**Indexes:**
- `productCode`: Index for cancellation lookups
- `cancelDate`: Index for date-based queries
- `_id`: Primary key index (automatic)

#### 4.2.3 Data Relationships

**Logical Relationships:**
1. **User → Orders**: One-to-Many (Users can have multiple orders)
   - Currently not enforced via foreign keys (NoSQL flexibility)
   - Relationship maintained through application logic

2. **Product → Orders**: One-to-Many (Products can be in multiple orders)
   - Linked via `productCode` field
   - Referential integrity maintained at application level

3. **Order → Cancellation**: One-to-One (Each order can have one cancellation record)
   - Linked via order details in Cancel collection

#### 4.2.4 Data Validation Rules

**User Collection:**
- Email must be unique
- Phone must be unique
- Password and confirmPassword must match
- Password is automatically hashed before storage

**Product Collection:**
- Product code must be unique (application-level enforcement)
- Price and actualPrice must be numbers
- Item name is required

**OrderList Collection:**
- Order status must be one of: 'Pending', 'Cancelled', 'Completed'
- Price is required
- Product code is required

**Cancel Collection:**
- All fields except quantity are required
- Description must be provided for cancellation reason

#### 4.2.5 Database Configuration

**Connection Configuration:**
- Connection string stored in environment variable: `DB_URI` or `MONGODB_URI`
- Connection options: `useNewUrlParser: true`
- Automatic connection pooling
- Error handling and reconnection logic

**Storage Requirements:**
- **Development**: Local MongoDB instance or MongoDB Atlas (free tier)
- **Production**: MongoDB Atlas or dedicated MongoDB server
- **File Storage**: Separate file system storage for images (`backend/src/uploads/`)

**Backup and Recovery:**
- Regular database backups recommended
- MongoDB Atlas provides automatic backups
- File uploads should be backed up separately

### 4.3 ER Diagram

Entity-Relationship Diagram representing the data model and relationships between entities in the E-Mart Dashboard Application.

#### 4.3.1 Entity-Relationship Model

```
┌─────────────────────────────────────────────────────────────────┐
│                      ENTITY-RELATIONSHIP DIAGRAM                 │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────────┐
│        USER          │
├──────────────────────┤
│ PK: _id              │
│      name            │
│      email (UNIQUE)  │
│      password        │
│      phone (UNIQUE)  │
│      image           │
│      location        │
│      tokens[]        │
└──────────────────────┘
         │
         │ (1)
         │
         │ (0..*)
         │
         ▼
┌──────────────────────┐
│      ORDERLIST       │
├──────────────────────┤
│ PK: _id              │
│      itemName        │
│      quantity        │
│      productCode      │
│      orderDate       │
│      price           │
│      actualPrice     │
│      image           │
│      orderStatus     │
│      orderCancelDate │
│      customerName    │
│      customerEmail   │
│      customerPhone   │
│      customerAddress │
└──────────────────────┘
         │
         │ (1)
         │
         │ (0..1)
         │
         ▼
┌──────────────────────┐
│       CANCEL          │
├──────────────────────┤
│ PK: _id              │
│      name            │
│      itemName        │
│      productCode     │
│      orderDate       │
│      cancelDate      │
│      quantity        │
│      price           │
│      description     │
└──────────────────────┘

┌──────────────────────┐
│      PRODUCT         │
├──────────────────────┤
│ PK: _id              │
│      itemName        │
│      quantity        │
│      productCode      │
│      productDate     │
│      actualPrice     │
│      price           │
│      image           │
└──────────────────────┘
         │
         │ (1)
         │
         │ (0..*)
         │
         ▼
    [Referenced by]
    productCode in
    ORDERLIST
```

#### 4.3.2 Relationship Details

**1. User ↔ OrderList (One-to-Many)**
- **Cardinality**: One User can have many Orders (1:N)
- **Relationship Type**: Logical (not enforced by foreign key)
- **Implementation**: Application-level relationship
- **Business Rule**: Users create orders, but orders store customer info separately

**2. OrderList ↔ Cancel (One-to-One)**
- **Cardinality**: One Order can have one Cancellation (1:1)
- **Relationship Type**: Logical
- **Implementation**: Separate collection with order details
- **Business Rule**: An order can be cancelled only once

**3. Product ↔ OrderList (One-to-Many)**
- **Cardinality**: One Product can be in many Orders (1:N)
- **Relationship Type**: Referential (via productCode)
- **Implementation**: productCode field links orders to products
- **Business Rule**: Products can be ordered multiple times

#### 4.3.3 Entity Attributes

**USER Entity:**
- **Primary Key**: `_id` (ObjectId)
- **Unique Attributes**: `email`, `phone`
- **Required Attributes**: `name`, `email`, `password`, `confirmPassword`
- **Optional Attributes**: `phone`, `image`, `location`, `newPassword`, `tokens`

**PRODUCT Entity:**
- **Primary Key**: `_id` (ObjectId)
- **Required Attributes**: `itemName`, `productCode`, `actualPrice`, `price`
- **Optional Attributes**: `quantity`, `productDate`, `image`

**ORDERLIST Entity:**
- **Primary Key**: `_id` (ObjectId)
- **Required Attributes**: `itemName`, `productCode`, `price`
- **Optional Attributes**: `quantity`, `orderDate`, `actualPrice`, `image`, `orderCancelDate`, `orderStatus`, customer fields
- **Enumerated Values**: `orderStatus` ∈ {'Pending', 'Cancelled', 'Completed'}

**CANCEL Entity:**
- **Primary Key**: `_id` (ObjectId)
- **Required Attributes**: `name`, `itemName`, `productCode`, `orderDate`, `cancelDate`, `price`, `description`
- **Optional Attributes**: `quantity`

### 4.4 Data Flow Diagram

Data Flow Diagrams illustrate how data moves through the system, from user input to database storage and back to the user interface.

#### 4.4.1 Level 0 - Context Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    E-MART DASHBOARD SYSTEM                  │
│                                                              │
│  ┌──────────┐         ┌──────────────┐      ┌──────────┐ │
│  │   User   │─────────▶│   Frontend   │──────▶│  Email   │ │
│  │          │◀─────────│  (Angular)   │      │  Service │ │
│  └──────────┘         └──────┬───────┘      └──────────┘ │
│                              │                            │
│                              │ HTTP/REST                  │
│                              │                            │
│                              ▼                            │
│                    ┌──────────────┐                        │
│                    │   Backend    │                        │
│                    │  (Express)   │                        │
│                    └──────┬───────┘                        │
│                           │                                │
│                           │ MongoDB                        │
│                           │                                │
│                           ▼                                │
│                    ┌──────────────┐                        │
│                    │   MongoDB     │                        │
│                    │   Database    │                        │
│                    └──────────────┘                        │
└─────────────────────────────────────────────────────────────┘
```

#### 4.4.2 Level 1 - User Authentication Flow

```
┌──────────┐
│   User   │
└────┬─────┘
     │
     │ 1. Login Request (email, password)
     ▼
┌─────────────────┐
│  Login Component│
└────┬────────────┘
     │
     │ 2. HTTP POST /api/login
     ▼
┌─────────────────┐
│ DashboardService│
└────┬────────────┘
     │
     │ 3. JSON Request
     ▼
┌─────────────────┐     4. Validate User      ┌──────────┐
│  Express Router │─────────────────────────▶│  MongoDB │
│  /api/login     │                          │  (Users) │
└────┬────────────┘                          └────┬─────┘
     │                                            │
     │ 5. User Data + Password Hash              │
     │                                            │
     ▼                                            │
┌─────────────────┐     6. Compare Password     │
│  Auth Middleware│◀───────────────────────────┘
└────┬────────────┘
     │
     │ 7. Generate JWT Token
     ▼
┌─────────────────┐
│  JWT Generator  │
└────┬────────────┘
     │
     │ 8. Token + User Data
     ▼
┌─────────────────┐
│  Express Router │
└────┬────────────┘
     │
     │ 9. JSON Response (token, userData)
     ▼
┌─────────────────┐
│ DashboardService│
└────┬────────────┘
     │
     │ 10. Store Token in localStorage
     ▼
┌─────────────────┐
│  Login Component│
└────┬────────────┘
     │
     │ 11. Navigate to Dashboard
     ▼
┌──────────┐
│   User   │
└──────────┘
```

#### 4.4.3 Level 1 - Order Processing Flow

```
┌──────────┐
│   User   │
└────┬─────┘
     │
     │ 1. Create Order Request
     ▼
┌─────────────────┐
│ Order Component │
└────┬────────────┘
     │
     │ 2. HTTP POST /api/order-details
     │    (orderData + JWT Token)
     ▼
┌─────────────────┐
│ DashboardService│
└────┬────────────┘
     │
     │ 3. JSON Request + Auth Header
     ▼
┌─────────────────┐     4. Validate Token     ┌──────────┐
│  Express Router │──────────────────────────▶│  MongoDB │
│  /api/order-    │                          │  (Users) │
│  details        │                          └────┬─────┘
└────┬────────────┘                              │
     │                                            │
     │ 5. Token Valid                            │
     │                                            │
     ▼                                            │
┌─────────────────┐                              │
│  Auth Middleware │                              │
└────┬────────────┘                              │
     │                                            │
     │ 6. Create Order Document                  │
     ▼                                            │
┌─────────────────┐     7. Save Order           │
│ Order Controller │───────────────────────────▶│
└────┬────────────┘                              │
     │                                            │
     │                                            ▼
     │                                    ┌──────────┐
     │                                    │  MongoDB │
     │                                    │ (Orders) │
     │                                    └────┬─────┘
     │                                         │
     │ 8. Order Created                       │
     │                                         │
     ▼                                         │
┌─────────────────┐     9. Order Data        │
│  Express Router │◀──────────────────────────┘
└────┬────────────┘
     │
     │ 10. JSON Response
     ▼
┌─────────────────┐
│ DashboardService│
└────┬────────────┘
     │
     │ 11. Update UI
     ▼
┌─────────────────┐
│ Order Component │
└────┬────────────┘
     │
     │ 12. Display Success
     ▼
┌──────────┐
│   User   │
└──────────┘
```

#### 4.4.4 Level 1 - Product Management Flow

```
┌──────────┐
│   Admin  │
└────┬─────┘
     │
     │ 1. Add/Update Product
     ▼
┌─────────────────┐
│Product Component│
└────┬────────────┘
     │
     │ 2. FormData (productData + image)
     │    HTTP POST /api/product
     ▼
┌─────────────────┐
│ DashboardService│
└────┬────────────┘
     │
     │ 3. Multipart Request
     ▼
┌─────────────────┐
│  Express Router │
└────┬────────────┘
     │
     │ 4. Multer Middleware
     ▼
┌─────────────────┐
│  File Handler   │───▶ 5. Save to uploads/
└────┬────────────┘     6. Generate filename
     │
     │ 7. Product Data + Image Path
     ▼
┌─────────────────┐     8. Save Product       ┌──────────┐
│Product Controller│─────────────────────────▶│  MongoDB │
└────┬────────────┘                          │(Products)│
     │                                        └────┬─────┘
     │                                             │
     │ 9. Product Saved                          │
     │                                             │
     ▼                                             │
┌─────────────────┐     10. Product Data         │
│  Express Router │◀──────────────────────────────┘
└────┬────────────┘
     │
     │ 11. JSON Response
     ▼
┌─────────────────┐
│ DashboardService│
└────┬────────────┘
     │
     │ 12. Refresh Product List
     ▼
┌─────────────────┐
│Product Component│
└─────────────────┘
```

#### 4.4.5 Data Flow Summary

**Input Data Flows:**
1. User credentials → Authentication → JWT Token
2. Product information + Image → File Upload → Database Storage
3. Order details → Validation → Order Creation
4. Search queries → Filtering → Results Display

**Output Data Flows:**
1. Database queries → API responses → Component updates → UI rendering
2. Chart data aggregation → Visualization → Dashboard display
3. Order status updates → Notification → User feedback

**Data Storage Flows:**
1. User registration → Password hashing → User document creation
2. Product creation → Image storage → Product document with image path
3. Order creation → Status initialization → Order document creation
4. Order cancellation → Cancellation record → Status update

### 4.5 Use Case Diagrams

Use case diagrams describe the functional requirements of the system from the user's perspective, showing interactions between actors and the system.

#### 4.5.1 Primary Use Cases

```
┌─────────────────────────────────────────────────────────────┐
│                  E-MART DASHBOARD SYSTEM                   │
│                                                             │
│  ┌──────────────┐                                          │
│  │    User      │                                          │
│  │  (Guest)     │                                          │
│  └──────┬───────┘                                          │
│         │                                                   │
│         ├──▶ Register Account                              │
│         ├──▶ Login                                         │
│         └──▶ Forgot Password                               │
│                                                             │
│  ┌──────────────┐                                          │
│  │ Authenticated│                                          │
│  │    User      │                                          │
│  └──────┬───────┘                                          │
│         │                                                   │
│         ├──▶ View Dashboard                                │
│         ├──▶ Manage Products                              │
│         │    ├── View Products                             │
│         │    ├── Add Product                              │
│         │    ├── Edit Product                              │
│         │    └── Delete Product                           │
│         │                                                   │
│         ├──▶ Manage Orders                                 │
│         │    ├── View Orders                              │
│         │    ├── Create Order                             │
│         │    ├── Approve Order                            │
│         │    ├── Cancel Order                             │
│         │    └── View Customer Details                    │
│         │                                                   │
│         ├──▶ Manage Profile                               │
│         │    ├── View Profile                             │
│         │    ├── Edit Profile                             │
│         │    ├── Change Password                          │
│         │    └── Remove Account                           │
│         │                                                   │
│         ├──▶ View Analytics                                │
│         │    ├── Weekly Charts                            │
│         │    └── Monthly Reports                          │
│         │                                                   │
│         ├──▶ Search & Filter                              │
│         └──▶ Logout                                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### 4.5.2 Detailed Use Case Descriptions

**UC-1: Register Account**
- **Actor**: Guest User
- **Precondition**: User is not logged in
- **Main Flow**:
  1. User navigates to registration page
  2. User fills registration form (name, email, password, phone, location, image)
  3. System validates input data
  4. System checks email uniqueness
  5. System hashes password
  6. System creates user account
  7. System returns success message
- **Postcondition**: User account created, user can login
- **Alternative Flow**: Email already exists → Show error message

**UC-2: Login**
- **Actor**: Guest User / Authenticated User
- **Precondition**: User has valid account
- **Main Flow**:
  1. User navigates to login page
  2. User enters email and password
  3. System validates credentials
  4. System generates JWT token
  5. System stores token in localStorage
  6. System redirects to dashboard
- **Postcondition**: User is authenticated, protected routes accessible
- **Alternative Flow**: Invalid credentials → Show error message

**UC-3: View Dashboard**
- **Actor**: Authenticated User
- **Precondition**: User is logged in
- **Main Flow**:
  1. User navigates to home/dashboard
  2. System fetches orders and products data
  3. System processes data for charts
  4. System displays weekly and monthly charts
  5. System shows dashboard cards (Category, Deals, Sell, Customer Service)
- **Postcondition**: Dashboard displayed with analytics

**UC-4: Manage Products**
- **Actor**: Authenticated User
- **Precondition**: User is logged in
- **Main Flow**:
  1. User navigates to Products page
  2. System displays product list
  3. User can:
     - Add new product (with image upload)
     - Edit existing product
     - View product details
     - Search/filter products
- **Postcondition**: Product catalog updated

**UC-5: Manage Orders**
- **Actor**: Authenticated User
- **Precondition**: User is logged in
- **Main Flow**:
  1. User navigates to Orders page
  2. System displays order list with status
  3. User can:
     - View all orders
     - Search orders (by name, code, date)
     - Approve pending orders
     - Cancel pending orders
     - View customer details
- **Postcondition**: Order status updated

**UC-6: Approve Order**
- **Actor**: Authenticated User
- **Precondition**: Order exists with "Pending" status
- **Main Flow**:
  1. User clicks approve button on order
  2. System shows confirmation dialog
  3. User confirms approval
  4. System updates order status to "Completed"
  5. System refreshes order list
- **Postcondition**: Order status changed to "Completed"

**UC-7: Cancel Order**
- **Actor**: Authenticated User
- **Precondition**: Order exists with "Pending" status
- **Main Flow**:
  1. User clicks cancel button on order
  2. System navigates to cancellation page
  3. User enters cancellation reason
  4. System creates cancellation record
  5. System updates order status to "Cancelled"
  6. System sets orderCancelDate
- **Postcondition**: Order cancelled, cancellation record created

**UC-8: View Analytics**
- **Actor**: Authenticated User
- **Precondition**: User is logged in, data exists
- **Main Flow**:
  1. User views dashboard
  2. System fetches orders and products
  3. System aggregates data by date
  4. System generates weekly chart (last 7 days)
  5. System generates monthly chart (last 12 months)
  6. System displays interactive charts
- **Postcondition**: Analytics displayed

**UC-9: Manage Profile**
- **Actor**: Authenticated User
- **Precondition**: User is logged in
- **Main Flow**:
  1. User navigates to Profile page (`/profile`)
  2. System displays user information
  3. User navigates to Edit Profile page (`/profile-edit/:id`)
  4. User can edit profile (name, email, phone, location, image)
  5. System validates and updates profile
  6. System saves changes
- **Postcondition**: Profile updated

**UC-10: Change Password**
- **Actor**: Authenticated User
- **Precondition**: User is logged in
- **Main Flow**:
  1. User navigates to Change Password page
  2. User enters current password and new password
  3. System validates current password
  4. System hashes new password
  5. System updates password
  6. System shows success message
- **Postcondition**: Password changed
- **Alternative Flow**: Invalid current password → Show error

**UC-11: Forgot Password**
- **Actor**: Guest User
- **Precondition**: User has account
- **Main Flow**:
  1. User navigates to Forgot Password page
  2. User enters email address
  3. System validates email exists
  4. System generates reset token
  5. System sends reset email with link
  6. User receives email
  7. User clicks reset link
  8. System validates token
  9. User enters new password
  10. System updates password
- **Postcondition**: Password reset, user can login

### 4.6 User Interfaces

The application provides a modern, responsive user interface built with Angular Material and Bootstrap, ensuring a consistent and intuitive user experience across all devices.

#### 4.6.1 Interface Overview

**Design Principles:**
- **Material Design**: Following Google's Material Design guidelines
- **Responsive Design**: Mobile-first approach with breakpoints
- **Accessibility**: WCAG 2.1 Level AA compliance
- **Consistency**: Uniform design language across all pages
- **User Feedback**: Loading states, error messages, success notifications

#### 4.6.2 Main Interface Components

**1. Navigation Structure**
- **Components**: 
  - `app-nav.component` - Main navigation component
  - `header.component` - Header component
  - `sidenav.component` - Side navigation component
- **Features**:
  - Side navigation drawer (collapsible)
  - Top toolbar with user menu
  - Logo and branding (E-Mart)
  - Navigation menu items:
    - Dashboard/Home
    - Products
    - Category
    - Order
    - Offer
  - User profile dropdown menu
  - Pin/unpin sidebar functionality

**2. Login Interface**
- **Component**: `login.component`
- **Layout**: Centered form with card design
- **Fields**:
  - Email input (with validation)
  - Password input (with show/hide toggle)
  - Login button
  - Link to registration
  - Link to forgot password
- **Validation**: Real-time form validation
- **Feedback**: Error messages for invalid credentials

**3. Registration Interface**
- **Component**: `register.component`
- **Layout**: Multi-field form with image upload
- **Fields**:
  - Name (required)
  - Email (required, unique validation)
  - Password (required, strength indicator)
  - Confirm Password (required, match validation)
  - Phone (required, unique)
  - Location (optional)
  - Profile Image (file upload)
- **Features**: Image preview, form validation, success/error messages

**4. Dashboard/Home Interface**
- **Component**: `home.component`
- **Layout**: Grid-based dashboard
- **Sections**:
  - Welcome message
  - Dashboard cards (Category, Deals, Sell, Customer Service)
  - Weekly Analysis chart (line chart)
  - Monthly Report chart (bar chart)
- **Features**: 
  - Interactive charts (Chart.js)
  - Real-time data updates
  - Responsive grid layout
  - Quick navigation links

**5. Products Management Interface**
- **Component**: `products.component`
- **Layout**: Table with action buttons
- **Features**:
  - Product list table
  - Add Product button
  - Edit/Delete actions
  - Search and filter
  - Product image display
  - Product details view
- **Table Columns**: Item Name, Product Code, Quantity, Price, Image, Actions

**6. Orders Management Interface**
- **Component**: `order.component`
- **Layout**: Comprehensive data table
- **Features**:
  - Order list table with all details
  - Search functionality (by name, code, date)
  - Status indicators (color-coded)
  - Approve/Cancel buttons (for pending orders)
  - Customer details view (modal dialog)
  - Order status display
- **Table Columns**: 
  - Order Number, Product Code, Item Name, Quantity
  - Original Price, Price, Order Date, Cancel Date
  - Order Status, Customer View, Actions

**7. Order Details Interface**
- **Component**: `order-register.component`
- **Route**: `/order-details/:id`
- **Layout**: Form for order creation/editing
- **Fields**:
  - Product selection
  - Quantity input
  - Customer information (name, email, phone, address)
  - Order date
  - Price information
- **Features**: Form validation, customer data capture

**8. Cancellation Interface**
- **Component**: `cancellation.component`
- **Layout**: Form with description field
- **Fields**:
  - Order information (read-only)
  - Cancellation reason (required)
  - Cancel date
- **Features**: Order details display, reason validation

**9. User Profile Interface**
- **Component**: `users.component`
- **Layout**: Profile card with user information
- **Display**:
  - User image
  - Name, Email, Phone, Location
  - Edit Profile button
  - Change Password link
  - Remove Account option
- **Features**: Profile image display, action buttons

**10. Edit Profile Interface**
- **Component**: `edit-user.component`
- **Route**: `/profile-edit/:id`
- **Layout**: Editable form
- **Fields**:
  - Name (editable)
  - Email (editable)
  - Phone (editable)
  - Location (editable)
  - Image (upload new image)
- **Features**: Image preview, form validation, update functionality

**11. Change Password Interface**
- **Component**: `change-password.component`
- **Route**: `/change-password/:id`
- **Layout**: Password form
- **Fields**:
  - Current Password
  - New Password
  - Confirm New Password
- **Features**: Password strength indicator, validation, secure input

**12. Forgot Password Interface**
- **Component**: `forget-password.component`
- **Route**: `/forget-password`
- **Layout**: Simple email input form
- **Fields**: Email address
- **Features**: Email validation, submission feedback, sends reset email

**13. Reset Password Interface**
- **Component**: `reset-password.component`
- **Route**: `/reset-password/:id/:token`
- **Layout**: Password reset form
- **Fields**:
  - Email (read-only)
  - New Password
  - Confirm Password
- **Features**: Token validation, password reset

**14. Remove Account Interface**
- **Component**: `remove-account.component`
- **Route**: `/remove-account/:id`
- **Layout**: Confirmation form
- **Fields**:
  - Email confirmation
  - Password confirmation
- **Features**: Account deletion with verification

**15. Additional Components**
- **Component**: `dashboard.component` - Dashboard component
- **Component**: `setting.component` - Settings component
- **Component**: `search.component` - Search component
- **Component**: `logout.component` - Logout component (Route: `/logout`)
- **Component**: `category.component` - Category management (Route: `/category`)
- **Component**: `offer.component` - Offer management (Route: `/offer`)

#### 4.6.3 UI Components and Patterns

**Material Design Components Used:**
- **MatToolbar**: Top navigation bar
- **MatSidenav**: Side navigation drawer
- **MatButton**: Action buttons
- **MatIcon**: Icons throughout the application
- **MatTable**: Data tables for products and orders
- **MatDialog**: Modal dialogs for confirmations and details
- **MatFormField**: Form input fields
- **MatCard**: Card containers
- **MatSnackBar**: Toast notifications
- **MatProgressSpinner**: Loading indicators
- **MatMenu**: Dropdown menus
- **MatTooltip**: Hover tooltips

**Bootstrap Components Used:**
- **Container/Container-fluid**: Layout containers
- **Grid System**: Responsive grid layout
- **Buttons**: Styled buttons
- **Forms**: Form styling
- **Cards**: Card components
- **Tables**: Table styling

#### 4.6.4 Responsive Design

**Breakpoints:**
- **Mobile**: < 768px (single column, stacked layout)
- **Tablet**: 768px - 1024px (two columns, adjusted spacing)
- **Desktop**: > 1024px (full layout, side navigation)

**Responsive Features:**
- Collapsible side navigation on mobile
- Stacked charts on small screens
- Responsive tables with horizontal scroll
- Touch-friendly button sizes
- Optimized image sizes

#### 4.6.5 User Feedback Mechanisms

**Loading States:**
- Spinner during API calls
- Skeleton screens (future enhancement)
- Progress indicators

**Error Handling:**
- Error messages in forms
- Toast notifications for errors
- HTTP error interceptors
- User-friendly error messages

**Success Feedback:**
- Success toast notifications
- Confirmation dialogs
- Visual status indicators
- Success messages

**Status Indicators:**
- Color-coded order status (Pending, Completed, Cancelled)
- Icon indicators
- Badge components

#### 4.6.6 Color Scheme and Theming

**Primary Colors:**
- Primary: Material Design primary color (typically blue)
- Accent: Material Design accent color
- Background: Light theme with white/light gray

**Status Colors:**
- Pending: Yellow/Orange
- Completed: Green
- Cancelled: Red
- Error: Red
- Success: Green

**Typography:**
- Font Family: Material Design default (Roboto)
- Headings: Bold, various sizes
- Body: Regular, readable size
- Icons: Material Icons

---

## 5. Drawbacks and Limitations

While the E-Mart Dashboard Application provides a solid foundation for e-commerce management, there are several drawbacks and limitations that should be addressed for production deployment and scalability. This section outlines the current limitations and areas for improvement.

### 5.1 Security Limitations

#### 5.1.1 Token Storage Vulnerabilities
- **localStorage Usage**: JWT tokens are stored in browser localStorage, which is vulnerable to Cross-Site Scripting (XSS) attacks
  - **Risk**: Malicious scripts can access localStorage and steal tokens
  - **Recommendation**: Use httpOnly cookies for token storage
- **Token Exposure**: Tokens are accessible via JavaScript, increasing attack surface
- **No Token Refresh Mechanism**: Long-lived tokens (7 days) without refresh capability increase security risk

#### 5.1.2 Authentication and Authorization Gaps
- **No Role-Based Access Control (RBAC)**: All authenticated users have the same permissions
  - **Impact**: Cannot differentiate between admin, manager, and regular user roles
  - **Limitation**: No granular permission system
- **Weak Password Policy**: No password strength requirements or complexity rules
  - **Risk**: Users can set weak passwords
  - **Missing**: Password history, minimum length, character requirements
- **No Account Lockout**: No protection against brute force attacks
  - **Risk**: Unlimited login attempts possible
  - **Missing**: Account lockout after failed attempts, CAPTCHA integration

#### 5.1.3 API Security Issues
- **No Rate Limiting**: API endpoints are vulnerable to abuse and DDoS attacks
  - **Risk**: Unlimited requests can overwhelm the server
  - **Missing**: Request throttling, rate limiting middleware
- **CORS Configuration**: Hardcoded CORS origin (`http://localhost:4200`)
  - **Issue**: Not configurable for different environments
  - **Risk**: Production deployment requires code changes
- **No Input Sanitization**: Limited input validation and sanitization
  - **Risk**: Potential injection attacks (though NoSQL reduces SQL injection risk)
  - **Missing**: Comprehensive input validation library

#### 5.1.4 File Upload Security
- **Limited File Validation**: Only basic file type checking
  - **Risk**: Potential for malicious file uploads
  - **Missing**: File content scanning, virus checking
- **No File Size Limits Enforced**: 5MB mentioned but not consistently enforced
- **Direct File Access**: Files stored in public directory without access control
  - **Risk**: Unauthorized file access possible

### 5.2 Database Limitations

#### 5.2.1 Data Model Issues
- **Typo in Model Name**: OrderList model is named "OderList" (missing 'r')
  - **Impact**: Inconsistent naming, potential confusion
  - **Issue**: Collection name doesn't match logical entity name
- **No Foreign Key Relationships**: No enforced relationships between collections
  - **Impact**: Data integrity relies on application logic
  - **Risk**: Orphaned records, inconsistent data
- **No Data Validation at Database Level**: Validation only at application level
  - **Risk**: Direct database access can bypass validation

#### 5.2.2 Data Integrity Concerns
- **No Referential Integrity**: Products can be deleted even if referenced in orders
  - **Impact**: Broken references, data inconsistency
  - **Missing**: Cascade delete or soft delete mechanisms
- **Duplicate Data Storage**: Customer information stored in both User and OrderList collections
  - **Impact**: Data redundancy, potential inconsistency
  - **Issue**: No single source of truth for customer data
- **No Data Archiving**: No mechanism for archiving old orders or inactive products
  - **Impact**: Database growth without cleanup strategy

#### 5.2.3 Query Performance
- **Limited Indexing**: Only basic indexes on email and phone
  - **Impact**: Slow queries on large datasets
  - **Missing**: Composite indexes for common query patterns
- **No Query Optimization**: No query analysis or optimization
- **No Database Connection Pooling Configuration**: Default pooling may not be optimal

### 5.3 Performance Limitations

#### 5.3.1 Frontend Performance
- **No Lazy Loading**: All components loaded upfront
  - **Impact**: Large initial bundle size, slower initial load
  - **Missing**: Route-based code splitting
- **No Caching Strategy**: No client-side caching for API responses
  - **Impact**: Repeated API calls for same data
  - **Missing**: Service worker, HTTP caching headers
- **Large Bundle Size**: All dependencies bundled together
  - **Impact**: Slower download times, especially on mobile
- **No Image Optimization**: Images not optimized or compressed
  - **Impact**: Large file sizes, slow loading

#### 5.3.2 Backend Performance
- **No Pagination**: All records fetched at once
  - **Impact**: Performance degradation with large datasets
  - **Missing**: Pagination, infinite scroll, virtual scrolling
- **No Caching Layer**: No Redis or in-memory caching
  - **Impact**: Repeated database queries
  - **Missing**: Response caching, query result caching
- **Synchronous Operations**: Some operations block the event loop
  - **Impact**: Reduced concurrency, slower response times
- **No Database Query Optimization**: No query analysis or optimization tools

#### 5.3.3 Scalability Constraints
- **Single Server Architecture**: Not designed for horizontal scaling
  - **Impact**: Limited scalability options
  - **Missing**: Load balancer configuration, stateless design
- **File Storage Limitations**: Local file system storage
  - **Impact**: Not scalable across multiple servers
  - **Missing**: Cloud storage integration (S3, Azure Blob)
- **Session State**: Some state stored in memory
  - **Impact**: Not suitable for multiple server instances

### 5.4 Code Quality and Maintainability

#### 5.4.1 Code Issues
- **Hardcoded URLs**: API endpoints hardcoded in frontend (`http://localhost:9000`)
  - **Impact**: Requires code changes for different environments
  - **Missing**: Environment-based configuration
- **Inconsistent Error Handling**: Error handling varies across components
  - **Impact**: Inconsistent user experience
  - **Missing**: Centralized error handling strategy
- **No API Versioning**: API endpoints not versioned
  - **Impact**: Breaking changes affect all clients
  - **Missing**: Version management (e.g., `/api/v1/`)

#### 5.4.2 Code Organization
- **Mixed Concerns**: Business logic mixed with route handlers
  - **Impact**: Difficult to test and maintain
  - **Missing**: Service layer separation
- **No TypeScript in Backend**: Backend uses JavaScript instead of TypeScript
  - **Impact**: Reduced type safety, more runtime errors
- **Inconsistent Naming**: Some inconsistencies in naming conventions
  - **Example**: "OderList" vs "OrderList"

#### 5.4.3 Documentation and Testing
- **Limited Code Documentation**: Minimal inline comments and documentation
  - **Impact**: Difficult for new developers to understand
- **No Unit Tests**: No test coverage for components or services
  - **Impact**: Risk of regressions, difficult refactoring
- **No Integration Tests**: No API endpoint testing
- **No E2E Tests**: No end-to-end testing framework

### 5.5 Functional Limitations

#### 5.5.1 Missing Features
- **No Multi-User Roles**: All users have same permissions
  - **Missing**: Admin, Manager, Customer roles
- **No Order History for Users**: Users cannot view their own order history
  - **Impact**: Limited self-service capabilities
- **No Email Notifications**: No automated emails for order status changes
  - **Impact**: Users must manually check order status
- **No Inventory Management**: No low-stock alerts or inventory tracking
- **No Payment Integration**: No payment gateway integration
- **No Shipping Management**: No shipping address validation or tracking

#### 5.5.2 User Experience Limitations
- **No Search Autocomplete**: Basic search without suggestions
- **No Advanced Filtering**: Limited filtering options
- **No Export Functionality**: Cannot export data (CSV, PDF, Excel)
- **No Print Functionality**: No print-friendly views
- **Limited Mobile Optimization**: Responsive but not mobile-optimized
- **No Dark Mode**: Only light theme available
- **No Internationalization**: English only, no multi-language support

#### 5.5.3 Reporting and Analytics
- **Limited Analytics**: Basic charts only
  - **Missing**: Custom date ranges, advanced metrics, comparisons
- **No Report Generation**: Cannot generate custom reports
- **No Data Export**: Cannot export analytics data
- **No Scheduled Reports**: No automated report generation

### 5.6 Infrastructure and Deployment Limitations

#### 5.6.1 Deployment Issues
- **No CI/CD Pipeline**: Manual deployment process
  - **Impact**: Error-prone, time-consuming deployments
- **No Environment Configuration**: Hardcoded configuration values
- **No Docker Support**: No containerization
  - **Impact**: Difficult to ensure consistent environments
- **No Health Checks**: No application health monitoring endpoints

#### 5.6.2 Monitoring and Logging
- **Limited Logging**: Basic console logging only
  - **Missing**: Structured logging, log levels, log aggregation
- **No Monitoring**: No application performance monitoring (APM)
  - **Missing**: Error tracking (Sentry), performance monitoring
- **No Alerts**: No alerting system for errors or performance issues
- **No Analytics Tracking**: No user behavior tracking or analytics

#### 5.6.3 Backup and Recovery
- **No Automated Backups**: No scheduled backup mechanism
  - **Risk**: Data loss in case of failure
- **No Disaster Recovery Plan**: No documented recovery procedures
- **No Data Migration Tools**: No tools for data migration or import/export

### 5.7 Browser and Compatibility Limitations

#### 5.7.1 Browser Support
- **Limited Browser Testing**: Not tested on all supported browsers
- **No Polyfills**: May not work on older browsers
- **No Progressive Web App (PWA)**: Not installable as PWA
  - **Missing**: Offline support, push notifications

#### 5.7.2 Accessibility
- **Limited Accessibility**: Basic accessibility, not fully WCAG compliant
  - **Missing**: Screen reader optimization, keyboard navigation improvements
- **No ARIA Labels**: Limited use of ARIA attributes
- **Color Contrast**: May not meet all contrast requirements

### 5.8 Data Management Limitations

#### 5.8.1 Data Validation
- **Client-Side Only Validation**: Some validation only on frontend
  - **Risk**: Can be bypassed
- **No Server-Side Validation**: Limited backend validation
- **No Data Sanitization**: Input not properly sanitized

#### 5.8.2 Data Privacy and Compliance
- **No GDPR Compliance**: No data privacy features
  - **Missing**: Data export, right to be forgotten, consent management
- **No Data Encryption at Rest**: Database not encrypted
- **No Audit Trail**: No logging of data changes or access

### 5.9 Known Bugs and Issues

#### 5.9.1 Code Bugs
- **Login Logic Issue**: Password comparison logic in login component appears incorrect
  - **Location**: `login.component.ts` line 37
  - **Issue**: Comparing plain text password with hashed password
- **Error Handling in Token Generation**: Error handler references undefined `res` object
  - **Location**: `user.js` line 66
  - **Issue**: Cannot send response in schema method
- **Cookie Expiration Mismatch**: Cookie expiration (1 minute) doesn't match token expiration (7 days)
  - **Location**: `router.js` line 138
  - **Issue**: Cookies expire too quickly

#### 5.9.2 Data Issues
- **OrderList Typo**: Collection name has typo ("OderList")
- **Inconsistent Status Values**: "Cancelled" vs "Canceled" inconsistency
- **Date Format Inconsistency**: Dates stored as strings, not Date objects

### 5.10 Recommendations for Improvement

#### 5.10.1 High Priority
1. **Implement httpOnly Cookies**: Replace localStorage token storage
2. **Add Rate Limiting**: Protect API endpoints from abuse
3. **Implement RBAC**: Add role-based access control
4. **Add Pagination**: Implement for all list views
5. **Fix Known Bugs**: Address login logic and error handling issues
6. **Add Input Validation**: Comprehensive server-side validation
7. **Implement Caching**: Add Redis or in-memory caching
8. **Add Logging**: Implement structured logging system

#### 5.10.2 Medium Priority
1. **Add Unit Tests**: Implement test coverage
2. **Refactor Code**: Separate concerns, improve organization
3. **Add API Versioning**: Implement version management
4. **Improve Error Handling**: Centralized error handling
5. **Add Monitoring**: Implement APM and error tracking
6. **Implement CI/CD**: Automated deployment pipeline
7. **Add Database Indexes**: Optimize query performance
8. **Implement File Upload to Cloud**: Move to cloud storage

#### 5.10.3 Low Priority
1. **Add Internationalization**: Multi-language support
2. **Implement PWA**: Progressive web app features
3. **Add Dark Mode**: Theme switching
4. **Improve Accessibility**: Full WCAG compliance
5. **Add Export Functionality**: Data export features
6. **Implement Advanced Analytics**: Enhanced reporting

### 5.11 Conclusion

While the E-Mart Dashboard Application provides a functional e-commerce management system, it requires significant improvements in security, performance, scalability, and code quality before being production-ready. The limitations outlined above should be addressed based on priority, with security and performance issues taking precedence. The application serves well as a development prototype or MVP (Minimum Viable Product), but requires substantial enhancements for enterprise-level deployment.

---

## 6. Proposed Enhancements

This section outlines proposed enhancements and future improvements for the E-Mart Dashboard Application. These enhancements are organized by category and priority to guide future development efforts.

### 6.1 Security Enhancements

#### 6.1.1 Authentication and Authorization Improvements

**1. Enhanced Token Management**
- **httpOnly Cookies**: Replace localStorage token storage with httpOnly cookies to prevent XSS attacks
- **Token Refresh Mechanism**: Implement refresh tokens with shorter access token lifetimes
- **Token Rotation**: Automatic token rotation on suspicious activity
- **Multi-Device Management**: Allow users to view and manage active sessions
- **Token Revocation**: Ability to revoke tokens on logout or security breach

**2. Role-Based Access Control (RBAC)**
- **User Roles**: Implement Admin, Manager, Staff, and Customer roles
- **Permission System**: Granular permissions for different operations
- **Role Hierarchy**: Define role hierarchy and inheritance
- **Permission Management UI**: Admin interface for managing roles and permissions
- **Dynamic Authorization**: Context-based access control

**3. Advanced Authentication Features**
- **Two-Factor Authentication (2FA)**: SMS or authenticator app-based 2FA
- **Social Login**: Integration with Google, Facebook, Microsoft OAuth
- **Single Sign-On (SSO)**: Enterprise SSO support (SAML, OAuth 2.0)
- **Biometric Authentication**: Fingerprint/Face ID for mobile devices
- **Password Policy Enforcement**: Configurable password complexity rules
- **Account Lockout**: Automatic lockout after failed login attempts
- **CAPTCHA Integration**: reCAPTCHA for login and registration

**4. Security Monitoring**
- **Login Attempt Tracking**: Monitor and log all login attempts
- **Anomaly Detection**: Detect unusual login patterns or locations
- **Security Alerts**: Email/SMS notifications for security events
- **Audit Logging**: Comprehensive audit trail for all security events

#### 6.1.2 API Security Enhancements

**1. Rate Limiting and Throttling**
- **Request Rate Limiting**: Implement rate limiting per user/IP
- **API Key Management**: API key-based authentication for third-party integrations
- **Throttling by Endpoint**: Different rate limits for different endpoints
- **DDoS Protection**: Integration with DDoS protection services

**2. Input Validation and Sanitization**
- **Comprehensive Validation**: Server-side validation for all inputs
- **Input Sanitization Library**: Use libraries like `validator.js` and `sanitize-html`
- **SQL Injection Prevention**: Parameterized queries (though using NoSQL)
- **XSS Prevention**: Content Security Policy (CSP) headers
- **CSRF Protection**: CSRF tokens for state-changing operations

**3. API Security Headers**
- **Security Headers**: Implement Helmet.js for security headers
- **CORS Configuration**: Environment-based CORS configuration
- **API Versioning**: Version API endpoints (`/api/v1/`, `/api/v2/`)
- **API Documentation**: OpenAPI/Swagger documentation with security schemes

#### 6.1.3 Data Security

**1. Data Encryption**
- **Encryption at Rest**: Encrypt sensitive database fields
- **Field-Level Encryption**: Encrypt PII (Personally Identifiable Information)
- **Key Management**: Secure key management system (AWS KMS, Azure Key Vault)
- **Transit Encryption**: Enforce HTTPS/TLS for all communications

**2. Data Privacy and Compliance**
- **GDPR Compliance**: 
  - Right to access data
  - Right to be forgotten
  - Data portability
  - Consent management
- **Data Anonymization**: Anonymize data for analytics
- **Data Retention Policies**: Automated data retention and deletion
- **Privacy Policy Management**: User consent tracking

**3. Audit and Compliance**
- **Comprehensive Audit Trail**: Log all data access and modifications
- **Compliance Reporting**: Generate compliance reports (GDPR, PCI-DSS)
- **Data Access Logs**: Track who accessed what data and when
- **Change History**: Complete history of all data changes

### 6.2 Performance Enhancements

#### 6.2.1 Frontend Performance

**1. Code Optimization**
- **Lazy Loading**: Implement route-based lazy loading
- **Code Splitting**: Split code into smaller chunks
- **Tree Shaking**: Remove unused code from bundles
- **Bundle Optimization**: Optimize bundle sizes with webpack
- **Service Workers**: Implement service workers for caching

**2. Caching Strategies**
- **HTTP Caching**: Implement proper cache headers
- **Browser Caching**: Cache static assets aggressively
- **API Response Caching**: Cache API responses in service layer
- **IndexedDB**: Use IndexedDB for client-side data storage
- **Cache Invalidation**: Smart cache invalidation strategies

**3. Image and Asset Optimization**
- **Image Compression**: Automatic image compression on upload
- **Responsive Images**: Serve different image sizes based on device
- **Lazy Loading Images**: Load images only when needed
- **CDN Integration**: Use CDN for static assets
- **WebP Format**: Support modern image formats (WebP, AVIF)

**4. Rendering Optimization**
- **Virtual Scrolling**: Implement virtual scrolling for large lists
- **OnPush Change Detection**: Use OnPush change detection strategy
- **TrackBy Functions**: Optimize *ngFor with trackBy
- **Debouncing/Throttling**: Debounce search and filter inputs

#### 6.2.2 Backend Performance

**1. Database Optimization**
- **Query Optimization**: Analyze and optimize slow queries
- **Indexing Strategy**: Add composite indexes for common queries
- **Connection Pooling**: Optimize MongoDB connection pooling
- **Query Caching**: Cache frequently accessed queries
- **Database Sharding**: Implement sharding for large datasets

**2. Caching Layer**
- **Redis Integration**: Implement Redis for caching
- **In-Memory Caching**: Cache frequently accessed data
- **Cache Warming**: Pre-populate cache with common data
- **Distributed Caching**: Multi-server cache synchronization

**3. API Performance**
- **Response Compression**: Gzip/Brotli compression
- **Pagination**: Implement cursor-based and offset-based pagination
- **Field Selection**: Allow clients to request only needed fields
- **GraphQL Alternative**: Consider GraphQL for flexible queries
- **API Response Time Monitoring**: Monitor and alert on slow APIs

**4. Background Processing**
- **Job Queue**: Implement job queue (Bull, Agenda.js)
- **Async Processing**: Move heavy operations to background jobs
- **Email Queue**: Queue emails for async sending
- **Report Generation**: Generate reports asynchronously

### 6.3 Feature Enhancements

#### 6.3.1 User Management Features

**1. Advanced User Features**
- **User Profiles**: Enhanced user profile with preferences
- **User Preferences**: Customizable dashboard and settings
- **Activity History**: User activity timeline
- **Notification Preferences**: Customizable notification settings
- **Multi-Language Support**: Internationalization (i18n)

**2. Customer Portal**
- **Customer Dashboard**: Dedicated customer dashboard
- **Order History**: Customers can view their order history
- **Order Tracking**: Real-time order status tracking
- **Wishlist**: Save products for later
- **Product Reviews**: Customers can review products

#### 6.3.2 Product Management Enhancements

**1. Advanced Product Features**
- **Product Variants**: Support for product variants (size, color, etc.)
- **Product Categories**: Hierarchical category system
- **Product Tags**: Tag-based product organization
- **Bulk Operations**: Bulk import/export, bulk updates
- **Product Templates**: Reusable product templates
- **Product Bundles**: Create product bundles/packages

**2. Inventory Management**
- **Stock Tracking**: Real-time inventory tracking
- **Low Stock Alerts**: Automated alerts for low stock
- **Inventory History**: Track inventory changes
- **Multi-Warehouse**: Support for multiple warehouses
- **Stock Transfers**: Transfer stock between locations
- **Inventory Reports**: Comprehensive inventory reports

**3. Product Media**
- **Multiple Images**: Support for multiple product images
- **Image Gallery**: Interactive image gallery
- **Video Support**: Product videos
- **360° View**: 360-degree product view
- **Cloud Storage**: Integrate with cloud storage (AWS S3, Azure Blob)

#### 6.3.3 Order Management Enhancements

**1. Advanced Order Features**
- **Order Workflow**: Customizable order workflow
- **Order Templates**: Reusable order templates
- **Bulk Order Processing**: Process multiple orders at once
- **Order Splitting**: Split orders into multiple shipments
- **Order Merging**: Merge multiple orders
- **Partial Fulfillment**: Support partial order fulfillment

**2. Shipping Integration**
- **Shipping Carriers**: Integrate with shipping carriers (FedEx, UPS, DHL)
- **Shipping Calculator**: Real-time shipping cost calculation
- **Label Printing**: Print shipping labels
- **Tracking Integration**: Automatic tracking updates
- **Delivery Confirmation**: Delivery confirmation system

**3. Payment Integration**
- **Payment Gateways**: Integrate payment gateways (Stripe, PayPal, Square)
- **Multiple Payment Methods**: Support credit cards, digital wallets
- **Payment Processing**: Secure payment processing
- **Refund Management**: Automated refund processing
- **Invoice Generation**: Automatic invoice generation

#### 6.3.4 Analytics and Reporting

**1. Advanced Analytics**
- **Custom Dashboards**: User-customizable dashboards
- **Real-Time Analytics**: Real-time data updates
- **Predictive Analytics**: Sales forecasting and predictions
- **Customer Analytics**: Customer behavior analysis
- **Product Analytics**: Product performance metrics
- **Revenue Analytics**: Revenue trends and analysis

**2. Reporting System**
- **Custom Reports**: Build custom reports with drag-and-drop
- **Scheduled Reports**: Automated report generation and delivery
- **Report Templates**: Pre-built report templates
- **Export Options**: Export to PDF, Excel, CSV
- **Report Sharing**: Share reports with team members
- **Data Visualization**: Advanced chart types and visualizations

**3. Business Intelligence**
- **KPI Dashboard**: Key Performance Indicators dashboard
- **Sales Funnel**: Visualize sales funnel
- **Customer Segmentation**: Segment customers by behavior
- **A/B Testing**: A/B testing framework
- **Trend Analysis**: Identify trends and patterns

### 6.4 Infrastructure Enhancements

#### 6.4.1 Deployment and DevOps

**1. Containerization**
- **Docker Support**: Dockerize application components
- **Docker Compose**: Multi-container orchestration
- **Kubernetes**: Kubernetes deployment for scaling
- **Container Registry**: Use container registry (Docker Hub, AWS ECR)

**2. CI/CD Pipeline**
- **Automated Testing**: Run tests in CI pipeline
- **Automated Deployment**: Deploy to staging/production automatically
- **Environment Management**: Separate dev, staging, production
- **Rollback Mechanism**: Quick rollback on deployment issues
- **Blue-Green Deployment**: Zero-downtime deployments

**3. Infrastructure as Code**
- **Terraform/CloudFormation**: Infrastructure as code
- **Server Configuration**: Automated server configuration
- **Environment Provisioning**: Automated environment setup

#### 6.4.2 Monitoring and Observability

**1. Application Monitoring**
- **APM Integration**: Application Performance Monitoring (New Relic, Datadog)
- **Error Tracking**: Error tracking (Sentry, Rollbar)
- **Log Aggregation**: Centralized logging (ELK Stack, Splunk)
- **Real-Time Monitoring**: Real-time application health monitoring
- **Performance Metrics**: Track key performance metrics

**2. Infrastructure Monitoring**
- **Server Monitoring**: CPU, memory, disk usage monitoring
- **Database Monitoring**: Database performance monitoring
- **Network Monitoring**: Network traffic and latency monitoring
- **Alerting System**: Automated alerts for issues
- **Dashboard**: Monitoring dashboard (Grafana)

#### 6.4.3 Scalability Enhancements

**1. Horizontal Scaling**
- **Load Balancing**: Implement load balancer (NGINX, HAProxy)
- **Stateless Design**: Make application stateless
- **Session Management**: External session storage (Redis)
- **Database Replication**: MongoDB replica sets
- **Read Replicas**: Use read replicas for scaling reads

**2. Microservices Architecture**
- **Service Decomposition**: Break into microservices
- **API Gateway**: Implement API gateway
- **Service Communication**: Inter-service communication (gRPC, REST)
- **Service Discovery**: Service discovery mechanism
- **Circuit Breaker**: Implement circuit breaker pattern

**3. Cloud Integration**
- **Cloud Deployment**: Deploy to cloud (AWS, Azure, GCP)
- **Serverless Functions**: Use serverless for specific functions
- **Managed Services**: Use managed database and services
- **Auto-Scaling**: Automatic scaling based on load
- **Multi-Region**: Multi-region deployment for availability

### 6.5 User Experience Enhancements

#### 6.5.1 Interface Improvements

**1. Modern UI/UX**
- **Material Design 3**: Upgrade to latest Material Design
- **Dark Mode**: Implement dark mode theme
- **Customizable Themes**: User-customizable color themes
- **Responsive Design**: Enhanced mobile responsiveness
- **Accessibility**: Full WCAG 2.1 AAA compliance

**2. Interactive Features**
- **Drag and Drop**: Drag-and-drop for reordering
- **Keyboard Shortcuts**: Power user keyboard shortcuts
- **Contextual Help**: In-app help and tooltips
- **Tutorial System**: Interactive onboarding tutorial
- **Search Improvements**: Advanced search with autocomplete

**3. Mobile Experience**
- **Progressive Web App (PWA)**: Convert to PWA
- **Mobile App**: Native mobile apps (iOS, Android)
- **Offline Support**: Offline functionality
- **Push Notifications**: Push notifications for mobile
- **Touch Optimizations**: Optimize for touch interactions

#### 6.5.2 Workflow Enhancements

**1. Automation**
- **Workflow Automation**: Automated workflows
- **Rule Engine**: Business rules engine
- **Event Triggers**: Event-based automation
- **Scheduled Tasks**: Cron-like scheduled tasks
- **Webhooks**: Webhook support for integrations

**2. Collaboration Features**
- **Team Collaboration**: Multi-user collaboration
- **Comments System**: Comments on orders/products
- **Activity Feed**: Real-time activity feed
- **Notifications**: In-app and email notifications
- **Task Management**: Task assignment and tracking

### 6.6 Integration Enhancements

#### 6.6.1 Third-Party Integrations

**1. E-commerce Platforms**
- **Shopify Integration**: Integrate with Shopify
- **WooCommerce Integration**: WooCommerce integration
- **Magento Integration**: Magento integration
- **Marketplace Integration**: Amazon, eBay marketplace integration

**2. Business Tools**
- **Accounting Software**: QuickBooks, Xero integration
- **CRM Integration**: Salesforce, HubSpot integration
- **Email Marketing**: Mailchimp, SendGrid integration
- **Analytics Tools**: Google Analytics, Mixpanel integration

**3. Communication Tools**
- **Slack Integration**: Slack notifications and commands
- **Microsoft Teams**: Teams integration
- **WhatsApp Business**: WhatsApp notifications
- **SMS Integration**: SMS notifications via Twilio

#### 6.6.2 API Enhancements

**1. Public API**
- **RESTful API**: Comprehensive REST API
- **GraphQL API**: GraphQL endpoint
- **Webhooks**: Webhook system for events
- **API Documentation**: Interactive API documentation
- **API Versioning**: Proper API versioning strategy

**2. Developer Tools**
- **SDK Development**: SDKs for popular languages
- **Developer Portal**: Developer documentation portal
- **Sandbox Environment**: Testing sandbox
- **API Keys Management**: Self-service API key management

### 6.7 Data Management Enhancements

#### 6.7.1 Data Import/Export

**1. Data Import**
- **CSV Import**: Import data from CSV files
- **Excel Import**: Import from Excel files
- **Bulk Import**: Bulk data import with validation
- **Import Templates**: Pre-defined import templates
- **Import History**: Track import history

**2. Data Export**
- **Multiple Formats**: Export to CSV, Excel, PDF, JSON
- **Custom Exports**: Customizable export fields
- **Scheduled Exports**: Automated scheduled exports
- **Export Templates**: Reusable export templates

#### 6.7.2 Data Quality

**1. Data Validation**
- **Data Quality Rules**: Define data quality rules
- **Data Cleansing**: Automated data cleansing
- **Duplicate Detection**: Detect and merge duplicates
- **Data Enrichment**: Enrich data from external sources

**2. Data Migration**
- **Migration Tools**: Data migration utilities
- **Data Transformation**: Data transformation pipelines
- **Migration Testing**: Test migrations before execution
- **Rollback Capability**: Rollback migrations if needed

### 6.8 Testing and Quality Assurance

#### 6.8.1 Testing Framework

**1. Unit Testing**
- **Jest/Mocha**: Unit testing framework
- **Code Coverage**: Achieve 80%+ code coverage
- **Test Automation**: Automated test execution
- **Mock Services**: Mock external services

**2. Integration Testing**
- **API Testing**: Comprehensive API testing
- **Database Testing**: Database integration tests
- **End-to-End Testing**: E2E tests with Cypress/Playwright
- **Performance Testing**: Load and stress testing

**3. Quality Assurance**
- **Code Quality Tools**: ESLint, Prettier, SonarQube
- **Automated Code Review**: Automated code review
- **Security Scanning**: Automated security scanning
- **Dependency Scanning**: Scan for vulnerable dependencies

### 6.9 Documentation Enhancements

#### 6.9.1 Technical Documentation

**1. Code Documentation**
- **JSDoc/TSDoc**: Comprehensive code documentation
- **API Documentation**: OpenAPI/Swagger documentation
- **Architecture Documentation**: System architecture diagrams
- **Database Schema Documentation**: Database schema docs

**2. User Documentation**
- **User Guides**: Comprehensive user guides
- **Video Tutorials**: Video tutorials for features
- **FAQ Section**: Frequently asked questions
- **Release Notes**: Detailed release notes

### 6.10 Implementation Roadmap

#### 6.10.1 Phase 1: Critical Security and Performance (Months 1-3)
- Implement httpOnly cookies
- Add rate limiting
- Implement pagination
- Add caching layer
- Fix known bugs
- Add comprehensive logging

#### 6.10.2 Phase 2: Core Features and RBAC (Months 4-6)
- Implement RBAC system
- Add payment gateway integration
- Implement inventory management
- Add email notifications
- Enhance analytics dashboard

#### 6.10.3 Phase 3: Advanced Features (Months 7-9)
- Add shipping integration
- Implement advanced reporting
- Add mobile app/PWA
- Integrate third-party services
- Enhance user experience

#### 6.10.4 Phase 4: Scalability and Enterprise Features (Months 10-12)
- Implement microservices architecture
- Add multi-region support
- Implement advanced analytics
- Add enterprise SSO
- Complete GDPR compliance

### 6.11 Success Metrics

**Key Performance Indicators (KPIs):**
- **Security**: Zero security breaches, 100% HTTPS adoption
- **Performance**: < 200ms API response time, < 2s page load
- **Reliability**: 99.9% uptime, < 0.1% error rate
- **User Satisfaction**: 4.5+ user rating, < 5% support tickets
- **Code Quality**: 80%+ test coverage, < 5% technical debt

---

## 7. Development Setup

### Prerequisites

- Node.js (v14 or higher)
- Angular CLI (v16.1.0)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd E-Mart Dashboard Application
   ```

2. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Configure Environment Variables**
   - Create a `.env` file in the `backend` directory
   - Add the following variables:
     ```
     PORT=9000
     SECRET_KEY=your-secret-key-here
     MONGODB_URI=your-mongodb-connection-string
     ```

5. **Start MongoDB**
   - Ensure MongoDB is running locally or configure cloud connection

6. **Start Backend Server**
   ```bash
   cd backend
   npm start
   # or for development with auto-reload
   npm run start:dev
   ```

7. **Start Frontend Development Server**
   ```bash
   npm start
   # or
   ng serve
   ```

8. **Access the Application**
   - Frontend: `http://localhost:4200`
   - Backend API: `http://localhost:9000`

### Build for Production

```bash
# Build Angular application
ng build --configuration production

# The build artifacts will be stored in the `dist/` directory
```

---

## 8. API Endpoints

### Authentication
- `GET /api/registration` - Get all registered users
- `POST /api/registration` - User registration (with image upload support)
- `GET /api/login` - Get authenticated user (requires auth token)
- `POST /api/login` - User login
- `GET /api/logout` - User logout (requires auth token)

### User Management
- `GET /api/profile` - Get all users
- `GET /api/profile/:id` - Get user by ID
- `POST /api/update/:id` - Update user profile (with image upload support)
- `POST /api/delete/:id` - Delete user account
- `POST /api/change-password/:id` - Change password
- `POST /api/forget-password` - Request password reset (sends email)
- `GET /api/forget-password/:id/:token` - Verify reset token
- `POST /api/reset-password/:id/:token` - Reset password

### Product Management
- `GET /api/product` - Get all products
- `POST /api/product` - Create new product (Note: does not include image upload or actualPrice in current implementation)
- `GET /api/product/:id` - Get product by ID
- `POST /api/product-details/:id` - Update product

### Order Management
- `GET /api/order-details` - Get all orders
- `POST /api/order-details` - Create new order
- `GET /api/order-details/:id` - Get order by ID
- `POST /api/order-details-update/:id` - Update order status

### Cancellation
- `GET /api/cancel` - Get all cancellations
- `POST /api/cancel` - Create cancellation record

---

## 9. Project Structure

```
E-Mart Dashboard Application/
├── src/                          # Angular frontend source
│   ├── app/
│   │   ├── home/                # Dashboard home component
│   │   ├── dashboard/           # Dashboard component
│   │   ├── products/            # Product management
│   │   ├── order/               # Order management
│   │   ├── order-register/      # Order creation/editing
│   │   ├── users/               # User profile
│   │   ├── edit-user/          # Edit user profile
│   │   ├── login/               # Authentication
│   │   ├── register/           # User registration
│   │   ├── logout/             # Logout component
│   │   ├── cancellation/       # Order cancellation
│   │   ├── category/           # Category management
│   │   ├── offer/              # Offer management
│   │   ├── setting/            # Settings component
│   │   ├── search/             # Search component
│   │   ├── forget-password/    # Forgot password
│   │   ├── change-password/    # Change password
│   │   ├── reset-password/     # Reset password
│   │   ├── remove-account/     # Account deletion
│   │   ├── header/             # Header component
│   │   ├── sidenav/            # Side navigation
│   │   ├── app-nav/            # Main navigation component
│   │   ├── services/           # API services (dashboard.service.ts)
│   │   ├── guards/             # Route guards (login.guard.ts)
│   │   ├── emailvalidator/     # Email validation directive
│   │   ├── request.interceptor.ts  # HTTP request interceptor
│   │   └── error.interceptor.ts     # HTTP error interceptor
│   └── assets/                  # Static assets
├── backend/                      # Node.js backend
│   ├── src/
│   │   ├── models/              # MongoDB models
│   │   │   ├── user.js         # User model
│   │   │   ├── product.js      # Product model
│   │   │   ├── orderList.js    # Order model (collection: 'OderList')
│   │   │   └── model.js        # Cancel model
│   │   ├── routes/              # API routes
│   │   │   └── router.js       # Main router file
│   │   ├── middleware/          # Middleware
│   │   │   ├── auth.js         # Authentication middleware
│   │   │   └── email.js        # Email service middleware
│   │   ├── db/                  # Database connection
│   │   │   └── conn.js         # MongoDB connection
│   │   ├── uploads/             # File uploads directory
│   │   └── index.js            # Server entry point
│   └── package.json
├── package.json                  # Frontend dependencies
├── angular.json                  # Angular configuration
└── tsconfig.json                 # TypeScript configuration
```

---

## 10. Testing

```bash
# Run unit tests
ng test

# Run end-to-end tests
ng e2e
```

---

## 11. Further Help

For more information about Angular CLI, visit the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

## 12. Conclusion

The E-Mart Dashboard Application is a functional full-stack e-commerce management solution built with Angular 16.1.0 and Node.js/Express, demonstrating modern web development practices. This document provides a comprehensive overview of the application's architecture, features, requirements, limitations, and enhancement roadmap.

### 12.1 Project Overview

The application successfully delivers core e-commerce management capabilities including user authentication, product management, order processing, and business analytics. Built on a three-tier architecture (Angular frontend, Express.js backend, MongoDB database), it provides a solid foundation for e-commerce operations with a modern, responsive user interface.

**Key Achievements:**
- Complete full-stack implementation with RESTful API
- JWT-based authentication and password management
- Comprehensive CRUD operations for products and orders
- Real-time analytics with interactive charts
- File upload system for images
- Complete order lifecycle management

### 12.2 Current State

**Strengths:** Functional MVP with modern technology stack, clean architecture, comprehensive features, and intuitive user experience.

**Limitations:** Security vulnerabilities (token storage, no RBAC), performance constraints (no pagination/caching), scalability issues (single-server), limited testing, and missing advanced features (payments, shipping).

These limitations are typical for an MVP and can be addressed through the proposed enhancement roadmap (Section 6).

### 12.3 Business Value

The application provides centralized e-commerce management, operational efficiency, data-driven insights, improved customer service, and a foundation for future growth and expansion.

### 12.4 Future Roadmap

The four-phase enhancement plan prioritizes:
1. **Phase 1 (Months 1-3)**: Critical security and performance improvements
2. **Phase 2 (Months 4-6)**: Core features and RBAC implementation
3. **Phase 3 (Months 7-9)**: Advanced features and integrations
4. **Phase 4 (Months 10-12)**: Scalability and enterprise features

### 12.5 Key Recommendations

**Immediate:** Implement httpOnly cookies, rate limiting, pagination, fix bugs, add input validation, and proper logging.

**Short-Term:** Add RBAC, payment integration, inventory management, email notifications, enhanced analytics, and comprehensive testing.

**Long-Term:** Migrate to microservices, implement advanced analytics, add mobile apps, integrate with e-commerce platforms, and achieve enterprise-grade security.

### 12.6 Final Summary

The E-Mart Dashboard Application serves as an excellent foundation for e-commerce management. While currently an MVP with limitations, it demonstrates solid technical skills and provides a clear path to evolve into a robust, enterprise-grade solution through systematic improvements outlined in this documentation.

**Technologies:** Angular 16.1.0, Node.js, Express.js, MongoDB, JWT, Chart.js, Angular Material, Bootstrap

This documentation serves developers, stakeholders, project managers, and future maintainers with technical specifications, business value, requirements, and enhancement priorities necessary for the application's evolution.

---

## 13. Sample Program Code

This section provides code samples from key components of the E-Mart Dashboard Application to illustrate the implementation patterns and architecture.

### 13.1 Backend Code Samples

#### 13.1.1 User Model (MongoDB Schema)

**File:** `backend/src/models/user.js`

```javascript
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    unique: [true,'Please enter your phone number']
  },
  image: {
    type: String
  },
  location: {
    type: String,
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
});

// JWT Token Generation Method
userSchema.methods.generateAuthToken = async function(){
  try {
    // 7 days in seconds: 7 * 24 * 60 * 60 = 604800
    const expirationSeconds = 604800; // 7 days
    const token = jwt.sign({_id: this._id}, process.env.SECRET_KEY, {
      expiresIn: expirationSeconds
    });
    
    // Verify the token expiration was set correctly
    const decoded = jwt.decode(token);
    if (decoded && decoded.exp) {
      const expirationDate = new Date(decoded.exp * 1000);
      const now = new Date();
      const hoursUntilExpiry = (decoded.exp * 1000 - now.getTime()) / (1000 * 60 * 60);
      console.log(`[Token Generation] New token created - expires in: ${hoursUntilExpiry.toFixed(2)} hours (at ${expirationDate.toISOString()})`);
    }
    
    this.tokens = this.tokens.concat({token: token});
    await this.save();
    return token;
  } catch (error) {
    // Note: There's a bug in the actual code - 'res' is not available in this context
    // The error should be thrown, not sent as response
    throw error;
  }
}

// Password Hashing Middleware
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10);
  }
  next();
});

const User = new mongoose.model("User", userSchema);
module.exports = User;
```

**Key Features:**
- User schema with validation
- JWT token generation method
- Automatic password hashing with bcrypt
- Token storage in user document

#### 13.1.2 Product Model

**File:** `backend/src/models/product.js`

```javascript
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: [true, 'Please enter the name of your product']
    },
    quantity: {
        type: Number,
    },
    productCode: {
        type: String,
        required: [true, 'Please enter the product code']
    },
    productDate: {
        type: String,
    },
    actualPrice: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    }
});

const Product = new mongoose.model('Product', productSchema);
module.exports = Product;
```

#### 13.1.3 Order Model

**File:** `backend/src/models/orderList.js`

```javascript
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: [true, 'Please enter the name of your product']
    },
    quantity: {
        type: Number,
    },
    productCode: {
        type: String,
        required: [true, 'Please enter the product code']
    },
    orderDate: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    actualPrice: {
        type: Number,
    },
    orderStatus: {
        type: String,
        default: 'Pending',
        enum: ['Pending', 'Cancelled', 'Completed']
    },
    customerName: {
        type: String
    },
    customerEmail: {
        type: String
    },
    customerPhone: {
        type: Number
    },
    customerAddress: {
        type: String
    },
});

const OrderList = new mongoose.model('OderList', orderSchema);
module.exports = OrderList;
```

#### 13.1.4 Authentication Middleware

**File:** `backend/src/middleware/auth.js`

```javascript
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send({ message: "No token provided" });
    }

    const verifyUser = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findOne({
      _id: verifyUser._id,
      "tokens.token": token,
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.send({
      message: "Unauthorized",
      status: 401,
    });
  }
};

module.exports = auth;
```

**Key Features:**
- JWT token validation
- User verification from database
- Protected route middleware

#### 13.1.5 Server Configuration

**File:** `backend/src/index.js`

```javascript
require('dotenv').config();
const express = require('express');
const app = express();
require('./db/conn')
const port = process.env.PORT || 9000;
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors({
    origin: "http://localhost:4200",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));

const router = require('./routes/router')
app.use('/api', router)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});

app.get('/',(req, res) => {
    res.send(" Invalid endpoint ")
})

// Error Handle
app.use((err, req, res, next) => {
    console.error("Error:", err.message);

    if (!err.statusCode) err.statusCode = 500;

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
});
```

#### 13.1.6 Database Connection

**File:** `backend/src/db/conn.js`

```javascript
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_URI, {useNewUrlParser : true})
    .then(() => {
        console.log('Database connection..');
    }).catch((error) => {
        console.log('Database are not connected', error);
    })
```

#### 13.1.7 API Route Example - User Login

**File:** `backend/src/routes/router.js` (Excerpt)

```javascript
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth");

// User Login Endpoint
router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const userData = await User.findOne({ email: email });

    const passwordMatch = await bcrypt.compare(password, userData.password);

    if (passwordMatch) {
      const token = await userData.generateAuthToken();
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 60000), // Note: Cookie expires in 1 minute, but token expires in 7 days
        httpOnly: true,
        // secure:true // Commented out in actual code
      });

      res.json({
        message: "Login successfull",
        status: 200,
        token: token,
        userData: userData,
      });
    } else {
      res.send({
        message: "Invalid Details",
        status: 404,
      });
    }
  } catch (error) {
    res.json({
      message: "Invalid Details",
      status: 404,
    });
  }
});

// Order Creation Endpoint
router.post("/order-details", async (req, res) => {
  try {
    const OrderList = new OderList({
      itemName: req.body.itemName,
      quantity: req.body.quantity,
      productCode: req.body.productCode,
      orderDate: req.body.orderDate,
      price: req.body.price,
      actualPrice: req.body.actualPrice,
      customerName: req.body.customerName,
      customerEmail: req.body.customerEmail,
      customerPhone: req.body.customerPhone,
      customerAddress: req.body.customerAddress,
    });

    const orderList = await OrderList.save();

    res.json({
      message: "Successfully Added New Order!",
      status: 200,
    });
  } catch (error) {
    res.json({
      error: error,
      message: "Order Not Get!",
      status: 500,
    });
  }
});

// Note: The model is named 'OderList' (typo) but variable is 'OrderList'

module.exports = router;
```

### 13.2 Frontend Code Samples

#### 13.2.1 Dashboard Service (API Communication)

**File:** `src/app/services/dashboard.service.ts` (Excerpt)

```typescript
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private REST_API = 'http://localhost:9000/api';
  
  userData: BehaviorSubject<{
    _id: string;
    name: string;
    email: string;
    phone: string;
    token: string;
    location: string;
    image: string;
  }> = new BehaviorSubject({
    _id: '',
    name: '',
    email: '',
    phone: '',
    token: '',
    location: '',
    image: '',
  });

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookie: CookieService
  ) {
    // Check if user is already logged in (on page refresh)
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn = true;
      // Restore user info if available
      const userInfo = localStorage.getItem('userInfo');
      if (userInfo) {
        try {
          const user = JSON.parse(userInfo);
          this.userData.next({
            _id: user._id || '',
            name: user.name || '',
            email: user.email || '',
            phone: user.phone || '',
            token: token,
            location: user.location || '',
            image: user.image || '',
          });
        } catch (error) {
          throw error;
        }
      }
    }
  }

  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  userSub: any;

  // User Login
  login(email: string, password: string) {
    if (email === email && password === password) {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }

    let api_url = `${this.REST_API}/login`;
    return this.http
      .post(
        api_url,
        { email: email, password: password },
        { headers: this.httpHeaders }
      )
  }

  // Get All Orders
  orderAll() {
    let api_url = `${this.REST_API}/order-details`;
    return this.http.get(api_url).pipe(catchError(this.handleError));
  }

  // Get All Products
  productAll() {
    let api_url = `${this.REST_API}/product`;
    return this.http.get(api_url).pipe(catchError(this.handleError));
  }

  // Error Handler
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle Error Client
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status} \n Message : ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
```

**Key Features:**
- Centralized API communication
- BehaviorSubject for user data management
- Error handling
- HTTP client configuration

#### 13.2.2 Login Component

**File:** `src/app/login/login.component.ts`

```typescript
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  error: any = null;

  constructor(
    private router: Router,
    private dashboardService: DashboardService,
    private cookie: CookieService
  ) {}

  ngOnInit(): void {
    // If user is already logged in, redirect to home
    const token = localStorage.getItem('token');
    if (token || this.dashboardService.isLoggedIn) {
      this.router.navigate(['/home']);
    }
  }

  login() {
      this.dashboardService.login(this.email, this.password) .subscribe((response: any) => {
        if(!response.userData){
          this.error = "Invalid user details, Please try again later!"
        }
        if (this.password != response.userData.password) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userInfo', JSON.stringify(response.userData));
          this.cookie.set('token', response.token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days in milliseconds
          });
          // Set isLoggedIn to true after successful login
          this.dashboardService.isLoggedIn = true;
          this.router.navigate(['/home']);
          window.location.reload();
        } else {
          this.router.navigate(['/']);
        }
  });
   
  }
}
```

#### 13.2.3 Route Guard (Authentication)

**File:** `src/app/guards/login.guard.ts`

```typescript
import { Injectable } from "@angular/core";
import { 
  ActivatedRouteSnapshot, 
  CanActivate, 
  Router, 
  RouterStateSnapshot, 
  UrlTree 
} from "@angular/router";
import { Observable } from "rxjs";
import { DashboardService } from "../services/dashboard.service";

@Injectable({
  providedIn: 'root'
})
export class loginGuard implements CanActivate {

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    
    if (token && !this.dashboardService.isLoggedIn) {
      this.dashboardService.isLoggedIn = true;
    }
    
    const isAuthenticated = this.dashboardService.isLoggedIn || !!token;
    
    if (!isAuthenticated) {
      this.dashboardService.isLoggedIn = false;
      return this.router.createUrlTree(['/']);
    }
    
    return true;
  }
}
```

**Key Features:**
- Route protection
- Token validation
- Automatic redirect for unauthorized access

#### 13.2.4 HTTP Request Interceptor

**File:** `src/app/request.interceptor.ts`

```typescript
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>, 
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    // Skip token for registration and POST login
    const isPostLogin = request.method === 'POST' && request.url.includes('/login');
    const isRegistration = request.url.includes('/registration');
    
    if (isRegistration || isPostLogin) {
      return next.handle(request);
    }

    // Add token to authorized requests
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      });
    }

    return next.handle(request);
  }
}
```

**Key Features:**
- Automatic token injection
- Selective token application
- Request modification

#### 13.2.5 HTTP Error Interceptor

**File:** `src/app/error.interceptor.ts`

```typescript
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DashboardService } from './services/dashboard.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle 401 Unauthorized errors
        if (error.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('userInfo');
          this.dashboardService.isLoggedIn = false;
          this.dashboardService.userData.next({
            _id: '',
            name: '',
            email: '',
            phone: '',
            token: '',
            location: '',
            image: '',
          });

          if (!this.router.url.includes('/login') && !this.router.url.includes('/')) {
            this.router.navigate(['/']);
          }
        }

        return throwError(() => error);
      })
    );
  }
}
```

**Key Features:**
- Centralized error handling
- Automatic logout on 401 errors
- User data cleanup

### 13.3 Configuration Examples

#### 13.3.1 Environment Variables (.env)

```env
PORT=9000
SECRET_KEY=your-secret-jwt-key-here
DB_URI=mongodb://localhost:27017/emart-db
# Or for MongoDB Atlas:
# DB_URI=mongodb+srv://username:password@cluster.mongodb.net/emart-db
```

#### 13.3.2 Angular Module Configuration

**File:** `src/app/app.module.ts` (Excerpt)

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RequestInterceptor } from './request.interceptor';
import { ErrorInterceptor } from './error.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // ... other imports
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  // ...
})
export class AppModule { }
```

### 13.4 Code Patterns and Best Practices

**Backend Patterns:**
- Middleware-based authentication
- Schema-based data validation
- Error handling with try-catch blocks
- Environment variable configuration
- RESTful API design

**Frontend Patterns:**
- Service-based API communication
- BehaviorSubject for state management
- Route guards for authentication
- HTTP interceptors for cross-cutting concerns
- Component-based architecture

**Security Patterns:**
- JWT token-based authentication
- Password hashing with bcrypt
- Token validation middleware
- Error handling without exposing sensitive information

---

## 14. Bibliography

### 13.1 Core Technologies

- **Angular**: https://angular.io/docs | https://angular.io/cli | https://material.angular.io/
- **Node.js**: https://nodejs.org/docs/
- **Express.js**: https://expressjs.com/
- **MongoDB**: https://www.mongodb.com/docs/ | https://mongoosejs.com/docs/

### 13.2 Key Libraries

- **Authentication**: JWT (https://jwt.io/), bcryptjs, jsonwebtoken
- **Data Visualization**: Chart.js (https://www.chartjs.org/), ng2-charts
- **UI Components**: Bootstrap (https://getbootstrap.com/), Angular Material, Material Design (https://material.io/)
- **File Upload**: Multer (https://www.npmjs.com/package/multer)
- **Email**: Nodemailer (https://nodemailer.com/)
- **Reactive Programming**: RxJS (https://rxjs.dev/)

### 13.3 Standards and Best Practices

- **Web Standards**: W3C (https://www.w3.org/standards/)
- **REST API**: RESTful API Design (https://restfulapi.net/)
- **Security**: OWASP Top 10 (https://owasp.org/www-project-top-ten/), JWT RFC 7519
- **Accessibility**: WCAG 2.1 (https://www.w3.org/WAI/WCAG21/)
- **Performance**: Web.dev (https://web.dev/performance/)

### 13.4 Development Tools

- **Package Management**: npm (https://docs.npmjs.com/)
- **Version Control**: Git (https://git-scm.com/), GitHub (https://docs.github.com/)
- **Testing**: Jasmine, Karma, Cypress
- **Code Quality**: ESLint, Prettier, TypeScript

### 13.5 Version Information

**Framework Versions:**
- Angular: 16.1.0 | Node.js: v14+ | Express.js: 4.18.2 | MongoDB: 4.4+ | Mongoose: 7.4.3 | Bootstrap: 5.3.0 | Chart.js: 4.5.1 | Angular Material: 16.1.3

**Note:** For latest versions and updates, refer to official documentation of each technology.

---

## License

This project is private and proprietary.

---

## Author

Developed for E-Mart Dashboard Application
