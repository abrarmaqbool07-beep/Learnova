# Learnova --- Landing Page Product & UI/UX Blueprint

**Document:** `idea.md`\
**Version:** 1.0\
**Status:** Planning baseline\
**Product:** Learnova --- online learning and course-discovery platform\
**Primary deliverable:** Responsive marketing landing page, with clear
pathways into course discovery and course detail pages

------------------------------------------------------------------------

## 1. Executive summary

Learnova is a modern learning platform offering both free and paid
courses across professional and creative skill categories. The landing
page must help a first-time visitor understand what Learnova offers,
trust the learning experience, discover relevant courses, and take a
clear next step.

The intended visual direction is **premium, modern, minimal and
editorial**. The page should feel like a considered education product
rather than a generic course marketplace template.

The design brief establishes these non-negotiable requirements:

-   A full-bleed hero background image that covers the hero area.
-   Centered hero content: a clear headline, one-line brand identity
    statement and calls to action.
-   A "Why choose Learnova?" section with a deliberate vertical scroll
    animation using GSAP/ScrollTrigger and/or Framer Motion (now
    commonly referred to as Motion).
-   A course-card system inspired by Uxcel, Coursera and Udemy, while
    retaining a distinct Learnova identity.
-   Both free and paid courses.
-   Course cards must show an image, title, instructor, rating, duration
    and price/free status.
-   A light visual theme.
-   Responsive behavior across desktop, tablet and mobile.

This document defines the page structure, section requirements, user
journeys, interaction behavior, component inventory,
implementation-source recommendations, responsive rules, accessibility
requirements and acceptance criteria. It is a design/development handoff
specification, not a backend specification.

## 2. Product positioning and design principles

### 2.1 Positioning

**Working positioning statement:** Learnova helps people build useful
skills through accessible, well-structured courses taught by
knowledgeable instructors.

**Proposed brand line:** "Learn something new. Become something more."

This is a working line, not locked marketing copy. The final headline
and supporting copy should be validated against the actual course
catalogue and product capabilities.

### 2.2 Primary audience

-   Students and early-career professionals exploring practical skills.
-   People changing careers or strengthening their current skill set.
-   Self-directed learners who want to compare free and paid learning
    options.
-   Learners browsing technology, design, business, marketing and other
    categories.

### 2.3 Core landing-page goals

1.  Communicate Learnova's value within the first screen.
2.  Make the next action obvious: explore courses or browse a relevant
    category.
3.  Demonstrate why the platform is useful, not merely list generic
    benefits.
4.  Make available courses easy to scan and compare.
5.  Establish trust using genuine instructor, learner, course and
    platform information.
6.  Maintain a coherent, accessible experience on small screens.

### 2.4 Design principles

-   **Clarity before decoration:** every section should answer a visitor
    question or support an action.
-   **One dominant action per section:** avoid competing CTAs.
-   **Real product evidence:** use genuine course imagery, instructors,
    ratings and testimonials when available. Never fabricate social
    proof, learner counts, partner logos or outcomes.
-   **Consistent components:** use one course-card system and a small
    set of button, badge and card variants.
-   **Motion with purpose:** animation should explain relationships or
    guide attention, not delay access to content.
-   **Responsive by design:** do not treat mobile as a compressed
    desktop layout.
-   **Accessible by default:** maintain contrast, keyboard access,
    reduced-motion support and semantic structure.

## 3. Reference analysis and design decisions

The attached seven-page Uxcel reference is the primary visual reference.
The notes below distinguish observed patterns from proposed Learnova
decisions.

### 3.1 Uxcel reference (attached `uxcel.pdf`)

-   **Page 1:** compact navigation, centered headline and supporting
    copy, paired CTAs, a large interactive learning demonstration,
    category/product tabs and a partner-logo strip.\
    **Learnova application:** retain the centered message hierarchy and
    trust-building rhythm. Replace the light interactive demo as the
    main hero visual with the requested full-bleed background image. A
    course or learning preview can appear further down the page.
-   **Page 2:** self-paced-learning introduction, three benefit cards, a
    split section pairing copy with a list of courses, and short benefit
    statements.\
    **Learnova application:** use a stronger "Why choose us?"
    storytelling section and a featured-course section. Avoid repeating
    the same benefit copy in multiple places.
-   **Page 3:** institutional logos, a prominent testimonial and a
    multi-card product/toolkit feature area.\
    **Learnova application:** use a testimonial only when a real learner
    quote is available. Feature cards can explain course formats,
    learning support or practical outcomes that Learnova genuinely
    offers.
-   **Pages 4--5:** statistics, a large dark CTA panel, a second logo
    strip, video testimonials and written review cards.\
    **Learnova application:** use one concise proof/statistics area and
    one final CTA. Do not imitate Uxcel's dense testimonial wall; a
    small curated set of genuine reviews is more credible.
