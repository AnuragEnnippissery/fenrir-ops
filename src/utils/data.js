export const scans = [
  {
    id: 1,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: {
      critical: 12,
      high: 23,
      medium: 18,
      low: 4
    },
    lastScan: "4d ago"
  },
  {
    id: 2,
    name: "Payment Gateway API",
    type: "Blackbox",
    status: "Completed",
    progress: 100,
    vulnerabilities: {
      critical: 5,
      high: 14,
      medium: 9,
      low: 2
    },
    lastScan: "2d ago"
  },
  {
    id: 3,
    name: "Internal Admin Panel",
    type: "Greybox",
    status: "Scheduled",
    progress: 100,
    vulnerabilities: {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0
    },
    lastScan: "6d ago"
  },
  {
    id: 4,
    name: "IoT Devices Network",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    vulnerabilities: {
      critical: 3,
      high: 6,
      medium: 2,
      low: 1
    },
    lastScan: "3d ago"
  },
  {
    id: 5,
    name: "Customer Portal",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: {
      critical: 8,
      high: 16,
      medium: 12,
      low: 5
    },
    lastScan: "1d ago"
  }
];

export const scanlogs =[
  {
    "timestamp": "10:00:00",
    "message": "I'll begin a structured security assessment on portal.examplecorp.com. Starting with reconnaissance and service discovery."
  },
  {
    "timestamp": "10:01:00",
    "message": "Target is reachable. Performing port scan to identify exposed services and versions."
  },
  {
    "timestamp": "10:02:00",
    "message": "Reconnaissance results: portal.examplecorp.com is running Nginx 1.24.0 on port 443 (HTTPS). Proceeding to analyze web application structure."
  },
  {
    "timestamp": "10:03:00",
    "message": "Discovered an authentication page for the Employee Portal. Noticed a developer comment referencing a temporary test account. Attempting controlled login validation."
  },
  {
    "timestamp": "10:04:00",
    "message": "Login redirects to /account/overview. Observing request behavior and checking for additional accessible endpoints."
  },
  {
    "timestamp": "10:05:00",
    "message": "Identified potential access control weakness related to user identifiers in request headers. Documenting findings for responsible disclosure."
  }
]

export const findinglog=[
  {
    "id": 1,
    "severity": "Low",
    "title": "Information Disclosure via Debug Endpoint",
    "endpoint": "/api/debug/status",
    "description": "Debug endpoint exposes application version and environment details. While no direct exploitation observed, it increases attack surface visibility.",
    "time": "10:45:23"
  },
  {
    "id": 2,
    "severity": "High",
    "title": "Unauthorized Access to User Metadata",
    "endpoint": "/api/auth/login",
    "description": "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
    "time": "10:45:23"
  },
  {
    "id": 3,
    "severity": "Medium",
    "title": "Broken Authentication Rate Limiting",
    "endpoint": "/api/search",
    "description": "No effective rate limiting detected on login attempts. Automated brute-force attempts are possible.",
    "time": "10:45:23"
  },
  // {
  //   
  // }
]