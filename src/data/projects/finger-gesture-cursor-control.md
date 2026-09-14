---
title: 'Finger Gesture Cursor Control'
category: 'Computer Vision'
summary: 'Real-time hand tracking mapped to cursor control, designed to run locally without GPU dependency.'
year: 2026
status: 'shipped'
repoUrl: 'https://github.com/ratwet/finger-gesture-cursor'
metrics:
  - label: 'Throughput'
    value: '~40 FPS'
  - label: 'Control latency'
    value: '<25ms'
featured: true
---

## What it is

A real-time human-computer interaction system that maps hand gestures to cursor actions. The project combines hand landmark tracking, gesture interpretation, smoothing, and Linux input control in a local pipeline.

## Technical notes

- 21-point hand landmark tracking
- Index finger point mapped to cursor movement
- Thumb and index pinch used for left click
- Thumb and middle pinch used for right click
- Peace sign used for vertical scroll
- Fist used for freeze and precision control
- Python, MediaPipe, OpenCV, evdev, uinput, and NumPy

## Evidence

The public repository contains the implementation. Deeper case-study material can be added here once the experiment notes and demo assets are consolidated.

## Next iteration

Document the measured tradeoffs between tracking stability, cursor smoothing, CPU load, and interaction accuracy.
