---
title: 'ESP32 IoT Device Simulator'
category: 'Edge & IoT'
summary: 'A virtual edge-device environment for testing MQTT telemetry, sensor data, and dashboard flows.'
year: 2026
status: 'shipped'
repoUrl: 'https://github.com/ratwet/esp32-iot-simulator'
featured: true
---

## What it is

A virtual ESP32 environment built to model an edge device and its telemetry path without requiring physical hardware for every test.

## Technical notes

- ESP32 and Arduino C++
- Wokwi for simulation
- MQTT with HiveMQ
- DHT22 temperature and humidity sensor model
- SSD1306 I2C OLED 128×64 display
- LED status indicators and push-button inputs
- JSON telemetry including temperature, humidity, battery, and GPS fields

## Evidence

The current public documentation is a concise project summary. A fuller case study will be added when the implementation notes and dashboard flow are documented in more depth.

## Next iteration

Add a complete telemetry walkthrough, screenshots of the simulated device, and a clearer explanation of the MQTT message flow.
