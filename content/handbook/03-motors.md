# Motors and motor controllers

The motor and its controller are the electric replacement for an engine and gearbox. They are usually reliable, and when they do fail the symptoms are dramatic: no drive, jerking, grinding or a wheel that is hard to push. Most of those symptoms have simpler causes than a failed motor, and a few quick tests separate them.

## Motor types

Almost every electric two-wheeler uses a **permanent magnet motor**. Magnets on the rotor follow a magnetic field that the controller rotates through copper windings on the stator. Two names describe how that field is driven:

- **BLDC (brushless DC)** motors are driven with a simpler, stepped pattern of current. They are cheap and robust but a little noisier and less smooth.
- **PMSM (permanent magnet synchronous)** motors are driven with smooth, sine-shaped current using a control method called field-oriented control. They are quieter and more efficient, and are standard on higher-performance vehicles.

Physically the two can be very similar. The difference is largely in how the controller drives them.

## Hub motor or mid-drive

A **hub motor** sits inside the rear wheel and drives it directly. It is sealed, simple and has no chain or belt to maintain. The drawbacks are weight in the wheel (unsprung mass), which hurts ride quality, and exposure to water and impacts.

A **mid-drive** or frame-mounted motor sits in the frame and drives the wheel through a belt, chain or gears. It allows gearing for better acceleration and keeps the wheel light, at the cost of a drive that wears and needs adjustment.

When designing a conversion, choosing between them comes down to the torque needed at the wheel, the space available and the duty cycle. A motor has a **rated** power it can deliver continuously and a higher **peak** power it can sustain for seconds. Sizing on peak power alone is a common mistake that leads to overheating on long climbs.

## Knowing where the rotor is

To drive the motor, the controller must know the rotor’s position. Most two-wheelers use three **Hall sensors**, small magnetic switches in the stator, each giving a 0 V or 5 V signal as the magnets pass. Higher-end motors use encoders or resolvers for finer resolution.

When a Hall sensor fails, the controller loses track of the rotor. Typical signs are a jerky or vibrating start, a motor that only turns after a push, or no drive at all with a Hall-related fault code.

## What the controller does

The controller contains a bridge of six power transistors (MOSFETs, or IGBTs at higher voltage) that switch pack current into the three motor phases thousands of times per second. That switching, called PWM, sets how much current flows and therefore how much torque the motor makes. The controller also:

- limits current to protect the motor, the pack and itself
- reduces power as it gets hot (thermal derating), which riders feel as a scooter that slows down on long rides
- cuts power at low pack voltage
- handles regenerative braking
- applies speed limits and riding modes set by software

## Common faults and quick tests

**Wheel is hard to push by hand with the vehicle off.** If the motor’s phase wires are shorted together, the motor acts as a brake when turned. This is a strong sign of a failed (shorted) transistor in the controller or a short in the phase cables. Disconnect the phase connector: if the wheel now turns freely, the fault is on the controller side.

**Jerky start, vibration, or a buzzing motor that will not turn.** Check the Hall sensor signals. With the vehicle powered and the phases disconnected, turn the wheel slowly and measure each Hall output. Each should switch cleanly between about 0 V and the supply voltage. One that stays stuck is your fault, along with any damaged wire or connector pin in the Hall harness.

**Phase cables and windings.** With the motor disconnected, the resistance between each pair of phases should be low and nearly equal. A clearly different reading suggests a winding or cable fault. Resistance from any phase to the motor casing should be very high; a low reading means insulation damage, often from water.

**Burnt phase connectors.** High current through a loose or corroded connector heats it until it melts. Replace the connector on both sides, not just one, and find out why it loosened.

**Grinding or rumbling.** Usually wheel or motor bearings, sometimes a rotor rubbing on the stator after an impact. This is mechanical, not electrical.

> **In the field.** Before condemning a controller, swap in a known good one only after the cheaper checks: phase connectors, Hall harness, throttle signal and brake switch inputs. In fleet work, a large share of “controller failures” returned from sites turn out to be connector or harness faults when tested at the bench.

## Overheating

Motors and controllers derate when hot to protect themselves. Repeated overheating weakens winding insulation, and extreme heat can partly demagnetise rotor magnets, permanently reducing torque. A vehicle that feels weak only after a long climb or heavy load is usually derating, not failing. If it happens on short, light rides, check for dragging brakes, a seized bearing or an overloaded vehicle before suspecting the drive.
