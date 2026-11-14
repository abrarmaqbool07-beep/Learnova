# Learnova --- Phase-by-Phase Development Plan

**Document:** `planning.md`\
**Version:** 1.0\
**Status:** Execution plan derived from `learnova_idea.md`\
**Source of truth:** `learnova_idea.md`\
**Project:** Learnova responsive landing page

------------------------------------------------------------------------

## 0. Instructions for the coding agent

This document divides the approved Learnova idea into three execution
phases. It is a task plan for later design and coding work.

### Source-of-truth rule

`learnova_idea.md` is the primary knowledge source. This plan only
organizes and operationalizes requirements already present in that
document.

The coding agent must:

1.  Treat `learnova_idea.md` as authoritative whenever a detail is
    needed.
2.  Follow the tasks, dependencies, scope boundaries and acceptance
    criteria in this plan.
3.  Not invent product capabilities, course information, instructor
    details, ratings, reviews, testimonials, learner counts, partner
    relationships, prices, currencies or destinations.
4.  Not silently resolve open decisions listed in `learnova_idea.md`. If
    an unresolved decision blocks implementation, stop that task and
    request clarification.
5.  Keep the work limited to the responsive marketing landing page
    described in the source.
6.  Keep content separate from presentation components. Course cards
    must receive structured course data through props rather than
    hard-coded content inside each card.
7.  Preserve accessibility, responsive behavior, reduced-motion support
    and performance requirements throughout implementation---not only
    during final QA.
8.  Do not copy a third-party website or template. Use Uxcel, Coursera,
    Udemy and Brilliant only for the specific reference patterns
    described in `learnova_idea.md`.

### How to execute tasks

-   Complete tasks in order unless a dependency explicitly allows
    parallel work.
-   Mark a task complete only when its deliverable exists and its
    acceptance criteria pass.
-   Do not mark a phase complete while any required task remains blocked
    or incomplete.
-   Keep a record of unresolved decisions and report them rather than
    guessing.
-   Do not expand the scope into backend, authentication, payment,
    course delivery or other later screens.

### Task status convention

Use these statuses in project tracking:

-   `NOT STARTED`
-   `IN PROGRESS`
-   `BLOCKED`
-   `IN REVIEW`
-   `DONE`

------------------------------------------------------------------------

# Phase 1 --- Project foundation, content readiness and design specification

**Objective:** Convert the product blueprint into an
implementation-ready design specification. Establish the page structure,
content requirements, assets, component plan, responsive behavior and
motion storyboard before building the full page.

**Phase exit condition:** The landing-page structure and all required
design inputs are sufficiently defined for implementation. Any
unresolved source-document decisions that block implementation are
explicitly recorded.

## Task 1.1 --- Read and establish the source requirements

**Instructions** - Read `learnova_idea.md` in full before starting
implementation. - Extract the required landing-page scope, section
order, user flows, course-card fields, component inventory, visual
guidance, responsive rules, accessibility requirements, performance
notes and open decisions. - Use this `planning.md` as the execution
checklist, but refer back to `learnova_idea.md` for the complete
requirements.

**Deliverable** - A project requirement checklist mapped to the sections
and acceptance criteria in this plan.

**Acceptance criteria** - All requirements in the source document are
represented in the project checklist. - No new product feature or
business rule has been introduced. - Open decisions are recorded rather
than assumed.

## Task 1.2 --- Confirm content and brand inputs

**Instructions** Prepare the content inputs required by the source
document: - Learnova wordmark/logo and favicon, if available. - Final
hero headline and one-line brand identity statement. - Final hero CTA
labels and their intended destinations. - Final course categories based
on the actual catalogue. - Actual featured-course records and their
available fields. - Instructor information. - Verified ratings and
review counts, where available. - Course duration and price/currency, or
free status. - Genuine trust information, approved partner logos,
testimonials and platform statistics, if available. - Confirmation of
whether learning paths are actual product content or only a landing-page
concept.

**Rules** - Do not fabricate missing content. - Do not display a rating
when there are no verified reviews. - Omit duration when a course has no
fixed duration. - Do not use partner logos without permission and an
actual partnership. - Omit testimonials, logos or statistics if genuine
approved material is unavailable.

**Deliverable** - A content-readiness list identifying available,
missing and blocked inputs.

