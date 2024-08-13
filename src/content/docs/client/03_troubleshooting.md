---
title: Troubleshooting
description: Issues running the client? Check here
---

Do you have an issue not listed below? Raise a support ticket on Discord.

### Client says it's not connected but MSFS is running

Two known reasons:

#### 1. Launch client after MSFS is opened

Close the client and open it again.

This is a known bug so the safest solution right now is to open the client _after_ MSFS has fully loaded. That means when you see the main menu.

#### 2. Simconnect not using default port

Simconnect listens to port 500 by default. It may be you or another app have changed this setting, and the client won't be able to connect to MSFS.
If you tried step 1 and that doesn't work, find your `SimConnect.xml` file and check the port. It should say 500.

File is located (or should be!) in:

`C:\Users\<user_name>\AppData\Local\Packages\Microsoft.FlightSimulator_8wekyb3d8bbwe\LocalCache\`

```
<SimBase.Document Type="SimConnect" version="1,0">
    <Descr>SimConnect Server Configuration</Descr>
    <Filename>SimConnect.xml</Filename>
    <SimConnect.Comm>
        <Descr>Static IP4 port</Descr>
        <Protocol>IPv4</Protocol>
        <Scope>local</Scope>
        <Port>500</Port>
```

### Button to start flight / plane info doesn't appear

Try launching the client _after_ MSFS has loaded and it's on the main menu.

### Client has crashed mid-flight

At the moment if the client crashes while you are in the middle of a flight, there's no way to resume your flight. You may be able to re-start the client, click "Being flight" and continue as normal... but we can't promise it will work or would record the full flight. It's very likely you will have to start again.

We hope to release a version that will recover from this situation and allow users to continue their flight, but there is no active delevelopment on this at the moment.
