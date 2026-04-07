# Agrotec – Performance Test Report  
Performance Testing Documentation  
Author: Jason Calderón  
Version: 1.0  
Date: 2026-04-07  

## 📘 1. Overview
This document contains performance test cases for the **Agrotec** website, covering load, stress, and response time measurements. These tests help ensure that the site maintains stability, speed, and usability under various conditions.  

## 🧪 2. Scope
- Page load times  
- Stress and load testing  
- Concurrent users  
- API response times  
- UI responsiveness under heavy load  

## 📂 3. Test Cases

---

### **TC-P-001 – Homepage Load Time**
**Module:** Performance  
**Priority:** High  
**Steps:**  
1. Open the Agrotec homepage in a browser  
2. Measure time until the page is fully loaded  
**Expected Result:**  
Page loads within 2 seconds under normal load.  

---

### **TC-P-002 – Stress Test**
**Module:** Performance  
**Priority:** High  
**Steps:**  
1. Simulate 500 concurrent users navigating the website  
2. Perform actions like browsing articles and magazines  
**Expected Result:**  
Website does not crash; response time remains acceptable (<3 seconds).  

---

### **TC-P-003 – API Response**
**Module:** Backend  
**Priority:** Medium  
**Steps:**  
1. Send requests to main API endpoints (articles, magazines, ads)  
**Expected Result:**  
Responses are returned within 1 second under normal load.  

---

### **TC-P-004 – Concurrent User Navigation**
**Module:** Performance  
**Priority:** Medium  
**Steps:**  
1. Simulate 100 users browsing multiple sections simultaneously  
2. Observe page rendering and interaction responsiveness  
**Expected Result:**  
No noticeable lag or UI errors; all sections render correctly.  

---

### **TC-P-005 – Digital Magazine Load**
**Module:** Magazine Viewer  
**Priority:** High  
**Steps:**  
1. Open the main digital magazine  
2. Navigate multiple pages quickly  
**Expected Result:**  
Pages load smoothly without freezing or delayed content.  

---

### **TC-P-006 – External Ads Response**
**Module:** Advertisements  
**Priority:** Medium  
**Steps:**  
1. Click several sponsored ads while under load  
**Expected Result:**  
Ads open in new tabs without affecting website performance.  

---

### **TC-P-007 – Mobile Performance**
**Module:** Responsive / Mobile  
**Priority:** Medium  
**Steps:**  
1. Open website in mobile viewport  
2. Navigate sections, open articles and magazines  
**Expected Result:**  
Content loads quickly; no overlapping or cut-off elements; smooth interaction.  

---

### **TC-P-008 – Peak Load Test**
**Module:** Performance  
**Priority:** High  
**Steps:**  
1. Simulate 1000+ concurrent users during peak hours  
2. Navigate multiple pages and actions  
**Expected Result:**  
Website remains operational; response times are within acceptable thresholds; no crashes.  

---

### **TC-P-009 – Resource Usage Monitoring**
**Module:** Backend / Frontend  
**Priority:** Medium  
**Steps:**  
1. Monitor CPU, memory, and network usage during normal and peak loads  
**Expected Result:**  
Server and client resources remain within safe limits; no memory leaks or excessive CPU spikes.  

---

### **TC-P-010 – Browser Compatibility**
**Module:** Performance  
**Priority:** Medium  
**Steps:**  
1. Test website load and interactions in Chrome, Firefox, Edge, and Safari  
2. Repeat tests on desktop and mobile  
**Expected Result:**  
Performance is consistent across all supported browsers; no delays or crashes.  

---

✨ **Notes:**  
- All tests can be automated with tools like **JMeter**, **Locust**, or **Cypress Performance plugins**.  
- Results should be documented with screenshots, response times, and metrics for reference.  