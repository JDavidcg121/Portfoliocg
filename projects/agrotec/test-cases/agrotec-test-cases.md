# Agrotec – Test Cases  
Manual Testing Documentation  
Author: Jason Calderón  
Version: 1.0  
Date: 2026-04-04

## ��� 1. Overview
This document contains functional manual test cases for the platform **Agrotec**, focusing on login flow, navigation, field data visualization, and user interactions.

## ��� 2. Scope
- Login module  
- Dashboard  
- Crops/fields list  
- Weather information  
- General UI validation  

## ��� 3. Test Cases

### **TC-001 – Valid Login**
**Module:** Login  
**Priority:** High  
**Preconditions:** User account exists  
**Steps:**  
1. Open Agrotec app  
2. Enter valid email  
3. Enter valid password  
4. Tap “Login” button  
**Expected Result:**  
The system logs in and redirects the user to the Dashboard.

### **TC-002 – Invalid Login**
**Module:** Login  
**Priority:** High  
**Preconditions:** User exists  
**Steps:**  
1. Open Agrotec app  
2. Enter valid email  
3. Enter invalid password  
4. Tap Login  
**Expected Result:**  
Error message is shown. User is not logged in.

### **TC-003 – Dashboard Loads**
**Module:** Dashboard  
**Priority:** Medium  
**Preconditions:** User logged in  
**Expected Result:**  
Dashboard widgets load correctly.

### **TC-004 – Fields List Loads**
**Module:** Fields  
**Priority:** High  
**Expected Result:**  
List of fields is displayed.

### **TC-005 – Field Details**
**Module:** Fields  
**Priority:** Medium  
**Expected Result:**  
Field details (soil, humidity, temperature) are correct.

### **TC-006 – Logout**
**Module:** Settings  
**Priority:** Low  
**Expected Result:**  
User is logged out and returned to login screen.

