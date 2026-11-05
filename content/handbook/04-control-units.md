# Control units, dashboards, sensors and harnesses

If the battery and motor are the muscle of an electric two-wheeler, the control layer is its nervous system. It is also where most intermittent and confusing faults live. A vehicle with a perfect pack and motor will do nothing if one sensor reports the wrong thing or one wire stops carrying a signal.

## The control units

- **VCU (vehicle control unit).** On vehicles that have one, the VCU is the decision-maker. It reads the rider’s inputs and the vehicle’s state, decides what is allowed, and tells the controller, BMS and dashboard what to do. Simpler vehicles leave this logic inside the motor controller.
- **Dashboard or HMI.** Shows speed, charge, mode and warnings. On many models it also stores and displays fault codes, and on some it handles keyless start or the app connection.
- **Telematics unit (IoT box).** Common on connected and fleet vehicles. It holds a GPS receiver and a mobile data connection, reports location and vehicle data, and can lock or immobilise the vehicle remotely. In shared fleets it is effectively the ignition key.
- **DC-DC converter.** Steps pack voltage down to 12 V to power lights, horn, the dashboard and the control units themselves. If it fails, the vehicle can look completely dead even with a full pack.

## How they talk: the CAN bus

Most modern electric two-wheelers connect their control units over **CAN**, a two-wire network. The two wires, CAN-High and CAN-Low, are twisted together and carry the same message as opposite voltages, which makes the signal resistant to electrical noise. Every unit on the bus hears every message and picks out the ones it needs.

A CAN bus has a 120 Ω terminating resistor at each end. That gives you one of the most useful checks in the workshop:

- With the vehicle **off**, measure resistance between CAN-High and CAN-Low. About **60 Ω** means both terminators are present and the wiring is intact. About **120 Ω** means one end is missing or a wire is broken. A very low reading means the wires are shorted together.
- With the vehicle **on** and the bus idle, each wire sits at roughly 2.5 V relative to ground. When messages flow, CAN-High rises and CAN-Low falls by about the same amount.

When one unit loses communication, others often log fault codes about it. A dashboard that says “controller communication error” may have a perfectly good controller and a damaged CAN wire.

## The sensors that matter most

| Sensor | What it does | Typical failure signs |
|---|---|---|
| Throttle | A Hall-effect sensor that outputs a voltage proportional to twist | No drive, surging, drive without throttle (dangerous; isolate immediately) |
| Brake switches | Tell the controller the brakes are applied, cutting drive and triggering regen | No drive (switch stuck “on”), brake light always lit, no regen |
| Side stand switch | Blocks drive with the stand down | No drive; often bent bracket or water in the switch |
| Speed sensor | Reports wheel speed for the dashboard and controls | Zero or erratic speed, mode or limit problems |
| Temperature sensors | Thermistors in the pack, motor and controller | Unexpected derating or overheat warnings on cool days |

A throttle typically sits around 1 V when closed and rises toward 4 V when fully open, on a 5 V supply. Check the actual range in the service manual, then measure: supply, ground and signal at the connector while slowly twisting. The output should rise smoothly with no dropouts.

The brake switch deserves special mention. Because a pressed brake legitimately cuts drive, a sticky or misadjusted brake switch produces a “won’t move” fault that looks like a controller failure. It is one of the first things to check.

## Harnesses and connectors

The harness is the least glamorous part of the vehicle and the most common source of electrical faults. Its enemies are:

- **Chafing**, where a wire rubs through on a frame edge or moving part, causing shorts or open circuits that come and go as the handlebar turns.
- **Water**, which corrodes pins and can wick along a wire inside its insulation, appearing far from where it got in.
- **Vibration**, which loosens connectors and fatigues wires next to rigid crimps.
- **Poor crimps and pin back-out**, where a pin pushes back out of its housing when the connector is mated, making no contact even though the connector looks secure.
- **Bad grounds**, which cause strange, unrelated-looking symptoms across several systems at once.

### Test under load

A wire can show perfect continuity on a meter and still fail in use, because a meter passes almost no current. A single surviving strand looks fine at the bench. The better test is a **voltage drop** measurement: with the circuit working and current flowing, measure the voltage across the wire or connector itself. A good connection drops very little. A noticeable drop means resistance where there should be none.

> **In the field.** When a fault comes and goes, recreate the conditions. Wiggle the harness along its route while watching the dashboard or a meter, turn the handlebar lock to lock, and, where safe, spray water on suspect connectors. Intermittent faults are rarely random; they follow movement, moisture or heat.

## Routing and repair standards

Repairs to harnesses should restore the original standard: sealed connectors stay sealed, splices are soldered or crimped and sealed with adhesive heat-shrink, and wires are routed and clipped exactly as before. A neat repair that is routed differently can chafe somewhere new within weeks.
