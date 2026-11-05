# How an electric two-wheeler works

An electric two-wheeler is simpler than a petrol one in its parts count, and more complicated in how those parts talk to each other. There is no engine, clutch or fuel system. In their place are a handful of electrical blocks connected by power cables and communication lines, and almost every fault you will diagnose lives either inside one of those blocks or, more often, at the connection between two of them.

## The five building blocks

Every electric two-wheeler, from a low-speed shared scooter to a performance motorcycle, can be described with the same five blocks.

- **The battery pack** stores energy. It is made of many cells connected in series and parallel, and managed by a battery management system (BMS) that monitors cell voltages, temperatures and current, and protects the pack.
- **The motor controller** converts the pack’s direct current into the switched, three-phase current the motor needs, and decides how much power to send based on the rider’s throttle and the vehicle’s limits.
- **The motor** turns that electrical power into torque at the wheel, either directly as a hub motor or through a belt, chain or gear reduction.
- **The control layer** ties the vehicle together: a vehicle control unit (VCU) on many models, the dashboard or HMI, and the sensors for throttle, brakes, speed and stand position.
- **Charging and auxiliary power**, meaning the charger that refills the pack and a DC-DC converter that steps the pack voltage down to run lights, horn and electronics.

## Following the energy

When a rider twists the throttle, the throttle sensor sends a signal to the controller, directly or through the VCU. The controller checks that conditions allow driving: the side stand is up, the brakes are released and the battery has reported no fault. It then draws current from the pack and switches it through the motor windings to produce torque. When the rider brakes or rolls off the throttle, many vehicles reverse the process with regenerative braking, letting the motor act as a generator and push a small amount of energy back into the pack.

That chain of permissions is worth remembering. A vehicle that powers on but will not move is rarely a dead motor. Far more often, one of the conditions in that chain is not being met, or is being reported wrongly by a sensor or a connector.

## Low-speed and high-speed vehicles

In India, two-wheelers with a top speed up to 25 km/h and a motor up to 250 W are classed as low-speed and do not need registration or a licence to ride. Many shared-mobility fleets and entry-level scooters sit here. They typically use hub motors and lower pack voltages, and their design priorities are robustness and low running cost.

High-speed scooters and motorcycles carry larger packs at higher voltages, more powerful motors that are often mounted on the frame, and much more software. Their faults are more likely to involve communication between control units and less likely to be purely mechanical.

## Two-wheelers and four-wheelers at a glance

| System | Typical two-wheeler | Typical four-wheeler |
|---|---|---|
| Pack voltage | Roughly 48 V to 72 V on most models | Roughly 300 V to 400 V, some at 800 V |
| Pack cooling | Mostly passive, air cooled | Usually active liquid cooling |
| Motor | Hub motor, or frame-mounted motor with belt or chain | Motor integrated with reduction gear and inverter |
| Charging | Portable charger or battery swapping | Onboard AC charger plus DC fast charging |
| Communication | CAN or simpler wired signals between a few units | Several CAN networks and many control units |

## What this means for diagnosis

The big components are well protected. The connections between them are exposed to water, vibration and handling. So a disciplined technician checks the cheap, likely things before condemning an expensive part. Start with what the vehicle is telling you through fault codes and the dashboard. Confirm supply voltages and grounds. Inspect connectors and harness routing. Only then suspect the controller, motor or pack. Chapter 5 turns this into a step-by-step method.
