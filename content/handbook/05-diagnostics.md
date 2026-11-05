# Diagnosing faults: a structured method

Good diagnosis is not about knowing every fault on every vehicle. It is about following a method that finds the fault reliably, without guessing and without replacing parts that were never broken. Parts swapping feels fast, but it is expensive, it hides the real cause, and it fills the spares store with “faulty” returns that test fine.

This chapter sets out a method that works across vehicles. The steps are in order for a reason.

## 1. Confirm the complaint

Start by seeing the fault yourself, or at least understanding it precisely. “Not working” is not a complaint. “Powers on, shows full charge, no drive when throttle is twisted, no fault code” is. Ask the rider or field team:

- When did it start, and did anything happen just before: rain, a fall, a wash, a recent repair?
- Is it constant or intermittent? Hot or cold? Only on hills, only in rain?
- What exactly do the dashboard and lights show?

If you cannot reproduce an intermittent fault, record the conditions carefully. They are your best clue.

## 2. Gather the evidence the vehicle already has

Before picking up a tool, collect what is already recorded:

- **Fault codes** from the dashboard or diagnostic tool. Note them all, including stored codes, before clearing anything.
- **Telematics and ride history** if available: when the fault started, battery voltage at the time, whether it coincides with a crash or a swap.
- **Repair history.** A fault that appears just after a repair is often caused by it: a connector left loose, a wire pinched.
- **Known issues** and service bulletins for the model.

A fault code tells you where the system noticed a problem, not what failed. “Motor Hall fault” means the controller did not receive sensible Hall signals. The sensor, its wiring, its connector or the controller input could be responsible.

## 3. Look before you measure

A careful visual inspection solves a surprising share of faults. Check connectors for looseness, corrosion and burn marks. Follow the harness for chafing and pinching. Look for impact damage, water marks and signs of tampering. Check the obvious mechanical items that cause electrical symptoms: brake levers that do not fully return, a bent side stand bracket.

## 4. Check power and ground first

Every electronic unit needs a good supply and a good ground. Before testing a signal or blaming a module, confirm that the module is powered:

- Pack voltage present at the controller input.
- 12 V auxiliary supply present where it should be, from the DC-DC converter.
- Grounds solid, checked by voltage drop under load rather than continuity alone.

Many “dead module” faults are a missing supply or a corroded ground.

## 5. Divide the system

Use what you know about how the system works (chapters 1 to 4) to split it in half. For a no-drive fault, ask: is the controller being told to drive? If the throttle signal reaches the controller correctly and permissions (brakes, stand, BMS) are all satisfied, the fault is downstream in the controller, phases or motor. If not, it is upstream in the sensors, wiring or control logic. Keep halving until the fault is boxed into one component or wire.

## 6. Prove the fault before replacing

Test the suspect component directly, against its specification. Measure the signal, the resistance or the voltage drop and compare with known good values. If you substitute a known good part to confirm, do it as a deliberate test, and return the original if it was not at fault.

## 7. Repair and verify

Fix the root cause, not just the symptom. A burnt connector is a symptom; the loose fit or corroded pin that overheated it is the cause. After the repair:

- Clear fault codes and road test under the conditions that caused the fault.
- Confirm that no new codes appear.
- Check that you have not disturbed anything else.

## 8. Record what you found

Write down the complaint, the cause, the evidence and the fix. One good record helps the next technician. Hundreds of good records let a fleet see patterns no single repair could show, which is where field quality begins (chapter 8).

## A worked example: powers on, will not move

| Step | Check | What it tells you |
|---|---|---|
| 1 | Dashboard warnings and fault codes | Points to a subsystem, or confirms no detected fault |
| 2 | Side stand up? Brake levers fully released? Brake light off? | A stuck brake or stand switch blocks drive legitimately |
| 3 | Is the vehicle unlocked or enabled by telematics or app? | Fleet vehicles can be immobilised remotely |
| 4 | Throttle supply, ground and signal at the connector | Confirms the request is reaching the controller |
| 5 | Pack voltage at the controller under attempted drive | Rules out a BMS cut-off or high-resistance connection |
| 6 | Wheel spins freely? Phase connector intact? | Rules out mechanical binding and phase faults |
| 7 | Hall signals while turning the wheel | Confirms the controller can see rotor position |
| 8 | Only now, test or substitute the controller | Everything upstream and downstream is proven good |

## Tools of the trade

A digital multimeter is essential; learn to use it for voltage drop, not just continuity. A clamp meter measures current without breaking the circuit. A diagnostic tool or app reads codes and live data. An insulation tester checks for leakage on high-voltage parts. For intermittent faults, a simple data logger or the vehicle’s own telematics can catch what a technician standing next to it never sees.

> **In the field.** The best diagnostic habit is asking “what else could cause this?” before each replacement. If you cannot name at least the cheaper alternatives and say why you ruled them out, you are not ready to replace the part.
