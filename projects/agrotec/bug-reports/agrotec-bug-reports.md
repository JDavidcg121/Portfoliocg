
# Agrotec – Bug Reports  
Author: Jason Calderón  
Version: 1.0  
Date: 2026-04-04

This document contains bugs identified during exploratory testing on the Agrotec platform.

---

## ⚠️ BUG-001 – Error Loading “Notes” Section
**Type:** Functional  
**Severity:** High  
**Description:** Some notes do not load when clicked, leaving the screen blank.

**Steps to Reproduce:**  
1. Go to the “Notes” section.  
2. Select a recent note.  
3. Observe the content area.

**Expected Result:**  
The note should load full content.

**Actual Result:**  
Blank screen with no visible error.

---

## ⚠️ BUG-002 – Main Banner Image Distorts on Small Screens
**Type:** Visual / Responsive  
**Severity:** Medium  
**Description:** The main banner image appears vertically stretched on small devices.

**Expected Result:**  
Image maintains correct proportions.

**Actual Result:**  
Image is distorted.

---

## ⚠️ BUG-003 – Main Menu Freezes When Scrolling
**Type:** UX / Usability  
**Severity:** High  
**Description:** When the user scrolls down, the menu becomes stuck and does not respond.

**Steps:**  
1. Open the website.  
2. Scroll downward.  
3. Try clicking the menu.

**Expected Result:**  
Menu should open normally.

**Actual Result:**  
Menu freezes.

---

## ⚠️ BUG-004 – Digital Magazine Pages Load Slowly
**Type:** Performance  
**Severity:** Medium  
**Description:** The interactive magazine takes 1.5–3 seconds to turn pages.

**Expected Result:**  
Smooth page transitions.

**Actual Result:**  
Visible delay.

---

## ⚠️ BUG-005 – External Links Do Not Open in New Tab
**Type:** UX  
**Severity:** Low  
**Description:** Ads and external resources open in the same tab, causing users to leave the site.

**Expected Result:**  
Links should open in a new tab (`target="_blank"`).

**Actual Result:**  
Current tab is replaced.

---

## ⚠️ BUG-006 – Overlapping Text in Long Articles
**Type:** Visual  
**Severity:** High  
**Description:** Paragraphs overlap with images in long articles.

**Expected Result:**  
Proper spacing between text and images.

**Actual Result:**  
Text overlaps image elements.

---

## ⚠️ BUG-007 – Carousel Main Image Gets Cropped on Mobile
**Type:** Visual / Responsive  
**Severity:** Medium  
**Description:** On smartphones, the main carousel image appears cut off.

---

## ⚠️ BUG-008 – “Notes” Menu Cannot Be Closed on Mobile
**Type:** Usability / Responsive  
**Severity:** High  
**Description:** Once opened, the menu does not close when tapping outside of it.

---

## ⚠️ BUG-009 – Old Magazine Links Load Blank Page
**Type:** Functional  
**Severity:** High  
**Description:** Magazines from 2020 and previous years do not show any content.

---

## ⚠️ BUG-010 – “Contact” Button Scrolls to Incorrect Position
**Type:** UX / Functional  
**Severity:** Medium  
**Description:** Scroll stops several pixels above the intended section.

---

## ⚠️ BUG-011 – Embedded Video Autoplays on Mobile
**Type:** UX  
**Severity:** Medium  
**Description:** Video starts playing automatically without user interaction.

---

## ⚠️ BUG-012 – Hamburger Icon Doesn’t Change When Menu Opens
**Type:** Visual / UX  
**Severity:** Low  
**Description:** The icon doesn’t transform into an “X”, making it unclear how to close the menu.

EOF