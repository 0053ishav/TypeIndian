# Type Indian Manual QA Checklist

This checklist must be completed before merging any feature or language into `main`.

---

# General

- [ ] Application builds successfully
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] No console errors
- [ ] No hydration warnings
- [ ] No runtime exceptions

---

# Typing Page

Verify:

- [ ] Page loads
- [ ] Metadata is correct
- [ ] Canonical URL is correct
- [ ] Hero renders
- [ ] Introduction renders
- [ ] Typing tool loads
- [ ] Transliteration works
- [ ] Suggestions work
- [ ] Copy works
- [ ] Paste works
- [ ] FAQ renders
- [ ] FAQ Schema is present
- [ ] Learn link works
- [ ] Mobile layout verified

---

# Learn Page

Verify:

- [ ] Page loads
- [ ] Metadata is correct
- [ ] Canonical URL is correct
- [ ] Hero renders
- [ ] About section renders
- [ ] Script section renders
- [ ] Alphabet renders
- [ ] Numerals render
- [ ] CTA renders
- [ ] FAQ renders
- [ ] FAQ Schema is present
- [ ] Typing button works
- [ ] Mobile layout verified

---

# SEO

Verify:

- [ ] Title
- [ ] Description
- [ ] Canonical
- [ ] OpenGraph
- [ ] Twitter Metadata
- [ ] Sitemap entry
- [ ] Robots indexing
- [ ] Structured Data

---

# Accessibility

Verify:

- [ ] Keyboard navigation
- [ ] Focus visible
- [ ] Links accessible
- [ ] Buttons accessible
- [ ] Screen reader labels
- [ ] Heading hierarchy

---

# Performance

Verify:

- [ ] Lighthouse Performance
- [ ] Lighthouse SEO
- [ ] Lighthouse Accessibility
- [ ] Lighthouse Best Practices

---

# Cross Browser

- [ ] Chrome
- [ ] Edge
- [ ] Firefox
- [ ] Safari (if available)

---

# Language Verification

For every new language:

- [ ] Registered in registry
- [ ] Typing page works
- [ ] Learn page works
- [ ] Alphabet verified
- [ ] FAQ verified
- [ ] Metadata verified
- [ ] Discovery pages updated
- [ ] Contract tests pass

---

# Final Sign-off

Reviewer:

Date:

Approved:
---

# Milestone 3 — Typing UX physical-device verification

**Status: Outstanding.** CI covers Chromium desktop/mobile viewports and touch emulation. No physical Android or iOS device has been used for this PR.

Before merging, complete and record:

- [ ] Android Chrome: open/close the on-screen keyboard and use native-script keys by touch
- [ ] Android Chrome: verify 44px touch targets, cursor insertion, selection replacement, Backspace and Enter
- [ ] Android Chrome: verify TXT, DOCX and PDF downloads open in their intended apps
- [ ] iOS Safari (if supported): repeat keyboard, editor and export checks
- [ ] Urdu: verify RTL cursor movement, punctuation, insertion and Backspace
- [ ] Inspect PDF rendering visually for every supported script, including conjuncts and combining marks
- [ ] Open DOCX in Microsoft Word or LibreOffice and verify script rendering and Urdu paragraph direction

Record device model, OS version, browser version, and results in the PR before sign-off.
