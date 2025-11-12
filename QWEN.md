# Nebula Help Website - Project Context

## Overview
- **Project Name**: NebulaFS Help Website (`nebula-help`)
- **Purpose**: Help/documentation website for nebulafs.com
- **Framework**: Astro with Starlight template
- **Type**: Static site generator for documentation

## Technology Stack
- **Framework**: Astro (v5.15.5)
- **Template**: Starlight
- **Language**: TypeScript
- **Build Tool**: Node.js
- **Image Processing**: sharp

## Project Structure
```
nebula-help/
├── astro.config.mjs          # Astro configuration with Starlight integration
├── package.json             # Dependencies and scripts
├── src/
│   ├── content/
│   │   ├── docs/            # Documentation content (guides, assignments, flying, companies, planes, client)
│   │   └── config.ts        # Content collection configuration
│   └── assets/              # Static assets (images, etc.)
└── public/                  # Public assets (favicon.svg)
```

## Key Configuration
- **Title**: "NebulaFS help"
- **Sidebar Structure**:
  - Guides
  - Assignments
  - Flights
  - Companies
  - Planes
  - Client

## Content Organization
The documentation is organized into several main sections:
- `/guides/` - Getting started and general guides
- `/assignments/` - Assignment-related documentation
- `/flying/` - Flight-related documentation
- `/companies/` - Company-related documentation
- `/planes/` - Plane-related documentation
- `/client/` - Client application documentation

## Development Scripts
- `npm run dev` or `npm run start` - Start development server
- `npm run build` - Build the site for production
- `npm run preview` - Preview the built site
- `npm run astro` - Run Astro CLI commands

## Social Links
- GitHub: https://github.com/Nordicdesign/nebula-help
- Discord: https://discord.gg/M49bQVz6j2

## Key Files to Modify for Content Changes
- `src/content/docs/` - Main documentation content
- `astro.config.mjs` - Navigation configuration
- `src/content/config.ts` - Content schema configuration

## Special Features
- Auto-generated sidebar sections for assignments, flying, companies, planes, and client documentation
- Splash page template for homepage
- Card-based navigation components
- Responsive design via Starlight