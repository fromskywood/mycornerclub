# My Corner Uppercase Font Library

Source reference: `my-corner-logo-primary-clean.png`.

## Style Analysis

- Alphabet: English uppercase only.
- Existing reference letters in the logo: `C`, `E`, `M`, `N`, `R`, `Y`.
- The central object in `CORNER` is decorative, so it was not treated as a reusable standard `O`.
- Stroke: black, thick, hand-drawn marker line with rounded ends.
- Proportion: tall, slightly narrow uppercase letters.
- Construction: loose uppercase forms based on the real English alphabet, with small organic wobble.
- Tone: friendly, handmade, imperfect, clean.

## Files

- `OPEN_THIS_COMPLETE_A-Z.svg` - main restored v1-style file. It contains every uppercase English letter: `A B C D E F G H I J K L M N O P Q R S T U V W X Y Z`.
- `OPEN_THIS_COMPLETE_A-Z_SAFE.svg` - same alphabet with an expanded SVG filter area and visible overflow, for apps that visually crop strokes.
- `OPEN_THIS_COMPLETE_A-Z_NO_FILTER.svg` - same alphabet without the wobble filter, for the most reliable import/preview behavior.
- `OPEN_THIS_COMPLETE_A-Z_THIN_SAFE.svg` - thinner weight version with the hand-drawn wobble preserved.
- `OPEN_THIS_COMPLETE_A-Z_THIN_NO_FILTER.svg` - thinner weight version without the wobble filter for maximum compatibility.
- `my-corner-uppercase-alphabet.svg` - same restored complete uppercase `A-Z` library.
- `my-corner-missing-uppercase-only.svg` - only letters not clearly present as standard glyphs in the logo: `A B D F G H I J K L O P Q S T U V W X Z`. This file intentionally does not include `C E M N R Y`.

## Current Direction

This version intentionally returns to the first, more playful drawing style. The next pass should refine each glyph separately while preserving that loose hand-drawn character.

If a viewer makes letters look cut off, try `OPEN_THIS_COMPLETE_A-Z_SAFE.svg` first. If an app still clips or renders oddly, use `OPEN_THIS_COMPLETE_A-Z_NO_FILTER.svg`.

## Weights

- Current main version: bold marker-style weight, good for logos, headings, stickers, and playful emphasis.
- Thin version: lighter marker-style weight, good for secondary text, quieter layouts, and cases where the bold version feels too heavy.

## Usage Notes

These are vector glyph drawings, not a compiled `.ttf` or `.otf` font yet. They can be opened in Figma, Illustrator, Sketch, or Affinity Designer and refined into a real font if needed.
