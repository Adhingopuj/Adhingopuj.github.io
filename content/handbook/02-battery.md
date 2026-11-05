# Batteries, packs and the BMS

The battery pack is the most expensive part of an electric two-wheeler and the one riders worry about most. It is also the part most often blamed for faults that are not its fault. Understanding what the pack and its battery management system actually do makes both diagnosis and conversations with riders much easier.

## From cell to pack

A pack is built from individual lithium-ion cells. Two chemistries dominate two-wheelers:

- **NMC (nickel manganese cobalt)** stores more energy for its weight, which gives more range from a smaller pack. It is more sensitive to heat and abuse.
- **LFP (lithium iron phosphate)** stores less energy for its weight but tolerates more charge cycles and is more thermally stable. It is common where durability matters more than weight, such as fleets.

Cells come as cylindrical cans (18650 and 21700 sizes are common), flat prismatic blocks or soft pouches. Whatever the format, they are connected in **series** to raise voltage and in **parallel** to raise capacity. A pack described as “20S” has 20 cell groups in series. With NMC cells at a nominal 3.6 V each, that is about 72 V. A 13S NMC pack is about 48 V, and a 16S LFP pack, at 3.2 V per cell, is about 51 V.

Energy is voltage multiplied by capacity. A 60 V pack rated at 30 Ah holds about 1.8 kWh. That number, not voltage alone, decides range.

## What the BMS does

The BMS is a circuit board, sometimes with a small processor, that sits inside the pack. It has five jobs.

1. **Monitoring.** It measures the voltage of every cell group, the pack current and temperatures at several points.
2. **Protection.** It disconnects the pack, usually through MOSFETs or a contactor, if any cell goes too high or too low, current is too high, a short circuit occurs or the temperature leaves a safe range.
3. **Balancing.** Cells drift apart in charge over time. The BMS bleeds a little energy from the highest cells, usually as heat through resistors (passive balancing), so they finish charging together.
4. **Estimation.** It calculates state of charge (SoC) and, on better systems, state of health (SoH).
5. **Communication.** It reports all of this to the controller, VCU, charger and dashboard, usually over CAN.

### State of charge is an estimate

No sensor measures “percent full”. The BMS counts current in and out (coulomb counting) and corrects itself against cell voltage when the pack is at rest. Counting errors build up, so the estimate drifts until a full charge resets it. This is why a rider sometimes sees the percentage jump, or the scooter cut out at 8%. Often the pack is healthy and only the estimate is wrong. A full charge to let the BMS recalibrate is a reasonable first step before suspecting the pack.

## Charging

Lithium packs charge in two stages. In **constant current** the charger pushes a fixed current while the voltage rises. Near full, it switches to **constant voltage** and the current tapers off. The last 10 to 20 percent therefore takes disproportionately long, which is normal. The charger and BMS must agree: the BMS can stop charging if any cell reaches its limit, even if the charger would continue.

## Swappable and fixed packs

Fixed packs stay in the vehicle and are charged through a socket. Swappable packs are pulled out and exchanged, at home or at a swapping station. Swapping removes charging downtime, which is why fleets favour it, but it adds failure modes: worn or pitted connector pins from repeated insertion, damage from drops, and water entering through handles and seals. In a swapping network, a pack’s history matters as much as its condition today.

## Common pack faults and what they look like

| Symptom | Likely causes to check |
|---|---|
| Pack shows zero or will not wake | BMS has shut down after deep discharge; main fuse; connector |
| Sudden cut-out under acceleration | One weak cell group dropping below the low-voltage limit under load; high-resistance connector |
| Range much lower than expected | Cell imbalance; aged cells; SoC estimate out of calibration; heat |
| Charging stops early | One high cell reaching its limit first (imbalance); charger fault; temperature limit |
| Burnt or discoloured connector | High contact resistance from wear, loose fit or corrosion |
| Swollen casing, smell, heat while idle | Cell damage. Stop and quarantine the pack (see chapter 9) |

### Reading BMS data

If you have a diagnostic tool, the most useful single number is the **spread between the highest and lowest cell voltage**. At rest, a healthy pack’s cells sit very close together. A spread that is large, or that grows sharply under load, points to a weak or imbalanced group. Use the manufacturer’s limit as your threshold, and always compare data at rest with data under load, because many weak cells only show up when current flows.

> **In the field.** A pack that “dies” at 20% on hills but behaves on flat roads is a classic weak-group fault. The pack has plenty of energy, but one group sags under high current and trips the low-voltage protection. Replacing the whole pack fixes it, but finding and logging the pattern across a fleet tells you whether you have a cell supplier problem.

## Looking after packs

Heat and time at full or empty charge age cells fastest. Storing packs at a partial charge, keeping them out of direct sun and avoiding repeated deep discharges all extend life. For fleets, a simple rule helps: a pack that sits unused for weeks should be checked and topped up so its BMS never drains it into deep discharge.
