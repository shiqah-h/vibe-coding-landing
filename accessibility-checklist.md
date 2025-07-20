# Accessibility Audit Checklist

## WCAG 2.1 AA Compliance Checklist

### 1. Perceivable

#### 1.1 Text Alternatives
- [ ] All images have appropriate alt text
- [ ] Decorative images have empty alt attributes
- [ ] Complex images have descriptive alt text
- [ ] Form inputs have associated labels

#### 1.2 Time-based Media
- [ ] Videos have captions (if applicable)
- [ ] Audio content has transcripts (if applicable)

#### 1.3 Adaptable
- [ ] Content can be presented without losing structure
- [ ] Information is not conveyed by color alone
- [ ] Text can be resized up to 200% without loss of functionality

#### 1.4 Distinguishable
- [ ] Color contrast meets WCAG AA standards (4.5:1 for normal text)
- [ ] Text can be resized without horizontal scrolling
- [ ] Line spacing is at least 1.5 times the font size

### 2. Operable

#### 2.1 Keyboard Accessible
- [ ] All functionality is available from keyboard
- [ ] No keyboard traps
- [ ] Custom keyboard shortcuts are documented
- [ ] Focus order is logical and intuitive

#### 2.2 Enough Time
- [ ] Users can adjust or disable time limits
- [ ] Auto-updating content can be paused, stopped, or hidden

#### 2.3 Seizures and Physical Reactions
- [ ] No content flashes more than 3 times per second
- [ ] No content that could cause seizures

#### 2.4 Navigable
- [ ] Multiple ways to navigate (menus, search, sitemap)
- [ ] Page titles are descriptive and unique
- [ ] Focus indicators are visible
- [ ] Skip links are available for main content

#### 2.5 Input Modalities
- [ ] Gestures can be performed with a single pointer
- [ ] Touch targets are at least 44x44px

### 3. Understandable

#### 3.1 Readable
- [ ] Language of page is specified
- [ ] Language changes are marked
- [ ] Unusual words are explained
- [ ] Abbreviations are expanded

#### 3.2 Predictable
- [ ] Navigation is consistent
- [ ] Components behave predictably
- [ ] Context changes are initiated by user

#### 3.3 Input Assistance
- [ ] Error messages are clear and helpful
- [ ] Form validation provides clear feedback
- [ ] Required fields are clearly marked
- [ ] Error prevention techniques are used

### 4. Robust

#### 4.1 Compatible
- [ ] Valid HTML markup
- [ ] ARIA attributes are used correctly
- [ ] Custom components have proper roles
- [ ] Works with assistive technologies

## Testing Checklist

### Manual Testing
- [ ] Test with keyboard navigation only
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Test with high contrast mode
- [ ] Test with zoom at 200%
- [ ] Test with different browsers (Chrome, Firefox, Safari, Edge)

### Automated Testing
- [ ] Run axe-core accessibility tests
- [ ] Check color contrast ratios
- [ ] Validate HTML markup
- [ ] Test focus management
- [ ] Verify ARIA attributes

### Mobile Accessibility
- [ ] Test touch target sizes
- [ ] Verify gesture alternatives
- [ ] Check viewport scaling
- [ ] Test with mobile screen readers

## Component-Specific Checks

### Forms
- [ ] All inputs have labels
- [ ] Error messages are associated with inputs
- [ ] Required fields are marked
- [ ] Form validation is accessible

### Navigation
- [ ] Skip links are present
- [ ] Focus order is logical
- [ ] Active states are clear
- [ ] Breadcrumbs are available

### Images and Media
- [ ] Alt text is appropriate
- [ ] Decorative images are marked
- [ ] Complex images have descriptions
- [ ] Media controls are accessible

### Interactive Elements
- [ ] Buttons have descriptive text
- [ ] Links have clear purpose
- [ ] Custom components have proper roles
- [ ] Focus indicators are visible

## Tools and Resources

### Testing Tools
- axe-core browser extension
- WAVE Web Accessibility Evaluator
- Lighthouse accessibility audit
- Color contrast analyzers

### Screen Readers
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)

### Browser Extensions
- axe DevTools
- WAVE
- Accessibility Insights
- NoCoffee (vision simulator)

## Documentation

- [ ] Accessibility features are documented
- [ ] Keyboard shortcuts are listed
- [ ] Screen reader instructions are provided
- [ ] Contact information for accessibility issues

---

**Last Updated:** [Date]
**Next Review:** [Date + 6 months] 