**Acceptance criteria** - Every displayed content item can be traced to
supplied/approved content. - Missing data is explicitly marked. - No
unsupported product claim is included.

## Task 1.3 --- Lock the landing-page information architecture

**Required page order** 1. Navigation bar 2. Full-bleed hero 3.
Trust/credibility strip 4. Category discovery 5. Featured/popular
courses 6. Why choose Learnova? scroll-driven storytelling 7. Learning
paths or curated collections 8. Learner testimonials, only if genuine 9.
Final call-to-action 10. Footer

**Instructions** - Use the visitor decision sequence from
`learnova_idea.md`: Understand → Trust → Find a subject → Compare
courses → Understand the advantage → Explore a pathway → Validate →
Act. - Define each section's purpose, content, primary action and
destination. - Do not add sections that are not in the source
blueprint. - If a conditional section has no supported content (for
example testimonials), omit it or use only the source-approved factual
alternative.

**Deliverable** - Approved landing-page section outline in the exact
order above, with conditional sections clearly marked.

**Acceptance criteria** - All in-scope sections are accounted for. - The
purpose of each section is distinct. - No section repeats the same
benefit message unnecessarily. - The final section order matches the
approved information architecture.

## Task 1.4 --- Define the user journeys and navigation destinations

**Required journeys** - Primary visitor flow: homepage → Explore courses
→ search/filter → course card → course details → appropriate next
action. - Category-led flow: homepage category → preselected Explore
category → filters → course details. - Free-course flow: Free course →
course details → Start learning → sign-in if required, preserving the
selected course. - Paid-course flow: paid course → course details →
Enroll now → show the intended next step only; do not imply payment is
implemented. - Returning visitor flow: Log in → intended dashboard/last
active course destination; dashboard implementation is outside this
landing-page scope.

**Instructions** - Map each navbar link and CTA to its intended
destination. - Confirm whether Log in, Get started and Explore courses
have actual destinations. - Avoid duplicate or ambiguous navigation
destinations. - Keep the Learnova logo linked to Home.

**Deliverable** - Navigation and user-flow map with confirmed
destinations and unresolved destination questions.

**Acceptance criteria** - Every visible navigation item and CTA has a
defined destination or is explicitly marked as blocked pending
confirmation. - No button is left with an invented destination. -
Landing-page work does not expand into authentication or payment
implementation.

## Task 1.5 --- Create the low-fidelity homepage wireframe

**Instructions** - Define the page layout, section widths, content
hierarchy, grid structure and spacing without detailed visual styling. -
Include desktop, tablet and mobile wireframe behavior. - Include navbar,
hero, trust strip, categories, course grid, Why Choose Learnova,
learning paths, conditional testimonials, final CTA and footer. -
Reflect the source's recommended centered content container
(approximately 1200--1280px maximum width) and section spacing
guidance. - Show how the mobile layout changes rather than merely
shrinking desktop content.

**Deliverable** - Low-fidelity wireframe for the landing page at
desktop, tablet and mobile reference sizes.

**Acceptance criteria** - The complete page structure is visible in the
wireframe. - The hero is full-bleed with centered content. - Course-card
grid behavior is shown at desktop, tablet and mobile. - The Why Choose
Learnova section has a clear visual/text relationship. - Footer and
mobile navigation are represented.

## Task 1.6 --- Define hero visual direction and asset requirements

**Instructions** - Select/prepare a high-resolution landscape hero
image. - Ensure the image has a focal point and enough negative space
behind centered text. - Determine whether a mobile crop or alternate
image is needed. - Define the overlay/gradient required to maintain text
contrast. - Define the transition from the hero into the following light
section. - Confirm usage rights for the selected image.

**Starting sizing guidance from the source** - Desktop hero height:
approximately 680--780px. - Tablet: approximately 600--680px. - Mobile:
approximately 560--680px, depending on crop and text wrapping. - Hero
content max-width: approximately 760--900px. - Headline: responsive
scale within the source's suggested ranges.

**Deliverable** - Hero asset selection and hero composition
specification.

**Acceptance criteria** - Image works with centered text at all planned
breakpoints. - Text contrast is readable across the image crop. - Image
usage rights are confirmed. - The hero retains the requested full-bleed
cover treatment.

## Task 1.7 --- Specify the course-card component and course data

