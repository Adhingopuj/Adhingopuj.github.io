# What changes on a four-wheeler

The principles in this handbook apply to electric cars just as they do to scooters: a pack managed by a BMS, an inverter driving a permanent magnet or induction motor, control units talking over CAN, and the same discipline of diagnosis and root cause analysis. What changes is scale, voltage and complexity. A technician who understands two-wheelers deeply has a strong foundation for four-wheelers, as long as they respect the differences.

## Higher voltage, higher stakes

Most electric cars run packs of roughly 300 V to 400 V, and a growing number use 800 V. At these voltages, contact with live parts can kill. Four-wheelers therefore add safety layers that most two-wheelers do not have:

- **Orange high-voltage cabling**, so HV circuits are instantly recognisable.
- **Contactors** inside the pack that disconnect the high-voltage system whenever the vehicle is off or a fault is detected.
- **A pre-charge circuit** that charges the inverter’s capacitors slowly through a resistor before the main contactor closes, preventing a damaging inrush of current.
- **A high-voltage interlock loop (HVIL)**, a low-voltage circuit running through HV connectors. If a connector is unplugged, the loop breaks and the system shuts down.
- **Insulation monitoring**, which continuously checks that the HV system is isolated from the vehicle body and raises a fault if leakage appears.
- **A service disconnect** that lets trained technicians physically break the HV circuit before work.

Working on these systems requires formal high-voltage qualification. Chapter 9’s principles still apply, at a higher level of rigour.

## Thermal management

Cars carry far larger packs, deliver more power and fast-charge at high rates, so heat becomes a central design problem. Most use **liquid cooling** for the pack, motor and inverter, with pumps, valves, a radiator and often a heat pump that also heats the cabin efficiently. Thermal faults, such as a failed pump, a coolant leak or a stuck valve, can lead to reduced power or limited charging, symptoms that look like battery problems.

## Drive units

Instead of a hub motor, a car typically has an integrated **drive unit** (sometimes called an e-axle) combining motor, single-speed reduction gear and inverter in one housing. Some cars have one on each axle for all-wheel drive. Motors are mostly permanent magnet types, with some manufacturers using induction motors on one axle.

## Charging

Cars have an **onboard charger** that converts household or public AC power into DC for the pack, typically at a few kilowatts up to around 22 kW. For fast charging, an external **DC charger** bypasses the onboard charger and feeds the pack directly at much higher power, with the car’s BMS and the charger negotiating current continuously. In India, CCS2 is the main fast-charging connector for cars. Charging faults involve the car, the charger and the communication between them, so diagnosis must consider all three.

## More control units, more networks

A two-wheeler might have three or four control units. A car can have dozens, spread across several CAN networks, sometimes with faster networks such as automotive Ethernet, joined by a **gateway**. Diagnosis relies on manufacturer diagnostic tools that read codes and live data from every unit through the standard diagnostic port. The structured method from chapter 5 matters even more here, because the number of possible causes is much larger.

## The 12 V battery still matters

Electric cars still carry a conventional 12 V battery to power the control units, lights and contactors. If it goes flat, the car may not start or “wake up” at all, even with a fully charged high-voltage pack. A weak 12 V battery is one of the most common causes of mysterious faults on electric cars, and one of the first things to check.

## Brakes and chassis

Regenerative braking is stronger and more central on cars, blended with friction brakes by the brake control system so the driver feels one consistent pedal. Because friction brakes are used less, they can corrode from lack of use rather than wear out. Electric cars are also heavier than equivalent petrol cars, which increases wear on tyres and suspension.

## What carries over

| From two-wheelers | Still applies on four-wheelers |
|---|---|
| How cells, packs and BMS work | Yes, at larger scale with active thermal management |
| Motor and controller principles | Yes, inside an integrated drive unit |
| CAN diagnosis | Yes, across more units and networks |
| Connector and harness discipline | Yes, with stricter HV standards |
| Structured diagnosis and RCA | Yes, and more important than ever |
| Working near live parts | Only with formal HV qualification |

> **In the field.** The fundamentals transfer; the shortcuts do not. Habits that might be tolerated on a low-voltage scooter, such as probing a live connector or skipping the wait after disconnecting a pack, are unacceptable on a car. Build the careful habits early, on two wheels, and they will serve you on four.