-   **Pages 6--7:** multi-column footer with product, community,
    resources, popular courses and legal links.\
    **Learnova application:** use a smaller, well-organized footer that
    matches the actual site navigation and available content.

### 3.2 Coursera reference

Current Coursera discovery patterns emphasize subject/category browsing,
popular courses, provider/institution identity, ratings, learner
reviews, course level and program duration. Its catalogue also provides
filters such as topic, duration, learning product, language and level.

**Learnova application:** - Make categories easy to discover before or
alongside the course grid. - Keep course metadata scannable. - Provide
filters on the Explore page, not an overloaded filter interface on the
homepage. - Show the course provider/instructor and learning level where
useful. - Distinguish a single course from a longer certificate or
learning path if Learnova eventually offers both.

Reference: https://www.coursera.org/ and
https://www.coursera.org/browse/

### 3.3 Udemy reference

Udemy's course listings make practical comparison information visible:
course title, instructor, rating/review count, total duration, lecture
count, level and current price.

**Learnova application:** - Use a clear title and instructor line. -
Display rating and review count together. - Display course duration in a
consistent format. - Display a clear price or "Free" status. - Do not
copy Udemy's promotional clutter, urgency labels or excessive metadata.

Reference: https://www.udemy.com/

### 3.4 Brilliant reference

Brilliant's product positioning emphasizes interactive, hands-on
learning, visual explanations, step-by-step practice and
progress/motivation features.

**Learnova application:** if Learnova genuinely offers interactive
exercises, projects or progress tracking, use a short product-preview
section to demonstrate them. Do not claim interactive learning
functionality until it exists.

Reference: https://brilliant.org/

### 3.5 Recommended course-card direction

Use a **hybrid card**: Coursera-style clarity and provider credibility
combined with Udemy-style practical metadata, presented with Uxcel-like
restraint.

The card should contain:

1.  Course thumbnail (16:9).
2.  Small category label.
3.  Course title (maximum two lines in the card).
4.  Instructor name, optionally with a small avatar.
5.  Rating and review count.
6.  Duration (and optionally lesson count if reliable).
7.  Price, or a visually distinct "Free" label.
8.  Optional course level badge, if it does not overcrowd the card.

Do not place every possible data point on the card. Keep secondary
details for the course detail page.

## 4. Landing-page information architecture and section order

Recommended desktop page order:

1.  Navigation bar
2.  Full-bleed hero
3.  Trust/credibility strip
4.  Category discovery
5.  Featured/popular courses
6.  Why choose Learnova? --- scroll-driven storytelling
7.  Learning paths or curated collections
8.  Learner testimonials (only if genuine)
9.  Final call-to-action
10. Footer

The sequence follows a visitor's decision process:

**Understand → Trust → Find a subject → Compare courses → Understand the
advantage → Explore a pathway → Validate → Act.**

### Section 01 --- Navigation bar

**Purpose:** Give visitors orientation and access to the most important
destinations without competing with the hero.

**Recommended desktop layout:** - Left: Learnova wordmark/logo. - Center
or left-center: Courses, Categories, About. - Right: Log in (secondary
text link) and Get started (primary button). - Optional search
icon/input only if search is a core supported feature.

**Behavior:** - Overlay the hero at the top if the background image is
dark enough and the text contrast is sufficient. - After the hero/top
threshold, transition to a solid light surface with a subtle border or
shadow. - Keep the header sticky after scrolling. - Use a compact mobile
menu with a clearly labeled menu button and an accessible expanded
state.

**Avoid:** too many top-level links, multiple competing buttons, or an
opaque header that obscures the hero image.

**Components:** `SiteHeader`, `BrandLogo`, `DesktopNav`, `NavLink`,
`HeaderActions`, `MobileMenuButton`, `MobileNavDrawer`.

### Section 02 --- Full-bleed hero

**Purpose:** Establish Learnova's identity and communicate the main
promise immediately.

**Required composition:** - Full-width background image covering the
entire hero container (`background-size: cover` or equivalent image
`object-fit: cover`). - Center-aligned content. - Eyebrow/short label is
optional. - One strong headline, ideally 6--12 words. - One-line brand
identity statement beneath the heading. - Primary CTA: "Explore
courses". - Secondary CTA: "How it works" or "Browse categories" (choose
one). - Optional small trust note only if verifiable.

**Visual treatment:** - Use a high-quality image with a clear focal
point and enough negative space behind the text. - Add a dark or
brand-tinted overlay/gradient so white text remains readable across the
image. - Avoid placing critical text directly over a busy face or
high-detail region. - Use a subtle bottom fade if the next section is
white and the transition needs visual continuity. - Do not add multiple
floating widgets unless they are actual product UI and improve the
composition.