**Instructions** Define one reusable course-card pattern using the
source's hybrid direction: - Coursera-style clarity and provider
credibility. - Udemy-style practical course metadata. - Uxcel-like
visual restraint.

**Required card fields** - Course thumbnail, 16:9. - Category. - Course
title, maximum two lines. - Instructor name; avatar optional. - Rating
and review count, only when verified. - Duration, when available. -
Price and currency, or Free status.

**Also define** - Free and paid visual states. - Card hover and focus
states. - Consistent metadata order. - Image aspect ratio and card
layout. - Structured course data shape supplied to the component through
props.

**Deliverable** - Course-card wireframe/specification and a content/data
field checklist.

**Acceptance criteria** - All required course-card fields are accounted
for. - Free and paid states are distinguishable without relying on color
alone. - Missing rating/duration values are omitted rather than
invented. - The design is reusable and does not depend on hard-coded
course text.

## Task 1.8 --- Storyboard the Why Choose Learnova scroll section

**Instructions** Define the visual and content state for the three
source-proposed steps: 1. Learn with direction. 2. Build practical
skills. 3. Keep moving forward.

These are proposed narratives and must be validated against actual
Learnova capabilities before being presented as factual product claims.

For each step, define: - Heading. - One or two sentence explanation. -
Optional link, if a real destination exists. - Corresponding
product-style visual, course preview or illustration. - Active progress
state.

Define the scroll behavior: - Section enters viewport. - Pins only on
suitable desktop/tablet widths. - Step 1 is initially active. - Scroll
progress advances through steps 1, 2 and 3. - Progress indicator
updates. - Section unpins naturally at the end. - Mobile uses a normal
stacked sequence or short non-pinned transitions. - Reduced-motion mode
displays all steps as a static readable sequence.

**Technology direction** - GSAP + ScrollTrigger for pinned, scrubbed,
coordinated sequence when required. - Motion for smaller transitions,
reveals and UI state changes. - Do not use both libraries to control the
same animation or element.

**Deliverable** - Three-step storyboard and motion behavior
specification.

**Acceptance criteria** - All three steps have defined content and
visual states. - Unsupported product claims are flagged. - Desktop
pinning and mobile fallback are specified. - Reduced-motion fallback is
specified. - Animation does not trap the visitor or hide essential
content.

## Task 1.9 --- Establish the initial visual system

**Instructions** Use the source's initial design proposal as a starting
point, not a final brand lock.

**Color roles** - Primary text: `#171923` - Secondary text: `#626675` -
Background: `#FFFFFF` - Surface: `#F6F7FA` - Border: `#E7E9EF` - Brand
accent: `#6658E8` - Brand hover: `#5546D6` - Success: `#21865B`

**Typography direction** - Headings: Manrope or Plus Jakarta Sans. -
Body/UI: Inter or the same family as headings. - No more than two font
families.

**Layout direction** - Centered max-width container approximately
1200--1280px. - 4px or 8px spacing scale. - Generous section spacing. -
Comfortable body-copy line length. - Consistent radius family, subtle
borders and restrained shadows.

**Deliverable** - Initial design tokens and typography/spacing
specification.

**Acceptance criteria** - Tokens cover color roles, typography, spacing,
radii and component states. - Accent color is used selectively. - The
system supports the light theme and responsive layouts. - Any changes
from the source's proposed values are documented for approval.

## Task 1.10 --- Confirm implementation component map and source choices

**Instructions** Use the source's suggested component tree as the
implementation reference:

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

**Recommended sources from `learnova_idea.md`** - Radix UI for
accessible interaction primitives. - shadcn/ui for selected styled React
components, if needed. - Lucide for icons. - GSAP ScrollTrigger for the
pinned scroll story. - Motion for smaller transitions. - Google Fonts
for the selected typefaces. - Unsplash/Pexels for properly licensed
photography. - unDraw/Storyset for optional illustrations, subject to
their terms. - WebAIM Contrast Checker for contrast validation.

**Deliverable** - Component inventory and dependency/source decision
list.

**Acceptance criteria** - Every landing-page section maps to a component
or component group. - Third-party source choices are checked for
licensing/usage conditions. - No unnecessary full UI kit or duplicate
animation dependency is introduced. - Component boundaries support
reusable, data-driven course cards.

------------------------------------------------------------------------

