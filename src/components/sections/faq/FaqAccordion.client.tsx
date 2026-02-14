"use client";

import { useState } from "react";

/**
 * FAQ Accordion Client Component
 * Figma reference: 231:6450 "List Question"
 *
 * Manages expand/collapse state for FAQ items.
 * Renders accessible accordion with plus/minus icons.
 */

interface FaqItem {
  /** Unique identifier for the FAQ item */
  id: string;
  /** The question text */
  question: string;
  /** The answer text */
  answer: string;
}

interface FaqAccordionProps {
  /** Array of FAQ items to display */
  items: FaqItem[];
  /** Optional: ID of item to expand by default */
  defaultExpandedId?: string;
  /** Optional: Allow multiple items expanded at once */
  allowMultiple?: boolean;
}

/**
 * Plus icon for collapsed state
 */
function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 5V19M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Minus icon for expanded state
 */
function MinusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Single FAQ accordion item
 */
function FaqAccordionItem({
  item,
  isExpanded,
  onToggle,
}: {
  item: FaqItem;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${item.id}`;
  const buttonId = `faq-button-${item.id}`;

  return (
    <div className="w-full overflow-hidden rounded-3xl bg-surface-muted">
      <button
        id={buttonId}
        type="button"
        aria-expanded={isExpanded}
        aria-controls={panelId}
        onClick={onToggle}
        className={`flex w-full appearance-none items-center gap-8 border-0 bg-transparent px-8 pt-8 text-left outline-none ${isExpanded ? "pb-0" : "pb-8"}`}
      >
        <span className="flex-1 font-heading text-[24px] font-normal leading-[1.2] text-text-primary">
          {item.question}
        </span>
        <span className="shrink-0 text-brand-secondary transition-transform duration-200">
          {isExpanded ? (
            <MinusIcon className="size-8" />
          ) : (
            <PlusIcon className="size-8" />
          )}
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isExpanded}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-8 pb-8 pt-4">
            <p className="m-0 whitespace-pre-line font-body text-[20px] leading-[1.4] text-brand-secondary">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * FAQ Accordion Component
 * Displays a list of expandable FAQ items
 */
export function FaqAccordion({
  items,
  defaultExpandedId,
  allowMultiple = false,
}: FaqAccordionProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => {
    if (defaultExpandedId) {
      return new Set([defaultExpandedId]);
    }
    return new Set();
  });

  const toggleItem = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) {
          next.clear();
        }
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="flex w-full flex-col gap-6">
      {items.map((item) => (
        <FaqAccordionItem
          key={item.id}
          item={item}
          isExpanded={expandedIds.has(item.id)}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
}