**Proposed copy direction (draft only):** - Headline: "Build skills that
move you forward." - Brand line: "Practical learning for the next step
in your journey." - Primary CTA: "Explore courses" - Secondary CTA:
"Discover learning paths"

**Sizing guidance (starting values, adjust in design):** - Desktop:
approximately 680--780px tall, with content vertically centered. -
Tablet: approximately 600--680px. - Mobile: approximately 560--680px,
depending on image focal point and text wrapping. - Headline: responsive
clamp range around 2.5rem--5rem desktop and 2.1rem--3.2rem mobile. -
Content max-width: approximately 760--900px.

**Interaction:** CTA buttons navigate to the Explore page or scroll to a
relevant section. Do not make the whole hero an ambiguous click target.

**Components:** `HeroSection`, `HeroBackground`, `HeroOverlay`,
`HeroContent`, `HeroEyebrow`, `HeroTitle`, `HeroBrandLine`,
`HeroActions`.

### Section 03 --- Trust / credibility strip

**Purpose:** Reduce uncertainty after the first impression.

Possible content (use only what can be verified): - "Courses taught by
experienced instructors". - Number of available courses, if real. -
Number of learners, if real. - Partner/institution logos, only with
permission and actual partnerships. - Genuine instructor or learner
portraits.

**Recommendation:** For an early-stage concept, use three concise value
statements or instructor credibility rather than invented company logos
and inflated learner counts.

**Layout:** slim horizontal strip with 3--4 items on desktop;
horizontally scrollable or stacked on mobile.

**Components:** `TrustStrip`, `TrustItem`, `TrustIcon`.

### Section 04 --- Category discovery

**Purpose:** Help visitors self-select a subject before they inspect
individual courses.

**Suggested categories:** Development, UI/UX Design, Business,
Marketing, Data Science, Photography, Video Editing, Artificial
Intelligence and Personal Development. Final categories should reflect
the actual catalogue.

**Layout:** - Section heading and short supporting sentence. - 4--6
category tiles visible on desktop. - Each tile uses a simple icon or
image, category name and optional course count. - A "View all
categories" link leads to Explore.

**Interaction:** category tile navigates to Explore with the relevant
category filter applied.

**Components:** `CategorySection`, `CategoryGrid`, `CategoryCard`,
`CategoryIcon`, `SectionHeading`.

### Section 05 --- Featured / popular courses

**Purpose:** Put real learning options in front of the visitor and
create a direct route into course details.

**Content:** - Heading such as "Explore courses worth your time". -
Short explanatory line. - Optional tabs: "Popular", "New", "Free". Use
tabs only if each state has meaningful content. - 3 cards across on a
wide desktop layout; 2 on tablet; 1 on narrow mobile or a carefully
designed horizontal carousel. - "Explore all courses" link below or
beside the heading.

**Course-card specification:**

  -----------------------------------------------------------------------
  Element                             Requirement
  ----------------------------------- -----------------------------------
  Image                               Consistent 16:9 thumbnail, same
                                      visual treatment

  Category                            Small neutral/accent label

  Title                               Strong hierarchy, max two lines

  Instructor                          Name; avatar optional

  Rating                              Star + numeric rating + review
                                      count

  Duration                            Consistent units, e.g. "6h 20m" or
                                      "4 weeks"

  Price                               Currency and amount, or "Free"

  Card action                         Entire card may open course
                                      details; preserve visible focus
                                      state
  -----------------------------------------------------------------------

**Free vs paid treatment:** - Free: show a clear "Free" badge/price
label. - Paid: show the current price in a consistent currency. - If
discounts are later introduced, show original and current price only
when the discount is real and current. - Never use fake "sale" badges or
urgency timers.

**Card behavior:** - Subtle hover lift or border change on desktop. -
Thumbnail may scale very slightly on hover; avoid excessive motion. -
Keyboard focus must be visible. - Mobile cards should not depend on
hover. - Keep card heights consistent within a row.

**Components:** `FeaturedCoursesSection`, `CourseTabs` (optional),
`CourseGrid`, `CourseCard`, `CourseThumbnail`, `CourseBadge`,
`CourseMetadata`, `RatingDisplay`, `CoursePrice`, `ViewAllLink`.

### Section 06 --- Why choose Learnova? (primary scroll-animation feature)

**Purpose:** Explain Learnova's differentiators through a memorable
visual sequence. This is the key motion-design section requested in the
brief.

**Recommended concept:** a vertically pinned, multi-step storytelling
section. As the visitor scrolls, the left/central visual remains in view
while the benefit content changes through a sequence of 3 steps. The
section should still read as a normal vertical sequence when animation
is disabled or on devices where pinning is unsuitable.

**Suggested three-step narrative (validate against actual product
capabilities):**

1.  **Learn with direction** --- curated courses and clear learning
    paths help learners choose what to study.