# Phase 2 --- Landing-page implementation

**Objective:** Build the approved responsive landing page and its
reusable components. Implement the visual structure and core
interactions using the Phase 1 specification.

**Phase exit condition:** All in-scope landing-page sections are
implemented, connected to their confirmed destinations, and work across
desktop, tablet and mobile. Unsupported content remains omitted or
blocked.

## Task 2.1 --- Set up the page structure and shared layout

**Instructions** - Create the homepage structure following the approved
component tree. - Establish the shared content container and responsive
section layout. - Keep course/content data separate from presentation
components. - Use semantic page landmarks: `header`, `nav`, `main`,
`section`, `footer`. - Use one clear H1 and logical heading order. - Do
not add backend functionality.

**Deliverable** - Landing-page shell with all approved section
components in the correct order.

**Acceptance criteria** - Component hierarchy matches the source
component map. - Page landmarks and heading hierarchy are semantic. -
All sections render in the approved order. - Content is not duplicated
or hard-coded across repeated components.

## Task 2.2 --- Implement the navigation bar

**Instructions** - Build the Learnova wordmark/logo area. - Implement
desktop navigation for the confirmed links. - Add Log in and Get started
actions only with confirmed destinations. - Overlay the hero at the top
only when image contrast allows it. - After the top/hero threshold,
transition to a solid light surface with subtle border or shadow. - Keep
the header sticky after scrolling. - Implement the mobile menu with an
accessible expanded state.

**Components** - `SiteHeader` - `BrandLogo` - `DesktopNav` - `NavLink` -
`HeaderActions` - `MobileMenuButton` - `MobileNavDrawer`

**Deliverable** - Responsive sticky navigation with top-of-page and
scrolled states.

**Acceptance criteria** - Logo returns to Home. - Each visible
navigation item has a confirmed destination. - Header transition works
without obscuring content. - Mobile menu opens and closes and exposes an
accessible expanded state. - Keyboard focus and navigation work.

## Task 2.3 --- Implement the full-bleed hero

**Instructions** - Use the approved full-width background image with
cover behavior. - Center the hero content. - Add the approved headline
and one-line brand identity statement. - Add the confirmed primary and
secondary CTAs. - Apply a dark or brand-tinted overlay/gradient as
required for contrast. - Add a bottom fade only if needed for transition
into the next light section. - Use responsive image cropping or a
mobile-specific image where required. - Do not make the entire hero an
ambiguous click target.

**Components** - `HeroSection` - `HeroBackground` - `HeroOverlay` -
`HeroContent` - `HeroEyebrow` - `HeroTitle` - `HeroBrandLine` -
`HeroActions`

**Deliverable** - Responsive hero section.

**Acceptance criteria** - Background covers the hero area without
distortion. - Text is centered and readable across desktop, tablet and
mobile crops. - Brand line appears directly below the headline. - CTAs
lead to their confirmed destinations. - Hero dimensions and content
width follow the approved specification.

## Task 2.4 --- Implement the trust/credibility strip

**Instructions** - Display only verified platform statements, real
statistics, approved logos or genuine instructor/learner information. -
For an early-stage concept without verified proof, use only the concise
value statements supported by the approved content. - Use 3--4 items on
desktop. - On mobile, allow wrapping, stacking or controlled horizontal
scrolling without clipping.

**Components** - `TrustStrip` - `TrustItem` - `TrustIcon`

**Deliverable** - Responsive credibility strip.

**Acceptance criteria** - No invented statistics, partner logos or
claims. - Items remain readable and unclipped on mobile. - The strip
supports trust without competing with the hero.

## Task 2.5 --- Implement category discovery

**Instructions** - Build the category section heading and supporting
sentence. - Render only confirmed catalogue categories. - Use a simple
icon or image for each category. - Include course count only if
verified. - Include "View all categories" only when it has a confirmed
destination. - Category selection must navigate to Explore with the
relevant category filter applied, where that destination exists.

**Components** - `CategorySection` - `CategoryGrid` - `CategoryCard` -
`CategoryIcon` - `SectionHeading`

**Deliverable** - Responsive category discovery section.

**Acceptance criteria** - Category cards use consistent layout and
visual hierarchy. - Only approved categories are shown. - Category links
have the correct destination/filter state. - Grid adapts without
horizontal overflow.

