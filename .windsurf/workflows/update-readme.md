---
title: Update Readme
description: Update README from CLI tools installed on the machine
auto_execution_mode: 3
---

Automatically update README from CLI tools installed on the machine

## Goal

Create README with separate tables per tool category from scoop list, mise list, bun pm ls -g

## Execute

### 1. Gather CLI Tools

1. Run `scoop list` to view tools installed with scoop
2. Run `mise list` to view tools managed by mise
3. Run `bun pm ls -g` to view global packages of bun
4. Combine all data into a single list of CLI tools

### 2. Create README Tables by Category

1. Group tools by category (Archive, Git, Code Analysis, File Operations, etc.)
2. Create separate table for each category
3. Each table has columns: Reference, CLI, Description, Benefit
4. Fill CLI commands for each tool
5. Write description and benefit for each tool
6. Add reference links to official websites/docs in first column

### 3. Add How to Update Section

1. Add section explaining how to update README
2. Reference this workflow in README

## Rules

### 1. Table Format

- Use Markdown table
- Columns: Reference, CLI, Description, Benefit
- Reference uses markdown links in first column
- CLI commands in backticks

### 2. Content

- Description concise 1-2 sentences
- Benefit highlights clear advantages
- Reference must be official source
- Use English only

### 3. Categorization

- Group tools by functional category
- Create separate table per category
- Categories: Archive, Git, Code Analysis, File Operations, Development, Package Managers, Runtime, Shell, Editors, System, Benchmark, Containerization, Config, Code Counting, Build, Network, Media, Task, Misc

### 4. Deduplication

- Remove duplicate tools from scoop, mise, bun
- Keep only unique tools
- Handle tools that appear in multiple sources

### 5. Sorting

- Sort alphabetically within each table
- Case-insensitive

## Expected Outcome

- README.md with categorized tables of CLI tools
- Reference in first column
- CLI commands displayed for each tool
- Latest data from machine
- Clear update instructions