2.  **Build practical skills** --- projects, exercises or applied
    learning help turn knowledge into capability (only claim features
    that exist).
3.  **Keep moving forward** --- visible progress, milestones or
    completion records help learners understand their development (only
    claim features that exist).

**Visual approach:** - A large product-style visual panel on one side. -
A numbered step indicator and text on the other side. - Each step has a
concise heading, 1--2 sentence explanation and optional link. - The
visual panel changes between step-specific mockups, course previews or
illustrations. - Use a subtle progress indicator to show the current
step. - Keep the section's overall height and pin duration controlled;
do not trap the visitor in a long animation.

**Motion recommendation:** - Use **GSAP + ScrollTrigger** for the
pinned, scroll-scrubbed sequence if the design requires precise pinning
and timeline control. - Use **Motion (formerly Framer Motion)** for
smaller component transitions, reveal effects and state changes. - Avoid
using both libraries for the same animation. If bundle size and
simplicity are priorities, implement the entire section with
GSAP/ScrollTrigger or use a non-pinned Motion-based sequence. - Use
`prefers-reduced-motion` to disable pinning/scrubbing and show all three
steps in a static stacked layout. - Do not animate essential text in a
way that makes it unavailable to screen readers or causes layout
jumps. - On mobile, prefer a normal stacked sequence or short,
non-pinned transitions. Long pinned scroll experiences can feel awkward
on touch devices.

**Suggested scroll behavior:** - Section enters viewport. - Section pins
only on suitable desktop/tablet widths. - Step 1 is active initially. -
As scroll progress advances, step 1 transitions to step 2, then step
3. - Progress indicator updates with the active step. - At the end, the
section unpins naturally and the next section enters.

**Components:** `WhyLearnovaSection`, `StoryScrollContainer`,
`StoryVisualPanel`, `StoryStep`, `StoryProgress`, `StoryMockup`,
`StoryStaticFallback`.

### Section 07 --- Learning paths / curated collections

**Purpose:** Show that learners can follow a coherent route rather than
selecting unrelated courses.

**Possible examples:** - Front-end Development Path - UI/UX Design
Foundations - Data Analytics Starter Path - Digital Marketing Essentials

Each path card may show a short description, number of courses/modules
and estimated duration, if those details exist.

**Layout:** 2--3 cards across on desktop; stack on mobile. Use a
different card composition from course cards so the two content types
are distinguishable.

**Components:** `LearningPathsSection`, `LearningPathCard`,
`PathMetadata`.

### Section 08 --- Learner testimonials

**Purpose:** Provide social proof through real learner experiences.

**Content requirements:** - Real quote with permission. - Learner name
and role, if approved. - Optional portrait. - Optional course taken. -
Keep the quote concise and specific.

**Design:** 2--3 testimonial cards or one featured quote with supporting
cards. Avoid a large, dense wall of reviews.

**If no genuine testimonials exist:** omit this section for the first
version or replace it with a factual "What you can learn" section. Do
not invent quotes or people.

**Components:** `TestimonialsSection`, `TestimonialCard`,
`LearnerIdentity`, `QuoteMark`.

### Section 09 --- Final CTA

**Purpose:** Give visitors who have reached the end a clear next step.

**Recommended content:** - A short, benefit-oriented heading. - One
supporting sentence. - Primary CTA: "Explore courses". - Optional
secondary link to About or learning paths.

**Visual treatment:** a contrasting brand-color panel or dark section
can create a strong ending before the footer. Keep it visually
consistent with the light theme.

**Components:** `FinalCTASection`, `CTAButton`.

### Section 10 --- Footer

**Purpose:** Provide secondary navigation, brand context and
legal/support links.

**Recommended columns:** - **Learnova:** logo and short brand
description. - **Explore:** All courses, Categories, Learning paths. -
**Company:** About, Contact. - **Support:** Help center / FAQ (only if
these pages exist). - **Legal:** Privacy policy, Terms of service. -
Social links only for active official profiles.

**Bottom row:** copyright notice and legal links.

**Mobile:** stack columns into accordions or compact groups; ensure
links remain keyboard accessible.

**Components:** `SiteFooter`, `FooterColumn`, `FooterLink`,
`SocialLinks`, `FooterLegal`.

## 5. Detailed user flows

### 5.1 Primary flow --- visitor discovers and opens a course

1.  Visitor lands on Learnova homepage.
2.  Hero communicates the platform promise.
3.  Visitor selects "Explore courses".
4.  Explore page opens with the course catalogue.
5.  Visitor searches or filters by category, price type, level or
    duration.
6.  Visitor scans course cards and compares title, instructor, rating,
    duration and price.
7.  Visitor selects a course card.
8.  Course detail page presents curriculum, outcomes, instructor and
    enrollment information.
