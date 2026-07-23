"use client";

import { useMemo, useState } from "react";
import { announcements, events, onboardingSteps } from "../lib/mock-data";

type Tab = "home" | "calendar" | "news" | "onboarding";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "home", label: "Home", icon: "⌂" },
  { id: "calendar", label: "Calendar", icon: "◷" },
  { id: "news", label: "News", icon: "✉" },
  { id: "onboarding", label: "Onboarding", icon: "✓" }
];

export default function HomePage() {
  const [tab, setTab] = useState<Tab>("home");
  const [completed, setCompleted] = useState<number[]>([1, 2]);

  const progress = useMemo(
    () => Math.round((completed.length / onboardingSteps.length) * 100),
    [completed]
  );

  function toggleStep(id: number) {
    setCompleted((current) =>
      current.includes(id) ? current.filter((stepId) => stepId !== id) : [...current, id]
    );
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Sonnenhaus Kindergarten</p>
          <h1>Good morning, Mia’s family</h1>
        </div>
        <button className="avatar" aria-label="Open family profile">MF</button>
      </header>

      <section className="content">
        {tab === "home" && (
          <>
            <section className="hero-card">
              <div>
                <span className="pill">Today</span>
                <h2>Forest group meets outside</h2>
                <p>Please bring waterproof clothes, a small backpack, and a filled water bottle.</p>
              </div>
              <div className="hero-emoji" aria-hidden>🌲</div>
            </section>

            <section>
              <div className="section-heading">
                <h2>Coming up</h2>
                <button onClick={() => setTab("calendar")}>View calendar</button>
              </div>
              <div className="stack">
                {events.slice(0, 3).map((event) => (
                  <article className="event-card" key={event.id}>
                    <div className="date-tile">
                      <strong>{event.day}</strong>
                      <span>{event.month}</span>
                    </div>
                    <div>
                      <h3>{event.title}</h3>
                      <p>{event.time} · {event.group}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="onboarding-summary">
              <div>
                <p className="eyebrow">Family onboarding</p>
                <h2>{progress}% complete</h2>
                <p>{onboardingSteps.length - completed.length} steps still need your attention.</p>
              </div>
              <button className="primary" onClick={() => setTab("onboarding")}>Continue</button>
            </section>
          </>
        )}

        {tab === "calendar" && (
          <section>
            <div className="page-title">
              <p className="eyebrow">September 2026</p>
              <h2>Calendar</h2>
              <p>Closures, holidays, activities, and family events.</p>
            </div>
            <div className="stack">
              {events.map((event) => (
                <article className="event-card detailed" key={event.id}>
                  <div className="date-tile">
                    <strong>{event.day}</strong>
                    <span>{event.month}</span>
                  </div>
                  <div>
                    <span className={`category ${event.category}`}>{event.category}</span>
                    <h3>{event.title}</h3>
                    <p>{event.time} · {event.group}</p>
                    <p className="description">{event.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {tab === "news" && (
          <section>
            <div className="page-title">
              <p className="eyebrow">Latest updates</p>
              <h2>News & notices</h2>
              <p>Important messages from the kindergarten team.</p>
            </div>
            <div className="stack">
              {announcements.map((item) => (
                <article className="notice-card" key={item.id}>
                  <div className="notice-meta">
                    <span className={`dot ${item.priority}`} />
                    <span>{item.date}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <span className="audience">For: {item.audience}</span>
                </article>
              ))}
            </div>
          </section>
        )}

        {tab === "onboarding" && (
          <section>
            <div className="page-title">
              <p className="eyebrow">Welcome to Sonnenhaus</p>
              <h2>Family onboarding</h2>
              <p>Complete these steps before Mia’s first full week.</p>
            </div>
            <div className="progress-track" aria-label={`${progress}% complete`}>
              <div style={{ width: `${progress}%` }} />
            </div>
            <div className="stack">
              {onboardingSteps.map((step) => {
                const done = completed.includes(step.id);
                return (
                  <button
                    className={`checklist-item ${done ? "done" : ""}`}
                    key={step.id}
                    onClick={() => toggleStep(step.id)}
                  >
                    <span className="checkmark">{done ? "✓" : step.id}</span>
                    <span>
                      <strong>{step.title}</strong>
                      <small>{step.description}</small>
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        )}
      </section>

      <nav className="bottom-nav" aria-label="Primary navigation">
        {tabs.map((item) => (
          <button
            key={item.id}
            className={tab === item.id ? "active" : ""}
            onClick={() => setTab(item.id)}
          >
            <span aria-hidden>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </main>
  );
}
