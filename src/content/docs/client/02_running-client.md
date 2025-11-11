---
title: Running the Nebula FS client
description: Tracking and reporting your flights
---

Volando, the Nebula FS client is a Windows-only application that needs to be installed on the same machine as MSFS in order to track your flights and ensure they match the assignments.

You can not run the client on a network machine. Currently there are no plans to do this.

## Requirements

- A machine with MSFS installed (should also work with MSFS2024, P3D and FSX but it's untested at the moment)
- Simconnect

## Connecting to the sim

- Launch MSFS
- Once MSFS is running and on the main menu, launch Volando. The app will connect automatically to MSFS
- Log in using the same details as the website. You only need to do this once
- If you have a plane and/or assignment booked, it will appear on the client, along with the information of your currently loaded plane

If you have any trouble connecting, close the app and run it once MSFS is running. If troubles persist, [check the troubleshooting section](/client/03_troubleshooting/) or contact us on Discord.

## Client errors

When starting or completing a flight you may receive an error, here are some of the most common and what they mean:

- E01 - Client is updated. You will need to update to the latest version. This is likely because some breaking changes in the backend
- E02 - Not enough fuel. Your flight has not consumed enough fuel, check the sim is not configured to not use fuel!
- E02 - Distance mismatch. The reported travel distance is not enough to cover the assignment. This will only trigger if the distance travelled is less than expected, not if it's more.