9.  Visitor chooses the appropriate next action: enroll, start free
    course or sign in if required.

**Success condition:** visitor can identify a relevant course and reach
its details without confusion.

### 5.2 Category-led flow

1.  Visitor sees category tiles on the homepage.
2.  Visitor selects a category (e.g. UI/UX Design).
3.  Explore page opens with that category preselected.
4.  Visitor refines results using filters.
5.  Visitor opens a course detail page.

### 5.3 Free-course flow

1.  Visitor selects a "Free" course tab/filter or a Free badge on a
    card.
2.  Visitor opens the course detail page.
3.  The detail page clearly explains what is included at no cost.
4.  Visitor selects "Start learning".
5.  If authentication is required, show sign-in/sign-up and preserve the
    selected course so the user can continue afterward.

### 5.4 Paid-course flow

1.  Visitor selects a paid course.
2.  Visitor reviews course details, instructor, curriculum, rating and
    price.
3.  Visitor selects "Enroll now".
4.  If authentication/payment is outside the current design scope, show
    the intended next-step state or a clearly labeled placeholder. Do
    not imply a payment flow is implemented if it is not.

### 5.5 Returning visitor flow

1.  Visitor selects "Log in".
2.  Sign-in screen opens.
3.  After successful authentication, the intended product destination is
    the learner dashboard or last active course.
4.  The marketing landing page remains accessible through the Learnova
    logo.

Authentication and dashboard screens are not part of the initial
landing-page deliverable unless separately requested.

## 6. Navigation model and page destinations

  -----------------------------------------------------------------------
  Navigation item         Destination             Notes
  ----------------------- ----------------------- -----------------------
  Learnova logo           Home                    Always returns to
                                                  homepage

  Courses                 Explore courses         Main discovery
                                                  destination

  Categories              Category section or     Avoid duplicate
                          category index          destinations

  Learning paths          Learning paths          Include only if paths
                          section/page            are part of product

  About                   About page/section      Keep secondary

  Log in                  Sign-in page            Secondary action

  Get started             Explore or sign-up      Decide based on actual
                                                  product onboarding
  -----------------------------------------------------------------------

**Recommendation:** keep the desktop navbar to 4--5 text links plus
account actions. On mobile, place all navigation links in a single
accessible menu.

## 7. Course card design system

### 7.1 Card anatomy

``` text
┌──────────────────────────────────────┐
│                                      │
│            COURSE IMAGE              │
│                                      │
│  [FREE] or [PAID]                    │
├──────────────────────────────────────┤
│  CATEGORY                            │
│  Course title, up to two lines       │
│  Instructor name                     │
│                                      │
│  ★ 4.8 (120 reviews)                 │
│  ◷ 6h 20m                            │
├──────────────────────────────────────┤
│  Free / $49.00                       │
└──────────────────────────────────────┘
```

### 7.2 Card rules

-   Use one consistent image ratio (16:9 recommended).
-   Use consistent image corner radius.
-   Keep title line-height and maximum line count consistent.
-   Use the same metadata order on every card.
-   Align price baselines across a row.
-   Use a neutral badge for category and a distinct but restrained
    treatment for Free.
-   Use the same currency across the catalogue or clearly indicate the
    currency.
-   Do not show a rating if there are no verified reviews; show "New"
    only if it is genuinely a new course.
-   If the course has no fixed duration, omit duration rather than
    inventing it.

### 7.3 Recommended card behavior

-   Desktop hover: subtle elevation/border change.
-   Thumbnail hover: optional 1.02 scale, clipped within image
    container.
-   Focus: visible outline or clear focus ring.
-   Click: card navigates to the course detail page.
-   Nested buttons: avoid placing a separate interactive button inside a
    fully clickable card unless the semantics are handled carefully.

## 8. Visual design system (initial proposal)

The exact palette and typography remain subject to the user's visual
direction. The following is a starting system, not a final brand lock.

### 8.1 Color roles

  Token                    Suggested value   Usage
  ------------------------ ----------------- ---------------------------------------
  `color-text-primary`     `#171923`         Main headings and body text
  `color-text-secondary`   `#626675`         Supporting copy
  `color-background`       `#FFFFFF`         Main page background
  `color-surface`          `#F6F7FA`         Soft section/card surface
  `color-border`           `#E7E9EF`         Card and divider borders
  `color-brand`            `#6658E8`         Primary actions and selected states
  `color-brand-hover`      `#5546D6`         Hover state
  `color-success`          `#21865B`         Free/success status where appropriate

Do not use the accent color on every element. Let typography, spacing
and imagery create most of the visual hierarchy.

### 8.2 Typography

Suggested pairing: - **Headings:** Manrope or Plus Jakarta Sans. -
**Body/UI:** Inter or the same family as headings for a simpler system.