## Task 2.6 --- Implement the featured courses section and reusable course cards

**Instructions** - Build the featured/popular course section. - Add the
heading and supporting line. - Add Popular/New/Free tabs only if each
tab has meaningful available content. - Build the course grid using
reusable `CourseCard` components. - Use a 16:9 thumbnail. - Display
category, title, instructor, rating/review count, duration and
price/free status when the source data exists. - Omit unavailable rating
or duration values; never create placeholder facts that look real. -
Keep course card data separate from presentation. - Add "Explore all
courses" only with a confirmed destination.

**Components** - `FeaturedCoursesSection` - `CourseTabs` (optional) -
`CourseGrid` - `CourseCard` - `CourseThumbnail` - `CourseBadge` -
`CourseMetadata` - `RatingDisplay` - `CoursePrice` - `ViewAllLink`

**Deliverable** - Reusable course-card component and responsive
featured-course grid.

**Acceptance criteria** - Card structure matches the approved card
specification. - Free and paid states are distinguishable with text
labels. - Rating/review count is shown only when verified. - Duration is
omitted when unavailable. - Titles remain within the defined line
limit. - Card heights and metadata alignment remain consistent within a
row. - Hover, focus and click behavior are implemented. - Cards navigate
to the correct course details destination when available.

## Task 2.7 --- Implement the Why Choose Learnova section structure

**Instructions** - Build the section using the approved three-step
storyboard. - Create the text/step area, visual panel and progress
indicator. - Each step must contain its approved heading, concise
explanation and corresponding visual. - Do not claim projects,
exercises, progress tracking, milestones or completion records unless
confirmed as actual Learnova capabilities. - Make all content available
in the document structure even when animation is disabled.

**Components** - `WhyLearnovaSection` - `StoryScrollContainer` -
`StoryVisualPanel` - `StoryStep` - `StoryProgress` - `StoryMockup` -
`StoryStaticFallback`

**Deliverable** - Complete non-animated section structure and step
states.

**Acceptance criteria** - Three steps are present in the approved
order. - Text and visual state correspond correctly. - Unsupported
claims are absent. - Static layout is readable without JavaScript
animation. - The mobile layout is specified as stacked or non-pinned.

## Task 2.8 --- Implement the Why Choose Learnova scroll animation

**Instructions** - Use GSAP + ScrollTrigger for the pinned, scrubbed
sequence if that is the approved storyboard. - Use Motion only for
separate smaller transitions, not to control the same
timeline/elements. - Pin only at suitable desktop/tablet widths. - Start
with step 1 active. - Advance through steps 1, 2 and 3 based on scroll
progress. - Update the progress indicator. - Unpin naturally at the end
of the sequence. - On mobile, use the normal stacked sequence or short
non-pinned transitions. - Respect `prefers-reduced-motion`; disable
pinning/scrubbing and display the static sequence. - Do not hide
essential text or cause layout jumps.

**Deliverable** - Responsive scroll-driven Why Choose Learnova
experience.

**Acceptance criteria** - Scroll sequence follows the storyboard. -
Pinning does not trap or hijack the visitor. - Step transitions and
progress indicator remain synchronized. - Mobile experience does not use
an unnecessarily long pinned sequence. - Reduced-motion mode is readable
and functional. - Essential content remains available when animation is
disabled. - Scroll performance is acceptable on supported devices.

## Task 2.9 --- Implement learning paths / curated collections

**Instructions** - Include this section only to the extent that actual
learning paths or curated collections are confirmed. - Use the source's
possible examples only if they match real Learnova content. - Each card
may show a short description, number of courses/modules and estimated
duration only where those details exist. - Use a card composition
distinct from individual course cards. - Use 2--3 cards across desktop
and stack on mobile.

**Components** - `LearningPathsSection` - `LearningPathCard` -
`PathMetadata`

**Deliverable** - Responsive learning-path/collection section, or an
explicitly documented omission if the product content is not confirmed.

**Acceptance criteria** - No fictional path, module count or duration is
presented as real. - Card links have confirmed destinations. - Section
is visually distinct from the course grid.

## Task 2.10 --- Implement testimonials conditionally

**Instructions** - Use only genuine learner quotes with permission. -
Include learner name/role only if approved. - Include portrait and
course taken only if approved and available. - Keep the layout to the
approved small curated set. - If no genuine testimonials exist, omit the
section or use the source-approved factual alternative.

