# Military Car Service (MCS) — shadcn/ui Implementation Guide
**Phase 1: Design System & Foundational Architecture**  
**Status:** Implemented & Verified  
**Date:** November 2026  
**Document:** `docs/phase-1/02-shadcn-implementation.md`

---

## 1. Overview & Setup

The Military Car Service redesign uses official [shadcn/ui](https://ui.shadcn.com) primitives adapted for Next.js 16 (App Router), React 19, and Tailwind CSS v4.

Unlike superficial component libraries, shadcn/ui provides owned, copy-and-paste primitives constructed on top of headless, accessible `@radix-ui` foundations. This ensures:
1. Complete design control directly inside `src/components/ui/`.
2. Zero black-box third-party styling leaks.
3. Industry-standard keyboard navigation, ARIA semantics, and screen reader accessibility.

---

## 2. Configuration (`components.json`)

The project uses `components.json` with the `new-york` visual style and `@/*` alias structure:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide-react",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### Key Configuration Notes
- **Tailwind CSS v4:** In Tailwind v4, `@theme` and CSS variables in `src/app/globals.css` replace `tailwind.config.ts`. The `"config": ""` key correctly informs the CLI that Tailwind v4 is in use.
- **RSC Support:** `"rsc": true` enables React Server Component boundaries where appropriate.
- **Radix UI Primitives:** The `"style": "new-york"` preset maps directly to `radix-ui` unstyled accessible primitives.

---

## 3. Installed Packages

The following production dependencies were installed to power the foundational UI components:

| Package | Version | Purpose |
|---|---|---|
| `radix-ui` | `^1.8.1` | Unified modern Radix UI primitives package (Slot, Dialog, Dropdown, Tabs, etc.) |
| `class-variance-authority` | `^0.7.1` | Type-safe component variant orchestrator (`cva`) |
| `clsx` | `^2.1.1` | Utility for constructing conditional className strings |
| `tailwind-merge` | `^3.5.0` | Conflict-free utility class merging |
| `lucide-react` | `^1.16.0` | Comprehensive automotive and UI icon system |
| `embla-carousel-react` | `^8.6.0` | Touch-enabled responsive carousel physics engine |
| `react-hook-form` | `^7.91.0` | Performant form state management |
| `@hookform/resolvers` | `^7.0.2` | Schema validation adapter for Hook Form |
| `zod` | `^4.6.7` | Robust data validation and typing |
| `tw-animate-css` | `^1.4.0` | Animation utility classes compatible with Tailwind v4 |

---

## 4. Installed & Generated UI Primitives

All primitives are located in `src/components/ui/` and adhere strictly to lowercase naming:

```
src/components/ui/
├── accordion.tsx         # Collapsible FAQ and service breakdown items
├── alert.tsx             # System warnings, status notices, USAREUR alerts
├── badge.tsx             # Status tags, inspection tags, vehicle badges
├── button.tsx            # Canonical action button with Radix Slot & CVA
├── card.tsx              # Content containers (Header, Title, Description, Content, Footer)
├── carousel.tsx          # Vehicle & workshop image slider engine
├── checkbox.tsx          # Multi-select options and terms agreements
├── dialog.tsx            # Accessible modal dialogs with focus trapping
├── dropdown-menu.tsx     # Context menus and navigation dropdowns
├── form.tsx              # Form context, FormItem, FormLabel, FormControl, FormMessage
├── input.tsx             # Text, number, email, and tel inputs
├── label.tsx             # Accessible form labels with Radix Label primitive
├── select.tsx            # Custom styled dropdown selection lists
├── separator.tsx         # Semantic horizontal & vertical dividers
├── sheet.tsx             # Off-canvas sidebars (Mobile navigation drawer)
├── skeleton.tsx          # Content loading placeholders
├── tabs.tsx              # Multi-view segment switchers
├── textarea.tsx          # Multi-line text inputs (repair descriptions, inquiries)
└── tooltip.tsx           # Hover/focus informational tooltips
```

---

## 5. Component Usage & Architecture Examples

### 1. Button Primitive (`button.tsx`)
Resolves priority defect **MCS-007** (nested `<button><a>` DOM violations) by leveraging Radix `Slot.Root` via the `asChild` prop.

```tsx
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

// Standard Action Button
<Button variant="default" size="lg">
  Book Inspection
</Button>

// Polymorphic Navigation Link (renders cleanly as <a>, NOT <button><a>)
<Button asChild variant="primary" size="lg">
  <Link href="/book">
    <span>Schedule Appointment</span>
    <ArrowRight className="h-4 w-4 ml-2" />
  </Link>
</Button>

// Loading State with Built-in Spinner
<Button variant="outline" isLoading={isSubmitting}>
  Submit Vehicle Details
</Button>
```

#### Available Button Variants
- `default` / `primary`: High-contrast Brand Red (`#E23B3B`) with white text and crimson hover state.
- `secondary`: Graphite background (`#202830`) with off-white text.
- `outline`: Border stroke (`#343C43`) with transparent background and hover fill.
- `ghost`: Transparent with subtle hover highlight.
- `destructive`: Warning red background for irreversible operations.
- `link`: Underlined inline text action.

### 2. Dialog / Modal (`dialog.tsx`)
Uses Radix UI `Dialog.Root` with automatic focus trapping, `Escape` key handling, and ARIA attributes:

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function InspectionModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">USAREUR Requirements</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl uppercase">
            USAREUR Safety Checklist
          </DialogTitle>
          <DialogDescription className="text-secondary-text">
            Mandatory inspection standards for military vehicle registration in Germany.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 text-sm text-foreground">
          {/* Inspection details */}
        </div>
      </DialogContent>
    </Dialog>
  )
}
```

### 3. Accordion (`accordion.tsx`)
Provides smooth progressive disclosure for FAQ sections and technical repair specifications:

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem value="item-1" className="border border-border rounded-md px-4">
        <AccordionTrigger className="font-heading uppercase text-lg hover:no-underline">
          Do you provide certified USAREUR pre-inspections?
        </AccordionTrigger>
        <AccordionContent className="text-secondary-text text-base leading-relaxed">
          Yes. Our workshop conducts comprehensive pre-inspections verifying headlight alignment,
          brake efficiency, suspension integrity, and fluid leaks to ensure a first-time pass.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

### 4. Sheet / Off-Canvas (`sheet.tsx`)
Powers mobile navigation and side-drawer experiences without layout shifts:

```tsx
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

<Sheet>
  <SheetTrigger asChild>
    <button aria-label="Open navigation menu" className="p-2 text-foreground">
      <Menu className="h-6 w-6" />
    </button>
  </SheetTrigger>
  <SheetContent side="left" className="bg-obsidian border-border text-foreground">
    <SheetHeader>
      <SheetTitle className="font-heading uppercase text-xl text-primary-text">
        Navigation
      </SheetTitle>
    </SheetHeader>
    {/* Nav links */}
  </SheetContent>
</Sheet>
```

---

## 6. Radix Primitive Integration Guarantees

All generated shadcn components are verified to preserve the following guarantees:
1. **Zero Hydration Mismatch:** Primitives defer browser-only attributes (such as portal IDs) to client mount where necessary.
2. **Standardized Class Utilities:** All components import `cn` strictly from `@/lib/utils` (never raw third-party re-exports).
3. **Tailwind v4 Theme Compatibility:** Dynamic values reference CSS variables (`bg-primary`, `text-secondary-text`, `border-border`) ensuring immediate adaptability to `.surface-light` scopes.

