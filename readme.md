# React Rendering & Virtual DOM Overview

This document explains how React manages updates efficiently using its Virtual DOM and internal algorithms like Reconciliation and React Fiber.

## 1. Virtual DOM and `createRoot`

- When `createRoot` is used, React creates its **own Virtual DOM**.
- This Virtual DOM is then compared to the actual **web browser’s DOM**.
- React **only updates the parts** of the DOM that have changed, rather than replacing the entire DOM.

## 2. Traditional Browser Reload

- In contrast, when a **full reload** happens in the browser (like refreshing the page), the entire DOM is **removed and re-created** with updated values.
- This is inefficient for frequent or small UI updates.

## 3. Virtual DOM Efficiency

- The Virtual DOM is structured like a **tree**, similar to the real DOM.
- React uses this structure to **track changes efficiently** and updates only the nodes (components/elements) that were actually changed.

## 4. Network Calls and Delayed Updates

- Some values in a React component depend on **network calls** (e.g., fetching data from an API).
- If we update a value immediately that relies on a delayed response, the UI might reflect an **outdated or incorrect state**.

## 5. Avoiding Redundant Updates

- To avoid unnecessary updates and re-renders, we can **skip intermediate updates** that will soon be replaced by final values from the network call.
- This optimization helps reduce rendering overhead.

## 6. React Fiber Algorithm

- The algorithm used by React to handle efficient updates is called **React Fiber**.
- React Fiber allows **incremental rendering**, prioritization, and interruption of work — making the UI more responsive.

## 7. Reconciliation

- React compares the Virtual DOM (React tree) with the browser DOM using an algorithm called **Reconciliation**.
- This process **detects changes** and applies the minimum required updates to the real DOM.

## 8. Virtual DOM ≠ Reconciliation

- Reconciliation is the **algorithm behind** the Virtual DOM diffing process.
- The term "Virtual DOM" is a **popular concept**, while **Reconciliation** is the underlying technical process.

## 9. UI Updates Are Not Always Immediate

- In React, it's not necessary to **apply every update instantly** to the UI.
- React can batch or delay updates for better performance and smoother user experience.

---

> This overview helps you understand the inner workings of React’s rendering mechanism and why it's efficient for building modern web applications.