**Components** - `TestimonialsSection` - `TestimonialCard` -
`LearnerIdentity` - `QuoteMark`

**Deliverable** - Testimonial section using approved content, or
documented omission.

**Acceptance criteria** - No invented quotes, identities, portraits or
course relationships. - Content is concise and readable. - Mobile layout
stacks or uses a controlled swipeable layout.

## Task 2.11 --- Implement final CTA

**Instructions** - Add the approved short benefit-oriented heading. -
Add one supporting sentence. - Add the primary "Explore courses" CTA if
the destination is confirmed. - Add a secondary link only if it has a
real destination. - Use a contrasting brand-color panel or dark section
consistent with the light-theme page.

**Components** - `FinalCTASection` - `CTAButton`

**Deliverable** - Responsive final conversion section.

**Acceptance criteria** - One dominant action is clear. - CTA
destination is confirmed. - Visual treatment is consistent with the
Learnova design system.

## Task 2.12 --- Implement footer

**Instructions** Build the footer using only actual page destinations
and active official links.

**Suggested groups** - Learnova: logo and short brand description. -
Explore: All courses, Categories, Learning paths. - Company: About,
Contact. - Support: Help center/FAQ only if those pages exist. - Legal:
Privacy policy, Terms of service. - Social: active official profiles
only.

Add the copyright/legal bottom row. On mobile, stack groups or use
accessible accordions.

**Components** - `SiteFooter` - `FooterColumn` - `FooterLink` -
`SocialLinks` - `FooterLegal`

**Deliverable** - Responsive footer.

**Acceptance criteria** - No dead or invented links. - Footer groups
match actual destinations. - Mobile groups remain accessible by
keyboard. - Copyright and legal text use approved content.

## Task 2.13 --- Apply shared visual tokens and component states

**Instructions** - Apply the approved color roles, typography, spacing,
radius, border and shadow tokens. - Use a consistent button, badge and
card system. - Provide hover, focus, active and disabled states where
applicable. - Keep the accent color selective. - Ensure free/paid status
is not communicated by color alone. - Use consistent image ratios and
card spacing.

**Deliverable** - Consistent design-system implementation across the
landing page.

**Acceptance criteria** - Components use shared tokens rather than
unrelated one-off values. - Typography and spacing hierarchy are
consistent. - Interactive states are visible and coherent. - No
inconsistent card or button styles are introduced.

------------------------------------------------------------------------

# Phase 3 --- Responsive validation, accessibility, performance and handoff

**Objective:** Validate the implemented landing page against the
approved source requirements. Fix issues across breakpoints,
interactions, accessibility, motion and performance. Prepare a clear
implementation handoff.

**Phase exit condition:** All applicable acceptance criteria from
`learnova_idea.md` and this plan pass. Any unavailable or blocked item
is documented honestly.

## Task 3.1 --- Validate desktop, tablet and mobile layouts

**Required reference viewports** - Wide desktop: 1440px. - Standard
laptop: 1280px. - Tablet: 768px. - Mobile: 390px. - Small mobile: 360px.

**Instructions** - Test all sections at the listed widths and
intermediate widths. - Verify the navbar changes correctly. - Verify
hero image cropping and centered text. - Verify category grid and
course-card columns. - Verify Why Choose Learnova behavior at large and
small widths. - Verify testimonial and footer layouts. - Check for
clipped content, unintended wrapping and horizontal overflow.

**Acceptance criteria** - No horizontal overflow at 360px. - Course grid
uses 3 columns on desktop, 2 on tablet and 1 on mobile. - Hero text
remains readable over every image crop. - Why Choose Learnova uses
pinned behavior only where appropriate and stacked/non-pinned behavior
on mobile. - Footer and navigation remain usable at all target widths.

## Task 3.2 --- Validate navigation and user journeys

**Instructions** Test each confirmed journey: - Homepage → Explore →
course filters/search → course details. - Homepage category → filtered
Explore view → course details. - Free course → details → Start learning
→ sign-in if required. - Paid course → details → intended next action. -
Returning visitor → Log in destination.

Also test: - Logo returns to Home. - Sticky header state. - Mobile menu
open/close. - All footer links. - Final CTA.

