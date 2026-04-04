'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrollTrigger, Flip, ScrambleTextPlugin);

// pos-1 = left (default)
// pos-2 = margin-left: 25vw
// pos-3 = margin-left: 70vw
// pos-4 = margin-left: auto (far right)

const groups = [
  // Big "B" — pos-2 area
  {
    items: [
      { text: 'B', pos: 'pos-2', altPos: 'pos-1', xl: true, scrambleDuration: '2.5' },
    ],
  },

  // "Branding experts" heading — center (pos-2)
  {
    items: [
      { text: 'Branding experts', pos: 'pos-2', altPos: 'pos-3', heading: true },
    ],
  },

  // Branding service list — far right (pos-3)
  {
    items: [
      { text: 'UI/UX design', pos: 'pos-3', altPos: 'pos-4' },
      { text: 'Marketing & Advertising Design', pos: 'pos-3', altPos: 'pos-4' },
      { text: 'Packaging design', pos: 'pos-3', altPos: 'pos-4' },
      { text: 'Brochure Design', pos: 'pos-3', altPos: 'pos-4' },
      { text: 'Custom Icons Design', pos: 'pos-3', altPos: 'pos-4' },
      { text: 'Tech Pack Development', pos: 'pos-3', altPos: 'pos-4' },
    ],
  },

  // Big "e" — far left
  {
    items: [
      { text: 'e', pos: 'pos-1', altPos: 'pos-2', xl: true, scrambleDuration: '2.5' },
    ],
  },

  // Tagline — center-left (pos-2)
  {
    items: [
      { text: "We don't create random creatives.", pos: 'pos-2', altPos: 'pos-3' },
    ],
  },

  // Big second "e" — far right
  {
    items: [
      { text: 'e', pos: 'pos-3', altPos: 'pos-4', xl: true, scrambleDuration: '2.5' },
    ],
  },

  // "Development" heading — center (pos-2)
  {
    items: [
      { text: 'Development', pos: 'pos-2', altPos: 'pos-1', heading: true },
    ],
  },

  // Dev service list — staircase positions
  {
    items: [
      { text: 'Webflow', pos: 'pos-1', altPos: 'pos-2' },
      { text: 'Wordpress', pos: 'pos-2', altPos: 'pos-3' },
      { text: 'Custom Code', pos: 'pos-2', altPos: 'pos-1' },
      { text: 'Web Applications', pos: 'pos-2', altPos: 'pos-3' },
      { text: 'Dashboards Development', pos: 'pos-3', altPos: 'pos-4' },
      { text: 'Saas Development', pos: 'pos-3', altPos: 'pos-2' },
    ],
  },

  // Big "z" — far left
  {
    items: [
      { text: 'z', pos: 'pos-1', altPos: 'pos-2', xl: true, scrambleDuration: '2.5' },
    ],
  },

  // Big "t" — center
  {
    items: [
      { text: 't', pos: 'pos-2', altPos: 'pos-3', xl: true, scrambleDuration: '2.5' },
    ],
  },

  // Big "e" — far right
  {
    items: [
      { text: 'e', pos: 'pos-3', altPos: 'pos-4', xl: true, scrambleDuration: '2.5' },
    ],
  },

  // "Marketing & Advertising" heading — center
  {
    items: [
      { text: 'Marketing & Advertising', pos: 'pos-2', altPos: 'pos-1', heading: true },
    ],
  },

  // Marketing service list — pos-1
  {
    items: [
      { text: 'Intermediate', pos: 'pos-1', altPos: 'pos-2' },
      { text: 'Advance', pos: 'pos-1', altPos: 'pos-2' },
      { text: 'Ecom Seo', pos: 'pos-1', altPos: 'pos-2' },
      { text: 'Social Media', pos: 'pos-1', altPos: 'pos-2' },
    ],
  },

  // Big "c" — far right
  {
    items: [
      { text: 'c', pos: 'pos-3', altPos: 'pos-4', xl: true, scrambleDuration: '2.5' },
    ],
  },

  // Big "h" — far left
  {
    items: [
      { text: 'h', pos: 'pos-1', altPos: 'pos-2', xl: true, scrambleDuration: '2.5' },
    ],
  },
];

export default function ScrollTextAnimation() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const textElements = sectionRef.current.querySelectorAll('.sta-el');
      const scrambleChars = 'upperAndLowerCase';

      textElements.forEach((el) => {
        el.dataset.text = el.textContent;
      });

      function resetTextElements() {
        textElements.forEach((el) => {
          gsap.set(el, { clearProps: 'transform,opacity,filter' });
        });
      }

      function initFlips() {
        resetTextElements();
        textElements.forEach((el) => {
          const originalClass = [...el.classList].find((c) => c.startsWith('sta-pos-'));
          const targetClass = el.dataset.altPos;
          if (!originalClass || !targetClass) return;

          const flipEase = el.dataset.flipEase || 'expo.inOut';

          el.classList.add(targetClass);
          el.classList.remove(originalClass);
          const flipState = Flip.getState(el, { props: 'opacity, filter, width' });
          el.classList.add(originalClass);
          el.classList.remove(targetClass);

          Flip.to(flipState, {
            ease: flipEase,
            scrollTrigger: {
              trigger: el,
              start: 'clamp(bottom bottom-=10%)',
              end: 'clamp(center center)',
              scrub: true,
            },
          });
          Flip.from(flipState, {
            ease: flipEase,
            scrollTrigger: {
              trigger: el,
              start: 'clamp(center center)',
              end: 'clamp(top top)',
              scrub: true,
            },
          });
        });
      }

      function scramble(el, { duration, revealDelay = 0 } = {}) {
        const text = el.dataset.text ?? el.textContent;
        const finalDuration =
          duration ??
          (el.dataset.scrambleDuration !== undefined
            ? parseFloat(el.dataset.scrambleDuration)
            : 1);

        gsap.killTweensOf(el);
        gsap.fromTo(
          el,
          { scrambleText: { text: '', chars: '' } },
          { scrambleText: { text, chars: scrambleChars, revealDelay }, duration: finalDuration }
        );
      }

      function killScrambleTriggers() {
        ScrollTrigger.getAll().forEach((st) => {
          if (st.vars.id === 'sta-scramble') st.kill();
        });
      }

      function initScramble() {
        killScrambleTriggers();
        textElements.forEach((el) => {
          ScrollTrigger.create({
            id: 'sta-scramble',
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            onEnter: () => scramble(el),
            onEnterBack: () => scramble(el),
          });
        });
      }

      initFlips();
      initScramble();

      const onResize = () => {
        ScrollTrigger.refresh(true);
        initFlips();
        initScramble();
      };
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="sta-section max-w-7xl mx-auto">
      <div className="sta-content">
        {groups.map((group, gi) => (
          <div className="sta-group" key={gi}>
            {group.items.map((item, ii) => {
              const classes = [
                'sta-el',
                `sta-pos-${item.pos.replace('pos-', '')}`,
                item.xl ? 'sta-el--xl' : '',
                item.heading ? 'sta-el--heading' : '',
                item.typing ? 'sta-typing-indicator' : '',
              ]
                .filter(Boolean)
                .join(' ');
              return (
                <div
                  key={ii}
                  className={classes}
                  data-alt-pos={`sta-pos-${item.altPos.replace('pos-', '')}`}
                  data-scramble-duration={item.scrambleDuration ?? undefined}
                  data-flip-ease={item.flipEase ?? undefined}
                >
                  {item.text}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