Use no more than two font families. Define a responsive type scale and
consistent weights. Load fonts through Google Fonts or a locally hosted
font file, subject to licensing and performance requirements.

### 8.3 Layout and spacing

-   Use a centered content container with a maximum width around
    1200--1280px.
-   Use a consistent spacing scale based on 4px or 8px increments.
-   Give major sections generous vertical padding.
-   Keep text line lengths comfortable (roughly 60--75 characters for
    body copy).
-   Use a consistent border radius family; avoid mixing too many
    unrelated radii.
-   Use subtle borders and restrained shadows rather than heavy card
    shadows.

## 9. Motion and interaction specification

### 9.1 Motion principles

-   Animation should communicate state, hierarchy or progression.
-   Keep most transitions short and subtle.
-   Avoid excessive parallax, constant floating objects and scroll
    hijacking.
-   Avoid animating every section identically; use motion selectively.
-   Ensure content is still available without animation.

### 9.2 Recommended technology

**Primary recommendation for the Why Choose Us pinned sequence:** GSAP +
ScrollTrigger.

Use it when the section needs: - Pinning during scroll. - A scrubbed
timeline. - Exact control of step transitions. - Coordinated changes to
text, image and progress state.

**Use Motion (Framer Motion) for:** - Simple entrance/reveal
transitions. - Button and card micro-interactions. - Menu open/close
transitions. - Small state changes.

Do not use both libraries to control the same element or timeline. If
the project needs only basic reveals, Motion alone may be enough. If the
pinned story is central to the concept, GSAP/ScrollTrigger is the more
direct tool.

### 9.3 Reduced motion

-   Respect `prefers-reduced-motion`.
-   Disable pinned/scrubbed behavior when reduced motion is requested.
-   Render all Why Choose Us steps in a readable static layout.
-   Do not hide essential content until an animation runs.
-   Avoid flashing, rapid movement or large unexpected shifts.

## 10. Responsive behavior

Design and test at these reference widths:

  Device              Reference viewport Layout guidance
  ----------------- -------------------- --------------------------------------------
  Wide desktop                    1440px Full navigation, 3-column course grid
  Standard laptop                 1280px Full navigation, 3-column course grid
  Tablet                           768px Compact navigation, 2-column course grid
  Mobile                           390px Menu drawer, 1-column cards
  Small mobile                     360px Avoid horizontal overflow and clipped text

### Responsive rules by section

-   **Navbar:** full links on desktop; menu button and drawer on mobile.
-   **Hero:** preserve centered hierarchy; use a mobile-specific image
    crop if necessary; reduce headline size and keep CTAs easy to tap.
-   **Trust strip:** wrap or horizontally scroll without clipping.
-   **Categories:** 3--4 columns on desktop, 2 on mobile, or horizontal
    scroll if tiles are compact.
-   **Course cards:** 3 columns desktop, 2 tablet, 1 mobile.
-   **Why Choose Us:** pinned sequence on suitable larger screens;
    stacked steps on mobile.
-   **Testimonials:** 2--3 columns desktop; stacked or swipeable cards
    mobile.
-   **Footer:** multi-column desktop; stacked groups/accordions mobile.

Test at intermediate widths, not only the exact reference sizes.

## 11. Component inventory and recommended sources

The following sources are recommendations for implementation. Select
components based on the project's framework and licensing. Do not copy a
complete third-party template without checking its license.

  -------------------------------------------------------------------------------------------------
  Need                    Recommended source                                How to use it
  ----------------------- ------------------------------------------------- -----------------------
  Accessible buttons,     Radix UI: https://www.radix-ui.com/primitives     Use primitives for
  menus, dialogs, tabs                                                      interaction and
                                                                            accessibility; style to
                                                                            match Learnova

  Styled React components shadcn/ui: https://ui.shadcn.com/                 Copy/adapt selected
  (optional)                                                                components; do not
                                                                            install an entire UI
                                                                            kit unnecessarily

  Icons                   Lucide: https://lucide.dev/icons/                 Use consistent outline
                                                                            icons for categories,
                                                                            navigation and metadata

  Scroll storytelling     GSAP ScrollTrigger:                               Pin and sequence the
                          https://gsap.com/docs/v3/Plugins/ScrollTrigger/   Why Choose Us section

  Component transitions   Motion: https://motion.dev/                       Menus, reveals and
                                                                            small UI transitions

  Fonts                   Google Fonts: https://fonts.google.com/           Manrope, Plus Jakarta
                                                                            Sans or Inter; verify
                                                                            font licenses

  Photography             Unsplash: https://unsplash.com/ or Pexels:        Hero and editorial
                          https://www.pexels.com/                           images; check each
                                                                            image's license/terms

  Illustrations           unDraw: https://undraw.co/ or Storyset:           Optional supporting
                          https://storyset.com/                             illustrations; check
                                                                            attribution/license
                                                                            requirements

  Color contrast          WebAIM Contrast Checker:                          Validate text and
                          https://webaim.org/resources/contrastchecker/     interactive-state
                                                                            contrast

  Design inspiration      Uxcel: https://uxcel.com/                         Reference hierarchy,
                                                                            whitespace, interactive
                                                                            learning previews

  Course discovery        Coursera: https://www.coursera.org/               Categories, course
  patterns                                                                  metadata and filters

  Course-card metadata    Udemy: https://www.udemy.com/                     Instructor, rating,
                                                                            duration and price
                                                                            presentation

  Interactive learning    Brilliant: https://brilliant.org/                 Demonstration of
  inspiration                                                               hands-on learning, if
                                                                            Learnova supports it
  -------------------------------------------------------------------------------------------------