**Acceptance criteria** - Every visible link and CTA works as
specified. - No dead, placeholder or incorrect destination is presented
as functional. - Category navigation preserves the intended category
filter. - Course cards open the correct course detail destination where
available. - No backend or payment behavior is falsely represented as
implemented.

## Task 3.3 --- Validate course data and card states

**Instructions** - Review every displayed course record. - Verify title,
category, instructor, rating, review count, duration, price/currency and
free status against supplied content. - Check missing-data behavior. -
Check card title line limits, image ratios and metadata alignment. -
Check free and paid states.

**Acceptance criteria** - No invented course details. - Ratings and
review counts are verified or omitted. - Duration is omitted when
unavailable. - Free and paid states are clear and accessible. - All
course cards use the same component structure.

## Task 3.4 --- Validate motion and reduced-motion behavior

**Instructions** - Test the Why Choose Learnova sequence from entry
through unpinning. - Confirm active step and progress indicator
synchronization. - Test scroll behavior on supported desktop/tablet
widths. - Test the mobile stacked/non-pinned fallback. - Test with
`prefers-reduced-motion` enabled. - Check for content hidden before
animation, layout shifts, scroll trapping and performance problems.

**Acceptance criteria** - The section follows the approved storyboard. -
Pinning ends naturally. - Reduced-motion mode disables pinned/scrubbed
behavior and displays all steps statically. - Essential content is
available without animation. - No excessive parallax, flashing or rapid
motion is introduced. - The experience remains usable on touch devices.

## Task 3.5 --- Accessibility review

**Instructions** - Verify semantic landmarks and heading order. -
Confirm one clear H1. - Test keyboard navigation for navbar, mobile
menu, tabs, cards and CTAs. - Confirm visible focus states. - Verify
accessible names for controls. - Verify meaningful images have
descriptive alt text and decorative images have empty alt text. - Check
WCAG AA contrast for normal text and interactive elements. - Confirm
free/paid status is not communicated by color alone. - Check touch
targets against the approximately 44×44 CSS pixel guidance. - Verify
200% zoom usability. - Confirm reduced-motion support.

**Acceptance criteria** - Keyboard-only navigation is usable. - Focus is
visible. - Contrast meets WCAG AA where applicable. - Images and
controls have appropriate accessible text. - Page remains usable at 200%
zoom. - Motion preferences are respected.

## Task 3.6 --- Performance and image review

**Instructions** - Optimize hero and course images. - Use WebP/AVIF
where supported. - Use appropriately sized responsive images. -
Lazy-load below-the-fold images. - Do not lazy-load the hero image if it
is the Largest Contentful Paint element. - Reserve image
dimensions/aspect ratios to prevent layout shift. - Prefer
transform/opacity animation over layout-heavy properties. - Check scroll
animation on lower-powered mobile devices. - Remove unnecessary or
duplicate animation dependencies.

**Acceptance criteria** - Hero image is optimized and correctly
prioritized. - Below-the-fold images are lazy-loaded. - Image dimensions
prevent avoidable layout shift. - Scroll animation remains smooth on
supported devices. - No unnecessary animation dependency remains.

## Task 3.7 --- Content, trust and scope audit

**Instructions** Audit all copy and visible claims: - Hero headline and
brand line. - Trust strip statements. - Category names and counts. -
Course metadata and pricing. - Why Choose Learnova benefit claims. -
Learning path information. - Testimonials. - Statistics and partner
logos. - Footer links and legal text.

Check every item against approved content and the source's scope
boundaries.

**Acceptance criteria** - No fabricated statistics, endorsements,
learner outcomes, ratings or testimonials. - No unconfirmed feature
claims. - No invented prices, currencies or course data. - Unsupported
optional sections are omitted or explicitly documented. - No backend,
authentication, payment or course-player implementation has been added
to this landing-page scope.

## Task 3.8 --- Final acceptance review

Use the acceptance checklist in `learnova_idea.md` and the checks below.

### Structure and content

-   [ ] Homepage follows the approved section order.
-   [ ] Hero clearly explains Learnova.
-   [ ] Hero uses a full-bleed cover image and centered text.
-   [ ] One-line brand identity statement sits below the headline.
-   [ ] Primary and secondary CTAs have clear destinations.
-   [ ] Course cards show image, title, instructor, rating, duration and
    price/free status where data exists.
