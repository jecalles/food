2026-01-28 11:25

Status: #half-baked #needs-work #needs-experiments #TODO 

Tags: [[baking]] [[ratios]]

# Poundcake is a recipe in a name
Equal parts flour, sugar, butter, and eggs. The name comes from a pound of each ingredient in a bowl. Iconique.


Poundcake is the ur-cake. Not only is it a pretty typical cake in consistency, but its equal ratios are conceptually easy to follow. Moreover, as you increase or decrease the amount of each individual component, you affect the texture in a predictable way. In fact, weirdly enough, the easiest way to think of this is in terms of the Jacobian of the recipe (hehehe). Suppose butter (b), sugar (s), eggs (e), and flour (f), .


### First order effects
These are the most important to internalize.

**Butter** (d/db) -> **Richer**, denser cake with a shorter crumb. Towards shortbread.
**Sugar** (d/ds) -> **Moister**, more tender, more caramelized crust.
**Eggs** (d/de) -> More **structure**, but also paradoxically more richness (more later)
**Flour** (d/df) -> **Drier**, **less rich** but also more structure

### Second order effects
#### Ranked
Ranked by importance in three tiers
1. Butter x Flour: extremely important! Strongly increases tenderness while strongly decreasing structure. This is the axis along which we have bread -> cookie -> cake

#### Curvature (pure second derivatives)
Butter ($d^2/db^2$) -> very negative. Super diminishing returns. 
#### Mixed partials (interactions)


# References
[[TODO-Jacobian Matrix]]

### Claude
Alright, let me work through this systematically. First, a technical note: with four variables, the Hessian has 16 entries, but by symmetry (∂²/∂B∂S = ∂²/∂S∂B), there are really only **10 unique** second-order effects: 4 pure second derivatives and 6 mixed partials. I'll give you all 10 unique ones.

---

## The Pure Second Derivatives (Curvature of Single-Ingredient Effects)

These describe the _nonlinearity_ of each ingredient's effect—whether adding more gives you accelerating returns, diminishing returns, or an inflection point.

**1. ∂²(cake)/∂(butter)²** Strongly negative. The first tablespoon of butter does a lot (coating flour, adding moisture, creating tenderness). Each subsequent addition does less until you hit a failure point where the structure can't hold the fat and you get greasy, collapsed cake. The curve bends down hard.

**2. ∂²(cake)/∂(sugar)²** Strongly negative. Sugar's benefits (moisture retention, tenderness, browning) plateau while its costs (structural collapse, excessive sweetness, crystallization) accelerate. This is one of the most dramatic nonlinearities—slightly too much sugar and you get a wet, sunken center.

**3. ∂²(cake)/∂(eggs)²** Moderately negative. Eggs are interesting because they provide both structure (protein network) and richness (yolk fat), which partially offset each other. But eventually you get rubbery, eggy texture. The curve is gentler than butter or sugar—eggs are more forgiving of excess.

**4. ∂²(cake)/∂(flour)²** Negative, with a sharp cliff. More flour is relatively linear for a while (progressively drier, sturdier), but there's a point where you cross from "dense" to "inedible brick." The penalty for over-flouring is severe but the approach is gradual.

---

## The Mixed Partials (Ingredient Interactions)

These are the interesting ones—how does changing one ingredient modify the _effect_ of another?

**5. ∂²(cake)/∂(butter)∂(flour)** — THE FUNDAMENTAL BAKING INTERACTION Fat coats flour proteins and prevents gluten formation. This is the single most important interaction in all of baking—it's why pastry is different from bread, why cookies spread, why cakes are tender. More butter _amplifies_ the tenderizing effect per unit flour because you're coating a higher proportion of the available protein. **Strongly positive for tenderness, strongly negative for structure.**

**6. ∂²(cake)/∂(eggs)∂(flour)** — THE STRUCTURE AXIS Eggs and flour are _synergistic_ for building framework. Egg proteins coagulate and create a network; gluten creates a network; together they create a more robust composite structure than either alone. This is why sponge cakes (high egg, moderate flour, low fat) can be surprisingly sturdy. **Positive interaction.**

**7. ∂²(cake)/∂(butter)∂(eggs)** — THE EMULSIFICATION PARTNERSHIP Egg yolks are emulsifiers. They allow you to incorporate more fat into the batter than would otherwise be possible. At low egg levels, adding butter quickly overwhelms the system; at high egg levels, the same amount of butter integrates smoothly. This is _why pound cake works_—all that butter stays in suspension because of all those eggs. **Strongly positive interaction.**

**8. ∂²(cake)/∂(sugar)∂(flour)** — THE WATER COMPETITION Sugar and flour both want water. Sugar is hygroscopic and holds water away from flour proteins, limiting gluten development. More sugar makes each unit of flour less effective at building structure (but more effective at tenderness). **Negative for structure, positive for tenderness.**

**9. ∂²(cake)/∂(butter)∂(sugar)** — THE DOUBLE TENDERIZER Both tenderize through different mechanisms: butter coats proteins, sugar steals water. Together, they compound—the effect of adding butter to an already high-sugar batter is _more dramatic_ than adding butter to a low-sugar batter. This is why rich cakes are so sensitive to ratios; you're stacking two tenderizing effects. **Positive interaction (synergistic tenderizing), which can become a liability (structural failure).**

**10. ∂²(cake)/∂(sugar)∂(eggs)** — THE FOAM STABILIZER / PROTEIN DISRUPTOR Complex and context-dependent. When whipping eggs, sugar stabilizes the foam (positive). But sugar also delays and interferes with egg protein coagulation during baking (negative for structure). In creamed cakes, this is less relevant; in sponge cakes, it's critical. **Weakly negative overall, but sign depends on method.**

---

## Ranked by Importance/Magnitude

**Tier 1: Foundational Interactions (must understand to bake)**

1. **Butter × Flour** — This is baking's central dogma. Understand this and you understand why pie crust, cookies, cakes, and bread are different.
2. **Eggs × Flour** — The structure-building partnership. This is why cakes rise and hold together.
3. **Butter × Eggs** — The emulsification that makes rich cakes possible. Without understanding this, you can't reason about why pound cake works or why adding an extra yolk helps.

**Tier 2: Important for Troubleshooting** 4. **∂²/∂(sugar)²** — Sugar's nonlinearity causes more amateur baking failures than anything else. The sunken-center-too-sweet-cake is almost always here. 5. **Sugar × Flour** — Understanding their competition for water explains a lot of texture issues. 6. **Butter × Sugar** — The compounding tenderization effect explains why rich recipes are so ratio-sensitive.

**Tier 3: Useful Refinements** 7. **∂²/∂(butter)²** — Diminishing returns on fat, greasiness threshold. 8. **Sugar × Eggs** — Matters a lot for sponges and meringues, less for creamed cakes. 9. **∂²/∂(flour)²** — The "brick" cliff is real but most people undershoot rather than overshoot flour. 10. **∂²/∂(eggs)²** — Eggs are the most forgiving ingredient; this nonlinearity rarely causes problems.

---

The upshot: if you deeply internalize **Butter × Flour**, **Eggs × Flour**, and **Butter × Eggs**, you can reason your way through almost any cake problem. The rest is refinement.