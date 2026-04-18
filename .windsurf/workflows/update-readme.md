---
title: Update Readme
description: อัพเดท README จาก CLI tools ที่ติดตั้งในเครื่อง
auto_execution_mode: 3
---

อัพเดท README อัตโนมัติจาก CLI tools ที่ติดตั้งในเครื่อง

## Goal

สร้าง README ที่สรุป CLI tools ทั้งหมดจาก scoop list, mise list, bun pm ls -g

## Execute

### 1. Gather CLI Tools

1. รัน `scoop list` เพื่อดู tools ที่ติดตั้งด้วย scoop
2. รัน `mise list` เพื่อดู tools ที่จัดการด้วย mise
3. รัน `bun pm ls -g` เพื่อดู global packages ของ bun
4. รวมข้อมูลทั้งหมดเป็นรายการ CLI tools เดียว

### 2. Create README Table

1. สร้างตารางพร้อม columns: CLI, Description, Benefit, Reference
2. เติมข้อมูล CLI tools ทั้งหมด
3. เขียน description และ benefit สำหรับแต่ละ CLI
4. เพิ่ม reference links ไปยัง official websites/docs

### 3. Add How to Update Section

1. เพิ่ม section อธิบายวิธีอัพเดท README
2. อ้างอิง workflow นี้ใน README

## Rules

### 1. Table Format

- ใช้ Markdown table
- Columns: CLI, Description, Benefit, Reference
- CLI ใช้ bold
- Reference ใช้ markdown links

### 2. Content

- Description กระชับ 1-2 ประโยค
- Benefit เน้นประโยชน์ที่เห็นได้ชัด
- Reference ต้องเป็น official source

### 3. Deduplication

- ลบ tools ที่ซ้ำกันจาก scoop, mise, bun
- เก็บเฉพาะ unique tools

### 4. Sorting

- เรียงลำดับตามตัวอักษร A-Z
- Case-insensitive

## Expected Outcome

- README.md ที่มีตาราง CLI tools ครบถ้วน
- ข้อมูลอัพเดทล่าสุดจากเครื่อง
- อธิบายวิธีอัพเดทอย่างชัดเจน
