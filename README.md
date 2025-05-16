# 🌊 marineroute-js

**A JavaScript wrapper for generating realistic sea routes between geographic points.**  
Powered by the Python package [`searoute-py`](https://pypi.org/project/searoute/), this module helps developers easily visualize maritime paths between two or more coordinates across the globe.

---

## 📦 About This Project

`marineroute-js` is a Node.js package built as a JavaScript interface for [**searoute-py**](https://github.com/genthalili/searoute-py) — a Python library that calculates the shortest navigable sea path between coordinates on Earth.

This package simplifies sea route generation for JS developers and data visualizers. It wraps the Python logic and exposes an async `seaRoute()` function, which:

- Accepts an array of coordinates (`[lon, lat]`).
- Returns a full navigable route along with the total distance.
- Handles land-based coordinates by snapping them to the nearest sea point.

⚠️ **Not suitable for actual maritime navigation!**  
This library is intended for visualizations only and does not account for real-world constraints like shipping lanes, piracy zones, or weather.

---

## 🚀 Installation

```bash
npm install marineroute-js