### Suggested React component tree

``` text
App
└── HomePage
    ├── SiteHeader
    │   ├── BrandLogo
    │   ├── DesktopNav
    │   ├── HeaderActions
    │   └── MobileNav
    ├── HeroSection
    ├── TrustStrip
    ├── CategorySection
    │   └── CategoryCard[]
    ├── FeaturedCoursesSection
    │   └── CourseCard[]
    ├── WhyLearnovaSection
    │   ├── StoryVisualPanel
    │   ├── StoryStep[]
    │   └── StoryProgress
    ├── LearningPathsSection
    │   └── LearningPathCard[]
    ├── TestimonialsSection
    │   └── TestimonialCard[]
    ├── FinalCTASection
    └── SiteFooter
```

Keep content data separate from presentation components. Course cards
should receive structured course data through props rather than
hard-coded text inside each card.

## 12. Content and asset requirements

Before high-fidelity design, prepare:

### Brand assets

-   Learnova wordmark/logo (SVG preferred).
-   Favicon.
-   Brand color and typography decisions.
-   Optional brand illustration style.

### Hero asset

-   One high-resolution landscape image.
-   A focal point that works with centered text.
-   A mobile crop or alternate image if the desktop composition does not
    adapt.
-   Confirm usage rights.

### Course assets

For each featured course: - Thumbnail. - Course title. - Category. -
Instructor name and optional avatar. - Verified rating and review count,
or no rating. - Duration. - Price and currency, or free status. - Course
detail destination.

### Trust and testimonial assets

-   Approved partner logos, if real.
-   Real learner quotes and permission.
-   Real learner portraits, if approved.
-   Verified platform statistics, if available.

Do not use Uxcel, Coursera, Udemy or Brilliant logos as Learnova
partners. They are design references, not endorsements.

## 13. Accessibility, usability and quality requirements

-   Use semantic landmarks: `header`, `nav`, `main`, `section`,
    `footer`.
-   Use one clear H1 on the landing page.
-   Maintain logical heading order.
-   Provide descriptive alt text for meaningful images; decorative
    images should have empty alt text.
-   Ensure keyboard navigation for menus, tabs, cards and CTAs.
-   Provide visible focus states.
-   Maintain WCAG AA contrast for normal text and interactive elements.
-   Do not communicate free/paid status by color alone; include text
    labels.
-   Ensure controls have accessible names.
-   Make touch targets comfortably usable (aim for approximately 44×44
    CSS pixels).
-   Avoid autoplay video with sound.
-   Provide reduced-motion behavior.
-   Ensure the page works at 200% zoom and does not require horizontal
    scrolling at mobile widths.
-   Optimize images and use responsive formats/sizes.
-   Lazy-load below-the-fold images; do not lazy-load the main hero
    image if it is the Largest Contentful Paint element.
-   Reserve image dimensions/aspect ratios to reduce layout shift.

## 14. Performance and implementation notes

Although this is a UI/UX project, the design should support performant
implementation.

-   Prefer optimized WebP/AVIF imagery where supported.
-   Use appropriately sized responsive images.
-   Avoid loading multiple animation libraries unless they serve
    distinct purposes.
-   Keep the hero image compressed and carefully art-directed.
-   Animate transform and opacity where possible rather than
    layout-heavy properties.
-   Avoid large scroll-triggered animations on low-powered mobile
    devices.
-   Test layout shift, image loading and scroll performance.
-   Keep motion optional and progressively enhanced.

## 15. Scope boundaries

### Included in this landing-page project

-   Responsive homepage.
-   Navbar and mobile navigation.
-   Hero section with full-bleed background.
-   Trust/credibility strip.
-   Category discovery.
-   Featured course cards with free/paid states.
-   Why Choose Learnova scroll-story section.
-   Learning path/collection cards.
-   Testimonials section if genuine content is available.
-   Final CTA.
-   Footer.
-   Interaction states and responsive behavior.

### Related screens to design later (not part of the first landing-page pass)

