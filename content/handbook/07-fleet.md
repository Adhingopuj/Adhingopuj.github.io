# Maintaining a fleet at scale

Fixing one scooter well is a technical skill. Keeping thousands of them on the road across several cities is an operations problem. The engineering does not change, but the questions do: which vehicles to work on first, which parts to stock where, how to make sure a repair in one city is done the same way as in another, and how to know whether any of it is working.

## Three kinds of maintenance

- **Breakdown maintenance** fixes a vehicle after it fails. It is unavoidable, but every breakdown means lost uptime and often a recovery trip.
- **Preventive maintenance** services vehicles on a schedule, by distance or time, before they fail: brake adjustment, tyre checks, bearing inspection, connector checks, cleaning and lubrication.
- **Predictive maintenance** uses data, such as telematics readings, battery behaviour or failure history, to service a vehicle when it is likely to fail rather than on a fixed schedule.

Most fleets run a mix. The goal over time is to shift work from breakdown toward preventive and predictive, because planned work is cheaper, faster and safer than unplanned work.

## Designing a preventive maintenance schedule

Start from failure data, not guesswork. For each major wear item, look at when it actually fails in your fleet and set the inspection interval comfortably before that. Then turn the schedule into a checklist a technician can complete consistently:

- Each check is specific and measurable: “brake lever free play within limit”, not “check brakes”.
- The order follows the vehicle, so nothing gets skipped.
- Results are recorded, not just ticked, so the data can improve the schedule.

Review the interval regularly. If items are routinely found badly worn, inspect sooner. If they are always fine, you may be inspecting too often.

## The numbers that matter

A fleet runs on a handful of measures. Each one answers a different question.

| Measure | Question it answers |
|---|---|
| Fleet availability or uptime | What share of vehicles can be used right now? |
| Turnaround time (TAT) | How long does a vehicle spend out of service per repair? |
| First-time-fix rate | How often is the vehicle fixed correctly on the first visit? |
| Repeat repair rate | How often does the same fault come back within a short period? |
| Fault rate by system | Which systems fail most, per vehicle or per distance? |
| Part failure rate and MTTF | How long do specific parts last before failing? |
| Mechanic productivity | How many quality repairs are completed per technician per shift? |
| Spares cost per vehicle | What does it cost in parts to keep each vehicle running? |

Watch them together. Pushing TAT down while first-time-fix falls just moves vehicles back into the queue sooner. Productivity that rises while repeat repairs rise is not real productivity.

## Spare parts

Running out of a part stops repairs; overstocking ties up money and space. A few principles help:

- **Classify parts by value and usage.** A small number of parts usually account for most of the spend. These need the tightest control. Cheap, fast-moving parts can be stocked more generously.
- **Set minimum and maximum levels** for each part at each location, based on usage and supplier lead time, and reorder when stock reaches the minimum.
- **Control the whole lifecycle**: identification, stock, issue, returns, rejections and scrap. Parts that disappear between the store and the vehicle are a cost and a quality risk.
- **Treat refurbished parts as a quality process.** Refurbishing motors, controllers or packs saves money only if each refurbished part is tested against a clear acceptance standard before reuse. Otherwise it creates repeat failures.
- **Track returns.** Parts removed as faulty should be tested. A high rate of “no fault found” returns means technicians are swapping parts instead of diagnosing.

## Consistency across locations

When a fleet spans cities, sometimes run partly by partners, the biggest risk is that every site does things differently. The tools against that are:

- **Standard repair procedures** for every common job, with clear steps, torque values, test criteria and photos.
- **Version control**, so everyone works from the current procedure and old versions are withdrawn.
- **Training** for every technician on the procedures, refreshed when they change.
- **Audits** that check whether procedures are followed in practice, with findings tracked to closure.
- **A single system of record**, such as a digital repair module, where every repair is logged with its fault, cause, parts and time.

The last point matters more than it seems. Without consistent data from every site, fleet-wide patterns stay invisible.

## Shared fleets are different

Shared vehicles are ridden by many people with no ownership stake, parked outdoors and handled roughly. Compared with private vehicles, expect more impact damage, more vandalism and tampering, more wear on controls and locks, and more water exposure. Telematics becomes a maintenance tool: it can flag vehicles with abnormal battery behaviour, unusual vibration or long idle periods before a rider reports a problem.

> **In the field.** The most useful question in a daily operations review is not “how many vehicles did we fix?” but “why did they break, and which of those reasons can we remove?” Every repeat failure you eliminate is capacity you get back permanently.
