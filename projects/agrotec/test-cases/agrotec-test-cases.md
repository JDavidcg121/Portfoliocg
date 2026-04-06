# Agrotec – Test Cases  
Manual Testing Documentation  
Author: Jason Calderón  
Version: 1.0  
Date: 2026-04-04

## 📘 1. Overview
This document contains functional manual test cases for the public website **Agrotec**, which publishes digital agronomy magazines, news articles, interactive content, and external advertising links.

## 🧪 2. Scope
- Main navigation  
- Articles / news notes  
- Digital magazine viewer  
- External advertising links   
- General UI & responsive behavior  

## 📂 3. Test Cases

---

### **TC-001 – Main Menu Navigation**
**Module:** Navigation  
**Priority:** High  
**Preconditions:** Website loaded  
**Steps:**  
1. Open Agrotec homepage  
2. Click each main menu option (e.g., Revistas, Noticias, Contacto)  
**Expected Result:**  
Each section loads correctly without errors.

---

### **TC-002 – Open News Article**
**Module:** Articles  
**Priority:** High  
**Preconditions:** Homepage loaded  
**Steps:**  
1. Scroll to a visible article  
2. Click the article title or image  
**Expected Result:**  
The full article page opens and displays text, images, and publication date.

---

### **TC-003 – “Read More” Button Behavior**
**Module:** Articles  
**Priority:** Medium  
**Steps:**  
1. Identify an article with a “Ver más” or similar button  
2. Click the button  
**Expected Result:**  
User is redirected to the complete article content.

---

### **TC-004 – Digital Magazine Opens**
**Module:** Magazine Viewer  
**Priority:** High  
**Steps:**  
1. Navigate to the “Revistas” section  
2. Click the main digital magazine  
**Expected Result:**  
The interactive magazine viewer opens without crashes.

---

### **TC-005 – Turn Pages in Magazine**
**Module:** Magazine Viewer  
**Priority:** High  
**Preconditions:** Digital magazine viewer open  
**Steps:**  
1. Click the right arrow to advance a page  
2. Click the left arrow to go back  
**Expected Result:**  
Pages turn smoothly and load correct content.

---

### **TC-006 – Zoom Functionality **
**Module:** Magazine Viewer  
**Priority:** Medium  
**Steps:**  
1. Open magazine viewer  
2. Use zoom controls or pinch gesture (if mobile)  
**Expected Result:**  
Page zooms in/out without distortion.

---

### **TC-007 – External Ad Opens Correctly**
**Module:** Advertisements  
**Priority:** High  
**Steps:**  
1. Locate a sponsored banner or advertisement  
2. Click the ad  
**Expected Result:**  
A new tab opens with the advertiser’s page. No broken links.

---

### **TC-008 – Contact Page Loads**
**Module:** Contact  
**Priority:** Medium  
**Steps:**  
1. Click the “Contacto” menu option  
**Expected Result:**  
Contact information or form loads properly.

---


---

### **TC-009 – Mobile Responsive Layout**
**Module:** Responsive  
**Priority:** Medium  
**Preconditions:** Open site in mobile view  
**Steps:**  
1. Open browser DevTools and switch to mobile mode  
2. Navigate through menu, articles, magazine, and contact  
**Expected Result:**  
Content adapts correctly; no overlapping or cut elements.

---

### **TC-010 – Menu Hamburger on Mobile**
**Module:** Navigation  
**Priority:** Medium  
**Steps:**  
1. Open website in mobile size  
2. Tap the hamburger menu  
**Expected Result:**  
Menu expands and allows navigation smoothly.

---

### **TC-011 – Broken Link Validation**
**Module:** Links  
**Priority:** Medium  
**Steps:**  
1. Inspect multiple internal and external links  
2. Click them one by one  
**Expected Result:**  
All links load valid pages; no 404 or blank screens.