-   Explore courses page.
-   Course detail page.
-   About page.
-   Sign-in and sign-up.
-   Learner dashboard.
-   Checkout/payment.
-   Course player/lesson experience.

### Not assumed or promised

-   Backend, authentication or payment implementation.
-   Real course delivery or video hosting.
-   Real learner statistics or partner relationships.
-   Certificates, quizzes, projects or progress tracking unless
    confirmed as actual product features.

## 16. Suggested design and development sequence

1.  **Confirm content and brand:** final categories, real course
    examples, hero message, brand line and imagery.
2.  **Low-fidelity wireframe:** define section order, widths, grid
    structure and content hierarchy without detailed styling.
3.  **Hero design:** explore image direction, overlay, typography and
    CTA placement.
4.  **Course-card design:** create one card component and validate
    Free/Paid states.
5.  **Why Choose Us storyboard:** define the three steps and visual
    state for each before implementing scroll animation.
6.  **Remaining homepage sections:** categories, trust strip, paths,
    testimonials, CTA and footer.
7.  **Design system:** tokens for colors, typography, spacing, radius,
    shadows and component states.
8.  **Responsive layouts:** desktop, tablet and mobile.
9.  **Prototype:** connect the key navigation and CTA flows; prototype
    the scroll section.
10. **Review and handoff:** accessibility, responsive, performance and
    content checks.

## 17. Acceptance checklist

### Structure and content

-   [ ] Homepage follows the approved section order.
-   [ ] Hero clearly explains Learnova.
-   [ ] Hero contains a full-bleed cover image and centered text.
-   [ ] One-line brand identity statement is present below the heading.
-   [ ] Primary and secondary CTAs have clear destinations.
-   [ ] Course cards show image, title, instructor, rating, duration and
    price/free status where data exists.
-   [ ] Free and paid courses are visually distinguishable.
-   [ ] Why Choose Learnova communicates real, specific benefits.
-   [ ] Testimonials, logos and statistics are genuine or omitted.
-   [ ] Footer links match actual destinations.

### Interaction and motion

-   [ ] Navbar sticky/scroll state works.
-   [ ] Mobile menu opens, closes and is keyboard accessible.
-   [ ] Category cards navigate to the relevant category.
-   [ ] Course cards open the correct course details.
-   [ ] Why Choose Us scroll sequence works without trapping the user.
-   [ ] Reduced-motion mode provides a static readable alternative.
-   [ ] Hover and focus states are consistent.

### Responsive and accessibility

-   [ ] No horizontal overflow at 360px.
-   [ ] Course grid adapts correctly at desktop, tablet and mobile
    widths.
-   [ ] Hero text remains readable over every image crop.
-   [ ] Keyboard focus is visible.
-   [ ] Contrast meets WCAG AA where applicable.
-   [ ] Images have appropriate alternative text.
-   [ ] Layout remains usable at 200% zoom.

### Performance

-   [ ] Hero image is optimized.
-   [ ] Below-the-fold images are lazy-loaded.
-   [ ] Image dimensions prevent layout shift.
-   [ ] Scroll animation remains smooth on supported devices.
-   [ ] Unnecessary animation dependencies are avoided.

## 18. Open decisions before high-fidelity design

The following details need confirmation; do not silently assume them
during implementation:

1.  Final course categories and the actual number of courses available.
2.  Whether Learnova has individual instructors, an in-house teaching
    team or both.
3.  Currency and price format for paid courses.
4.  Whether course ratings/review counts are real and available.
5.  Whether learning paths are a real product feature or only a
    landing-page concept.
6.  Which genuine platform differentiators can be claimed in the Why
    Choose Us section.
7.  Whether real testimonials, partner logos and platform statistics
    exist.
8.  Final hero image direction and approved brand copy.
9.  Final destinations for Log in, Get started and Explore courses.
10. Whether the first delivery includes only the homepage or also the
    Explore and Course Details screens.

------------------------------------------------------------------------

## 19. Reference links

-   Uxcel (primary visual reference): https://uxcel.com/
-   Coursera (course discovery and category patterns):
    https://www.coursera.org/
-   Coursera course catalogue: https://www.coursera.org/courses
-   Udemy (course-card metadata and marketplace patterns):
    https://www.udemy.com/
-   Brilliant (interactive learning presentation):
    https://brilliant.org/
-   GSAP ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
-   Motion: https://motion.dev/
-   Radix UI: https://www.radix-ui.com/primitives
-   shadcn/ui: https://ui.shadcn.com/
-   Lucide icons: https://lucide.dev/icons/

**Final design direction:** Learnova should combine Uxcel's spacious
editorial presentation, Coursera's clear course discovery, Udemy's
useful course metadata and Brilliant's emphasis on learning by
doing---without copying any one reference. The result should be a
distinct, trustworthy and responsive learning-platform brand.
