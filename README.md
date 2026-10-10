# FocusFit AI — Study Space, Tuned to You

## One-line pitch
FocusFit AI turns a student's task, preferred sound and lighting, focus-block length, and self-estimated room noise into an explainable, personalized study-space plan.

## Problem
Students are often given generic study advice even though their task, sensory preferences, and available study environment differ. This can make advice difficult to apply in a real room.

## Solution
A responsive web prototype that asks four quick preference questions and generates a tailored plan for sound, lighting/desk setup, and study rhythm. It also explains why each recommendation was selected and lets users copy their plan.

## Intended track
**AI + Education** (verify the exact track prompt in the official participant packet before submitting).

## What works in this prototype
- Interactive study-preference questionnaire.
- Noise-level self-estimate slider; no audio is recorded.
- Rule-based recommendation engine that changes the setup based on answers.
- Explainability panel showing which answers informed the result.
- Copy-plan interaction and mobile-responsive layout.
- No account, microphone permission, or personal data storage required.

## Technical approach
- HTML, CSS, and vanilla JavaScript.
- A transparent, local recommendation engine (`buildPlan()` in `app.js`) maps user preferences and task context to recommendations.
- The current prototype is an explainable rule-based recommender, not a trained machine-learning model and not an external generative-AI integration. Describe it accurately. For a stronger AI submission, add and test a real AI/ML component only if you can do so before the deadline and document it honestly.

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a modern browser.
3. Select preferences, adjust the noise slider, and click **Generate my focus plan**.

No build step or API key is required.

## Limitations and next steps
- Noise is self-reported, not measured by a microphone or calibrated sound meter.
- Recommendations are based on transparent rules and are not medical advice.
- Future work: optional user-controlled sound-level measurement, an opt-in feedback loop that learns which recommendations users keep, and a validated recommendation model using consented, anonymized feedback.

## Responsible design
No audio recording, no diagnosis, no claim that one environment is best for everyone. The app encourages users to test and adjust suggestions to their own needs.

## Suggested demo video (2–4 minutes)
1. Introduce the problem and the student audience (20 sec).
2. Show the questionnaire and change task, sound, lighting, session length, and noise level (45 sec).
3. Generate one plan, explain the sound/light/rhythm cards, then change answers and show that the result changes (60 sec).
4. Show the “Why this match?” explanation and copy-plan button (25 sec).
5. State current limitations honestly and describe the next step (20 sec).

## Suggested Devpost short description
A preference-aware study-space coach that turns a student's task, sound and lighting preferences, focus rhythm, and room noise estimate into a practical, explainable setup plan.

## Suggested project description
**The problem:** Study advice is often generic, while students have different tasks, sensory preferences, focus rhythms, and study spaces. A setup that helps one person may distract another.

**Our solution:** FocusFit AI is a responsive web prototype that asks students a few quick questions and creates a personalized plan for sound, lighting and desk setup, and study rhythm. Instead of giving a black-box answer, it explains which preferences influenced each recommendation and lets students copy the plan for their next study session.

**How it works:** The front end is built with HTML, CSS, and JavaScript. A transparent local recommendation engine combines the selected task, sound preference, lighting preference, focus-block length, and self-estimated noise level. The prototype does not record audio or store personal information.

**Impact:** The goal is to help students turn vague advice such as “find a good place to study” into concrete actions they can test in their actual environment. It is designed to be lightweight, mobile-friendly, and easy to try without an account.

**Current status and limitations:** This is an early prototype using explainable rules rather than a trained ML model. Noise is self-estimated, and suggestions are not medical advice. Future work could test recommendations with consented student feedback and evaluate whether users find the plans useful.
