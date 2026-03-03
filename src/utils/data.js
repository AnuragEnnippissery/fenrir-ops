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