-   [ ] Free and paid courses are visually distinguishable.
-   [ ] Why Choose Learnova communicates real, specific benefits.
-   [ ] Testimonials, logos and statistics are genuine or omitted.
-   [ ] Footer links match actual destinations.

### Interaction and motion

-   [ ] Sticky navbar and scrolled state work.
-   [ ] Mobile menu opens, closes and is keyboard accessible.
-   [ ] Category cards navigate to the relevant category.
-   [ ] Course cards open the correct course details.
-   [ ] Why Choose Learnova sequence works without trapping the visitor.
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

**Deliverable** - Completed QA checklist with each item marked pass,
fail or blocked. - List of remaining issues, if any. - Final handoff
notes describing implemented sections, component structure, confirmed
destinations and known limitations.

**Acceptance criteria** - All applicable checks pass. - Blocked items
include a clear reason and the missing input. - No unresolved issue is
silently reported as complete.

------------------------------------------------------------------------

# 4. Cross-phase dependencies and execution order

  -----------------------------------------------------------------------
  Dependency                          Must be completed before
  ----------------------------------- -----------------------------------
  Source requirements review          All phases

  Content/brand readiness             High-fidelity design and content
                                      implementation

  Information architecture            Wireframe and page implementation

  User-flow/destination confirmation  Functional navigation and CTA
                                      implementation

  Hero asset approval                 Final hero implementation

  Course data availability            Real featured course-card content

  Course-card specification           Reusable course-card implementation

  Why Choose storyboard and claim     Scroll animation implementation
  validation                          

  Visual tokens                       Consistent high-fidelity
                                      implementation

  Responsive wireframes               Responsive implementation

  Implementation                      Final QA

  Reduced-motion fallback             Motion acceptance review
  -----------------------------------------------------------------------

Tasks involving unavailable content may proceed only with
layout/component structure where the source supports it. Do not fill
missing data with invented content.

# 5. Scope control

## Included in this plan

-   Responsive Learnova homepage.
-   Navbar and mobile navigation.
-   Full-bleed hero with centered copy.
-   Trust/credibility strip.
-   Category discovery.
-   Featured course section and reusable course cards.
-   Why Choose Learnova scroll-story section.
-   Learning paths/curated collections, if confirmed.
-   Testimonials, if genuine content is available.
-   Final CTA.
-   Footer.
-   Responsive, accessible and performant behavior.

## Explicitly outside this plan

The following are related screens or product capabilities listed for
later consideration in `learnova_idea.md`; they are not part of this
landing-page implementation plan: - Explore courses page. - Course
detail page. - About page. - Sign-in and sign-up. - Learner dashboard. -
Checkout/payment. - Course player/lesson experience. - Backend,
authentication, payment implementation, course delivery or video
hosting.

Do not implement these as part of the three phases unless the project
scope is separately changed.

# 6. Open decisions that must not be guessed

Refer to section 18 of `learnova_idea.md`. These items require
confirmation before the related implementation is finalized:

1.  Final course categories and actual number of courses.
2.  Individual instructors, in-house teaching team or both.
3.  Currency and paid-course price format.
4.  Availability and validity of course ratings/review counts.
5.  Whether learning paths are real product features or landing-page
    concepts.
6.  Genuine differentiators that can be claimed in Why Choose Learnova.
7.  Availability of real testimonials, partner logos and platform
    statistics.
8.  Final hero image direction and approved brand copy.
9.  Final destinations for Log in, Get started and Explore courses.
10. Whether the first delivery includes only the homepage or also
    Explore and Course Details screens.

A coding agent must report which task is blocked by an unresolved
decision and what exact confirmation is needed.

------------------------------------------------------------------------

# 7. Final execution rule

The three phases must be completed in sequence:

1.  **Phase 1 --- Foundation and design specification:** establish what
    will be built and what approved content/assets are available.
2.  **Phase 2 --- Landing-page implementation:** build only the approved
    responsive landing page and its defined interactions.
3.  **Phase 3 --- Validation and handoff:** test the complete experience
    against the source requirements and document any remaining blockers.

`learnova_idea.md` remains the main knowledge source. This `planning.md`
is its task-by-task execution structure. If a detail is absent from the
source, do not invent it; record it as an open decision and request
confirmation.
